# セクション2: 歪められた価値の再定義（The Philosophy）詳細分析

## 📋 基本情報
- **セクションID**: `#philosophy`
- **行番号**: 626-716
- **タイトル**: "歪められた価値の再定義"
- **英語タイトル**: "2. The Philosophy"

## 🎨 セクションタイトル構造
```tsx
<p className={`text-base md:text-lg font-semibold ${colors.accent.primary} mb-2`}>2. The Philosophy</p>
<h2 className={`text-xl md:text-2xl md:text-4xl font-bold mb-8`}>
  歪められた価値の再定義
</h2>
```

## 📝 セクション内容の詳細構造

### 1. 導入部分
**コンテンツ**:
- なぜこのような矛盾が社会の当然として受け入れられているのか
- 現代の社会システムが内包する、二つの代表的な構造的問題

### 2. アコーディオン項目
**Accordion**:
```tsx
<Accordion 
  items={philosophyItems}
  className="mt-8"
/>
```

**philosophyItems**:
- 『能力』の強制的な社会保障化
- 評価システムを歪める『温情主義』

### 3. 評価をごまかす優しさは、誰も救わない
**サブタイトル**:
```tsx
<h3 className="text-xl md:text-2xl font-semibold mb-4 mt-6 border-l-4 border-blue-400 pl-4">
  評価をごまかす優しさは、誰も救わない。人が人を評価、判断しなくていい社会へ
</h3>
```

**コンテンツ**:
- 構造的な問題と新しい評価の形の必要性
- 「評価」と「救済」をシステムレベルで完全に分離
- 評価の絶対性と救済の透明性
- セーフティネット構想

### 4. ラディカルな正直さの物理法則
**サブタイトル**:
```tsx
<h3 className="text-xl md:text-2xl font-semibold mb-6 border-l-4 border-blue-400 pl-4">
  ラディカルな正直さの物理法則
</h3>
```

**コンテンツ**:
- 正直な感情や行動を抑制する社会の問題
- 秩序のために「正直さ」を制限することの問題
- あらゆる「正直さ」が結果と物理法則のように結びつく環境の設計
- 正直さの定義（倫理的でない、ありのままの行動）
- 活動履歴の記録と未来永続的な引き継ぎ
- メタシステムの判断の委譲
- ラディカルな正直さの許容と価値観ごとの厳格な結果責任の両立
- 個人の合理的な選択の根本的変化
- 正直さを隠すこととありのままの自分でいることの選択
- 個人と組織の最適解

## 🎨 スタイリング詳細

### セクション全体
```tsx
<section id="philosophy" className="py-8 md:py-16 border-b border-gray-800">
```

### メインコンテナ
```tsx
<div className="space-y-8 text-base md:text-lg leading-relaxed">
```

### サブセクション
```tsx
<div className="space-y-4">
```

### ラディカルな正直さの物理法則セクション
```tsx
<div className="mt-12">
  <div className="space-y-6 text-base md:text-lg leading-relaxed">
    {/* 詳細なテキスト構造 */}
  </div>
</div>
```

### 引用ブロック
```tsx
<blockquote className="border-l-4 border-blue-400 pl-6 py-2 my-8">
  <p className="text-xl font-bold text-blue-400 italic">
    秩序のために&ldquo;正直さ&rdquo;を制限することではなく
    <br />
    あらゆる&ldquo;正直さ&rdquo;が、その結果と物理法則のように結びつく環境を設計するべき。
  </p>
</blockquote>
```

### 重要なメッセージ
```tsx
<p className="mt-6 pt-6 border-t border-gray-700 font-bold text-blue-400 text-xl">
  個人の合理的な選択を、根本から変える。
</p>
```

### 強調テキスト
```tsx
<p className="font-bold text-gray-100">
  <strong>&ldquo;正直さを隠して現在の集団に留まる&rdquo;よりも、&ldquo;ありのままの自分でいられる最適な集団（DAO）を探し、移動する&rdquo;ことが合理的になる</strong>からです。
</p>
```

## 🔧 使用コンポーネント

### Accordion
- **items**: `philosophyItems`
- **className**: `"mt-8"`

## 📊 データ構造

### philosophyItems
- 『能力』の強制的な社会保障化
- 評価システムを歪める『温情主義』

各アコーディオン項目には以下が含まれる：
- id
- title
- content（詳細なテキスト構造）

## 🎯 重要なポイント

1. **アコーディオンの使用**: 哲学セクションの2つの主要な問題
2. **段階的な問題提示**: 導入 → アコーディオン → 評価の問題 → 正直さの物理法則
3. **詳細なテキスト構造**: 複数の段落、リスト、引用ブロック
4. **スタイリングの階層**: 複数のdivとクラスの組み合わせ
5. **重要なメッセージの強調**: 引用ブロックと強調テキスト

## ✅ 検証ポイント

1. セクションタイトルの正確な構造
2. アコーディオンの正確な使用方法
3. テキスト構造の正確な再現
4. スタイリングクラスの正確な適用
5. 引用ブロックと強調テキストの正確な配置
