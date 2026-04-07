# DOCUMENT CATALOG / ドキュメント目録

## 1. Purpose / 目的
- EN: Maintain a current index of project documents, owners, and usage purpose.
- JA: プロジェクト文書の所在・責任者・用途を最新状態で管理する。

## 2. Catalog / 目録
| File | Path | Summary (EN) | 概要 (JA) | Owner |
|---|---|---|---|---|
| `PROJECT_GOVERNANCE_AND_RULE.md` | `project-docs/00_GOVERNANCE/` | Working governance rules | 実務運用ガバナンス規約 | `Project Owner` |
| `PROJECT_GOVERNANCE_GUIDELINE_FORMAL.md` | `project-docs/00_GOVERNANCE/` | Formal governance guideline | 正式ガイドライン | `Project Owner` |
| `TEMPLATE_USAGE_GUIDE.md` | `project-docs/00_GOVERNANCE/` | Template usage instructions | テンプレート利用手順 | `Project Owner` |
| `CHECKLIST.md` | `project-docs/00_GOVERNANCE/` | Governance checklist | ガバナンス確認項目 | `Project Owner` |
| `INSTRUCTIONS_COVERAGE.md` | `project-docs/00_GOVERNANCE/` | Instruction coverage record | 指示反映状況 | `Project Owner` |
| `MIRROR_README.md` | `project-docs/00_GOVERNANCE/` | Mirror operation notes | ミラー運用メモ | `Project Owner` |
| `PROJECT_STATUS.md` | `project-docs/10_PROJECT/` | Project status and update log | 進捗・方針・更新履歴 | `PM` |
| `ISSUE_LIST.md` | `project-docs/10_PROJECT/` | Issue and resolution tracking | 課題・解決履歴管理 | `PM` |
| `BACKLOG.md` | `project-docs/10_PROJECT/` | Deferred task backlog | 後続課題バックログ | `PM` |
| `DESIGN_GUIDELINE.md` | `project-docs/20_DESIGN/` | Design principles and UI direction | デザイン原則・UI方針 | `Design Owner` |
| `TECH_SPEC.md` | `project-docs/30_TECH/` | Technical specification | 技術仕様 | `Tech Lead` |
| `TEST_PLAN.md` | `project-docs/60_TEST/` | QA plan and test approach | テスト計画 | `QA/Implementer` |
| `MIGRATION_PROCEDURE.md` | `project-docs/70_MIGRATION/` | Repository migration runbook | リポジトリ移行手順 | `PM/Tech Lead` |
| `WIP.md` | `project-docs/90_WIP/` | Working notes and drafts | 作業メモ | `Implementer` |

## 3. Related Links / 関連リンク
- `project-docs/00_GOVERNANCE/PROJECT_GOVERNANCE_AND_RULE.md`
- `project-docs/10_PROJECT/PROJECT_STATUS.md`
- `project-docs/10_PROJECT/ISSUE_LIST.md`
- `project-docs/10_PROJECT/BACKLOG.md`
- `project-docs/70_MIGRATION/MIGRATION_PROCEDURE.md`

## 4. Rules / ルール
- EN: Update this file in the same task when docs are added, moved, renamed, or deleted.
- JA: 文書の追加・移動・改名・削除時は同一タスクで本目録を更新する。
- EN: Keep all paths aligned with the repository structure.
- JA: 実ディレクトリ構成と記載パスを一致させる。
- EN: Use UTF-8 and check for mojibake after edits.
- JA: UTF-8 を使用し、更新後に文字化けを確認する。

## 5. Update Log / 更新履歴
- 2026-04-06: Re-baselined catalog entries for Shuho project scope.
- 2026-04-07: Added migration runbook entry.
- 2026-04-07: Added `BACKLOG.md` and refreshed catalog in clean UTF-8 bilingual format.
- 2026-04-07: Rebuilt `PROJECT_GOVERNANCE_AND_RULE.md` and `TECH_SPEC.md` in clean UTF-8 bilingual format.
