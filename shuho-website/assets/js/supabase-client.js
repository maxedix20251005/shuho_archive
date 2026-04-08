import { SUPABASE_URL, SUPABASE_ANON_KEY } from "../../supabase/config.js";

export function initSupabase() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.warn("Supabase config is not set. Copy supabase/config.example.js to supabase/config.js");
    return null;
  }
  return { url: SUPABASE_URL, key: SUPABASE_ANON_KEY };
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
    const timeoutError = error?.name === "AbortError";
    const reason = timeoutError ? `Request timeout (${timeoutMs}ms)` : String(error);
    return { ok: false, status: 0, error: `Network error: ${reason}` };
  } finally {
    clearTimeout(timeoutId);
  }

  if (!response.ok) {
    let detail = "";
    try {
      const errorBody = await response.json();
      detail = errorBody?.message || errorBody?.error || JSON.stringify(errorBody);
    } catch {
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
  if (!client?.url || !client?.key) {
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
  if (!client?.url || !client?.key) {
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
    const escaped = filters.search.replaceAll(",", "\\,");
    params.set("or", `(name.ilike.*${escaped}*,email.ilike.*${escaped}*)`);
  }

  return request(client, `/rest/v1/enquiries?${params.toString()}`, {
    method: "GET",
  });
}

export async function updateEnquiry(client, id, payload) {
  if (!client?.url || !client?.key) {
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
  if (!client?.url || !client?.key) {
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
    const escaped = filters.search.replaceAll(",", "\\,");
    params.set("title", `ilike.*${escaped}*`);
  }

  return request(client, `/rest/v1/works?${params.toString()}`, {
    method: "GET",
  });
}

export async function updateWork(client, id, payload) {
  if (!client?.url || !client?.key) {
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
