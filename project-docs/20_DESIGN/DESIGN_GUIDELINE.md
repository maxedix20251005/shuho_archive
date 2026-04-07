# DESIGN GUIDELINE / デザインガイドライン

## 0. Scope / 適用範囲
- EN: This guideline defines the visual, UX, and content-expression rules for the Shuho site (public pages + design docs + wireframes).
- JA: 本ガイドラインは、書峰サイト（公開ページ・設計ドキュメント・ワイヤーフレーム）のビジュアル・UX・表現ルールを定義する。

## 1. Reference Interpretation / 参照サイト解釈（maruoka-castle.jp）
- EN: Adopt the high-presence hero + story-led vertical flow.
- JA: 高い存在感のヒーローと、縦方向に物語が進む構成を採用する。
- EN: Keep section rhythm explicit: Hero -> Feature Story -> Highlights -> News -> Practical Info -> Footer.
- JA: セクションのリズムを明確化する：ヒーロー -> 価値訴求ストーリー -> 見どころ -> お知らせ -> 実用情報 -> フッター。
- EN: Use dignified editorial tone with restrained decoration.
- JA: 装飾を抑えた、品格あるエディトリアルトーンで統一する。

## 2. Brand Direction / ブランド方向性
- EN: Core keywords: 静謐 (calm), 品格 (dignity), 親しみ (approachability), 継承 (heritage), 成長 (growth).
- JA: コアキーワード：静謐・品格・親しみ・継承・成長。
- EN: Do not position as a "strict-only" dojo; design must welcome beginners, children, and working adults.
- JA: 「厳格さ一辺倒」の塾として見せない。初心者・子ども・社会人が入りやすい表現を必須とする。

## 3. Visual System / ビジュアルシステム
### 3.1 Color / 色設計
- EN: Primary ink: `#1C1B1A` (text and key lines).
- JA: 主色（墨）：`#1C1B1A`（文字・主要ライン）。
- EN: Paper base: `#F6F2E9` (background base).
- JA: 地色（和紙）：`#F6F2E9`（背景基調）。
- EN: Sub background: `#EDE7DA` (section contrast).
- JA: 補助背景：`#EDE7DA`（セクションの段差表現）。
- EN: Accent vermilion: `#8C2A1E` (limited to CTA, status, important markers).
- JA: 朱アクセント：`#8C2A1E`（CTA・状態表示・要点マーカーに限定）。
- EN: Neutral line: `#8A8176` (borders/dividers).
- JA: 境界線：`#8A8176`（ボーダー・区切り線）。

### 3.2 Typography / タイポグラフィ
- EN: Japanese serif for headings, readable Gothic for body text.
- JA: 見出しは明朝系、本文は可読性重視のゴシック系を使用。
- EN: Recommended heading stack: `"Noto Serif JP", "Yu Mincho", serif`.
- JA: 見出し推奨スタック：`"Noto Serif JP", "Yu Mincho", serif`。
- EN: Recommended body stack: `"Noto Sans JP", "Yu Gothic", sans-serif`.
- JA: 本文推奨スタック：`"Noto Sans JP", "Yu Gothic", sans-serif`。
- EN: Minimum mobile body size: 15px. Do not use <14px for actionable text.
- JA: スマホ本文最小サイズは15px。操作要素で14px未満は不可。

## 4. Layout Rules / レイアウトルール
### 4.1 Global Composition / 全体構成
- EN: Keep first-view hero image full-bleed with centered catch copy.
- JA: FVは全面ヒーロー画像＋中央キャッチコピーを維持する。
- EN: Use one dominant visual per section; avoid crowded mixed blocks.
- JA: 1セクション1主役原則で情報過密を避ける。
- EN: Desktop section spacing: 80-120px; Mobile: 48-72px.
- JA: セクション間余白はPC 80-120px、SP 48-72pxを基本とする。

### 4.2 Navigation / ナビゲーション
- EN: Primary nav labels must stay stable across all pages.
- JA: グローバルナビのラベルは全ページで固定する。
- EN: Top-level order: 塾について / 師範 / コース / 作品 / FAQ / アクセス / お問い合わせ.
- JA: 上位導線の順序は「塾について / 師範 / コース / 作品 / FAQ / アクセス / お問い合わせ」。

## 5. Component Rules / コンポーネントルール
### 5.1 Hero / ヒーロー
- EN: Large photo area with low-density text only (1 headline + 1 short subline).
- JA: 大きな写真面を確保し、文言は低密度（見出し1行＋補助1行）に限定。
- EN: No trial CTA in hero (current business scope).
- JA: ヒーロー内に体験申込CTAは設置しない（現スコープ）。

### 5.2 Cards / カード
- EN: Masters and portfolio cards share spacing, radius, and metadata hierarchy.
- JA: 師範カードと作品カードは余白・角丸・メタ情報階層を共通化する。
- EN: Masters page assumes 3 instructors (single row), not two rows.
- JA: 師範ページは師範3名を前提に1段構成とする。

### 5.3 Forms / フォーム
- EN: Required marker, error message, and response-time note are mandatory.
- JA: 必須マーク・エラーメッセージ・返信目安の明記を必須とする。
- EN: Form must remain the primary conversion endpoint.
- JA: フォームを主要コンバージョン地点として維持する。

## 6. Content Tone / 文言トーン
- EN: Use short, concrete Japanese; avoid abstract slogans without proof.
- JA: 日本語は短く具体的にし、根拠のない抽象表現を避ける。
- EN: Pair emotional copy with evidence blocks (history, achievements, works, FAQ).
- JA: 情緒的コピーには必ず根拠（歩み・実績・作品・FAQ）を隣接配置する。
- EN: Dates and operational notices must be explicit (e.g., YYYY.MM.DD format).
- JA: 日付や運用告知は必ず明示（例：YYYY.MM.DD形式）。

## 7. Accessibility / アクセシビリティ
- EN: Target contrast ratio >= 4.5:1 for body text.
- JA: 本文コントラスト比は4.5:1以上を目標とする。
- EN: Touch target minimum for mobile CTA/chips: 44px height.
- JA: スマホのCTA・チップのタップ領域は高さ44px以上。
- EN: Every meaningful image requires alt text in Japanese.
- JA: 意味のある画像には日本語altを必須化する。

## 8. Implementation Rules / 実装運用ルール
- EN: Keep `wireframe-<page-name>.svg` naming convention.
- JA: `wireframe-<page-name>.svg` の命名規則を継続する。
- EN: Always save `project-docs/*` in UTF-8 and maintain JA/EN paired bullets.
- JA: `project-docs/*` はUTF-8保存を徹底し、日英併記の箇条書きを維持する。
- EN: If scope changes (e.g., trial reopening, admin expansion), update this guideline and `07-specification` together.
- JA: スコープ変更（例：体験再開、管理画面拡張）が発生した場合は、本書と`07-specification`を同時更新する。

## 9. Page-Level Design Intent / ページ別デザイン意図
- EN: Top: strong first impression + trust entry point.
- JA: Top：第一印象の最大化と信頼形成の入口。
- EN: About: history + philosophy + credibility proof.
- JA: 塾について：歩み・理念・信頼根拠の提示。
- EN: Masters: reduce uncertainty by teaching style clarity.
- JA: 師範：指導スタイル可視化で不安を減らす。
- EN: Courses: make fee/schedule comparison instantly scannable.
- JA: コース：料金・日程の比較を即時に可能にする。
- EN: Portfolio: show quality proof and category-based discovery.
- JA: 作品：指導品質の証明とカテゴリ探索性を両立。
- EN: FAQ: quick self-resolution + smooth handoff to contact.
- JA: FAQ：自己解決速度の向上と問い合わせ導線接続。
- EN: Access: eliminate visit anxiety with map + route evidence.
- JA: アクセス：地図・導線情報で来訪不安を解消。
- EN: Contact: low-friction conversion completion.
- JA: お問い合わせ：低負荷で完了できるCV設計。

---
Last Updated / 最終更新: 2026-04-07
Reference / 参照: https://maruoka-castle.jp/
