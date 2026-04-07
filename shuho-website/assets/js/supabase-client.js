import { SUPABASE_URL, SUPABASE_ANON_KEY } from "../../supabase/config.js";

export function initSupabase() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.warn("Supabase config is not set. Copy supabase/config.example.js to supabase/config.js");
    return null;
  }
  return { url: SUPABASE_URL, key: SUPABASE_ANON_KEY };
}

export async function createEnquiry(client, payload) {
  if (!client?.url || !client?.key) {
    return { ok: false, error: "Supabase client is not initialised." };
  }

  const endpoint = `${client.url}/rest/v1/enquiries`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: client.key,
      Authorization: `Bearer ${client.key}`,
      Prefer: "return=representation",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    let detail = "";
    try {
      const errorBody = await response.json();
      detail = errorBody?.message || errorBody?.error || JSON.stringify(errorBody);
    } catch {
      detail = await response.text();
    }
    return { ok: false, error: `Supabase API error (${response.status}): ${detail}` };
  }

  const data = await response.json();
  return { ok: true, data };
}
