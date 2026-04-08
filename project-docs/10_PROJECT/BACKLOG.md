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
| `BLG-002` | `P1` | Create and apply `supabase/config.js` with operation-safe key management | 運用上安全な鍵管理方針で `supabase/config.js` を作成・適用 | `In Progress` | `Tech Lead` | `Before staging integration` |
| `BLG-003` | `P2` | Connect admin pages to live Supabase CRUD (works/enquiries/news) | 管理画面（作品/問い合わせ/お知らせ）を Supabase 実CRUDへ接続 | `In Progress` | `Frontend Engineer` | `Sprint +1` |
| `BLG-004` | `P2` | Add anti-spam controls for enquiry form (honeypot/rate limit/CAPTCHA decision) | 問い合わせフォームのスパム対策（honeypot/レート制限/CAPTCHA）を決定・実装 | `Open` | `Web Director` | `Before production release` |
| `BLG-005` | `P3` | Define analytics event mapping and KPI dashboard | 計測イベント設計とKPIダッシュボード定義を作成 | `Open` | `Marketing` | `After launch prep` |
| `BLG-006` | `P2` | Establish encoding check in documentation workflow to prevent mojibake recurrence | 文字化け再発防止のため文書更新フローに文字コード確認手順を組み込む | `Open` | `PM` | `This sprint` |

## 4. Update Log / 更新履歴
- 2026-04-07: Initial backlog created.
- 2026-04-07: Added encoding-control task (`BLG-006`) after mojibake cleanup.
- 2026-04-08: Set `BLG-001` (production domain + canonical/`og:url`) to `On-Hold` until further notice.
- 2026-04-08: Set `BLG-002` to `In Progress` and started local Supabase config hardening flow.
- 2026-04-08: `BLG-002` progress updated: `enquiries` schema alignment completed (`docs/08-db-design.html` + `shuho-website/supabase/schema.sql`).

- 2026-04-08: Set `BLG-003` to `In Progress` and implemented enquiry admin live integration (list/filter/update).

- 2026-04-08: BLG-003 progress updated: works admin live integration (list/filter/status update) implemented.

