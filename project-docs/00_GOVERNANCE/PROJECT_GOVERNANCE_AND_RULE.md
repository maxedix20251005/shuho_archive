# PROJECT GOVERNANCE AND RULE / プロジェクト運用ガバナンス

## 0. How To Use / 使い方
- Project: `shuho-srchive`
- Owner: `Project Owner`
- Effective Date: `2026-04-06`
- This document is the project-specific governance baseline.
- 実装・設計・文書更新は同じタスクで完了する。

## 0-1. Basic Information / 基本情報
- Site domain: shodo school website (Shinagawa, Tokyo).
- 対象サイトは東京都品川区の書道塾サイト。
- Documentation roots:
  - `docs/`
  - `project-docs/`

## 1. Purpose / 目的
- Standardize workflow, governance rules, and documentation quality.
- ワークフロー、運用ルール、文書品質を標準化する。
- Keep the project restartable with current status, issue, WIP, and test records.
- ステータス・課題・WIP・テスト記録を最新に保ち、再開可能性を維持する。

## 2. Core Principles / 基本原則
- Keep one clear source of truth per topic.
- 論点ごとに単一の正本を維持する。
- Separate facts, decisions, and assumptions.
- 事実、決定事項、仮定を分離する。
- Record rationale when making directional changes.
- 方針変更時は判断理由を記録する。

## 3. Encoding And Language Quality / 文字コードと言語品質
- All markdown documents use UTF-8.
- すべての markdown 文書は UTF-8 を使用する。
- `project-docs/*` must remain bilingual in English and Japanese.
- `project-docs/*` は英語と日本語の日英併記を維持する。
- `docs/*` can be maintained in Japanese-only when appropriate.
- `docs/*` は必要に応じて日本語のみで運用可能とする。
- Verify no mojibake after Japanese updates.
- 日本語更新後は文字化けがないことを確認する。

## 4. Standard Document Set / 標準ドキュメント
- `project-docs/10_PROJECT/PROJECT_STATUS.md`
- `project-docs/90_WIP/WIP.md`
- `project-docs/10_PROJECT/ISSUE_LIST.md`
- `project-docs/30_TECH/TECH_SPEC.md`
- `project-docs/20_PRODUCT/DESIGN_GUIDELINE.md`
- `project-docs/60_TEST/TEST_PLAN.md`
- `project-docs/00_GOVERNANCE/DOCUMENT_CATALOG.md`
- `project-docs/00_GOVERNANCE/CHECKLIST.md`
- `project-docs/00_GOVERNANCE/PROJECT_GOVERNANCE_GUIDELINE_FORMAL.md`

## 5. Operating Rules / 運用ルール
1. Confirm design direction and scope before major edits.
1. 大きな変更前にデザイン方針と影響範囲を確認する。
2. Validate changes and record results.
2. 変更を検証し、結果を記録する。
3. For each implementation/document change, update `PROJECT_STATUS.md` and at least one related document.
3. 変更ごとに `PROJECT_STATUS.md` と関連文書を最低1件更新する。
4. On issue status changes, update `ISSUE_LIST.md`.
4. 課題状態が変わったら `ISSUE_LIST.md` を更新する。
5. On test scope/result changes, update `TEST_PLAN.md`.
5. テスト範囲や結果が変わったら `TEST_PLAN.md` を更新する。
6. Update `DOCUMENT_CATALOG.md` in the same task when files are added/deleted/moved/renamed.
6. 追加・削除・移動・リネーム時は同一タスクで `DOCUMENT_CATALOG.md` を更新する。
7. Check `CHECKLIST.md` before closing the task.
7. タスク完了前に `CHECKLIST.md` を確認する。

## 6. Change Control / 変更統制
- High-risk changes require prior approval: public navigation, personal-data handling policy, legal copy.
- 高リスク変更（公開導線、個人情報方針、法務文言）は事前承認を要する。
- Define rollback steps before high-impact content or structure changes.
- 影響の大きい変更前にロールバック手順を定義する。

## 7. Roles (RACI Lite) / 役割
- Responsible: implementer updates documents and implementation outputs.
- Responsible: 実装担当が文書と成果物を更新する。
- Accountable: project owner approves directional decisions.
- Accountable: Project Owner が方針判断を承認する。
- Consulted: domain/design reviewers validate content quality.
- Consulted: ドメイン/デザインレビュー担当が品質を確認する。
- Informed: stakeholders receive updates on status and issues.
- Informed: 関係者に進捗と課題の更新を共有する。

## 8. Update Log / 更新履歴
- 2026-04-06: Re-baselined governance document to remove unrelated legacy project references.
- 2026-04-06: 旧案件由来の参照を除去し、現案件向けガバナンス基準へ再整理した。
