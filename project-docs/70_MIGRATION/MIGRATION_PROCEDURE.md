# MIGRATION PROCEDURE / 移行手順書

## 1. Purpose / 目的
- EN: Define a repeatable, history-preserving migration process from this repository to the new website repository.
- JA: 本リポジトリから新サイト用リポジトリへ、履歴を保持して移行するための再現可能な手順を定義する。

## 2. Scope / 適用範囲
- EN: Target implementation directory is `shuho-website/`.
- JA: 移行対象の実装ディレクトリは `shuho-website/` とする。
- EN: Destination repository: `https://github.com/maxedix20251005/shuho-calligraphy-salon.git`
- JA: 移行先リポジトリ: `https://github.com/maxedix20251005/shuho-calligraphy-salon.git`

## 3. Recommended Method / 推奨方式
- EN: Use `git subtree split` as the default. It is built-in, simple, and sufficient for directory extraction with history.
- JA: 既定方式は `git subtree split` を推奨。標準機能で扱いやすく、ディレクトリ単位の履歴抽出に十分。

## 4. Preconditions / 事前条件
1. EN: Final implementation exists under `shuho-website/` only (no required files outside).
   JA: 最終実装が `shuho-website/` 配下に集約されている（必須ファイルが外にない）。
2. EN: Working tree is clean before split.
   JA: split 実行前に作業ツリーをクリーンにする。
3. EN: Migration checkpoint commit is created.
   JA: 移行チェックポイント用コミットを作成する。
4. EN: Latest branch state is pushed to origin.
   JA: 元リポジトリの最新ブランチ状態を origin に push 済みである。

## 5. Procedure A (Default): git subtree split / 手順A（推奨）

### 5.1 Create migration checkpoint / 移行チェックポイント作成
```bash
git checkout main
git pull --ff-only
git add -A
git commit -m "chore: migration checkpoint for shuho-website"   # if needed
git tag migration/shuho-website-pre-split-YYYYMMDD
```

### 5.2 Create split branch from subdirectory history / サブディレクトリ履歴から分離ブランチ作成
```bash
git subtree split --prefix=shuho-website -b split/shuho-website
```

### 5.3 Push split branch to new repository / 新リポジトリへ push
```bash
git remote add shuho-site https://github.com/maxedix20251005/shuho-calligraphy-salon.git
git push shuho-site split/shuho-website:main
```

### 5.4 Verify destination repository / 移行先検証
```bash
git ls-remote shuho-site
git fetch shuho-site
```
- EN: Confirm `main` exists in destination and contains only website files.
- JA: 移行先 `main` が作成され、サイト実装ファイルのみで構成されていることを確認する。

### 5.5 Optional cleanup (source repo) / 任意: 元リポジトリ整理
- EN: Keep `shuho-website/` in source repo if dual maintenance is required.
- JA: 並行運用が必要なら元リポジトリにも `shuho-website/` を残す。
- EN: If full handoff is required, remove or archive `shuho-website/` in a separate approved task.
- JA: 完全移管する場合は、別タスクで承認のうえ `shuho-website/` を削除またはアーカイブする。

## 6. Procedure B (Alternative): git filter-repo / 手順B（代替）
- EN: Use when you need more advanced history rewriting controls.
- JA: より高度な履歴加工が必要な場合のみ採用する。

### 6.1 Create a temporary clone / 一時クローン作成
```bash
git clone <SOURCE_REPO_URL> shuho-website-migration-temp
cd shuho-website-migration-temp
```

### 6.2 Rewrite history to keep subdirectory only / サブディレクトリのみ残す履歴再構成
```bash
git filter-repo --path shuho-website/ --to-subdirectory-filter .
```

### 6.3 Connect and push to destination / 移行先接続と push
```bash
git remote remove origin
git remote add origin https://github.com/maxedix20251005/shuho-calligraphy-salon.git
git push -u origin main --force
```

- EN: `--force` is required because rewritten history creates new commit IDs.
- JA: 履歴再構成でコミットIDが変わるため `--force` が必要。

## 7. Validation Checklist / 検証チェックリスト
1. EN: File count and key paths match expected website structure.
   JA: ファイル数と主要パスが想定構成に一致する。
2. EN: Build/deploy scripts (if any) work in destination repository.
   JA: （存在する場合）ビルド/デプロイスクリプトが移行先で動作する。
3. EN: Secrets are not committed; environment config is documented.
   JA: 秘密情報がコミットされておらず、環境設定手順が文書化されている。
4. EN: Default branch and branch protection are configured.
   JA: デフォルトブランチと保護設定が構成されている。
5. EN: README and project metadata are updated in destination.
   JA: 移行先の README とプロジェクト情報が更新されている。

## 8. Rollback Plan / ロールバック計画
- EN: If migration push fails, keep source repository unchanged and delete failed destination branch.
- JA: 移行 push が失敗した場合、元リポジトリは変更せず、移行先失敗ブランチを削除する。
- EN: Re-run from migration tag `migration/shuho-website-pre-split-YYYYMMDD`.
- JA: `migration/shuho-website-pre-split-YYYYMMDD` タグ時点から再実行する。

## 9. Method Selection Guide / 方式選定ガイド
- EN: Choose `git subtree split` when:
  - directory extraction is enough,
  - you want lower operational risk,
  - you prefer built-in git commands.
- JA: 以下の場合は `git subtree split` を選ぶ:
  - ディレクトリ抽出で十分、
  - 運用リスクを下げたい、
  - 標準 git コマンドを使いたい。

- EN: Choose `git filter-repo` when:
  - deeper history rewriting is required,
  - you need to reshape repository history beyond subtree capabilities.
- JA: 以下の場合は `git filter-repo` を選ぶ:
  - より高度な履歴編集が必要、
  - subtree 以上の履歴再構成が必要。

## 10. Ownership / 責任
- EN: Responsible: Implementer
- JA: 実行責任: Implementer
- EN: Approver: Project Owner
- JA: 承認責任: Project Owner

## 11. Change Log / 更新履歴
- 2026-04-07: Initial version created for shuho website migration to `shuho-calligraphy-salon` repository.
- 2026-04-07: `shuho-calligraphy-salon` リポジトリ移行向け初版を作成。
