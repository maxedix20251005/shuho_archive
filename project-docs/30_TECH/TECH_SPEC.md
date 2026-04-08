# TECH SPEC / 技術仕様

## 1. Purpose / 目的
- EN: Define the technical baseline for implementation and operations of the Shuho website.
- JA: 秀峰サイトの実装・運用における技術基準を定義する。

## 2. Current Phase / 現在フェーズ
- EN: Implementation in progress with static HTML/CSS/JS architecture.
- JA: 静的 HTML/CSS/JS 構成で実装進行中。
- EN: Supabase integration is partially implemented and pending production configuration.
- JA: Supabase 連携は一部実装済みで、本番設定投入待ち。

## 3. Delivery Scope / 対象範囲
- EN: Public website under `shuho-website/*.html`.
- JA: 公開サイト（`shuho-website/*.html`）。
- EN: Admin screens under `shuho-website/admin/*` (works/enquiries/news).
- JA: 管理画面（`shuho-website/admin/*`、作品/問い合わせ/お知らせ）。
- EN: Technical/project docs under `project-docs/*`.
- JA: 技術・管理文書（`project-docs/*`）。

## 4. Technical Baseline / 技術基準
- EN: Frontend: static HTML + CSS + vanilla JavaScript.
- JA: フロントエンド: 静的 HTML + CSS + Vanilla JavaScript。
- EN: Responsive strategy: mobile-first.
- JA: レスポンシブ方針: mobile-first。
- EN: Backend service: Supabase (REST-based access from JS).
- JA: バックエンド: Supabase（JS から REST 経由で利用）。
- EN: Data focus: enquiries, works, news management.
- JA: データ対象: 問い合わせ、作品、お知らせ管理。

## 5. Integration Baseline / 連携基準
- EN: Enquiry form submits via `assets/js/site.js` and `assets/js/supabase-client.js`.
- JA: 問い合わせフォームは `assets/js/site.js` と `assets/js/supabase-client.js` で送信。
- EN: If `supabase/config.js` is missing, form uses local fallback success flow.
- JA: `supabase/config.js` 未設定時はローカル成功フォールバックで動作。
- EN: Live DB insertion requires configured `SUPABASE_URL` and `SUPABASE_ANON_KEY`.
- JA: DB実登録には `SUPABASE_URL` と `SUPABASE_ANON_KEY` の設定が必要。
- EN: Base table DDL for enquiry flow is maintained in `shuho-website/supabase/schema.sql`.
- JA: 問い合わせ導線の基準DDLは `shuho-website/supabase/schema.sql` で管理する。

## 6. Non-functional Baseline / 非機能基準
- EN: Encoding: UTF-8 mandatory across project docs.
- JA: 文字コード: project-docs は UTF-8 必須。
- EN: Availability target (initial): static pages accessible without backend dependency.
- JA: 初期可用性目標: バックエンド非依存で静的ページ表示可能。
- EN: Security baseline: HTTPS required in production.
- JA: セキュリティ基準: 本番は HTTPS 必須。
- EN: Privacy baseline: personal data handling must follow privacy policy and least-privilege DB access.
- JA: 個人情報基準: プライバシーポリシー準拠および最小権限でのDBアクセス。

## 7. Open Decisions / 未確定事項
- EN: Production domain for canonical/`og:url`.
- JA: canonical/`og:url` 用の本番ドメイン。
- EN: Supabase production config and secret handling workflow.
- JA: Supabase 本番設定と秘密情報運用フロー。
- EN: Admin live CRUD completion schedule.
- JA: 管理画面実CRUD連携の完了スケジュール。

## 8. Related Documents / 関連文書
- `project-docs/10_PROJECT/PROJECT_STATUS.md`
- `project-docs/10_PROJECT/BACKLOG.md`
- `project-docs/70_MIGRATION/MIGRATION_PROCEDURE.md`
- `docs/07-specification.html`
- `shuho-website/supabase/schema.sql`

## 9. Update Log / 更新履歴
- 2026-04-06: Initial technical baseline for planning phase.
- 2026-04-07: Updated to reflect current implementation status and Supabase enquiry path.
- 2026-04-07: Rebuilt document in clean UTF-8 bilingual format.

- 2026-04-08: Added enquiries schema reference and aligned DB naming to enquiries across design docs.
- 2026-04-08: 問い合わせDB名を enquiries へ統一し、スキーマ参照を追記。


