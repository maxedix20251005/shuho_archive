# DESIGN GUIDELINE / デザイン基準

## Purpose / 目的
- Keep a consistent visual and UX baseline across planning and production documents.
- 企画文書と制作成果物の間で、視覚表現とUX基準の一貫性を維持する。

## Design Direction / デザイン方向性
- Reference composition style: `https://maruoka-castle.jp/` (structured storytelling flow, strong hero presence, and clear section rhythm).
- 参照構成は `https://maruoka-castle.jp/`（ストーリー性のある構成、強いヒーロー、明快なセクションリズム）とする。
- Tone keywords: calm, dignified, approachable.
- トーンキーワードは「静謐」「品格」「親しみやすさ」とする。
- Primary audience includes beginners and all age groups; avoid intimidating language and visuals.
- 初心者を含む幅広い年齢層を想定し、威圧的な表現を避ける。

## Color & Typography / 配色・タイポ
- Base colors: black ink tone, warm off-white, and restrained accent red.
- 基本配色は墨色、和紙系オフホワイト、抑制した朱色を軸とする。
- Body text must prioritize readability over decorative expression.
- 本文は装飾性より可読性を優先する。
- Japanese typography should remain clear on mobile screens.
- 日本語タイポグラフィはスマートフォンでも判読性を維持する。

## Layout Principles / レイアウト原則
- Page flow should follow: impression -> trust -> comparison -> conversion.
- ページ導線は「印象形成 -> 信頼形成 -> 比較検討 -> CV」の順で設計する。
- Keep major CTA placements consistent across key pages.
- 主要CTA配置は主要ページ間で統一する。
- Use section spacing and visual hierarchy to separate narrative blocks clearly.
- セクション間余白と視線誘導で情報ブロックを明確に分離する。

## Components / コンポーネント
- CTA button styles must be unified for trial application and inquiry actions.
- 体験申込・問い合わせのCTAボタンは統一スタイルを適用する。
- Card components for masters and portfolio entries should share grid and spacing rules.
- 師範カードと作品カードは共通グリッド・余白ルールを採用する。
- Form components must show clear required markers and validation messages.
- フォーム部品は必須表示とバリデーションメッセージを明確に出す。

## Operational Rules / 運用ルール
- Avoid inline CSS; use shared stylesheet assets.
- インラインCSSは避け、共通スタイルシートを使用する。
- Keep updates synchronized between design documents and specification/proposal documents.
- デザイン文書更新時は仕様書・提案書との整合を同時に確認する。
- Wireframe SVG naming convention: `wireframe-<page-name>.svg` (example: `wireframe-top-page.svg`).
- ワイヤーフレームSVGの命名規則は `wireframe-<page-name>.svg`（例: `wireframe-top-page.svg`）とする。
- Verify UTF-8 and no mojibake on every Japanese update.
- 日本語更新時は UTF-8 と文字化けなしを確認する。
