# Shuho Website Scaffold

## Purpose
Initial implementation scaffold for the new Shuho calligraphy website.

## Scope
- Public pages: top/about/masters/courses/portfolio/faq/access/contact/privacy
- Admin pages: works/enquiries/news
- Stack: static HTML/CSS/JS + Supabase integration

## Current
1. Top page and public page UI implemented.
2. Enquiry form validation and Supabase submission path implemented (falls back to local success if config is missing).
3. Enquiries admin page loads/filters/updates real data via Supabase (prototype policy mode).
4. Works admin page loads/filters/updates publish status via Supabase (prototype policy mode).
5. `supabase/schema.sql` prepared for `enquiries` + `works`.

## Supabase Local Setup
1. `supabase/config.example.js` is the template.
2. Local runtime config file is `supabase/config.js`.
3. `supabase/config.js` is git-ignored via `.gitignore` and should not be committed.
4. Set values:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
5. Apply `supabase/schema.sql` in Supabase SQL Editor.
6. Validate:
   - `admin/enquiries.html` list/filter/save
   - `admin/works.html` list/filter/status save

## Next
1. Connect admin news screen to live CRUD.
2. Add anti-spam control to enquiry submission flow.
3. Replace prototype anon admin policies with authenticated admin role model before production.
4. Add canonical/`og:url` after production domain hold is lifted.
