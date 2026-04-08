-- Shuho website: minimal schema for enquiry + works + news flow
-- Apply in Supabase SQL editor (staging/prod per environment)

create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- =========================================================
-- enquiries
-- =========================================================
create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  name varchar(50) not null check (char_length(name) >= 1),
  email varchar(255) not null check (position('@' in email) > 1),
  phone varchar(20),
  enquiry_type varchar(30) not null check (enquiry_type in ('course', 'fee', 'attendance', 'other')),
  message text not null check (char_length(message) >= 1),
  privacy_agreed boolean not null default false check (privacy_agreed = true),
  status varchar(20) not null default 'new' check (status in ('new', 'processing', 'closed', 'spam')),
  admin_memo text,
  source_page varchar(120),
  ip_hash varchar(128),
  user_agent text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_enquiries_created_at on public.enquiries (created_at desc);
create index if not exists idx_enquiries_status_created_at on public.enquiries (status, created_at desc);
create index if not exists idx_enquiries_type_created_at on public.enquiries (enquiry_type, created_at desc);

drop trigger if exists trg_enquiries_updated_at on public.enquiries;
create trigger trg_enquiries_updated_at
before update on public.enquiries
for each row
execute function public.set_updated_at();

alter table public.enquiries enable row level security;

-- Public form submission (anon insert)
drop policy if exists enquiries_anon_insert on public.enquiries;
create policy enquiries_anon_insert
on public.enquiries
for insert
to anon
with check (true);

-- Prototype admin access for static-admin mode (anon key).
-- IMPORTANT: replace with authenticated-role policies before production.
drop policy if exists enquiries_anon_select on public.enquiries;
create policy enquiries_anon_select
on public.enquiries
for select
to anon
using (true);

drop policy if exists enquiries_anon_update on public.enquiries;
create policy enquiries_anon_update
on public.enquiries
for update
to anon
using (true)
with check (true);

-- Future production model: use authenticated/admin role policies (kept as reference)
drop policy if exists enquiries_authenticated_select on public.enquiries;
create policy enquiries_authenticated_select
on public.enquiries
for select
to authenticated
using (true);

drop policy if exists enquiries_authenticated_update on public.enquiries;
create policy enquiries_authenticated_update
on public.enquiries
for update
to authenticated
using (true)
with check (true);

-- =========================================================
-- works
-- =========================================================
create table if not exists public.works (
  id uuid primary key default gen_random_uuid(),
  title varchar(80) not null check (char_length(title) >= 1),
  category varchar(20) not null check (category in ('master1','master2','master3','general','kids')),
  level_label varchar(40),
  description text,
  image_path text,
  image_alt_ja varchar(120),
  publish_status varchar(20) not null default 'draft' check (publish_status in ('draft','published')),
  published_at timestamptz,
  display_order int not null default 100 check (display_order >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create index if not exists idx_works_public on public.works (publish_status, display_order, published_at);
create index if not exists idx_works_category on public.works (category, publish_status);
create index if not exists idx_works_updated_at on public.works (updated_at desc);

drop trigger if exists trg_works_updated_at on public.works;
create trigger trg_works_updated_at
before update on public.works
for each row
execute function public.set_updated_at();

alter table public.works enable row level security;

-- Public read for published works
drop policy if exists works_anon_select_public on public.works;
create policy works_anon_select_public
on public.works
for select
to anon
using (publish_status = 'published' and deleted_at is null);

-- Prototype admin access for static-admin mode (anon key).
-- IMPORTANT: replace with authenticated-role policies before production.
drop policy if exists works_anon_select_admin on public.works;
create policy works_anon_select_admin
on public.works
for select
to anon
using (true);

drop policy if exists works_anon_update_admin on public.works;
create policy works_anon_update_admin
on public.works
for update
to anon
using (true)
with check (true);

-- Future production model: use authenticated/admin role policies (kept as reference)
drop policy if exists works_authenticated_select on public.works;
create policy works_authenticated_select
on public.works
for select
to authenticated
using (true);

drop policy if exists works_authenticated_update on public.works;
create policy works_authenticated_update
on public.works
for update
to authenticated
using (true)
with check (true);

-- =========================================================
-- news_items
-- =========================================================
create table if not exists public.news_items (
  id uuid primary key default gen_random_uuid(),
  title varchar(120) not null check (char_length(title) >= 1),
  body text,
  news_date date not null default current_date,
  publish_status varchar(20) not null default 'draft' check (publish_status in ('draft','published')),
  published_at timestamptz,
  display_order int not null default 100 check (display_order >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create index if not exists idx_news_public on public.news_items (publish_status, news_date desc, display_order);
create index if not exists idx_news_updated_at on public.news_items (updated_at desc);

drop trigger if exists trg_news_items_updated_at on public.news_items;
create trigger trg_news_items_updated_at
before update on public.news_items
for each row
execute function public.set_updated_at();

alter table public.news_items enable row level security;

-- Public read for published news
drop policy if exists news_items_anon_select_public on public.news_items;
create policy news_items_anon_select_public
on public.news_items
for select
to anon
using (publish_status = 'published' and deleted_at is null);

-- Prototype admin access for static-admin mode (anon key).
-- IMPORTANT: replace with authenticated-role policies before production.
drop policy if exists news_items_anon_select_admin on public.news_items;
create policy news_items_anon_select_admin
on public.news_items
for select
to anon
using (true);

drop policy if exists news_items_anon_insert_admin on public.news_items;
create policy news_items_anon_insert_admin
on public.news_items
for insert
to anon
with check (true);

drop policy if exists news_items_anon_update_admin on public.news_items;
create policy news_items_anon_update_admin
on public.news_items
for update
to anon
using (true)
with check (true);

-- Future production model: use authenticated/admin role policies (kept as reference)
drop policy if exists news_items_authenticated_select on public.news_items;
create policy news_items_authenticated_select
on public.news_items
for select
to authenticated
using (true);

drop policy if exists news_items_authenticated_insert on public.news_items;
create policy news_items_authenticated_insert
on public.news_items
for insert
to authenticated
with check (true);

drop policy if exists news_items_authenticated_update on public.news_items;
create policy news_items_authenticated_update
on public.news_items
for update
to authenticated
using (true)
with check (true);
