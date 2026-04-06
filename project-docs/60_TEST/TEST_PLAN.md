# TEST PLAN / テスト計画

## Purpose / 目的
- Define the validation scope, methods, and quality criteria for project documentation deliverables.
- プロジェクト文書成果物に対する検証範囲・方法・品質基準を定義する。

## Scope / 対象範囲
- Validate consistency across planning and specification documents for the shodo school website project.
- 書道塾サイト企画に関する計画文書と仕様文書の整合性を確認する。
- Verify UTF-8 encoding and absence of mojibake in Japanese content.
- 日本語コンテンツの UTF-8 と文字化けなしを確認する。
- Verify that conversion design and IA descriptions are aligned between proposal, sitemap, and specification.
- 企画書・サイトマップ・仕様書の間で、CV設計と情報設計の記述が一致していることを確認する。

## Entry Criteria / 開始条件
- Target documents are updated and saved under `docs/` and `project-docs/`.
- 対象文書が `docs/` と `project-docs/` 配下で更新済みである。
- Issue and status baselines are available in `ISSUE_LIST.md` and `PROJECT_STATUS.md`.
- `ISSUE_LIST.md` と `PROJECT_STATUS.md` に現行状態が記録されている。

## Exit Criteria / 完了条件
- No critical inconsistency remains among `docs/01`, `docs/04`, `docs/05`, and `docs/07`.
- `docs/01`、`docs/04`、`docs/05`、`docs/07` 間に重大な不整合が残っていない。
- UTF-8 check and Japanese text verification pass for updated files.
- 更新対象ファイルで UTF-8 検査と日本語表示確認が合格している。
- Results are reflected in `PROJECT_STATUS.md`.
- 結果が `PROJECT_STATUS.md` に反映されている。

## Test Types / テスト種別
- Unit: `N`
- Integration: `N`
- E2E: `N`
- Manual: `Y`

## Test Cases / テストケース
| ID | Feature | Preconditions | Steps | Expected | Result | Date | Owner |
|---|---|---|---|---|---|---|---|
| `TC-001` | UTF-8破損検知 | 更新済み文書が存在 | `ReadAllText(UTF8)` と `Select-String -Encoding UTF8` で確認 | 置換文字未検出・日本語正常表示 | `Pass` | `2026-04-06` | `Doc Owner` |
| `TC-002` | 企画〜仕様の整合確認 | `docs/01` と `docs/07` が更新済み | 目的・ターゲット・CV設計・KPIを突合 | 主要項目の記述が矛盾しない | `Pass` | `2026-04-06` | `Doc Owner` |
| `TC-003` | IA整合確認 | `docs/04` と `docs/05` が更新済み | サイト構造、ユーザーフロー、ワイヤー意図を確認 | 構造と画面意図が一致する | `Pass` | `2026-04-06` | `Doc Owner` |
| `TC-004` | ガバナンス整合確認 | `project-docs` 更新済み | `PROJECT_STATUS`, `ISSUE_LIST`, `WIP` を確認 | 現案件の内容のみで管理される | `Pass` | `2026-04-06` | `Project Owner` |

## Defect Linkage / 不具合連携
- `TC-001` -> `ISSUE-001`
- `TC-002`, `TC-003` -> `N/A` (consistency check records)
- `TC-002`, `TC-003` -> `N/A`（整合確認記録）
- `TC-004` -> `ISSUE-001`

## Quality Note / 品質注意
- Verify UTF-8 and mojibake whenever Japanese text is included.
- 日本語を含む場合は UTF-8 と文字化け有無を確認する。
