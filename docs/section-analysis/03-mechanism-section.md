# セクション3: 基本設計（The Mechanism）詳細分析

## 📋 基本情報
- **セクションID**: `#mechanism`
- **行番号**: 718-760
- **タイトル**: "基本設計"
- **英語タイトル**: "3. The Mechanism"

## 🎨 セクションタイトル構造
```tsx
<p className={`text-base md:text-lg font-semibold ${colors.accent.primary} mb-2`}>3. The Mechanism</p>
<h2 className={`text-xl md:text-2xl md:text-4xl font-bold mb-8`}>
  基本設計
</h2>
```

## 📝 セクション内容の詳細構造

### 1. 設計思想の説明
**コンテナ**:
```tsx
<div className="space-y-6 text-base md:text-lg leading-relaxed mb-12">
```

**コンテンツ**:
- 設計思想の中心は「貢献度測定（Proof of Contribution）」に集約
- 本質的価値の測定と評価基準の明確化
- 人間による評価の限界とバイアス
- AIとブロックチェーンが永続的に連携する「貢献度測定ツール」

### 2. 公正さを支える6つの絶対条件
**コンテナ**:
```tsx
<div className="p-2 md:p-8 rounded-xl bg-gray-900 shadow-2xl border border-gray-700">
```

**サブタイトル**:
```tsx
<h3 className="text-xl md:text-2xl font-semibold mb-6 border-l-4 border-blue-400 pl-4">
  公正さを支える6つの絶対条件
</h3>
```

**説明テキスト**:
```tsx
<p className="mb-8">
  この基盤は、以下の揺るぎない絶対条件（設計原則）の上に構築されます。一つでも欠ければ、このシステムは旧来の評価ツールと同じ運命を辿るでしょう。
</p>
```

**ThreeCardSection**:
```tsx
<ThreeCardSection
  cards={absoluteConditionsCards}
  enableMobileScroll={true}
  padding="sm"
  cardSize="sm"
  className="bg-transparent"
/>
```

### 3. 各工程
**サブタイトル**:
```tsx
<h3 className="text-xl md:text-2xl font-semibold mb-6 border-l-4 border-blue-400 pl-4 mt-8 md:mt-12">各工程</h3>
```

**Accordion**:
```tsx
<Accordion 
  items={processSteps}
  className="mt-8"
/>
```

## 🎨 スタイリング詳細

### セクション全体
```tsx
<section id="mechanism" className="py-8 md:py-16 border-b border-gray-800">
```

### 設計思想の説明
```tsx
<div className="space-y-6 text-base md:text-lg leading-relaxed mb-12">
```

### 公正さを支える6つの絶対条件のコンテナ
```tsx
<div className="p-2 md:p-8 rounded-xl bg-gray-900 shadow-2xl border border-gray-700">
```

### 各工程のサブタイトル
```tsx
<h3 className="text-xl md:text-2xl font-semibold mb-6 border-l-4 border-blue-400 pl-4 mt-8 md:mt-12">各工程</h3>
```

## 🔧 使用コンポーネント

### ThreeCardSection
- **cards**: `absoluteConditionsCards`
- **enableMobileScroll**: `true`
- **padding**: `"sm"`
- **cardSize**: `"sm"`
- **className**: `"bg-transparent"`

### Accordion
- **items**: `processSteps`
- **className**: `"mt-8"`

## 📊 データ構造

### absoluteConditionsCards
6つの絶対条件のカードデータ：
- 透明性と自動化
- 広範囲の検知
- 補正・調整システム
- 中長期的影響の反映
- 進化する価値基準
- 透明性の秘匿性

### processSteps
6つの工程のアコーディオンデータ：
- AIによる貢献の『観測』
- ブロックチェーンによる『記録に基づく計算』と記録の保全
- スマートコントラクトによるインセンティブの『自動執行』
- 時間と範囲を超えた『影響の追跡』と『永続的フィードバック』
- 価値基準の『自己進化』
- プライバシーと透明性の『両立』

## 🎯 重要なポイント

1. **段階的な構造**: 設計思想 → 絶対条件 → 各工程
2. **ThreeCardSectionの使用**: 公正さを支える6つの絶対条件の表示
3. **Accordionの使用**: 各工程の詳細表示
4. **特別なコンテナ**: 絶対条件セクションの特別なスタイリング
5. **データの分離**: カードデータとアコーディオンデータの分離

## ✅ 検証ポイント

1. セクションタイトルの正確な構造
2. 設計思想の説明の正確な配置
3. 公正さを支える6つの絶対条件の特別なコンテナ
4. ThreeCardSectionの正確な使用方法
5. 各工程のAccordionの正確な使用方法
6. スタイリングクラスの正確な適用
