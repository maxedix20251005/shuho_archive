-- Shuho KPI query pack (Operational + Content freshness)
-- Purpose: provide baseline SQL for dashboard/reporting build.
-- Scope: enquiries / works / news_items tables in schema.sql.

-- =========================================================
-- KPI-06: First-response lead time proxy
-- NOTE:
-- The current schema has no explicit first_response_at field.
-- As a practical proxy, use first transition from status='new' to non-new,
-- estimated by updated_at where current status != 'new'.
-- =========================================================
select
  percentile_cont(0.5) within group (order by (extract(epoch from (updated_at - created_at)) / 3600.0)) as median_hours_to_first_action
from public.enquiries
where status in ('processing', 'closed', 'spam')
  and updated_at >= (now() - interval '30 days');


-- =========================================================
-- KPI-07: Enquiry backlog snapshot
-- =========================================================
select
  count(*) as backlog_count
from public.enquiries
where status in ('new', 'processing');


-- =========================================================
-- KPI-07 detail: backlog by status (for operations board)
-- =========================================================
select
  status,
  count(*) as count_by_status
from public.enquiries
where status in ('new', 'processing')
group by status
order by status;


-- =========================================================
-- KPI-08: Published works freshness (updated within last 90 days)
-- =========================================================
with published as (
  select *
  from public.works
  where publish_status = 'published'
    and deleted_at is null
),
summary as (
  select
    count(*) as total_published,
    count(*) filter (where updated_at >= now() - interval '90 days') as fresh_90d
  from published
)
select
  total_published,
  fresh_90d,
  case when total_published = 0 then 0
       else round((fresh_90d::numeric / total_published::numeric) * 100, 2)
  end as fresh_rate_percent
from summary;


-- =========================================================
-- KPI-09: Published news freshness (updated within last 30 days)
-- =========================================================
with published as (
  select *
  from public.news_items
  where publish_status = 'published'
    and deleted_at is null
),
summary as (
  select
    count(*) as total_published,
    count(*) filter (where updated_at >= now() - interval '30 days') as fresh_30d
  from published
)
select
  total_published,
  fresh_30d,
  case when total_published = 0 then 0
       else round((fresh_30d::numeric / total_published::numeric) * 100, 2)
  end as fresh_rate_percent
from summary;


-- =========================================================
-- Weekly operations roll-up (reference)
-- =========================================================
select
  date_trunc('week', created_at)::date as week_start,
  count(*) as total_enquiries,
  count(*) filter (where status = 'new') as new_count,
  count(*) filter (where status = 'processing') as processing_count,
  count(*) filter (where status = 'closed') as closed_count,
  count(*) filter (where status = 'spam') as spam_count
from public.enquiries
where created_at >= now() - interval '12 weeks'
group by 1
order by 1 desc;
