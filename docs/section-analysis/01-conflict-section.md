# セクション1: 問題と課題（The Conflict）詳細分析

## 📋 基本情報
- **セクションID**: `#conflict`
- **行番号**: 500-624
- **タイトル**: "問題と課題"
- **英語タイトル**: "1. The Conflict"

## 🎨 セクションタイトル構造
```tsx
<p className={`text-base md:text-lg font-semibold ${colors.accent.primary} mb-2`}>1. The Conflict</p>
<h2 className={`text-xl md:text-2xl md:text-4xl font-bold mb-8`}>
  問題と課題
</h2>
```

## 📝 セクション内容の詳細構造

### 1. 高すぎる「信用のコスト」
**サブタイトル**:
```tsx
<h3 className="text-xl md:text-2xl font-semibold mb-6 border-l-4 border-blue-400 pl-4">高すぎる「信用のコスト」</h3>
```

**複雑なグリッドレイアウト**:
- 構造的矛盾が誘発する「不誠実の連鎖」の可視化
- 3つのカード（貢献把握の限界、矢印、不正や怠惰の誘惑）
- 下向き矢印と信用コストの肥大化の表示

### 2. 「正直者が報われない」構造の正体
**サブタイトル**:
```tsx
<h4 className="text-lg md:text-xl font-bold text-gray-100 border-l-4 border-blue-400 pl-4 mt-4 mb-4">
  「正直者が報われない」構造の正体
</h4>
```

**コンテンツ**:
- 悪循環の核心の説明
- 組織と個人の利益最大化の結果
- 有能で誠実な人材の搾取問題

### 3. そもそも「正当な評価」とは何か？
**サブタイトル**:
```tsx
<h3 className="text-xl md:text-2xl font-semibold mb-4 border-l-4 border-blue-400 pl-4">
  そもそも「正当な評価」とは何か？
</h3>
```

**コンテンツ**:
- 現在のシステムの構造的欠陥
- 本質的価値創造 vs 短期的収益確保
- 社会の仕組みの歪み

### 4. 日常に潜む「価値の目詰まり」の具体例
**ThreeCardSection**:
```tsx
<ThreeCardSection
  title="日常に潜む「価値の目詰まり」の具体例"
  cards={valueClogCards}
  enableMobileScroll={true}
  padding="md"
  cardSize="md"
  className="bg-black"
/>
```

### 5. セクション終了部分
**コンテンツ**:
- システムそのものが不誠実さを誘発している状況
- 見えない貢献と正直者の問題
- 信用コストの支払い
- 経済活動での倫理観の構造的既定
- 不誠実な行動を非合理にする新しいインフラの設計

## 🎨 スタイリング詳細

### セクション全体
```tsx
<section id="conflict" className="py-8 md:py-16 border-b border-gray-800">
```

### 複雑なグリッドレイアウト
```tsx
<div className="mb-12 p-6 md:p-8 rounded-xl bg-gray-900 shadow-2xl border border-gray-700">
  <h4 className="text-center text-lg md:text-2xl font-bold text-blue-400 mb-8 tracking-wider">
    構造的矛盾が誘発する「不誠実の連鎖」
  </h4>
  
  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
    {/* 3つのカードと矢印の複雑なレイアウト */}
  </div>
</div>
```

### カードスタイリング
```tsx
<div className="col-span-1 md:col-span-2 p-4 md:p-6 border-2 border-gray-600 rounded-xl text-center bg-gray-800 h-full flex flex-col justify-center">
```

### 引用ブロック
```tsx
<blockquote className="border-l-4 border-blue-400 pl-6 py-2 my-8">
  <p className="text-xl font-bold text-blue-400 italic">
    経済活動での倫理観や信用は、構造的に既定されるべき
  </p>
</blockquote>
```

## 🔧 使用コンポーネント

### ThreeCardSection
- **title**: "日常に潜む「価値の目詰まり」の具体例"
- **cards**: `valueClogCards`
- **enableMobileScroll**: `true`
- **padding**: `"md"`
- **cardSize**: `"md"`
- **className**: `"bg-black"`

## 📊 データ構造

### valueClogCards
- 地域社会
- 組織内
- 企業間連携

各カードには以下が含まれる：
- title
- description
- modalTitle
- modalContent
- modalSize

## 🎯 重要なポイント

1. **複雑なグリッドレイアウト**: 3つのカードと矢印の視覚的表現
2. **段階的な問題提示**: 信用コスト → 構造の正体 → 正当な評価 → 具体例
3. **ThreeCardSectionの使用**: モーダル機能付きカード表示
4. **詳細なスタイリング**: 複数の色、サイズ、レイアウトクラス
5. **引用ブロック**: 重要なメッセージの強調

## ✅ 検証ポイント

1. セクションタイトルの正確な構造
2. 複雑なグリッドレイアウトの正確な再現
3. ThreeCardSectionの正確な使用方法
4. スタイリングクラスの正確な適用
5. テキスト内容の完全な一致
