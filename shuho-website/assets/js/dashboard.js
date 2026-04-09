import {
  initSupabase,
  listEnquiries,
  listWorks,
  listNewsItems,
} from "./supabase-client.js";

window.__adminBooted = true;

const messageEl = document.querySelector("#dashboard-message");
const weekTbody = document.querySelector("#dashboard-weekly-tbody");
const weekChart = document.querySelector("#dashboard-weekly-chart");

function setMessage(text, isError = false) {
  if (!messageEl) return;
  messageEl.textContent = text;
  messageEl.style.color = isError ? "#8c2a1e" : "#5e564b";
}

function setCardValue(id, value) {
  const el = document.querySelector(`#${id}`);
  if (!el) return;
  el.textContent = value;
}

function toDate(value) {
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d;
}

function startOfWeek(date) {
  const d = new Date(date);
  const day = d.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

function fmtDate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function calcMedianHoursToFirstAction(enquiries) {
  const border = Date.now() - (30 * 24 * 60 * 60 * 1000);
  const values = (enquiries || [])
    .filter((e) => ["processing", "closed", "spam"].includes(e.status))
    .map((e) => {
      const created = toDate(e.created_at);
      const updated = toDate(e.updated_at);
      if (!created || !updated) return null;
      if (updated.getTime() < border) return null;
      return (updated.getTime() - created.getTime()) / (1000 * 60 * 60);
    })
    .filter((v) => Number.isFinite(v) && v >= 0)
    .sort((a, b) => a - b);

  if (values.length === 0) return null;
  const mid = Math.floor(values.length / 2);
  if (values.length % 2 === 0) {
    return (values[mid - 1] + values[mid]) / 2;
  }
  return values[mid];
}

function calcFreshness(items, days) {
  const border = Date.now() - (days * 24 * 60 * 60 * 1000);
  const published = (items || []).filter((x) => x.publish_status === "published");
  const total = published.length;
  const fresh = published.filter((x) => {
    const updated = toDate(x.updated_at);
    return updated && updated.getTime() >= border;
  }).length;
  const rate = total === 0 ? 0 : Math.round((fresh / total) * 10000) / 100;
  return { total, fresh, rate };
}

function buildWeeklyRows(enquiries) {
  const border = Date.now() - (12 * 7 * 24 * 60 * 60 * 1000);
  const map = new Map();

  (enquiries || []).forEach((e) => {
    const created = toDate(e.created_at);
    if (!created || created.getTime() < border) return;

    const week = fmtDate(startOfWeek(created));
    if (!map.has(week)) {
      map.set(week, {
        week_start: week,
        total_enquiries: 0,
        new_count: 0,
        processing_count: 0,
        closed_count: 0,
        spam_count: 0,
      });
    }

    const row = map.get(week);
    row.total_enquiries += 1;
    if (e.status === "new") row.new_count += 1;
    if (e.status === "processing") row.processing_count += 1;
    if (e.status === "closed") row.closed_count += 1;
    if (e.status === "spam") row.spam_count += 1;
  });

  return [...map.values()].sort((a, b) => b.week_start.localeCompare(a.week_start));
}

function renderWeeklyChart(rows) {
  if (!weekChart) return;
  if (!rows || rows.length === 0) {
    weekChart.innerHTML = '<p class="dashboard-chart-empty">データがありません。</p>';
    return;
  }

  const max = rows.reduce((m, r) => Math.max(m, r.total_enquiries), 0) || 1;
  const sorted = [...rows].slice(0, 12).reverse();

  weekChart.innerHTML = sorted
    .map((r) => {
      const pct = Math.max(6, Math.round((r.total_enquiries / max) * 100));
      return `
        <div class="dashboard-bar-row">
          <div class="dashboard-bar-label">${r.week_start.slice(5)}</div>
          <div class="dashboard-bar-track">
            <div class="dashboard-bar-fill" style="width:${pct}%"></div>
          </div>
          <div class="dashboard-bar-value">${r.total_enquiries}</div>
        </div>
      `;
    })
    .join("");
}
function renderWeeklyTable(rows) {
  if (!weekTbody) return;
  if (!rows || rows.length === 0) {
    weekTbody.innerHTML = '<tr><td colspan="6">データがありません。</td></tr>';
    return;
  }

  weekTbody.innerHTML = rows
    .map((r) => `
      <tr>
        <td>${r.week_start}</td>
        <td>${r.total_enquiries}</td>
        <td>${r.new_count}</td>
        <td>${r.processing_count}</td>
        <td>${r.closed_count}</td>
        <td>${r.spam_count}</td>
      </tr>
    `)
    .join("");
}

function bindAdminPublicLinks() {
  const links = document.querySelectorAll(".admin-side-links a[href]");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      const targetPage = "public_index";
      if (typeof window.gtag === "function") {
        window.gtag("event", "admin_to_public_click", {
          admin_page: "dashboard",
          target_page: targetPage,
          device_type: window.innerWidth <= 768 ? "mobile" : "desktop",
        });
      }
    });
  });
}

async function boot() {
  bindAdminPublicLinks();
  const client = await initSupabase();

  if (!client) {
    setMessage("Supabase設定が未完了です。`supabase/config.js` または `supabase/config.public.js` を設定してください。", true);
    return;
  }

  setMessage("読み込み中...");

  const [enqRes, worksRes, newsRes] = await Promise.all([
    listEnquiries(client, {}),
    listWorks(client, {}),
    listNewsItems(client, {}),
  ]);

  if (!enqRes.ok || !worksRes.ok || !newsRes.ok) {
    const msg = enqRes.error || worksRes.error || newsRes.error || "読込失敗";
    setMessage(`読込失敗: ${msg}`, true);
    return;
  }

  const enquiries = enqRes.data || [];
  const works = worksRes.data || [];
  const news = newsRes.data || [];

  const backlog = enquiries.filter((e) => ["new", "processing"].includes(e.status)).length;
  const median = calcMedianHoursToFirstAction(enquiries);
  const worksFresh = calcFreshness(works, 90);
  const newsFresh = calcFreshness(news, 30);
  const weekly = buildWeeklyRows(enquiries);

  setCardValue("kpi-backlog", `${backlog}件`);
  setCardValue("kpi-first-action", median == null ? "-" : `${median.toFixed(1)}h`);
  setCardValue("kpi-works-fresh", `${worksFresh.rate}% (${worksFresh.fresh}/${worksFresh.total})`);
  setCardValue("kpi-news-fresh", `${newsFresh.rate}% (${newsFresh.fresh}/${newsFresh.total})`);

  renderWeeklyChart(weekly);
  renderWeeklyTable(weekly);
  setMessage("更新完了");
}

boot();




