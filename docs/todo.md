# TODO - 最小限のWebサイト構築手順

このドキュメントは、`PAGE_STRUCTURE.md` に基づいた実装手順を定義します。
MVP（最小限の実用可能な製品）として、まずコアとなる3ページを構築し、段階的に拡張します。

---

## 📋 フェーズ1: 基盤構築（コア機能）

### 🎯 目標
- 基本的なレイアウトとナビゲーションを完成させる
- トップページ、サービスページ、問い合わせページの3ページを公開可能な状態にする

---

## ✅ ステップ1: 共通コンポーネントの作成

### 1-1. デザイントークンの定義
- [ ] ファイル作成: `app/lib/design-tokens.ts`
- [ ] 内容: spacing, colors, typography などの定数を定義
- [ ] 参照: `docs/design.md` のカラーパレット

### 1-2. Header コンポーネント
- [ ] ファイル作成: `app/components/layout/Header.tsx`
- [ ] 機能:
  - ロゴ（左側）
  - ナビゲーションメニュー（右側）: Home, Services, Contact
  - スクロール時の背景変化（`bg-black/80 backdrop-blur-md`）
  - モバイル対応（ハンバーガーメニュー）
- [ ] スタイル: `docs/design.md` § 8 ナビゲーションガイドに準拠
- [ ] 確認事項:
  - レスポンシブ対応（sm, md, lg）
  - キーボードナビゲーション可能
  - アクセシビリティ（aria-label, role="navigation"）

### 1-3. Footer コンポーネント
- [ ] ファイル作成: `app/components/layout/Footer.tsx`
- [ ] 内容:
  - 会社名、著作権表記
  - SNS リンク（将来用）
  - ナビゲーションリンク
- [ ] スタイル: `docs/design.md` § 8 フッターガイドに準拠
- [ ] 確認事項:
  - `border-t border-gray-800` で区切り
  - 余白 `py-12 lg:py-16`

### 1-4. Layout の更新
- [ ] ファイル更新: `app/layout.tsx`
- [ ] 実装:
  - `next/font` で Noto Sans JP を読み込み
  - メタデータ（title, description, openGraph）を設定
  - Header, Footer を配置
  - `<main>` タグで子コンポーネントを囲む
- [ ] 確認事項:
  - セマンティック HTML（header, main, footer）
  - 背景色 `bg-black` または `bg-gradient-to-b from-black to-gray-900`

---

## ✅ ステップ2: 再利用可能な UI コンポーネント

### 2-1. Button コンポーネント
- [ ] ファイル作成: `app/components/ui/Button.tsx`
- [ ] 機能:
  - variant（primary, secondary, outline）
  - size（sm, md, lg）
  - disabled 状態
- [ ] スタイル: `docs/design.md` § 7 ボタンガイドに準拠
- [ ] 確認事項:
  - ホバーエフェクト（`hover:scale-105`）
  - フォーカス表示（`focus:ring-2`）
  - トランジション（`transition-all duration-300`）

### 2-2. Card コンポーネント
- [ ] ファイル作成: `app/components/ui/Card.tsx`
- [ ] 機能:
  - タイトル、説明文、画像（オプション）を表示
  - ホバーエフェクト
- [ ] スタイル: `docs/design.md` § 7 カードガイドに準拠
- [ ] 確認事項:
  - `hover:shadow-2xl hover:-translate-y-2`
  - `border border-gray-700`

### 2-3. Section コンポーネント
- [ ] ファイル作成: `app/components/ui/Section.tsx`
- [ ] 機能:
  - セクションの共通レイアウト（余白、コンテナ幅）
- [ ] スタイル:
  - `py-24 lg:py-32`（セクション間の余白）
  - `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`（コンテナ）

---

## ✅ ステップ3: トップページ (`/`)

### 3-1. Hero セクション
- [ ] ファイル作成: `app/components/sections/Hero.tsx`
- [ ] 内容:
  - 大見出し（h1）: 会社名またはキャッチコピー
  - サブ見出し（p）: 簡潔な説明
  - CTA ボタン: 「お問い合わせ」「サービス詳細」
- [ ] スタイル:
  - `min-h-screen flex items-center justify-center`
  - `text-4xl lg:text-6xl font-bold`（h1）
  - `text-base lg:text-lg text-gray-300`（p）
- [ ] 確認事項:
  - 背景グラデーション
  - アニメーション（フェードイン）

### 3-2. Services Overview セクション
- [ ] ファイル作成: `app/components/sections/ServicesOverview.tsx`
- [ ] 内容:
  - 5つのサービスを Card コンポーネントで表示
  - 各カードは `/services` へのリンク
- [ ] スタイル:
  - グリッドレイアウト（`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`）
  - カード間のgap（`gap-8`）

### 3-3. CTA セクション
- [ ] ファイル作成: `app/components/sections/CallToAction.tsx`
- [ ] 内容:
  - 「お問い合わせはこちら」などのメッセージ
  - Button コンポーネントで `/contact` へのリンク
- [ ] スタイル:
  - 中央配置（`text-center`）
  - 目立つ背景（`bg-gray-900` または `bg-gradient-to-r`）

### 3-4. トップページの組み立て
- [ ] ファイル更新: `app/page.tsx`
- [ ] 実装:
  - Hero, ServicesOverview, CallToAction を配置
  - メタデータ（`export const metadata`）を設定
- [ ] 確認事項:
  - サーバーコンポーネントとして実装（`'use client'` 不要）
  - Lighthouse スコア確認

---

## ✅ ステップ4: サービスページ (`/services`)

### 4-1. ページ構造の作成
- [ ] ディレクトリ作成: `app/services/`
- [ ] ファイル作成: `app/services/page.tsx`
- [ ] メタデータ設定:
  - title: "サービス | ideal"
  - description: "5つの事業分野をご紹介"

### 4-2. サービス詳細セクション
- [ ] ファイル作成: `app/components/sections/ServiceDetail.tsx`
- [ ] 内容:
  - 5つのサービスそれぞれの詳細説明
  - アイコンまたは画像
  - 各サービスの特徴（箇条書き）
- [ ] スタイル:
  - セクションごとに背景色を交互に変える（`bg-black` / `bg-gray-900`）
  - 左右交互レイアウト（画像・テキスト）

### 4-3. サービスページの組み立て
- [ ] ファイル更新: `app/services/page.tsx`
- [ ] 実装:
  - ページタイトル（h1）
  - ServiceDetail コンポーネントを5回繰り返し
  - 最後に CTA セクション（問い合わせへの誘導）
- [ ] 確認事項:
  - 見出し階層（h1 → h2 → h3）が正しい
  - レスポンシブ対応

---

## ✅ ステップ5: 問い合わせページ (`/contact`)

### 5-1. フォームコンポーネント（クライアント）
- [ ] ファイル作成: `app/components/forms/ContactForm.tsx`
- [ ] 冒頭に `'use client'` を明記（理由: useState, フォーム送信処理）
- [ ] 実装:
  - react-hook-form + zod でバリデーション
  - フィールド: 名前、メールアドレス、会社名、メッセージ
  - 送信ボタン（disabled 状態の制御）
- [ ] スタイル: `docs/design.md` § 8 フォームガイドに準拠
- [ ] 確認事項:
  - エラーメッセージの表示
  - 送信成功/失敗のフィードバック
  - アクセシビリティ（label, aria-describedby）

### 5-2. パッケージのインストール（要承認）
```bash
npm install react-hook-form zod @hookform/resolvers
```
- [ ] 承認を得てからインストール
- [ ] バージョン互換性確認
- [ ] `package.json` の更新を確認

### 5-3. 問い合わせページの組み立て
- [ ] ディレクトリ作成: `app/contact/`
- [ ] ファイル作成: `app/contact/page.tsx`
- [ ] 実装:
  - ページタイトル（h1）
  - 説明文（p）
  - ContactForm コンポーネントを配置
- [ ] メタデータ設定:
  - title: "お問い合わせ | ideal"
  - description: "お気軽にお問い合わせください"
- [ ] 確認事項:
  - サーバーコンポーネント（page.tsx）+ クライアントコンポーネント（ContactForm）の分離
  - フォーム送信テスト

---

## ✅ ステップ6: 品質チェック（フェーズ1完了前）

### 6-1. 全ページの動作確認
- [ ] `/` トップページ: レイアウト、リンク、レスポンシブ
- [ ] `/services` サービスページ: 内容、レスポンシブ
- [ ] `/contact` 問い合わせページ: フォーム送信、バリデーション

### 6-2. パフォーマンス計測
- [ ] Lighthouse スコア（全ページ）
  - Performance: 90以上
  - Accessibility: 90以上
  - Best Practices: 90以上
  - SEO: 90以上
- [ ] 改善が必要な場合は優先的に対応

### 6-3. アクセシビリティチェック
- [ ] キーボード操作（Tab, Enter, Space, Esc）
- [ ] スクリーンリーダー（NVDA, VoiceOver）
- [ ] 色のコントラスト（WCAG AA 基準）

### 6-4. レスポンシブデザイン確認
- [ ] モバイル（375px, 414px）
- [ ] タブレット（768px, 1024px）
- [ ] デスクトップ（1280px, 1920px）

### 6-5. ブラウザ互換性確認
- [ ] Chrome（最新版）
- [ ] Safari（最新版）
- [ ] Firefox（最新版）
- [ ] Edge（最新版）

---

## 📋 フェーズ2: コンテンツ拡充（オプション）

フェーズ1が完了し、3ページが公開可能になったら、以下を追加します。

### ステップ7: 企業理念ページ (`/philosophy`)
- [ ] ディレクトリ作成: `app/philosophy/`
- [ ] ファイル作成: `app/philosophy/page.tsx`
- [ ] 内容: ホワイトペーパーの内容を掲載
- [ ] スタイル: 読みやすい文章レイアウト（`max-w-4xl`, `leading-relaxed`）

### ステップ8: 会社情報ページ (`/company`)
- [ ] ディレクトリ作成: `app/company/`
- [ ] ファイル作成: `app/company/page.tsx`
- [ ] 内容: 会社概要、住所、代表者挨拶、沿革
- [ ] スタイル: シンプルな情報レイアウト

### ステップ9: ナビゲーションの更新
- [ ] Header コンポーネントにリンク追加: Philosophy, Company
- [ ] Footer コンポーネントにリンク追加

---

## 📋 フェーズ3: 高度な機能（将来）

### ステップ10: アニメーション強化
- [ ] パッケージ: `framer-motion`
- [ ] スクロールアニメーション（フェードイン、スライドイン）
- [ ] ページ遷移アニメーション

### ステップ11: microCMS 連携
- [ ] 事例紹介ページ（CMS から取得）
- [ ] ブログページ（CMS から取得）

---

## 🎯 開発原則（常に意識する）

1. **単一責任の原則**: 1つのコンポーネントは1つの責任のみ
2. **サーバーコンポーネント優先**: `'use client'` は本当に必要な時だけ
3. **型安全性**: すべてに型定義、`any` 禁止
4. **DRY原則**: 同じコードは2回書かない
5. **アクセシビリティ**: すべてのインタラクティブ要素にキーボードアクセス
6. **パフォーマンス**: Lighthouse 90以上を目標
7. **デザイン遵守**: `docs/design.md` のガイドラインに従う

---

## 📝 作業時の注意事項

- **1つずつ完了させる**: 複数のコンポーネントを同時に作らない
- **動作確認**: コンポーネント作成後、必ず `npm run dev` で確認
- **コミット**: 各ステップ完了後、意味のある単位でコミット
- **ドキュメント参照**: 迷ったら `docs/concept.md`, `docs/design.md`, `docs/AI_POLICY.md` を確認

---

## ✅ 進捗管理

各タスク完了時に `[ ]` を `[x]` に変更してください。

**現在のフェーズ:** フェーズ1（基盤構築）  
**開始日:** YYYY-MM-DD  
**目標完了日:** YYYY-MM-DD

