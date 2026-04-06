# TECH SPEC / 技術仕様正本

## 1. Purpose / 目的
- Define the technical baseline for the shodo school website launch project.
- 書道塾サイト立ち上げプロジェクトの技術基準を定義する。

## 2. Current Phase / 現在フェーズ
- Current scope is planning and requirements definition.
- 現在の対象は企画・要件定義である。
- Implementation details are provisional and must be finalized before development starts.
- 実装詳細は暫定であり、開発着手前に確定する。

## 3. Delivery Scope / 成果物範囲
- Public website planning/specification documents under `docs/`.
- `docs/` 配下の公開サイト企画・仕様文書。
- Governance and project control documents under `project-docs/`.
- `project-docs/` 配下のガバナンス・プロジェクト管理文書。

## 4. Technical Baseline (Provisional) / 技術方針（暫定）
- Frontend: static HTML/CSS/JavaScript.
- フロントエンドは静的 HTML/CSS/JavaScript を基本とする。
- Responsive support: mobile-first, then tablet/desktop optimization.
- 対応方針は mobile-first を基本とし、タブレット/PCを最適化する。
- Analytics: event tracking for CTA and form conversion metrics.
- 計測はCTAとフォームCVを中心にイベント計測を行う。
- Form handling and backend integration are TBD in implementation planning.
- フォーム送信処理とバックエンド連携は実装設計で確定する。

## 5. Information Architecture Baseline / 情報設計基準
- Primary references:
- 主要参照:
  - `docs/01-proposal.html`
  - `docs/04-sitemap.html`
  - `docs/05-wireframe.html`
  - `docs/07-specification.html`
- Any structural change must be synchronized across the above files.
- 構造変更時は上記ファイル間で同時整合する。

## 6. Non-functional Baseline / 非機能基準
- UTF-8 encoding is mandatory for all project documents.
- 全文書で UTF-8 を必須とする。
- Updated Japanese content must be checked for mojibake.
- 日本語更新時は文字化け確認を必須とする。
- Documentation changes require same-task updates in status and issue tracking documents.
- 文書変更時は同一タスクでステータス文書と課題台帳を更新する。

## 7. Security & Privacy Baseline / セキュリティ・プライバシー基準
- Define personal data handling policy before enabling inquiry/trial forms in production.
- 問い合わせ・体験申込フォームを本番運用する前に個人情報取扱方針を確定する。
- Use encrypted transport (HTTPS) for all public pages and form submissions.
- 公開ページとフォーム送信は HTTPS を前提とする。

## 8. Open Decisions / 未確定事項
- Final hosting and deployment pipeline.
- 最終ホスティングとデプロイ手順。
- Form backend architecture and notification channel.
- フォームのバックエンド構成と通知チャネル。
- Operational CMS necessity and scope.
- CMS運用要否と範囲。
