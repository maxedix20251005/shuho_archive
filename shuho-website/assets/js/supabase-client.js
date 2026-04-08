const CONFIG_RELATIVE_PATHS = [
  "../../supabase/config.js",
  "../../supabase/config.public.js",
];

let cachedConfig = null;
let configLoadAttempted = false;

async function loadConfig() {
  if (cachedConfig) {
    return cachedConfig;
  }
  if (configLoadAttempted) {
    return null;
  }
  configLoadAttempted = true;

  for (const path of CONFIG_RELATIVE_PATHS) {
    try {
      const mod = await import(path);
      const url = (mod.SUPABASE_URL || "").trim();
      const key = (mod.SUPABASE_ANON_KEY || "").trim();
      if (url && key) {
        cachedConfig = { url, key, source: path };
        return cachedConfig;
      }
    } catch (error) {
      // Try next config source.
    }
  }

  const win = typeof window !== "undefined" ? window : null;
  const runtime = win && win.__SUPABASE_CONFIG ? win.__SUPABASE_CONFIG : null;
  if (runtime && runtime.url && runtime.anonKey) {
    cachedConfig = { url: String(runtime.url), key: String(runtime.anonKey), source: "window.__SUPABASE_CONFIG" };
    return cachedConfig;
  }

  return null;
}

export async function initSupabase() {
  const cfg = await loadConfig();
  if (!cfg || !cfg.url || !cfg.key) {
    console.warn("Supabase config is not set. Provide supabase/config.js (local) or supabase/config.public.js (deployed).");
    return null;
  }
  return { url: cfg.url, key: cfg.key };
}

async function request(client, path, options = {}) {
  const endpoint = `${client.url}${path}`;
  const controller = new AbortController();
  const timeoutMs = 12000;
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  let response;

  try {
    response = await fetch(endpoint, {
      ...options,
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        apikey: client.key,
        Authorization: `Bearer ${client.key}`,
        ...(options.headers || {}),
      },
    });
  } catch (error) {
    const timeoutError = error && error.name === "AbortError";
    const reason = timeoutError ? `Request timeout (${timeoutMs}ms)` : String(error);
    return { ok: false, status: 0, error: `Network error: ${reason}` };
  } finally {
    clearTimeout(timeoutId);
  }

  if (!response.ok) {
    let detail = "";
    try {
      const errorBody = await response.json();
      detail = (errorBody && (errorBody.message || errorBody.error)) || JSON.stringify(errorBody);
    } catch (error) {
      detail = await response.text();
    }
    return { ok: false, status: response.status, error: `Supabase API error (${response.status}): ${detail}` };
  }

  if (response.status === 204) {
    return { ok: true, data: null };
  }

  const data = await response.json();
  return { ok: true, data };
}

export async function createEnquiry(client, payload) {
  if (!client || !client.url || !client.key) {
    return { ok: false, error: "Supabase client is not initialised." };
  }

  return request(client, "/rest/v1/enquiries", {
    method: "POST",
    headers: {
      Prefer: "return=representation",
    },
    body: JSON.stringify(payload),
  });
}

export async function listEnquiries(client, filters = {}) {
  if (!client || !client.url || !client.key) {
    return { ok: false, error: "Supabase client is not initialised." };
  }

  const params = new URLSearchParams();
  params.set("select", "id,created_at,name,email,enquiry_type,status,admin_memo");
  params.set("order", "created_at.desc");

  if (filters.status) {
    params.set("status", `eq.${filters.status}`);
  }
  if (filters.enquiryType) {
    params.set("enquiry_type", `eq.${filters.enquiryType}`);
  }
  if (filters.search) {
    const escaped = String(filters.search).split(",").join("\\\\,");
    params.set("or", `(name.ilike.*${escaped}*,email.ilike.*${escaped}*)`);
  }

  return request(client, `/rest/v1/enquiries?${params.toString()}`, {
    method: "GET",
  });
}

export async function updateEnquiry(client, id, payload) {
  if (!client || !client.url || !client.key) {
    return { ok: false, error: "Supabase client is not initialised." };
  }
  if (!id) {
    return { ok: false, error: "Enquiry ID is required." };
  }

  return request(client, `/rest/v1/enquiries?id=eq.${encodeURIComponent(id)}`, {
    method: "PATCH",
    headers: {
      Prefer: "return=representation",
    },
    body: JSON.stringify(payload),
  });
}

export async function listWorks(client, filters = {}) {
  if (!client || !client.url || !client.key) {
    return { ok: false, error: "Supabase client is not initialised." };
  }

  const params = new URLSearchParams();
  params.set("select", "id,title,category,publish_status,updated_at");
  params.set("order", "updated_at.desc");

  if (filters.category) {
    params.set("category", `eq.${filters.category}`);
  }
  if (filters.publishStatus) {
    params.set("publish_status", `eq.${filters.publishStatus}`);
  }
  if (filters.search) {
    const escaped = String(filters.search).split(",").join("\\\\,");
    params.set("title", `ilike.*${escaped}*`);
  }

  return request(client, `/rest/v1/works?${params.toString()}`, {
    method: "GET",
  });
}

export async function updateWork(client, id, payload) {
  if (!client || !client.url || !client.key) {
    return { ok: false, error: "Supabase client is not initialised." };
  }
  if (!id) {
    return { ok: false, error: "Work ID is required." };
  }

  return request(client, `/rest/v1/works?id=eq.${encodeURIComponent(id)}`, {
    method: "PATCH",
    headers: {
      Prefer: "return=representation",
    },
    body: JSON.stringify(payload),
  });
}


