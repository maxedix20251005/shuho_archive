import { initSupabase } from "../assets/js/supabase-client.js";

initSupabase();

const statusSelects = document.querySelectorAll('.status-select');
statusSelects.forEach((select) => {
  select.addEventListener('change', () => {
    select.dataset.dirty = 'true';
  });
});
