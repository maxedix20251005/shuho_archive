# BACKLOG / バックログ

## 1. Purpose / 目的
- EN: Track intentionally deferred tasks and unresolved implementation items.
- JA: 後続対応とした課題・未完了実装項目を管理する。

## 2. Rules / 運用ルール
- EN: Keep backlog in priority order (`P1` highest).
- JA: 優先度順（`P1` が最優先）で管理する。
- EN: Move completed items to `PROJECT_STATUS.md` update log.
- JA: 完了項目は `PROJECT_STATUS.md` の更新履歴へ移す。
- EN: Keep bilingual entries for all `project-docs/*` files.
- JA: `project-docs/*` は日英併記を維持する。

## 3. Backlog Items / バックログ項目
| ID | Priority | Item (EN) | 項目 (JA) | Status | Owner | Target |
|---|---|---|---|---|---|---|
| `BLG-001` | `P1` | Finalise production domain and add canonical/`og:url` on all public pages | 本番ドメイン確定後、全公開ページへ canonical/`og:url` を追加 | `On-Hold` | `Web Director` | `Until further notice` |
| `BLG-002` | `P1` | Create and apply `supabase/config.js` with operation-safe key management | 運用上安全な鍵管理方針で `supabase/config.js` を作成・適用 | `Completed` | `Tech Lead` | `2026-04-09` |
| `BLG-003` | `P2` | Connect admin pages to live Supabase CRUD (works/enquiries/news) | 管理画面（作品/問い合わせ/お知らせ）を Supabase 実CRUDへ接続 | `Completed` | `Frontend Engineer` | `2026-04-08` |
| `BLG-004` | `P2` | Add anti-spam controls for enquiry form (honeypot/rate limit/CAPTCHA decision) | 問い合わせフォームのスパム対策（honeypot/レート制限/CAPTCHA）を決定・実装 | `Completed` | `Frontend Engineer` | `2026-04-09` |
| `BLG-005` | `P3` | Define analytics event mapping and KPI dashboard | 計測イベント設計とKPIダッシュボード定義を作成 | `Completed` | `Marketing` | `2026-04-09` |
| `BLG-006` | `P2` | Establish encoding check in documentation workflow to prevent mojibake recurrence | 文字化け再発防止のため文書更新フローに文字コード確認手順を組み込む | `Completed` | `PM` | `2026-04-09` |
| `BLG-007` | `P1` | Harden admin auth/RLS model and remove prototype anon-admin access | 管理画面の認証/RLSを本番向けに強化し、暫定 anon-admin アクセスを廃止 | `Open` | `Tech Lead` | `Before production` |

## 4. Update Log / 更新履歴
- 2026-04-07: Initial backlog created.
- 2026-04-07: Added encoding-control task (`BLG-006`) after mojibake cleanup.
- 2026-04-08: Set `BLG-001` (production domain + canonical/`og:url`) to `On-Hold` until further notice.
- 2026-04-08: Set `BLG-002` to `In Progress` and started local Supabase config hardening flow.
- 2026-04-08: `BLG-002` progress updated: `enquiries` schema alignment completed (`docs/08-db-design.html` + `shuho-website/supabase/schema.sql`).

- 2026-04-08: Set `BLG-003` to `In Progress` and implemented enquiry admin live integration (list/filter/update).

- 2026-04-08: BLG-003 progress updated: works admin live integration (list/filter/status update) implemented.


- 2026-04-08: BLG-003 completed: works/enquiries/news admin connected to Supabase live CRUD (prototype policy mode).

- 2026-04-09: BLG-004 completed (Phase 1): implemented honeypot + client-side submit speed check + client-side rate limit (3 submissions / 10 minutes). CAPTCHA deferred.

- 2026-04-09: BLG-006 completed: added executable UTF-8 check script (check-doc-encoding.ps1) and integrated rule into governance/checklist docs.

- 2026-04-09: BLG-002 completed: established safe config workflow (config.js ignored, config.public.js anon-only, check-supabase-config.ps1 guard script).
- 2026-04-09: BLG-005 completed: added analytics event mapping, KPI dashboard definition, and admin-public flow rules in `project-docs/30_TECH/TECH_SPEC.md`.

- 2026-04-09: Added BLG-007 for production hardening of admin authentication/RLS model.
- 2026-04-09: 管理画面の本番認証/RLS強化タスクとして BLG-007 を追加。


