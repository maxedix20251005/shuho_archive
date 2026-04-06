# PROJECT STATUS / プロジェクト状況

## 1. Purpose / 目的
- Track the current state, priorities, and confirmed decisions.
- 現在の状態、優先事項、確定方針を記録する。

## 2. Current Focus / 現在の主対象
- This project is currently in planning and requirements definition for a new shodo school website launch.
- 本プロジェクトは書道塾サイト新規立ち上げに向けた企画・要件定義フェーズにある。
- Core planning documents are being filled into the existing `docs/` templates without changing the template structure.
- 既存の `docs/` テンプレート構成を維持しながら、各文書へ具体内容を埋める方針で進行している。

## 3. Confirmed Policies / 確定方針
- Target business: shodo school in Shinagawa, Tokyo.
- 対象事業は東京都品川区の書道塾である。
- Main target audience includes all ages and beginners.
- 主対象は老若男女で、初心者を含む。
- Documentation rule: `project-docs/*` must remain bilingual, while `docs/*` may remain Japanese-only.
- 文書ルールとして、`project-docs/*` は日英併記を維持し、`docs/*` は日本語のみで運用可とする。
- Design direction reference: composition style inspired by `https://maruoka-castle.jp/`.
- デザイン方向性は `https://maruoka-castle.jp/` の構成感を参照する。

## 4. Completed / 実施済み
- Proposal document for the shodo school website has been concretely filled.
- 書道塾サイト向けの企画提案内容を具体値で整理し、提案書テンプレートへ反映した。
  - `docs/01-proposal.html`
- Functional and non-functional requirements were defined in the specification template.
- 仕様書テンプレートに機能要件・非機能要件を反映した。
  - `docs/07-specification.html`
- Sitemap and wireframe templates were updated with concrete information architecture, user flows, and layout intent.
- サイトマップとワイヤーフレームのテンプレートに、具体的な情報設計・導線・配置意図を反映した。
  - `docs/04-sitemap.html`
  - `docs/05-wireframe.html`

## 5. Next Priorities / 次の優先事項
1. Complete `docs/06-design-guide.html` with final visual rules aligned to the approved reference direction.
1. `docs/06-design-guide.html` を参照方向性に合わせて具体化し、デザインルールを確定する。
2. Validate consistency across `docs/01`, `docs/02`, `docs/03`, and `docs/07`, and resolve wording overlaps.
2. `docs/01`、`docs/02`、`docs/03`、`docs/07` の整合性を確認し、表現重複を調整する。
3. Confirm implementation scope and hand off the finalized documentation set for production design and development.
3. 実装対象範囲を確定し、制作フェーズへ引き渡せる文書セットへ整備する。

## 6. Risks / リスク
- If page goals and CTA placement are not kept consistent across docs, conversion design may become fragmented.
- ページ目的とCTA配置の記述が文書間でずれると、CV導線設計が分断されるリスクがある。
- If target personas are expanded without priority control, messaging may become too broad and less persuasive.
- ターゲットを広げすぎると訴求がぼやけ、説得力が下がるリスクがある。
- Japanese document updates may introduce encoding corruption.
- 日本語文書更新時のエンコーディング破損リスクがある。

## 7. Update Log / 更新履歴`r`n- 2026-04-06: Completed subpage wireframe SVG set under `images/wireframe/` (`about`, `masters`, `courses`, `portfolio`, `recruitment`, `faq`, `access`, `contact`) and admin scope file (`admin-works`) with naming convention `wireframe-<page-name>.svg`.`r`n- 2026-04-06: `images/wireframe/` 配下にサブページSVG一式（`about`、`masters`、`courses`、`portfolio`、`recruitment`、`faq`、`access`、`contact`）と管理画面対象（`admin-works`）を作成し、命名規則 `wireframe-<page-name>.svg` に統一した。`r`n- 2026-04-06: Updated top-page wireframe hero to full-bleed image layout with right-edge disabled trial CTA and removed supplementary sub-route elements.
- 2026-04-06: Top PageワイヤーフレームのHEROを全面image化し、右端の体験申込CTAをDisabled表示へ変更、補助動線を削除した。
- 2026-04-06: Explicitly documented `https://maruoka-castle.jp/` as the Top Page design reference in `docs/05-wireframe.html` and `docs/06-design-guide.html`.
- 2026-04-06: Top Pageデザイン参照先として `https://maruoka-castle.jp/` を `docs/05-wireframe.html` と `docs/06-design-guide.html` に明記した。
- 2026-04-06: Updated top-page wireframe artifacts to indicate trial application is currently suspended and all related CTAs are displayed as disabled.
- 2026-04-06: 体験申込停止中の方針を反映し、Top Pageワイヤーフレーム関連のCTAをすべてDisabled表示へ更新した。
- 2026-04-06: Created and saved a top page wireframe SVG based on `docs/05-wireframe.html` in `images/wireframe/wireframe-top-page.svg`.
- 2026-04-06: `docs/05-wireframe.html` を参照し、Top Page ワイヤーフレームSVGを `images/wireframe/wireframe-top-page.svg` として作成・保存した。
- 2026-04-06: Filled `docs/02-market-research.html` and `docs/03-persona.html` with concrete content for 3C/SWOT/STP/4P4C, competition patterns, and a primary persona journey aligned to the shodo school project.
- 2026-04-06: `docs/02-market-research.html` と `docs/03-persona.html` を具体化し、3C/SWOT/STP/4P4C、競合傾向、主要ペルソナのジャーニーを現案件方針に合わせて反映した。
- 2026-04-06: Cleaned legacy project-derived content across `project-docs` and re-baselined governance, tech, design, test, issue, and WIP documents for the shodo school project.
- 2026-04-06: `project-docs` 配下の旧案件由来記述を一括削除し、ガバナンス・技術・デザイン・テスト・課題・WIP文書を書道塾プロジェクト向けに再基準化した。
- 2026-04-06: Cleaned up `PROJECT_STATUS.md` by removing unrelated legacy project content and re-baselining the status for the shodo school website planning project.
- 2026-04-06: `PROJECT_STATUS.md` から他案件由来の記述を削除し、書道塾サイト企画プロジェクト向けの内容に再整理した。
- 2026-04-06: Updated `docs/04-sitemap.html` and `docs/05-wireframe.html` for the shodo school launch plan with concrete IA, user flows, URL design, and wireframe intent aligned to the current reference composition direction.
- 2026-04-06: 書道塾サイト立ち上げ企画に合わせて `docs/04-sitemap.html` と `docs/05-wireframe.html` を更新し、情報設計、ユーザーフロー、URL設計、ワイヤーフレーム配置意図を参照構成方針に沿って具体化した。
- 2026-04-06: Updated `docs/07-specification.html` with concrete functional list, functional detail for trial form, and non-functional requirements for the shodo school site.
- 2026-04-06: `docs/07-specification.html` に書道塾サイト向けの機能一覧、体験申込フォーム詳細仕様、非機能要件を反映した。
- 2026-04-06: Updated `docs/01-proposal.html` with business goals, personas, user needs, competition trends, differentiation, page composition, conversion design, and KPI.
- 2026-04-06: `docs/01-proposal.html` にビジネスゴール、ペルソナ、ニーズ、競合傾向、差別化、ページ構成、CV設計、KPIを反映した。

## Quality Note / 品質注意
- When Japanese text is included in updates, verify UTF-8 and the absence of mojibake.
- 日本語を含む更新では UTF-8 と文字化け有無を確認する。
