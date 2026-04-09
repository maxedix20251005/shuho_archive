import * as supabaseApi from "./supabase-client.js";

const initSupabase = supabaseApi.initSupabase;
const listEnquiries = supabaseApi.listEnquiries;
const updateEnquiry = supabaseApi.updateEnquiry;
const listWorks = supabaseApi.listWorks;
const updateWork = supabaseApi.updateWork;
const listNewsItems = supabaseApi.listNewsItems || supabaseApi.listNews;
const createNewsItem = supabaseApi.createNewsItem || supabaseApi.createNews;
const updateNewsItem = supabaseApi.updateNewsItem || supabaseApi.updateNews;

window.__adminBooted = true;

let client = null;
const page = document.body.dataset.adminPage || "";

function getDeviceType() {
  const width = window.innerWidth || 0;
  if (width <= 768) return "mobile";
  if (width <= 1024) return "tablet";
  return "desktop";
}

function trackAdminEvent(eventName, params = {}) {
  const payload = {
    admin_page: page || "unknown",
    page_path: window.location.pathname || "",
    device_type: getDeviceType(),
    ...params,
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, payload);
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...payload,
  });
}

function setMessage(text, isError = false) {
  const el = document.querySelector("#admin-message");
  if (!el) {
    return;
  }
  el.textContent = text;
  el.style.color = isError ? "#8c2a1e" : "#5e564b";
}

function hasNewsApiSupport() {
  return !!(listNewsItems && createNewsItem && updateNewsItem);
}

function formatDateTime(value) {
  if (!value) {
    return "-";
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const hh = String(date.getHours()).padStart(2, "0");
  const mi = String(date.getMinutes()).padStart(2, "0");
  return `${yyyy}.${mm}.${dd} ${hh}:${mi}`;
}

function formatDate(value) {
  if (!value) {
    return "-";
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}.${mm}.${dd}`;
}

function createSelect(options, current) {
  const select = document.createElement("select");
  select.className = "status-select";
  options.forEach((option) => {
    const node = document.createElement("option");
    node.value = option;
    node.textContent = option;
    if (option === current) {
      node.selected = true;
    }
    select.appendChild(node);
  });
  return select;
}

function renderEnquiryRows(items) {
  const tbody = document.querySelector("#enquiry-tbody");
  if (!tbody) {
    return;
  }

  tbody.innerHTML = "";
  if (!Array.isArray(items) || items.length === 0) {
    tbody.innerHTML = "<tr><td colspan=\"7\">該当データがありません。</td></tr>";
    return;
  }

  items.forEach((item) => {
    const row = document.createElement("tr");

    const idCell = document.createElement("td");
    idCell.textContent = item.id;

    const createdCell = document.createElement("td");
    createdCell.textContent = formatDateTime(item.created_at);

    const whoCell = document.createElement("td");
    whoCell.innerHTML = `<strong>${item.name}</strong><br><span>${item.email}</span>`;

    const typeCell = document.createElement("td");
    typeCell.textContent = item.enquiry_type;

    const statusCell = document.createElement("td");
    const statusSelect = createSelect(["new", "processing", "closed", "spam"], item.status);
    statusCell.appendChild(statusSelect);

    const memoCell = document.createElement("td");
    const memoInput = document.createElement("input");
    memoInput.type = "text";
    memoInput.maxLength = 300;
    memoInput.value = item.admin_memo || "";
    memoInput.placeholder = "管理メモ";
    memoInput.className = "status-select";
    memoCell.appendChild(memoInput);

    const actionCell = document.createElement("td");
    const saveButton = document.createElement("button");
    saveButton.type = "button";
    saveButton.className = "btn-mini";
    saveButton.textContent = "保存";

    saveButton.addEventListener("click", async () => {
      if (!client) {
        setMessage("Supabase設定が未完了です。`supabase/config.js` または `supabase/config.public.js` を設定してください。", true);
        return;
      }

      saveButton.disabled = true;
      saveButton.textContent = "保存中...";

      const previousStatus = item.status || "unknown";
      const payload = {
        status: statusSelect.value,
        admin_memo: memoInput.value || null,
      };

      const result = await updateEnquiry(client, item.id, payload);
      if (!result.ok) {
        const permissionError = result.status === 401 || result.status === 403;
        setMessage(permissionError ? "更新権限がありません。RLSと認証状態を確認してください。" : `更新失敗: ${result.error}`, true);
        saveButton.disabled = false;
        saveButton.textContent = "保存";
        return;
      }

      item.status = statusSelect.value;
      trackAdminEvent("admin_enquiry_status_update", {
        enquiry_id: item.id,
        from_status: previousStatus,
        to_status: statusSelect.value,
      });
      setMessage(`保存しました: ${item.id}`);
      saveButton.disabled = false;
      saveButton.textContent = "保存";
    });

    actionCell.appendChild(saveButton);

    row.appendChild(idCell);
    row.appendChild(createdCell);
    row.appendChild(whoCell);
    row.appendChild(typeCell);
    row.appendChild(statusCell);
    row.appendChild(memoCell);
    row.appendChild(actionCell);

    tbody.appendChild(row);
  });
}

async function loadEnquiries() {
  if (page !== "enquiries") {
    return;
  }

  if (!client) {
    setMessage("Supabase設定が未完了です。`supabase/config.js` または `supabase/config.public.js` を設定してください。", true);
    renderEnquiryRows([]);
    return;
  }

  const search = ((document.querySelector("#enquiry-search") || {}).value || "").trim();
  const status = ((document.querySelector("#enquiry-status-filter") || {}).value || "");
  const enquiryType = ((document.querySelector("#enquiry-type-filter") || {}).value || "");

  setMessage("読み込み中...");
  const result = await listEnquiries(client, { search, status, enquiryType });

  if (!result.ok) {
    const permissionError = result.status === 401 || result.status === 403;
    setMessage(permissionError ? "閲覧権限がありません。RLSと認証状態を確認してください。" : `読込失敗: ${result.error}`, true);
    renderEnquiryRows([]);
    return;
  }

  renderEnquiryRows(result.data || []);
  setMessage(`件数: ${(result.data || []).length}件`);
}

function renderWorkRows(items) {
  const tbody = document.querySelector("#works-tbody");
  if (!tbody) {
    return;
  }

  tbody.innerHTML = "";
  if (!Array.isArray(items) || items.length === 0) {
    tbody.innerHTML = "<tr><td colspan=\"6\">該当データがありません。</td></tr>";
    return;
  }

  items.forEach((item) => {
    const row = document.createElement("tr");

    const idCell = document.createElement("td");
    idCell.textContent = item.id;

    const titleCell = document.createElement("td");
    titleCell.textContent = item.title;

    const categoryCell = document.createElement("td");
    categoryCell.textContent = item.category;

    const statusCell = document.createElement("td");
    const statusSelect = createSelect(["draft", "published"], item.publish_status || "draft");
    statusCell.appendChild(statusSelect);

    const updatedCell = document.createElement("td");
    updatedCell.textContent = formatDateTime(item.updated_at);

    const actionCell = document.createElement("td");
    const saveButton = document.createElement("button");
    saveButton.type = "button";
    saveButton.className = "btn-mini";
    saveButton.textContent = "保存";

    saveButton.addEventListener("click", async () => {
      if (!client) {
        setMessage("Supabase設定が未完了です。`supabase/config.js` または `supabase/config.public.js` を設定してください。", true);
        return;
      }

      saveButton.disabled = true;
      saveButton.textContent = "保存中...";

      const previousStatus = item.publish_status || "draft";
      const payload = {
        publish_status: statusSelect.value,
      };

      const result = await updateWork(client, item.id, payload);
      if (!result.ok) {
        const permissionError = result.status === 401 || result.status === 403;
        setMessage(permissionError ? "更新権限がありません。RLSと認証状態を確認してください。" : `更新失敗: ${result.error}`, true);
        saveButton.disabled = false;
        saveButton.textContent = "保存";
        return;
      }

      item.publish_status = statusSelect.value;
      trackAdminEvent("admin_work_status_update", {
        work_id: item.id,
        from_status: previousStatus,
        to_status: statusSelect.value,
      });
      setMessage(`保存しました: ${item.id}`);
      saveButton.disabled = false;
      saveButton.textContent = "保存";
      loadWorks();
    });

    actionCell.appendChild(saveButton);

    row.appendChild(idCell);
    row.appendChild(titleCell);
    row.appendChild(categoryCell);
    row.appendChild(statusCell);
    row.appendChild(updatedCell);
    row.appendChild(actionCell);

    tbody.appendChild(row);
  });
}

async function loadWorks() {
  if (page !== "works") {
    return;
  }

  if (!client) {
    setMessage("Supabase設定が未完了です。`supabase/config.js` または `supabase/config.public.js` を設定してください。", true);
    renderWorkRows([]);
    return;
  }

  const search = ((document.querySelector("#works-search") || {}).value || "").trim();
  const category = ((document.querySelector("#works-category-filter") || {}).value || "");
  const publishStatus = ((document.querySelector("#works-status-filter") || {}).value || "");

  setMessage("読み込み中...");
  const result = await listWorks(client, { search, category, publishStatus });

  if (!result.ok) {
    const permissionError = result.status === 401 || result.status === 403;
    setMessage(permissionError ? "閲覧権限がありません。RLSと認証状態を確認してください。" : `読込失敗: ${result.error}`, true);
    renderWorkRows([]);
    return;
  }

  renderWorkRows(result.data || []);
  setMessage(`件数: ${(result.data || []).length}件`);
}

function renderNewsRows(items) {
  const tbody = document.querySelector("#news-tbody");
  if (!tbody) {
    return;
  }

  tbody.innerHTML = "";
  if (!Array.isArray(items) || items.length === 0) {
    tbody.innerHTML = "<tr><td colspan=\"6\">該当データがありません。</td></tr>";
    return;
  }

  items.forEach((item) => {
    const row = document.createElement("tr");

    const idCell = document.createElement("td");
    idCell.textContent = item.id;

    const dateCell = document.createElement("td");
    dateCell.textContent = formatDate(item.news_date);

    const titleCell = document.createElement("td");
    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.maxLength = 120;
    titleInput.value = item.title || "";
    titleInput.className = "status-select";
    titleCell.appendChild(titleInput);

    const statusCell = document.createElement("td");
    const statusSelect = createSelect(["draft", "published"], item.publish_status || "draft");
    statusCell.appendChild(statusSelect);

    const updatedCell = document.createElement("td");
    updatedCell.textContent = formatDateTime(item.updated_at);

    const actionCell = document.createElement("td");
    const saveButton = document.createElement("button");
    saveButton.type = "button";
    saveButton.className = "btn-mini";
    saveButton.textContent = "保存";

    saveButton.addEventListener("click", async () => {
      if (!client) {
        setMessage("Supabase設定が未完了です。`supabase/config.js` または `supabase/config.public.js` を設定してください。", true);
        return;
      }
      if (!titleInput.value.trim()) {
        setMessage("タイトルは必須です。", true);
        return;
      }

      saveButton.disabled = true;
      saveButton.textContent = "保存中...";

      const previousStatus = item.publish_status || "draft";
      const payload = {
        title: titleInput.value.trim(),
        publish_status: statusSelect.value,
      };
      if (statusSelect.value === "published") {
        payload.published_at = new Date().toISOString();
      }

      const result = await updateNewsItem(client, item.id, payload);
      if (!result.ok) {
        const permissionError = result.status === 401 || result.status === 403;
        setMessage(permissionError ? "更新権限がありません。RLSと認証状態を確認してください。" : `更新失敗: ${result.error}`, true);
        saveButton.disabled = false;
        saveButton.textContent = "保存";
        return;
      }

      item.publish_status = statusSelect.value;
      trackAdminEvent("admin_news_status_update", {
        news_id: item.id,
        from_status: previousStatus,
        to_status: statusSelect.value,
      });
      setMessage(`保存しました: ${item.id}`);
      saveButton.disabled = false;
      saveButton.textContent = "保存";
      loadNewsItems();
    });

    actionCell.appendChild(saveButton);

    row.appendChild(idCell);
    row.appendChild(dateCell);
    row.appendChild(titleCell);
    row.appendChild(statusCell);
    row.appendChild(updatedCell);
    row.appendChild(actionCell);

    tbody.appendChild(row);
  });
}

async function loadNewsItems() {
  if (page !== "news") {
    return;
  }

  if (!hasNewsApiSupport()) {
    setMessage("news API が未対応のスクリプトが読み込まれています。`assets/js/supabase-client.js` を最新化してください。", true);
    renderNewsRows([]);
    return;
  }

  if (!client) {
    setMessage("Supabase設定が未完了です。`supabase/config.js` または `supabase/config.public.js` を設定してください。", true);
    renderNewsRows([]);
    return;
  }

  const search = ((document.querySelector("#news-search") || {}).value || "").trim();
  const publishStatus = ((document.querySelector("#news-status-filter") || {}).value || "");

  setMessage("読み込み中...");
  const result = await listNewsItems(client, { search, publishStatus });

  if (!result.ok) {
    const permissionError = result.status === 401 || result.status === 403;
    setMessage(permissionError ? "閲覧権限がありません。RLSと認証状態を確認してください。" : `読込失敗: ${result.error}`, true);
    renderNewsRows([]);
    return;
  }

  renderNewsRows(result.data || []);
  setMessage(`件数: ${(result.data || []).length}件`);
}

async function createNewsFromForm() {
  if (page !== "news") {
    return;
  }
  if (!hasNewsApiSupport()) {
    setMessage("news API が未対応のスクリプトが読み込まれています。`assets/js/supabase-client.js` を最新化してください。", true);
    return;
  }
  if (!client) {
    setMessage("Supabase設定が未完了です。`supabase/config.js` または `supabase/config.public.js` を設定してください。", true);
    return;
  }

  const titleInput = document.querySelector("#news-create-title");
  const dateInput = document.querySelector("#news-create-date");
  const statusSelect = document.querySelector("#news-create-status");
  const createButton = document.querySelector("#news-create-btn");

  const title = ((titleInput || {}).value || "").trim();
  const newsDate = ((dateInput || {}).value || "").trim();
  const status = ((statusSelect || {}).value || "draft");

  if (!title) {
    setMessage("新規登録にはタイトルが必要です。", true);
    return;
  }

  const payload = {
    title,
    news_date: newsDate || new Date().toISOString().slice(0, 10),
    publish_status: status,
  };
  if (status === "published") {
    payload.published_at = new Date().toISOString();
  }

  if (createButton) {
    createButton.disabled = true;
    createButton.textContent = "登録中...";
  }

  const result = await createNewsItem(client, payload);
  if (!result.ok) {
    const permissionError = result.status === 401 || result.status === 403;
    setMessage(permissionError ? "登録権限がありません。RLSと認証状態を確認してください。" : `登録失敗: ${result.error}`, true);
    if (createButton) {
      createButton.disabled = false;
      createButton.textContent = "新規登録";
    }
    return;
  }

  if (titleInput) titleInput.value = "";
  if (dateInput) dateInput.value = "";
  if (statusSelect) statusSelect.value = "draft";

  const createdId = Array.isArray(result.data) && result.data[0] && result.data[0].id ? result.data[0].id : "unknown";
  trackAdminEvent("admin_news_create", {
    news_id: createdId,
    publish_status: status,
  });

  setMessage("お知らせを新規登録しました。");
  if (createButton) {
    createButton.disabled = false;
    createButton.textContent = "新規登録";
  }
  loadNewsItems();
}

function bindEnquiryFilterEvents() {
  const filterButton = document.querySelector("#enquiry-filter-btn");
  const searchInput = document.querySelector("#enquiry-search");
  const statusSelect = document.querySelector("#enquiry-status-filter");
  const typeSelect = document.querySelector("#enquiry-type-filter");

  if (filterButton) {
    filterButton.addEventListener("click", () => loadEnquiries());
  }
  if (searchInput) {
    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        loadEnquiries();
      }
    });
  }
  if (statusSelect) {
    statusSelect.addEventListener("change", () => loadEnquiries());
  }
  if (typeSelect) {
    typeSelect.addEventListener("change", () => loadEnquiries());
  }
}

function bindWorksFilterEvents() {
  const filterButton = document.querySelector("#works-filter-btn");
  const searchInput = document.querySelector("#works-search");
  const categorySelect = document.querySelector("#works-category-filter");
  const statusSelect = document.querySelector("#works-status-filter");

  if (filterButton) {
    filterButton.addEventListener("click", () => loadWorks());
  }
  if (searchInput) {
    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        loadWorks();
      }
    });
  }
  if (categorySelect) {
    categorySelect.addEventListener("change", () => loadWorks());
  }
  if (statusSelect) {
    statusSelect.addEventListener("change", () => loadWorks());
  }
}

function bindNewsEvents() {
  const filterButton = document.querySelector("#news-filter-btn");
  const createButton = document.querySelector("#news-create-btn");
  const searchInput = document.querySelector("#news-search");
  const statusSelect = document.querySelector("#news-status-filter");

  if (filterButton) {
    filterButton.addEventListener("click", () => loadNewsItems());
  }
  if (createButton) {
    createButton.addEventListener("click", () => createNewsFromForm());
  }
  if (searchInput) {
    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        loadNewsItems();
      }
    });
  }
  if (statusSelect) {
    statusSelect.addEventListener("change", () => loadNewsItems());
  }
}

function bindAdminPublicLinks() {
  const links = document.querySelectorAll(".admin-side-links a[href]");
  if (!links || links.length === 0) {
    return;
  }

  links.forEach((link) => {
    link.addEventListener("click", () => {
      const href = link.getAttribute("href") || "";
      const targetPage = /contact\.html(?:$|[#?])/.test(href) ? "public_contact" : "public_index";
      trackAdminEvent("admin_to_public_click", {
        target_page: targetPage,
      });
    });
  });
}
async function boot() {
  trackAdminEvent("admin_login_view");
  bindAdminPublicLinks();
  client = await initSupabase();

  if (page === "enquiries") {
    bindEnquiryFilterEvents();
    await loadEnquiries();
  }

  if (page === "works") {
    bindWorksFilterEvents();
    await loadWorks();
  }

  if (page === "news") {
    bindNewsEvents();
    await loadNewsItems();
  }
}

boot();










