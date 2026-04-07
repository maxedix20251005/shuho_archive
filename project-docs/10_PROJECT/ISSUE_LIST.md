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
- 2026-04-07: Added `ISSUE-003` and `ISSUE-004`; marked `ISSUE-002` as closed.
