# パフォーマンス改善計画書

## 現状分析
- Lighthouse Performance Score: 57
- 問題: 大きなJSXファイル（964行）、インライン データ、未最適化のコンポーネント

## 現在のページ構造詳細

### 1. メタデータ
- **タイトル**: '企業理念・ホワイトペーパー | ideal'
- **説明**: '新しい"価値基準"のインフラ設計図 - ideal Whitepaper。自由と秩序が両立した社会を設計する、正直であることが合理的な環境の設計へ。'

### 2. レイアウト構造
```tsx
<div className="min-h-screen bg-black text-gray-100">
  <Header />
  <SmoothScroll />
  
  {/* 固定ヘッダーナビゲーション */}
  <nav className="fixed top-16 left-0 right-0 z-40 bg-black/95 backdrop-blur-sm border-b border-gray-800">
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      <div className="flex space-x-6 md:space-x-8 py-4 text-sm md:text-base">
        <a href="#vision">0. Vision</a>
        <a href="#conflict">1. Conflict</a>
        <a href="#philosophy">2. Philosophy</a>
        <a href="#mechanism">3. Mechanism</a>
        <a href="#structure">4. Structure</a>
        <a href="#path">5. Path</a>
        <a href="#declaration">6. Declaration</a>
      </div>
    </div>
  </nav>

  <main className="pt-48 md:pt-40">
    {/* セクション群 */}
  </main>
</div>
```

### 3. セクション詳細

#### 3.1 Vision セクション
- **ID**: `#vision`
- **クラス**: `py-8 md:py-16 border-b border-gray-800`
- **内容**:
  - タイトル: `text-3xl md:text-4xl font-bold mb-8 text-center` - "IDEAL WHITEPAPER"
  - サブタイトル: `text-xl md:text-2xl text-center text-gray-300 mb-12` - "新しい"価値基準"のインフラ設計図"
  - 説明文: `text-lg text-gray-400 mb-8` - "自由と秩序が両立した社会を設計する、正直であることが合理的な環境の設計へ。"

#### 3.2 価値の目詰まりセクション (ValueClogSection)
- **ID**: `#conflict`
- **タイトル**: "日常に潜む「価値の目詰まり」の具体例"
- **レイアウト**: `ThreeCardSection` コンポーネント使用
- **カードデータ**: `valueClogCards` 配列（3つのカード）
  - 地域社会
  - 組織内
  - 企業間連携
- **機能**: モーダル表示、横スクロール（モバイル）
- **スタイル**: `bg-black`, `padding="md"`, `cardSize="md"`

#### 3.3 公正さを支える6つの絶対条件セクション (AbsoluteConditionsSection)
- **ID**: `#philosophy`
- **タイトル**: "公正さを支える6つの絶対条件"
- **レイアウト**: `ThreeCardSection` コンポーネント使用
- **カードデータ**: `absoluteConditionsCards` 配列（6つのカード）
  - 透明性と自動化
  - 広範囲の検知
  - 補正・調整システム
  - プライバシー保護
  - 分散化と非中央集権
  - 持続可能性
- **機能**: モーダル表示、横スクロール（モバイル）
- **スタイル**: `bg-transparent`, `padding="sm"`, `cardSize="sm"`

#### 3.4 哲学セクション (PhilosophySection)
- **ID**: `#philosophy`
- **内容**: 歪められた価値の再定義
- **機能**: アコーディオン、続きを読む機能
- **アコーディオン項目**:
  - 『能力』の強制的な社会保障化
  - 評価システムを歪める『温情主義』

#### 3.5 基本設計セクション
- **ID**: `#mechanism`
- **タイトル**: "基本設計"
- **レイアウト**: アコーディオン
- **データ**: `processSteps` 配列（3つのフェーズ）
  - フェーズ1：基礎研究とプロトタイプの構築
  - フェーズ2：パイロットプログラムの展開
  - フェーズ3：本格運用とスケーリング

#### 3.6 ロードマップセクション (RoadmapSection)
- **ID**: `#structure`
- **タイトル**: "実現への道筋"
- **レイアウト**: アコーディオン（青枠付き）
- **データ**: `roadmapItems` 配列

#### 3.7 宣言セクション (DeclarationSection)
- **ID**: `#declaration`
- **タイトル**: "技術の進化がもたらす新しい『最適化』"
- **内容**: 長文テキスト

### 4. コンポーネント詳細

#### 4.1 ThreeCardSection
- **機能**: 3カラムカード表示、モーダル表示、横スクロール
- **プロパティ**:
  - `cards`: カードデータ配列
  - `enableMobileScroll`: モバイル横スクロール有効
  - `padding`: "sm" | "md" | "lg"
  - `cardSize`: "sm" | "md" | "lg"
  - `className`: 追加CSSクラス

#### 4.2 Accordion
- **機能**: アコーディオン表示
- **プロパティ**:
  - `items`: AccordionItem配列
  - `className`: 追加CSSクラス
  - `defaultOpenId`: デフォルトで開く項目ID
  - `showIcon`: アイコン表示フラグ
  - `customIcon`: カスタムアイコン

#### 4.3 ReadMore
- **機能**: 続きを読む/閉じる機能
- **プロパティ**:
  - `previewText`: プレビューテキスト
  - `fullText`: 全文テキスト
  - `readMoreText`: "続きを読む"テキスト
  - `readLessText`: "閉じる"テキスト

### 5. データ構造詳細

#### 5.1 CardData インターフェース
```typescript
interface CardData {
  title: string
  description: string
  modalTitle: string
  modalContent: React.ReactNode
  modalSize: 'sm' | 'md' | 'lg'
}
```

#### 5.2 AccordionItem インターフェース
```typescript
interface AccordionItem {
  id: string
  title: React.ReactNode
  content: React.ReactNode
}
```

## 改善計画

### 1. データの外部化
**目的**: インライン データを外部ファイルに移動してバンドルサイズを削減

**対象ファイル**:
- `valueClogCards` → `data/philosophy/valueClogCards.tsx`
- `absoluteConditionsCards` → `data/philosophy/absoluteConditionsCards.tsx`
- `processSteps` → `data/philosophy/processSteps.tsx`
- `philosophyItems` → `data/philosophy/philosophyItems.tsx`
- `roadmapItems` → `data/philosophy/roadmapItems.tsx`

### 2. コンポーネント分割
**目的**: 大きなJSXファイルを小さなコンポーネントに分割

**新規コンポーネント**:
- `ValueClogSection.tsx` - 価値の目詰まりセクション
- `AbsoluteConditionsSection.tsx` - 公正さを支える6つの絶対条件セクション
- `PhilosophySection.tsx` - 歪められた価値の再定義セクション
- `RoadmapSection.tsx` - ロードマップセクション
- `DeclarationSection.tsx` - 技術の進化がもたらす新しい最適化セクション

### 3. 遅延読み込み
**目的**: 初期バンドルサイズを削減

**実装方法**:
- `next/dynamic`を使用してセクションコンポーネントを遅延読み込み
- ローディング状態のプレースホルダーを提供

### 4. メモ化
**目的**: 不要な再レンダリングを防止

**実装方法**:
- `React.memo`でセクションコンポーネントをラップ
- 依存関係の最適化

### 5. バンドルサイズ最適化
**目的**: 未使用のインポートを削除

**対象**:
- 未使用のimport文を削除
- エスケープされていない文字を修正

## 期待される効果
- Lighthouse Performance Score: 57 → 80+
- 初期バンドルサイズの削減
- レンダリング時間の短縮
- ユーザー体験の向上

## 注意事項
- ページの構成、内容、デザイン、UIは一切変更しない
- 既存の機能を維持する
- パフォーマンス改善のみに集中する