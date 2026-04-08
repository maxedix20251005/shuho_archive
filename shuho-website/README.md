# Shuho Website Scaffold

## Purpose
Initial implementation scaffold for the new Shuho calligraphy website.

## Scope
- Public pages: top/about/masters/courses/portfolio/faq/access/contact/privacy
- Admin pages: works/enquiries/news
- Stack: static HTML/CSS/JS + Supabase integration

## Current
1. Top page and public page UI implemented.
2. Enquiry form validation and Supabase submission path implemented.
3. Enquiries admin page loads/filters/updates real data via Supabase (prototype policy mode).
4. Works admin page loads/filters/updates publish status via Supabase (prototype policy mode).
5. News admin page loads/filters/creates/updates real data via Supabase (prototype policy mode).
6. `supabase/schema.sql` prepared for `enquiries` + `works` + `news_items`.

## Supabase Config Modes
1. Local/private mode: `supabase/config.js` (git-ignored)
2. Deployed/static mode (e.g. GitHub Pages): `supabase/config.public.js` (tracked)
3. Fallback order in runtime:
   - `supabase/config.js`
   - `supabase/config.public.js`
   - `window.__SUPABASE_CONFIG`

## Setup
1. Apply `supabase/schema.sql` in Supabase SQL Editor.
2. Set either local or deployed config file:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
3. Validate:
   - `admin/enquiries.html` list/filter/save
   - `admin/works.html` list/filter/status save
   - `admin/news.html` list/filter/create/update

## Next
1. Add anti-spam control to enquiry submission flow.
2. Replace prototype anon admin policies with authenticated admin role model before production.
3. Add canonical/`og:url` after production domain hold is lifted.

## Local Preview (PowerShell)
If Python/Node is not available, run the included script:
1. `powershell -ExecutionPolicy Bypass -File .\scripts\start-local-server.ps1 -Port 5500`
2. Open `http://localhost:5500/admin/enquiries.html`
3. Do not open admin pages with `file://`.
