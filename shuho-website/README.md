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
3. Admin pages scaffold implemented.

## Next
1. Create `supabase/config.js` from `supabase/config.example.js` and set credentials.
2. Align Supabase table schema with payload fields (`enquiries` table).
3. Connect admin works/enquiries/news screens to live CRUD.
