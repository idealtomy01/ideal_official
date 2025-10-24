# パフォーマンス改善実行手順書

## 前提条件
- 元のページファイル（`page.tsx`）が正常に動作していることを確認
- 現在のLighthouse Performance Score: 57を記録
- バックアップファイル（`page_old.tsx`）が存在することを確認

## 実行手順

### フェーズ1: データファイルの作成
- [ ] **1.1** `data/philosophy/valueClogCards.tsx` を作成
  - [ ] `valueClogCards` 配列をコピー
  - [ ] 必要なimport文を追加
  - [ ] ファイル拡張子を `.tsx` に設定

- [ ] **1.2** `data/philosophy/absoluteConditionsCards.tsx` を作成
  - [ ] `absoluteConditionsCards` 配列をコピー
  - [ ] 必要なimport文を追加
  - [ ] ファイル拡張子を `.tsx` に設定

- [ ] **1.3** `data/philosophy/processSteps.tsx` を作成
  - [ ] `processSteps` 配列をコピー
  - [ ] 必要なimport文を追加
  - [ ] ファイル拡張子を `.tsx` に設定

- [ ] **1.4** `data/philosophy/philosophyItems.tsx` を作成
  - [ ] `philosophyItems` 配列をコピー
  - [ ] 必要なimport文を追加
  - [ ] ファイル拡張子を `.tsx` に設定

- [ ] **1.5** `data/philosophy/roadmapItems.tsx` を作成
  - [ ] `roadmapItems` 配列をコピー
  - [ ] 必要なimport文を追加
  - [ ] ファイル拡張子を `.tsx` に設定

### フェーズ2: セクションコンポーネントの作成
- [ ] **2.1** `components/philosophy/ValueClogSection.tsx` を作成
  - [ ] セクションのJSXをコピー
  - [ ] `valueClogCards` をimport
  - [ ] `ThreeCardSection` を使用
  - [ ] `React.memo` でラップ

- [ ] **2.2** `components/philosophy/AbsoluteConditionsSection.tsx` を作成
  - [ ] セクションのJSXをコピー
  - [ ] `absoluteConditionsCards` をimport
  - [ ] `ThreeCardSection` を使用
  - [ ] `React.memo` でラップ

- [ ] **2.3** `components/philosophy/PhilosophySection.tsx` を作成
  - [ ] セクションのJSXをコピー
  - [ ] `philosophyItems` をimport
  - [ ] `Accordion` と `ReadMore` を使用
  - [ ] `React.memo` でラップ

- [ ] **2.4** `components/philosophy/RoadmapSection.tsx` を作成
  - [ ] セクションのJSXをコピー
  - [ ] `roadmapItems` をimport
  - [ ] `Accordion` を使用
  - [ ] `React.memo` でラップ

- [ ] **2.5** `components/philosophy/DeclarationSection.tsx` を作成
  - [ ] セクションのJSXをコピー
  - [ ] 必要なimport文を追加
  - [ ] `React.memo` でラップ

### フェーズ3: インデックスファイルの作成
- [ ] **3.1** `components/philosophy/index.tsx` を作成
  - [ ] 各セクションコンポーネントをexport
  - [ ] `next/dynamic` を使用して遅延読み込み
  - [ ] ローディング状態のプレースホルダーを提供

### フェーズ4: メインページファイルの更新
- [ ] **4.1** `app/philosophy/page.tsx` を更新
  - [ ] インライン データを削除
  - [ ] 外部データファイルをimport
  - [ ] セクションコンポーネントをimport
  - [ ] 既存のJSXをセクションコンポーネントに置き換え

### フェーズ5: 遅延読み込みの実装
- [ ] **5.1** `components/philosophy/index.tsx` で遅延読み込みを実装
  - [ ] `next/dynamic` を使用
  - [ ] ローディング状態のプレースホルダーを提供
  - [ ] 各セクションコンポーネントを遅延読み込み

### フェーズ6: メモ化の適用
- [ ] **6.1** 各セクションコンポーネントに `React.memo` を適用
  - [ ] `ValueClogSection.tsx`
  - [ ] `AbsoluteConditionsSection.tsx`
  - [ ] `PhilosophySection.tsx`
  - [ ] `RoadmapSection.tsx`
  - [ ] `DeclarationSection.tsx`

### フェーズ7: バンドルサイズの最適化
- [ ] **7.1** 未使用のimport文を削除
  - [ ] `app/philosophy/page.tsx` から未使用のimportを削除
  - [ ] 各セクションコンポーネントから未使用のimportを削除

- [ ] **7.2** エスケープされていない文字を修正
  - [ ] `"` を `&ldquo;` に変更
  - [ ] `"` を `&rdquo;` に変更

### フェーズ8: テストと検証
- [ ] **8.1** ビルドエラーの確認
  - [ ] `npm run build` を実行
  - [ ] エラーがないことを確認

- [ ] **8.2** ページ表示の確認
  - [ ] `npm run dev` を実行
  - [ ] `http://localhost:3000/philosophy` にアクセス
  - [ ] ページが正常に表示されることを確認

- [ ] **8.3** 機能の確認
  - [ ] ナビゲーションが正常に動作することを確認
  - [ ] カードのモーダル表示が正常に動作することを確認
  - [ ] アコーディオンが正常に動作することを確認
  - [ ] 続きを読む機能が正常に動作することを確認

- [ ] **8.4** パフォーマンスの確認
  - [ ] Lighthouse Performance Scoreを測定
  - [ ] 改善が確認できることを確認

### フェーズ9: ロールバック準備
- [ ] **9.1** バックアップファイルの確認
  - [ ] `page_old.tsx` が存在することを確認
  - [ ] 元のファイルが正常に動作することを確認

- [ ] **9.2** ロールバック手順の準備
  - [ ] 問題が発生した場合の復元手順を準備
  - [ ] 元のファイルに戻す手順を文書化

## 緊急時のロールバック手順
1. `app/philosophy/page.tsx` を `page_broken.tsx` にリネーム
2. `app/philosophy/page_old.tsx` を `page.tsx` にリネーム
3. 開発サーバーを再起動
4. ページが正常に表示されることを確認

## 成功基準
- [ ] Lighthouse Performance Score: 57 → 80+
- [ ] ページの構成、内容、デザイン、UIが元のまま維持されている
- [ ] すべての機能が正常に動作している
- [ ] ビルドエラーがない
- [ ] ページが正常に表示される
