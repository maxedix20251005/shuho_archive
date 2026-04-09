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
7. Admin dashboard implemented (`admin/dashboard.html`) with KPI cards and weekly trend view.

## Supabase Config Modes
1. Local/private mode: `supabase/config.js` (git-ignored)
2. Deployed/static mode: `supabase/config.public.js` (tracked, ANON key only)
3. Never store service-role keys in this repository.
4. Runtime fallback order:
   - local (`localhost`): `config.js` -> `config.public.js`
   - deployed: `config.public.js` -> `config.js`

## Setup
1. Apply `supabase/schema.sql` in Supabase SQL Editor.
2. Set either local or deployed config file:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
3. Validate:
   - `admin/enquiries.html` list/filter/save
   - `admin/works.html` list/filter/status save
   - `admin/news.html` list/filter/create/update

## Config Guard
Run before commit/deploy:
- `powershell -ExecutionPolicy Bypass -File .\scripts\check-supabase-config.ps1`

## Next
1. Replace prototype anon admin policies with authenticated admin role model before production.
2. Add canonical/`og:url` after production domain hold is lifted.
3. Build out dashboard reporting cadence and SQL view strategy (`supabase/kpi-queries.sql`) for weekly operations.

## Local Preview (PowerShell)
If Python/Node is not available, run the included script:
1. `powershell -ExecutionPolicy Bypass -File .\scripts\start-local-server.ps1 -Port 5500`
2. Open `http://localhost:5500/admin/enquiries.html`
3. Do not open admin pages with `file://`.






