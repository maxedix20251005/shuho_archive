# TECH SPEC / 技術仕様

## 1. Purpose / 目的
- EN: Define the technical baseline for implementation and operations of the Shuho website.
- JA: 秀峰サイトの実装・運用における技術基準を定義する。

## 2. Current Phase / 現在フェーズ
- EN: Implementation in progress with static HTML/CSS/JS architecture.
- JA: 静的 HTML/CSS/JS 構成で実装進行中。
- EN: Supabase integration is implemented for enquiries/works/news and pending production hardening.
- JA: Supabase 連携は enquiries/works/news で実装済みで、本番向けの権限制御強化が残課題。

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
- EN: Base table DDL for enquiries/works/news flow is maintained in `shuho-website/supabase/schema.sql`.
- JA: enquiries/works/news 導線の基準DDLは `shuho-website/supabase/schema.sql` で管理する。

## 5.1 BLG-002 Implementation Detail / BLG-002 実装詳細
- EN: BLG-002 defines a safe Supabase configuration workflow for static hosting.
- JA: BLG-002 は静的ホスティング前提での安全な Supabase 設定運用を定義する。
- EN: Local development uses `shuho-website/supabase/config.js` (ignored by Git) for private local values.
- JA: ローカル開発では `shuho-website/supabase/config.js`（Git 管理対象外）にローカル値を設定する。
- EN: Deployed environment (GitHub Pages) uses `shuho-website/supabase/config.public.js` with anon key only.
- JA: デプロイ環境（GitHub Pages）では `shuho-website/supabase/config.public.js` を使用し、anon key のみを保持する。
- EN: `shuho-website/scripts/check-supabase-config.ps1` verifies required files and blocks obvious service-role style key patterns.
- JA: `shuho-website/scripts/check-supabase-config.ps1` で必要ファイルの存在を確認し、service-role 相当キーの混入を検知してブロックする。
- EN: Guard execution command: `powershell -ExecutionPolicy Bypass -File .\shuho-website\scripts\check-supabase-config.ps1`.
- JA: ガード実行コマンド: `powershell -ExecutionPolicy Bypass -File .\shuho-website\scripts\check-supabase-config.ps1`。

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
- EN: Supabase config workflow established (`config.js` local ignore, `config.public.js` deployed anon key, guard script check).
- JA: Supabase 設定運用を確立（`config.js` ローカル管理、`config.public.js` は anon key のみ、ガードスクリプトで検査）。
- EN: CAPTCHA introduction timing (post-launch monitoring threshold).
- JA: CAPTCHA導入タイミング（リリース後の監視しきい値に応じて判断）。

## 8. Site Structure and Navigation Review / サイト構造・導線レビュー
- EN: Public page set is complete and consistent with current scope (`index/about/masters/courses/portfolio/faq/access/contact/privacy`).
- JA: 公開ページ構成は現スコープ（`index/about/masters/courses/portfolio/faq/access/contact/privacy`）と整合している。
- EN: Shared header/footer/SP CTA injection via `assets/js/layout.js` is present on all public pages.
- JA: `assets/js/layout.js` によるヘッダー・フッター・SP固定CTA注入は全公開ページに適用済み。
- EN: Admin scope is aligned to 3 pages (`admin/works.html`, `admin/enquiries.html`, `admin/news.html`).
- JA: 管理画面スコープは 3 画面（`admin/works.html`、`admin/enquiries.html`、`admin/news.html`）で整合している。
- EN: Documentation URL notation (`/about`, `/admin/works/new`) is conceptual; actual implementation path is static-file style (`about.html`, `admin/works.html`) with inline CRUD actions.
- JA: ドキュメント上のURL表記（`/about`、`/admin/works/new`）は概念表現であり、実装は静的ファイル方式（`about.html`、`admin/works.html`）かつ画面内CRUD操作で運用している。
- EN: Before BLG-005, no blocking IA/navigation defects remain; only documentation precision updates are recommended when final production domain is fixed.
- JA: BLG-005 着手前の IA/導線に阻害要因はなく、本番ドメイン確定時にURL表記精度を最終調整することを推奨する。

## 9. BLG-005 Analytics and Dashboard Definition / BLG-005 計測・ダッシュボード定義

### 9.1 Event Mapping (Public) / イベント設計（公開側）
- EN: Measurement model uses event-style tracking and can be implemented with GA4 or equivalent.
- JA: 計測モデルはイベント方式とし、GA4等で実装可能な構造を採用する。

| Event Name | Trigger | Parameters | Purpose |
|---|---|---|---|
| `page_view_public` | Each public page load | `page_id`, `page_path`, `device_type`, `referrer_type` | Traffic baseline by page/device/source |
| `cta_click_contact` | Click on contact CTA (header/footer/section/SP fixed) | `page_id`, `cta_position`, `device_type` | Evaluate CTA placement effectiveness |
| `contact_form_start` | First input focus in contact form | `page_id`, `device_type` | Detect form intent volume |
| `contact_form_submit_success` | Contact submit succeeded | `page_id`, `enquiry_type`, `device_type` | Primary conversion count |
| `contact_form_submit_error` | Contact submit failed | `page_id`, `error_type`, `device_type` | Failure diagnosis and UX fix priority |
| `portfolio_filter_use` | Portfolio category filter change | `page_id`, `category`, `device_type` | Understand demand by category |
| `faq_expand` | FAQ item expanded | `page_id`, `faq_id`, `device_type` | Discover user concern themes |
| `public_to_admin_click` | Click on admin entry link from public site | `page_id`, `cta_position`, `target_page`, `device_type` | Measure public-to-admin navigation usage |

### 9.2 Event Mapping (Admin) / イベント設計（管理側）
| Event Name | Trigger | Parameters | Purpose |
|---|---|---|---|
| `admin_login_view` | Admin page opened | `admin_page` | Monitor admin entry frequency |
| `admin_work_status_update` | Work publish status changed | `work_id`, `from_status`, `to_status` | Publish control audit |
| `admin_news_create` | News item created | `news_id`, `publish_status` | Content supply monitoring |
| `admin_news_status_update` | News publish status changed | `news_id`, `from_status`, `to_status` | Freshness and publish governance |
| `admin_enquiry_status_update` | Enquiry status changed | `enquiry_id`, `from_status`, `to_status` | Response operations tracking |
| `admin_to_public_click` | Click on public-site shortcut in admin sidebar | `admin_page`, `target_page`, `device_type` | Measure admin-to-public validation flow |

### 9.3 KPI Dashboard (Weekly + Monthly) / KPIダッシュボード（週次・月次）
| KPI ID | KPI | Formula | Target (Initial) | Owner |
|---|---|---|---|---|
| `KPI-01` | Public sessions | count(`page_view_public`) | `>= 1,000 / month` | Marketing |
| `KPI-02` | Contact CTA CTR | `cta_click_contact / page_view_public` | `>= 4.0%` | Marketing |
| `KPI-03` | Contact form start rate | `contact_form_start / cta_click_contact` | `>= 55%` | Marketing |
| `KPI-04` | Enquiry CVR | `contact_form_submit_success / page_view_public` | `>= 1.2%` | Marketing |
| `KPI-05` | Form error rate | `contact_form_submit_error / contact_form_start` | `<= 8%` | Frontend |
| `KPI-06` | First-response lead time | median(`first_response_at - created_at`) from `enquiries` | `<= 1 business day` | Operations |
| `KPI-07` | Enquiry backlog | count(status in `new`,`processing`) | `<= 20` steady-state | Operations |
| `KPI-08` | Published works freshness | `% works updated within 90 days` | `>= 30%` | Content |
| `KPI-09` | Published news freshness | `% news_items updated within 30 days` | `>= 70%` | Content |

### 9.4 Admin-Public Content Flow / 管理画面と公開画面の連携フロー
- EN: Works/news must remain `draft` by default on creation in admin.
- JA: 作品・お知らせは管理画面で新規作成時に `draft` を初期値とする。
- EN: Public pages only render records where `publish_status = 'published'` and `deleted_at is null`.
- JA: 公開画面は `publish_status = 'published'` かつ `deleted_at is null` のレコードのみ表示する。
- EN: Any admin status change (`draft -> published`, `published -> draft`) becomes effective immediately in public list rendering.
- JA: 管理画面での状態変更（`draft -> published`、`published -> draft`）は公開一覧へ即時反映される。
- EN: Enquiries originate only from public contact form and are operationally consumed in admin (`new -> processing -> closed/spam`).
- JA: 問い合わせは公開フォーム起点で生成され、管理画面で `new -> processing -> closed/spam` の運用遷移を行う。
- EN: Recommended operation cadence: admin checks enquiries twice daily (AM/PM) and updates status/memo during each cycle.
- JA: 推奨運用: 問い合わせは 1日2回（AM/PM）確認し、各サイクルで状態と管理メモを更新する。

### 9.5 BLG-005 Implementation Notes / BLG-005 実装メモ
- EN: Event instrumentation hooks are implemented in `shuho-website/assets/js/site.js` and `shuho-website/assets/js/admin.js`; dashboard build and reporting query automation remain next tasks.
- JA: `shuho-website/assets/js/site.js` と `shuho-website/assets/js/admin.js` に計測フック実装済み。ダッシュボード構築とレポート用クエリ自動化を次工程とする。
- EN: Event names and parameter keys in this section are the canonical source for frontend instrumentation.
- JA: 本節のイベント名・パラメータキーをフロント実装時の正本定義とする。

### 9.6 Admin <-> Public Site Flow / CTA Map / 管理画面と公開画面のフロー・CTA対応表
- EN: The table below defines the exact pathway from public CTA action to admin operation and back to public visibility.
- JA: 以下の表は、公開側CTA起点の行動が管理画面運用を経て公開反映されるまでの導線を定義する。

| Flow ID | Public Entry / CTA (公開入口・CTA) | System/Data Action (システム・データ処理) | Admin Action (管理画面オペレーション) | Public Outcome (公開側の結果) | SLA / Ops Rule (運用ルール) |
|---|---|---|---|---|---|
| `F-CTA-01` | Header/Footer/SP固定CTAの「お問い合わせ」クリック | `cta_click_contact` event recorded | N/A | Contact page reached | Track CTR weekly (`KPI-02`) |
| `F-CTA-02` | Contact form submit | Insert row into `enquiries` (`status='new'`) + `contact_form_submit_success` | In `admin/enquiries.html`, update status `new -> processing -> closed/spam`, add `admin_memo` | User receives completion view immediately; operational response handled offline | Check twice daily (AM/PM), first response target: 1 business day |
| `F-CTA-03` | Portfolio page category chips | Filter intent event `portfolio_filter_use` | Review category demand trend monthly | Future content prioritisation reflected in newly published works | Use top categories to guide next 4-week publishing plan |
| `F-CTA-04` | FAQ expansion and unresolved user intent -> contact CTA | `faq_expand` + possible `cta_click_contact` chain | Review top FAQ themes, update FAQ copy and enquiry templates | Improved self-resolution and higher qualified enquiries | Review FAQ top themes monthly |
| `F-CTA-05` | Public "works/news" visibility | Query only `publish_status='published'` and `deleted_at is null` | In `admin/works.html` and `admin/news.html`, toggle `draft/published` and maintain titles/dates | Published items appear on public pages; draft items remain hidden | Content check at least 2 times/week |
| `F-CTA-06` | Public footer "管理画面" link | `public_to_admin_click` event recorded | Admin enters operations screen and performs updates | Faster operator transition from public review to admin operation | Monitor weekly trend and keep misuse low |
| `F-CTA-07` | Admin sidebar "公開サイトを見る" | `admin_to_public_click` event recorded | Admin verifies public-facing output after update | Reduces publish mismatch by immediate visual verification | Use after each publish-related change |

### 9.7 Admin-Publish Gate Criteria / 管理側公開判定基準
- EN: Works/news must satisfy minimum quality checks before `draft -> published`.
- JA: 作品/お知らせは `draft -> published` 変更前に最低品質チェックを満たすこと。
- EN: Gate checklist: title filled, typo check, date check, status check, and (works) image/alt consistency.
- JA: 公開ゲート: タイトル入力、誤字確認、日付確認、公開状態確認、（作品）画像とalt整合確認。
- EN: If quality fails, keep `draft` and update `admin_memo` with corrective note.
- JA: 品質未達の場合は `draft` 維持とし、`admin_memo` に修正指示を残す。


## 9.8 BLG-007 Admin Auth/RLS Hardening / BLG-007 管理認証・RLS強化
- EN: BLG-007 is the production-security task to stop anonymous admin access and enforce authenticated access only.
- JA: BLG-007 は、匿名での管理画面アクセスを終了し、認証済みユーザーのみへ制限する本番セキュリティ強化タスクである。
- EN: Current state is "prototype mode" (anon select/update allowed for admin tables). BLG-007 removes this mode.
- JA: 現在は「暫定運用」（管理テーブルに anon select/update を許可）であり、BLG-007 でこの暫定モードを廃止する。

### Objective / 目的
- EN: Restrict `enquiries`, `works`, and `news_items` admin operations to authenticated staff only.
- JA: `enquiries`、`works`、`news_items` の管理操作を認証済みスタッフのみに限定する。
- EN: Keep public behaviour unchanged (public pages still read published content and submit enquiries).
- JA: 公開側の挙動は維持する（公開ページは公開済みコンテンツ参照・問い合わせ送信を継続）。

### Scope of Change / 変更範囲
- EN: Supabase policies in `shuho-website/supabase/schema.sql` (remove anon admin policies).
- JA: `shuho-website/supabase/schema.sql` の Supabase ポリシー（anon 管理ポリシー削除）。
- EN: Admin frontend auth/session guard (`admin/*.html`, `assets/js/admin.js`, `assets/js/dashboard.js`).
- JA: 管理画面フロントの認証/セッションガード（`admin/*.html`、`assets/js/admin.js`、`assets/js/dashboard.js`）。
- EN: Admin login flow (Supabase Auth email/password or magic link).
- JA: 管理ログインフロー（Supabase Auth のメール/パスワードまたはマジックリンク）。

### Target Access Model / 目標アクセスモデル
| Role | Permission |
|---|---|
| `anon` | Public insert to `enquiries` only, read-only published content only |
| `authenticated` | Admin read/update for `enquiries`, `works`, `news_items` |
| `service_role` | Server-side maintenance only (never exposed to browser) |

### Implementation Phases / 実装フェーズ
1. EN: Add admin login page and session check middleware-like guard in JS.
   JA: 管理ログインページを追加し、JSでセッションチェックのガードを実装。
2. EN: Replace `anon` select/update policies with `authenticated` policies for admin tables.
   JA: 管理テーブルの `anon` select/update ポリシーを `authenticated` ポリシーへ置換。
3. EN: Verify no regression on public pages (contact submit + published content rendering).
   JA: 公開ページの非退行確認（問い合わせ送信・公開コンテンツ表示）。
4. EN: Remove prototype policy comments and mark production baseline completed.
   JA: 暫定ポリシー注記を削除し、本番基準完了として記録。

### Acceptance Criteria / 完了条件
- EN: Unauthenticated user cannot access admin data or perform admin write operations.
- JA: 未認証ユーザーが管理データ参照・更新できないこと。
- EN: Authenticated admin can use works/enquiries/news/dashboard normally.
- JA: 認証済み管理者が works/enquiries/news/dashboard を通常利用できること。
- EN: Public enquiry submission remains available with anon key.
- JA: 公開問い合わせ送信は anon key で継続利用できること。

### What You Need to Prepare / あなたに準備いただくもの
- EN: 1+ admin account(s) in Supabase Auth.
- JA: Supabase Auth 上の管理者アカウント（1件以上）。
- EN: Decision on login method (password vs magic link).
- JA: ログイン方式の決定（パスワード or マジックリンク）。
- EN: Confirmation of allowed admin email domains (optional, recommended).
- JA: 管理者メールドメイン制限の可否（任意だが推奨）。
## 10. Related Documents / 関連文書
- `project-docs/10_PROJECT/PROJECT_STATUS.md`
- `project-docs/10_PROJECT/BACKLOG.md`
- `project-docs/70_MIGRATION/MIGRATION_PROCEDURE.md`
- `docs/07-specification.html`
- `docs/04-sitemap.html`
- `shuho-website/supabase/schema.sql`
- `shuho-website/assets/js/layout.js`
- `shuho-website/admin/dashboard.html`
- `shuho-website/assets/js/dashboard.js`
- `shuho-website/supabase/kpi-queries.sql`

## 11. Update Log / 更新履歴
- 2026-04-06: Initial technical baseline for planning phase.
- 2026-04-07: Updated to reflect current implementation status and Supabase enquiry path.
- 2026-04-07: Rebuilt document in clean UTF-8 bilingual format.

- 2026-04-08: Added enquiries schema reference and aligned DB naming to enquiries across design docs.
- 2026-04-08: 問い合わせDB名を enquiries へ統一し、スキーマ参照を追記。




- 2026-04-08: Added news CRUD integration status and schema coverage (`news_items`) for admin/public use.
- 2026-04-08: お知らせCRUD連携状況と `news_items` スキーマ適用範囲（管理/公開）を追記。


- 2026-04-09: Added anti-spam baseline for enquiry form (honeypot + submit-speed check + client-side rate limit).
- 2026-04-09: 問い合わせフォームにスパム対策の基礎実装（honeypot + 送信速度チェック + クライアント側レート制限）を追加。

- 2026-04-09: Added Supabase config guard script (shuho-website/scripts/check-supabase-config.ps1) and documented anon-only deploy key rule.
- 2026-04-09: Supabase 設定ガードスクリプト（shuho-website/scripts/check-supabase-config.ps1）を追加し、デプロイ鍵を anon のみに限定する運用を明文化。
- 2026-04-09: Added BLG-002 operational detail and site structure/navigation review notes.
- 2026-04-09: BLG-002 の運用詳細とサイト構造/導線レビュー結果を追記。
- 2026-04-09: Completed BLG-005 definition in tech spec (analytics event mapping, KPI dashboard, and admin-public operation flow).
- 2026-04-09: BLG-005として、計測イベント定義・KPIダッシュボード定義・管理画面と公開画面の運用連携フローを技術仕様へ反映。

- 2026-04-09: Implemented BLG-005 instrumentation hooks in public/admin scripts (shuho-website/assets/js/site.js, shuho-website/assets/js/admin.js).
- 2026-04-09: BLG-005の計測フックを公開/管理スクリプトへ実装（shuho-website/assets/js/site.js、shuho-website/assets/js/admin.js）。





- 2026-04-09: Added KPI SQL pack (shuho-website/supabase/kpi-queries.sql) for operations/content dashboard build (KPI-06 to KPI-09).
- 2026-04-09: ダッシュボード構築用に KPI SQL パック（shuho-website/supabase/kpi-queries.sql、KPI-06〜KPI-09）を追加。


- 2026-04-09: Built admin dashboard page (shuho-website/admin/dashboard.html) and data script (shuho-website/assets/js/dashboard.js) with KPI cards + weekly trend table/chart.
- 2026-04-09: 管理ダッシュボード（shuho-website/admin/dashboard.html）とデータスクリプト（shuho-website/assets/js/dashboard.js）を実装し、KPIカードと週次推移テーブル/チャートを追加。


