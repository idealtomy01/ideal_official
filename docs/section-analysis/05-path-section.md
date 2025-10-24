# セクション5: ロードマップ（The Path）詳細分析

## 📋 基本情報
- **セクションID**: `#path`
- **行番号**: 832-858
- **タイトル**: "ロードマップ"
- **英語タイトル**: "5. The Path"

## 🎨 セクションタイトル構造
```tsx
<p className={`text-base md:text-lg font-semibold ${colors.accent.primary} mb-2`}>5. The Path</p>
<h2 className={`text-xl md:text-2xl md:text-4xl font-bold mb-8`}>
  ロードマップ
</h2>
```

## 📝 セクション内容の詳細構造

### 1. 思想の具現化：100年続くインフラへの道筋
**サブタイトル**:
```tsx
<h3 className="text-xl md:text-2xl font-semibold mb-6 border-l-4 border-blue-400 pl-4">思想の具現化：100年続くインフラへの道筋</h3>
```

**コンテンツ**:
- idealの行う活動は、技術の進化の先に起こることが予想される変化に対する、社会基盤構築するための長期的な研究開発計画
- 未来の誰もが使える「部品（プリミティブ）」を一つひとつ丹念に作り上げ、その有効性を徹底的に検証していくこと
- それが、ideal合同会社の「経営戦略」

### 2. ロードマップアコーディオン（青枠付き）
**コンテナ**:
```tsx
<div className="mt-12">
  <div className="border border-blue-400 rounded-lg p-4">
    <Accordion 
      items={roadmapItems}
      className="space-y-4"
    />
  </div>
</div>
```

## 🎨 スタイリング詳細

### セクション全体
```tsx
<section id="path" className="py-8 md:py-16 border-b border-gray-800">
```

### メインコンテナ
```tsx
<div className="space-y-8 text-base md:text-lg leading-relaxed">
```

### サブタイトル
```tsx
<h3 className="text-xl md:text-2xl font-semibold mb-6 border-l-4 border-blue-400 pl-4">思想の具現化：100年続くインフラへの道筋</h3>
```

### 青枠付きアコーディオンコンテナ
```tsx
<div className="mt-12">
  <div className="border border-blue-400 rounded-lg p-4">
    <Accordion 
      items={roadmapItems}
      className="space-y-4"
    />
  </div>
</div>
```

## 🔧 使用コンポーネント

### Accordion
- **items**: `roadmapItems`
- **className**: `"space-y-4"`

## 📊 データ構造

### roadmapItems
3つのフェーズのアコーディオンデータ：
- **フェーズ1**: 基礎研究とプロトタイプの構築
- **フェーズ2**: AI仮想社会を活用したシミュレーション
- **フェーズ3**: 社会実験と実装へ

各フェーズには以下が含まれる：
- id
- title（青い「フェーズX」テキスト付き）
- content（詳細な説明とリスト）

## 🎯 重要なポイント

1. **シンプルな構造**: 導入テキスト + 青枠付きアコーディオン
2. **青枠の特別なスタイリング**: `border border-blue-400 rounded-lg p-4`
3. **Accordionの使用**: ロードマップの3つのフェーズ
4. **特別なタイトル**: 青い「フェーズX」テキスト
5. **詳細なコンテンツ**: 各フェーズの詳細な説明とリスト

## ✅ 検証ポイント

1. セクションタイトルの正確な構造
2. 青枠付きアコーディオンコンテナの正確な再現
3. Accordionの正確な使用方法
4. スタイリングクラスの正確な適用
5. テキスト内容の完全な一致
