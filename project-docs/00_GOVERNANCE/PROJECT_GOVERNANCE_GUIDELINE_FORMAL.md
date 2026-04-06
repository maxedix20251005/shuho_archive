# PROJECT GOVERNANCE GUIDELINE (FORMAL) / 正式版ガイドライン

## Scope / 適用範囲
- Applies to planning, design, implementation, testing, release, and operations.
- 企画、設計、実装、テスト、公開、運用に適用する。
- Covers deliverables under `docs/`, `css/`, `js/`, and `project-docs/`.
- `docs/`、`css/`、`js/`、`project-docs/` 配下の成果物を対象とする。

## Basic Information / 基本情報
- Project: shodo school website launch (`shuho-srchive`).
- 対象プロジェクト: 書道塾サイト立ち上げ（`shuho-srchive`）。
- Primary documentation roots:
  - `docs/`
  - `project-docs/`

## Governance Baseline / ガバナンス基準
- Canonical governance baseline:
  - `project-docs/00_GOVERNANCE/PROJECT_GOVERNANCE_AND_RULE.md`
- Canonical status baseline:
  - `project-docs/10_PROJECT/PROJECT_STATUS.md`
- Canonical technical baseline:
  - `project-docs/30_TECH/TECH_SPEC.md`

## Documentation Baseline / 文書基準
- Documentation is updated in the same task as implementation or planning changes.
- 文書は実装変更または企画変更と同じタスクで更新する。
- UTF-8 is mandatory.
- UTF-8 を必須とする。
- `project-docs/*` must remain bilingual in English and Japanese.
- `project-docs/*` は英語と日本語の日英併記を維持する。
- `docs/*` can be maintained in Japanese-only.
- `docs/*` は日本語のみで運用可能とする。

## Mandatory Update Rules / 必須更新ルール
- Implementation/design changes: update `PROJECT_STATUS.md` and related docs.
- 実装・設計変更時は `PROJECT_STATUS.md` と関連文書を更新する。
- Testing scope/result changes: update `TEST_PLAN.md`.
- テスト範囲や結果変更時は `TEST_PLAN.md` を更新する。
- Issue progress changes: update `ISSUE_LIST.md`.
- 課題進捗変更時は `ISSUE_LIST.md` を更新する。
- Document add/delete/move/rename: update `DOCUMENT_CATALOG.md`.
- 文書の追加・削除・移動・リネーム時は `DOCUMENT_CATALOG.md` を更新する。

## Review Checklist / レビューチェック
- UTF-8 and no mojibake.
- UTF-8 かつ文字化けなし。
- Valid links and filenames.
- リンクとファイル名の整合。
- Recorded rationale for major decisions.
- 主要判断の根拠記録。
- Status/issue/test records updated.
- ステータス・課題・テスト記録の更新。

## Update Log / 更新履歴
- 2026-04-06: Re-baselined formal guideline to remove unrelated legacy project assumptions.
- 2026-04-06: 旧案件依存の前提を除去し、正式版ガイドラインを再整理した。
