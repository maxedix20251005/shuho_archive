import { initSupabase, listEnquiries, updateEnquiry, listWorks, updateWork } from "./supabase-client.js";

window.__adminBooted = true;

const client = initSupabase();
const page = document.body.dataset.adminPage || "";

function setMessage(text, isError = false) {
  const el = document.querySelector("#admin-message");
  if (!el) {
    return;
  }
  el.textContent = text;
  el.style.color = isError ? "#8c2a1e" : "#5e564b";
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
        setMessage("Supabase設定が未完了です。`supabase/config.js` を設定してください。", true);
        return;
      }

      saveButton.disabled = true;
      saveButton.textContent = "保存中...";

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
    setMessage("Supabase設定が未完了です。`supabase/config.js` を設定してください。", true);
    renderEnquiryRows([]);
    return;
  }

  const search = document.querySelector("#enquiry-search")?.value?.trim() || "";
  const status = document.querySelector("#enquiry-status-filter")?.value || "";
  const enquiryType = document.querySelector("#enquiry-type-filter")?.value || "";

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
        setMessage("Supabase設定が未完了です。`supabase/config.js` を設定してください。", true);
        return;
      }

      saveButton.disabled = true;
      saveButton.textContent = "保存中...";

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
    setMessage("Supabase設定が未完了です。`supabase/config.js` を設定してください。", true);
    renderWorkRows([]);
    return;
  }

  const search = document.querySelector("#works-search")?.value?.trim() || "";
  const category = document.querySelector("#works-category-filter")?.value || "";
  const publishStatus = document.querySelector("#works-status-filter")?.value || "";

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

if (page === "enquiries") {
  bindEnquiryFilterEvents();
  loadEnquiries();
}

if (page === "works") {
  bindWorksFilterEvents();
  loadWorks();
}


