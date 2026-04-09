# ISSUE LIST / 課題一覧

## 1. Purpose / 目的
- EN: Manage incidents, defects, and corrective actions with traceable status.
- JA: 障害・不具合・是正対応を状態遷移付きで管理する。

## 2. Issue Table / 課題テーブル
| ID | Date | Environment | Summary | Detail | Status | Resolution | Closed Date | Owner |
|---|---|---|---|---|---|---|---|---|
| `ISSUE-001` | `2026-04-06` | `Documentation` | Legacy project traces remained | Some `project-docs` files still contained unrelated legacy context. | `Closed` | Re-baselined project docs to Shuho scope and removed legacy references. | `2026-04-06` | `Project Owner` |
| `ISSUE-002` | `2026-04-06` | `Documentation` | Template sections lacked project-specific detail | Several sections remained generic placeholders. | `Closed` | Filled `docs/02`, `docs/03`, `docs/06` and aligned with `docs/01`/`docs/07`. | `2026-04-07` | `Doc Owner` |
| `ISSUE-003` | `2026-04-07` | `Website UI` | Header/footer did not render in local preview | Shared layout depended on module execution in the local environment. | `Closed` | Switched public-page script loading to `defer` and revalidated layout render. | `2026-04-07` | `Frontend Engineer` |
| `ISSUE-004` | `2026-04-07` | `Documentation` | Mojibake and control characters in project tracking docs | `PROJECT_STATUS.md` contained garbled Japanese and invalid control bytes. | `Closed` | Rebuilt affected tracking docs in clean UTF-8 bilingual format. | `2026-04-07` | `PM` |
| `ISSUE-005` | `2026-04-08` | `Admin UI (Local/GitHub Pages)` | Admin screens stuck in loading/fallback message | Root causes split: (1) local opened via `file://` so dynamic module import is blocked, (2) GitHub Pages had empty/missing `supabase/config.public.js` values. | `Closed` | Synced `supabase/config.public.js` with actual credentials, validated local via HTTP server, and verified both admin pages on GitHub Pages (`件数:0件` with no config error). | `2026-04-08` | `Frontend Engineer` |
| `ISSUE-006` | `2026-04-08` | `Admin News (GitHub Pages)` | News admin boot failure due module export mismatch | `admin.js` imported named `createNewsItem`, but loaded `supabase-client.js` variant did not export that symbol, causing module boot to fail. | `Closed` | Switched `admin.js` to namespace import with backward-compatible fallback symbols and explicit capability guard message, then verified `admin/news.html` renders correctly. | `2026-04-08` | `Frontend Engineer` |
| `ISSUE-007` | `2026-04-09` | `Contact Form (Public)` | Submit button stuck on `送信中...` | Form submit could remain in loading state due unhandled submit-path errors, config load-order mismatch, and `hidden` visibility override by CSS. | `Closed` | Added submit recovery (`try/catch/finally`), submit timeout/watchdog guards, non-local config load order (`config.public.js` first), and explicit `[hidden]{display:none !important;}`. Verified in browser. | `2026-04-09` | `Frontend Engineer` |

## 3. Status Flow / 状態遷移
- `Open -> Investigating -> Fixing -> Monitoring -> Closed`

## 4. Rules / ルール
- EN: Keep issue history append-only.
- JA: 履歴は追記方式で管理し、過去記録を上書きしない。
- EN: Reflect major issue closures in `PROJECT_STATUS.md`.
- JA: 主要課題の完了は `PROJECT_STATUS.md` にも反映する。
- EN: Verify UTF-8 encoding when Japanese text is edited.
- JA: 日本語編集時は UTF-8 を確認する。

## 5. Update Log / 更新履歴
- 2026-04-09: Closed `ISSUE-007` after browser verification of contact form behaviour (no stuck submit; correct form/success toggle).
- 2026-04-09: Added explicit `[hidden] { display:none !important; }` in `assets/css/site.css` to ensure enquiry form/success visibility toggling works reliably.
- 2026-04-09: Added `ISSUE-007` for contact submit-stuck symptom; applied resilience and timeout fix in `assets/js/site.js` and config load-order adjustment in `assets/js/supabase-client.js`.
- 2026-04-08: Closed `ISSUE-006` after confirming `admin/news.html` loads successfully on GitHub Pages.
- 2026-04-08: Added `ISSUE-006` for news admin module export mismatch and started compatibility fix.
- 2026-04-08: Closed `ISSUE-005` after confirming both admin pages load correctly on GitHub Pages with Supabase config applied.
- 2026-04-08: Synced `supabase/config.public.js` with `config.js`; moved ISSUE-005 to Monitoring pending GitHub Pages cache-clear/redeploy verification.
- 2026-04-08: Identified dual root causes for ISSUE-005 (`file://` module block and missing deployed Supabase config values); added local PowerShell server script and clearer diagnostics.
- 2026-04-08: Added `ISSUE-005` (critical, in progress) for admin loading failure across local and GitHub Pages.
- 2026-04-07: Added `ISSUE-003` and `ISSUE-004`; marked `ISSUE-002` as closed.




