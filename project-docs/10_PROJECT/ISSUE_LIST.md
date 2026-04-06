# ISSUE LIST / 課題台帳

## Purpose / 目的
- Manage issues, defects, and resolution history.
- 課題・不具合・対処履歴を管理する。

## Issue Table / 課題一覧
| ID | Date | Environment | Summary | Detail | Status | Solution | Closed Date | Owner |
|---|---|---|---|---|---|---|---|---|
| `ISSUE-001` | `2026-04-06` | `Documentation` | Legacy project traces remained | Some `project-docs` files still contained unrelated historical project context. | `Closed` | Re-baselined project-docs content to the shodo school website planning scope and removed unrelated legacy references. | `2026-04-06` | `Project Owner` |
| `ISSUE-002` | `2026-04-06` | `Documentation` | Template sections not fully project-specific | Several template sections had generic placeholders and insufficient actionable detail. | `Open` | Continue filling `docs/02`, `docs/03`, and `docs/06` with concrete project values and cross-check with `docs/01` and `docs/07`. | `-` | `Doc Owner` |

## Status Flow / ステータス遷移
- `Open -> Investigating -> Fixing -> Monitoring -> Closed`

## Rules / ルール
- Keep history append-only; do not overwrite records.
- 履歴は上書きせず、追記で管理する。
- Reflect major updates in `PROJECT_STATUS.md` as well.
- 主要更新は `PROJECT_STATUS.md` にも反映する。
- Verify UTF-8 and mojibake whenever Japanese text is included.
- 日本語を含む場合は UTF-8 と文字化けを確認する。
