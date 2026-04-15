# PROJECT STATUS / プロジェクト状況

## 1. Purpose / 目的
- EN: Track current state, key decisions, progress, and next priorities.
- JA: 現在状況、主要決定、進捗、次の優先事項を管理する。

## 2. Current Phase / 現在フェーズ
- EN: Website implementation (static HTML/CSS/JS) is in progress under `shuho-website/`.
- JA: `shuho-website/` 配下で静的サイト実装（HTML/CSS/JS）を進行中。
- EN: Documentation maintenance and migration readiness are active in parallel.
- JA: ドキュメント整備と移行準備を並行して実施中。

## 3. Confirmed Policies / 確定方針
- EN: Business domain is a calligraphy school in Shinagawa, Tokyo.
- JA: 対象事業は東京都品川区の書道塾。
- EN: Conversion policy is enquiry-first; trial application page is out of scope.
- JA: CV方針は問い合わせ中心。体験申込ページはスコープ外。
- EN: Admin scope is three screens only: works, enquiries, news.
- JA: 管理画面スコープは3画面（作品・問い合わせ・お知らせ）のみ。
- EN: `project-docs/*` must stay bilingual (EN/JA); `docs/*` may remain Japanese-only.
- JA: `project-docs/*` は日英併記必須、`docs/*` は日本語のみ可。
- EN: Reference design direction follows `https://maruoka-castle.jp/` composition style.
- JA: デザイン方向性は `https://maruoka-castle.jp/` の構成方針を参照。

## 4. Completed / 完了事項
- EN: Core planning docs in `docs/` have been filled with project-specific content.
- JA: `docs/` の主要企画資料を案件固有内容で作成済み。
- EN: Wireframes (including top page and admin pages) were produced and updated.
- JA: Topページおよび管理画面を含むワイヤーフレームを作成・更新済み。
- EN: Initial website scaffold was implemented in `shuho-website/` (public pages + admin pages + assets).
- JA: `shuho-website/` に初期実装（公開ページ・管理画面・assets）を作成済み。
- EN: Shared layout rendering for header/footer/CTA was introduced.
- JA: ヘッダー・フッター・CTAの共通レイアウト描画を導入済み。
- EN: Enquiry form validation and Supabase submission path (with local fallback) were implemented.
- JA: 問い合わせフォームのバリデーションと Supabase 送信経路（ローカルフォールバック付き）を実装済み。
- EN: Migration runbook with history-preserving split procedure was prepared.
- JA: 履歴保持分割による移行手順書を整備済み。

## 5. Current Priorities / 現在の優先事項
1. EN: Keep production domain + canonical/`og:url` work on hold until further notice.
   JA: 本番ドメイン確定および canonical/`og:url` 反映は、別途指示があるまで保留。
2. EN: Implement production-grade admin auth/RLS model (replace prototype anon-admin policies).
   JA: 管理画面の本番認可モデル（暫定 anon-admin ポリシーの置換）を実装する。
3. EN: Harden admin authentication/RLS and replace prototype anon-admin policy before production.
   JA: 本番前に管理画面の認証/RLSを強化し、暫定 anon-admin ポリシーを置換する。

## 6. Risks / リスク
- EN: Encoding inconsistency can reintroduce mojibake in bilingual docs.
- JA: 文字コード不整合により日英併記文書で再度文字化けが発生する可能性。
- EN: Without domain finalisation, SEO metadata (`canonical`, `og:url`) remains incomplete.
- JA: ドメイン未確定の間は SEO メタデータ（`canonical`、`og:url`）が未完了。
- EN: Current admin access policy is prototype-grade (`anon` policy model) and must be hardened before production.
- JA: 管理画面のアクセス制御は暫定（`anon` ポリシーモデル）であり、本番前に強化が必要。

## 7. Quality Rule / 品質ルール
- EN: All project docs must be UTF-8 and reviewed for mojibake before closing each task.
- JA: 各タスク完了前に、project-docs は UTF-8 および文字化け有無を確認する。

## 8. Update Log / 更新履歴
- 2026-04-15: Updated top-page hero background to `assets/images/slides/shin-kun.jpg` in `shuho-website/assets/css/site.css` and kept dark overlay for headline readability.
- 2026-04-15: Topページのヒーロー背景を `shuho-website/assets/css/site.css` で `assets/images/slides/shin-kun.jpg` に更新し、見出し可読性のため暗めオーバーレイを維持。
- 2026-04-06: Filled `docs/01-proposal.html`, `docs/04-sitemap.html`, `docs/05-wireframe.html`, and `docs/07-specification.html` with project-specific content.
- 2026-04-06: `docs/02-market-research.html` と `docs/03-persona.html` を具体化し、競合傾向・ペルソナ・ジャーニーを反映。
- 2026-04-06: Created wireframe SVG set and aligned top page direction to `https://maruoka-castle.jp/`.
- 2026-04-07: Added admin wireframes for works/enquiries/news and aligned terminology to `enquiry`.
- 2026-04-07: Added `project-docs/70_MIGRATION/MIGRATION_PROCEDURE.md` with subtree/filter-repo migration procedure.
- 2026-04-07: Implemented initial website scaffold in `shuho-website/`.
- 2026-04-07: Implemented public pages and admin skeleton screens.
- 2026-04-07: Added shared layout rendering via `assets/js/layout.js` and stabilised header/footer display.
- 2026-04-07: Added social metadata (`og:*`, `twitter:*`) to public pages.
- 2026-04-07: Added `project-docs/10_PROJECT/BACKLOG.md` and registered deferred items.
- 2026-04-07: Implemented enquiry submit integration in `assets/js/site.js` and `assets/js/supabase-client.js` with config-missing fallback.
- 2026-04-07: Rebuilt `PROJECT_STATUS.md` to clean UTF-8 bilingual format and removed corrupted text.
- 2026-04-07: Cleaned mojibake in governance/tech documentation and rebuilt `project-docs/00_GOVERNANCE/PROJECT_GOVERNANCE_AND_RULE.md` and `project-docs/30_TECH/TECH_SPEC.md` in UTF-8 bilingual format.
- 2026-04-07: ガバナンス/技術文書の文字化けを修正し、`project-docs/00_GOVERNANCE/PROJECT_GOVERNANCE_AND_RULE.md` と `project-docs/30_TECH/TECH_SPEC.md` を UTF-8 日英併記で再構成。
- 2026-04-07: Replaced header text logo with image asset `images/logo/logo-shuho.jpg` via shared layout renderer and adjusted header mobile nav offset.
- 2026-04-07: 共有ヘッダーのロゴ表記を文字から `images/logo/logo-shuho.jpg` 画像へ置換し、モバイル時のヘッダーナビ表示位置を調整。
- 2026-04-08: Updated production domain task status to on-hold until further notice and reordered active priorities.
- 2026-04-08: 本番ドメイン関連タスクを別途指示まで保留へ変更し、当面の優先順位を再整理。
- 2026-04-08: Added local Supabase config handling baseline (`shuho-website/.gitignore` includes `supabase/config.js`, and local template `supabase/config.js` is in place).
- 2026-04-08: Supabase ローカル設定運用を追加（`shuho-website/.gitignore` に `supabase/config.js` を追加、`supabase/config.js` テンプレートを配置）。
- 2026-04-08: Current header logo asset path is `assets/images/logo/logo-shuho.jpg`.
- 2026-04-08: ヘッダーロゴの現行パスは `assets/images/logo/logo-shuho.jpg` に統一。
- 2026-04-08: Aligned DB naming from `enquiry_submissions` to `enquiries` in `docs/08-db-design.html` to match current implementation endpoint.
- 2026-04-08: `docs/08-db-design.html` の問い合わせテーブル名を `enquiry_submissions` から `enquiries` へ統一し、実装エンドポイントとの整合を取った。
- 2026-04-08: Added executable schema file `shuho-website/supabase/schema.sql` for enquiries table, constraints, indexes, trigger, and baseline RLS policies.
- 2026-04-08: Started BLG-003 by implementing live enquiry admin list/filter/status-memo update flow in `shuho-website/admin/enquiries.html` and `shuho-website/assets/js/admin.js`.
- 2026-04-08: `shuho-website/admin/enquiries.html` と `shuho-website/assets/js/admin.js` に、問い合わせ管理の実データ読込・絞り込み・状態/メモ更新フローを実装し、BLG-003に着手。
- 2026-04-08: Updated `shuho-website/supabase/schema.sql` with explicit prototype anon select/update policies for static admin mode and documented pre-production hardening requirement.
- 2026-04-08: `shuho-website/supabase/schema.sql` に静的管理画面向けの暫定 anon select/update ポリシーを追記し、本番前の権限制御強化要件を明記。
- 2026-04-08: Extended admin integration to works management (`shuho-website/admin/works.html` + `shuho-website/assets/js/admin.js`) with live list/filter/status update.
- 2026-04-08: 作品管理画面（`shuho-website/admin/works.html` + `shuho-website/assets/js/admin.js`）を実データ連携へ拡張し、一覧・絞り込み・公開状態更新を実装。
- 2026-04-08: Extended `shuho-website/supabase/schema.sql` to include `works` table/indexes/trigger and prototype static-admin policies.
- 2026-04-08: Added deploy-safe Supabase config fallback (`config.public.js`) and async config loading to resolve GitHub Pages module-load failure.
- 2026-04-08: GitHub Pages でのモジュール読込失敗に対応するため、`config.public.js` フォールバックと非同期設定読込へ改修。
- 2026-04-08: Opened ISSUE-005 (critical): admin pages stuck on loading/fallback in local and GitHub Pages. Added explicit module-import error surfacing and continued fix investigation.
- 2026-04-08: ISSUE-005 diagnosis completed: local failure is due to file:// module import block; GitHub Pages failure is due to empty/missing supabase/config.public.js values. Added PowerShell local server script and updated troubleshooting guidance.
- 2026-04-08: ISSUE-005 action: synced supabase/config.public.js from config.js to remove GitHub Pages config mismatch; awaiting redeploy and verification.
- 2026-04-08: Closed ISSUE-005. Verified `admin/enquiries.html` and `admin/works.html` on GitHub Pages; both connect to Supabase and render empty state correctly (`件数:0件`).


- 2026-04-08: Completed admin news management (`shuho-website/admin/news.html` + `shuho-website/assets/js/admin.js` + `shuho-website/assets/js/supabase-client.js`) with live list/create/update via Supabase.
- 2026-04-08: お知らせ管理（`shuho-website/admin/news.html` + `shuho-website/assets/js/admin.js` + `shuho-website/assets/js/supabase-client.js`）を Supabase 実データの一覧/新規登録/更新に対応させた。
- 2026-04-08: Expanded `shuho-website/supabase/schema.sql` to include `news_items` table/indexes/trigger/RLS policies for admin + public-read model.
- 2026-04-08: `shuho-website/supabase/schema.sql` を `news_items` テーブル（インデックス/トリガー/RLS）まで拡張し、管理画面と公開参照モデルに対応。

- 2026-04-08: Opened ISSUE-006 for admin/news.html boot failure (createNewsItem export mismatch). Applied namespace-import compatibility fix in assets/js/admin.js and started verification.
- 2026-04-08: Closed ISSUE-006. Verified admin/news.html now boots and displays normal empty-state (件数:0件) on GitHub Pages.
- 2026-04-09: Completed BLG-004 (Phase 1 anti-spam): added honeypot field, minimum submit-time check, and client-side rate limit (3 submissions / 10 minutes) in contact form (`contact.html` + `assets/js/site.js` + `assets/css/site.css`).
- 2026-04-09: BLG-004（第1段階スパム対策）を完了。問い合わせフォームに honeypot、最短送信時間チェック、クライアント側レート制限（10分で3回）を実装（`contact.html` + `assets/js/site.js` + `assets/css/site.css`）。
- 2026-04-09: Completed BLG-006. Added project-docs/00_GOVERNANCE/check-doc-encoding.ps1, integrated mandatory run rules into governance docs, and confirmed pass ([OK] on 15 project-doc files).
- 2026-04-09: BLG-006を完了。project-docs/00_GOVERNANCE/check-doc-encoding.ps1 を追加し、ガバナンス文書へ実行必須ルールを組み込み、15ファイルでチェック成功（[OK]）を確認。
- 2026-04-09: Opened ISSUE-007 for contact form submit-stuck symptom (送信中... persisted). Added submit recovery (try/catch/finally), 15s timeout guard, and non-local config load-order optimisation.
- 2026-04-09: Closed ISSUE-007. Verified contact form on GitHub Pages: submit no longer stays on 送信中..., and success transition toggles correctly.
- 2026-04-09: ISSUE-007をクローズ。GitHub Pages上で問い合わせフォームを確認し、送信中... 固定が解消され、送信後の表示切替が正常動作することを確認。
- 2026-04-09: Completed BLG-002. Finalised Supabase key-management workflow (local ignored config.js, deployed anon-only config.public.js, and pre-deploy guard script scripts/check-supabase-config.ps1).
- 2026-04-09: BLG-002を完了。Supabase鍵運用を確立（ローカルのみ config.js、デプロイは anon 限定 config.public.js、事前検査 scripts/check-supabase-config.ps1）。
- 2026-04-09: Completed BLG-005 documentation definition in `project-docs/30_TECH/TECH_SPEC.md` (analytics event map, KPI dashboard, admin-public flow).
- 2026-04-09: `project-docs/30_TECH/TECH_SPEC.md` に BLG-005（イベント定義、KPIダッシュボード、管理画面と公開画面の連携フロー）を反映。

- 2026-04-09: Implemented BLG-005 instrumentation hooks in shuho-website/assets/js/site.js (public events) and shuho-website/assets/js/admin.js (admin operation events).
- 2026-04-09: shuho-website/assets/js/site.js（公開イベント）と shuho-website/assets/js/admin.js（管理運用イベント）にBLG-005計測フックを実装。


- 2026-04-09: Implemented admin dashboard (`admin/dashboard.html`) with KPI cards, weekly trend chart/table, and dashboard navigation from all admin pages.
- 2026-04-09: 管理ダッシュボード（`admin/dashboard.html`）を実装し、KPIカード・週次推移チャート/テーブル・全管理画面からの導線を追加。





