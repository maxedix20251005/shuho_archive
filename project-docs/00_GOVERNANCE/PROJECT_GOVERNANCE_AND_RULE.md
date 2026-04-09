# PROJECT GOVERNANCE AND RULE / プロジェクト運用ガバナンス

## 0. How To Use / 使い方
- EN: This document defines practical governance rules for the Shuho website project.
- JA: 本書は秀峰サイト案件の実務運用ルールを定義する。
- EN: Update this file when governance policy changes.
- JA: ガバナンス方針を変更した場合は本書を更新する。

## 0-1. Basic Information / 基本情報
- EN: Project: `shuho-srchive`
- JA: プロジェクト名: `shuho-srchive`
- EN: Domain: Calligraphy school website in Shinagawa, Tokyo.
- JA: 対象: 東京都品川区の書道塾サイト。
- EN: Documentation roots: `docs/`, `project-docs/`.
- JA: 文書ルート: `docs/`, `project-docs/`.

## 1. Purpose / 目的
- EN: Standardise workflow, document quality, and change control.
- JA: ワークフロー、文書品質、変更管理を標準化する。
- EN: Keep project progress restartable from records.
- JA: 記録ベースで再開可能な状態を維持する。

## 2. Core Principles / 基本原則
- EN: One source of truth per topic.
- JA: トピックごとに正本を一つに定める。
- EN: Separate facts, decisions, and assumptions.
- JA: 事実・決定・仮説を分離して記録する。
- EN: Record rationale for directional changes.
- JA: 方針変更時は理由を記録する。

## 3. Encoding And Language / 文字コードと言語
- EN: All markdown files must be UTF-8.
- JA: すべての Markdown は UTF-8 とする。
- EN: `project-docs/*` must remain bilingual (EN/JA).
- JA: `project-docs/*` は日英併記を維持する。
- EN: `docs/*` may be Japanese-only.
- JA: `docs/*` は日本語のみで可。
- EN: Always check for mojibake after editing Japanese text.
- JA: 日本語更新後は必ず文字化けを確認する。

## 4. Standard Document Set / 標準文書セット
- `project-docs/10_PROJECT/PROJECT_STATUS.md`
- `project-docs/10_PROJECT/ISSUE_LIST.md`
- `project-docs/10_PROJECT/BACKLOG.md`
- `project-docs/90_WIP/WIP.md`
- `project-docs/30_TECH/TECH_SPEC.md`
- `project-docs/20_DESIGN/DESIGN_GUIDELINE.md`
- `project-docs/60_TEST/TEST_PLAN.md`
- `project-docs/00_GOVERNANCE/DOCUMENT_CATALOG.md`
- `project-docs/00_GOVERNANCE/CHECKLIST.md`

## 5. Operating Rules / 運用ルール
1. EN: Confirm scope and design direction before major edits.
   JA: 大きな修正前にスコープとデザイン方針を確認する。
2. EN: Validate updates and record outcomes.
   JA: 更新結果を検証し記録する。
3. EN: For each implementation/document change, update `PROJECT_STATUS.md` and at least one related document.
   JA: 実装・文書変更ごとに `PROJECT_STATUS.md` と関連文書を最低1件更新する。
4. EN: Update `ISSUE_LIST.md` when issue status changes.
   JA: 課題状態変更時は `ISSUE_LIST.md` を更新する。
5. EN: Update `TEST_PLAN.md` when test scope or result changes.
   JA: テスト範囲/結果変更時は `TEST_PLAN.md` を更新する。
6. EN: Update `DOCUMENT_CATALOG.md` in the same task for add/delete/move/rename.
   JA: 追加・削除・移動・改名時は同一タスクで `DOCUMENT_CATALOG.md` を更新する。
7. EN: Verify `CHECKLIST.md` before closing the task.
   JA: タスク完了前に `CHECKLIST.md` を確認する。
8. EN: Run `project-docs/00_GOVERNANCE/check-doc-encoding.ps1` for any `project-docs/*` update and fix all reported issues before completion.
   JA: `project-docs/*` 更新時は `project-docs/00_GOVERNANCE/check-doc-encoding.ps1` を実行し、検出事項を解消してから完了とする。

## 6. Change Control / 変更管理
- EN: Prior approval is required for high-impact changes (navigation, legal content, personal-data policy).
- JA: 影響の大きい変更（ナビ、法務文言、個人情報方針）は事前承認必須。
- EN: Define rollback steps before high-risk changes.
- JA: 高リスク変更前にロールバック手順を明確化する。

## 7. Roles (RACI Lite) / 役割
- EN: Responsible: Implementer
- JA: 実行責任: Implementer
- EN: Accountable: Project Owner
- JA: 最終責任: Project Owner
- EN: Consulted: Domain/Design reviewers
- JA: 参画レビュー: ドメイン/デザイン担当
- EN: Informed: Stakeholders
- JA: 共有対象: 関係者

## 8. Update Log / 更新履歴
- 2026-04-06: Re-baselined governance content for Shuho project.
- 2026-04-07: Rebuilt document in clean UTF-8 bilingual format.

- 2026-04-09: Added executable encoding check rule and check-doc-encoding.ps1.
- 2026-04-09: 実行可能な文字コードチェック手順と check-doc-encoding.ps1 を追加。
