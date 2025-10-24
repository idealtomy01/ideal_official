# 詳細な再修正計画書

## 現状の問題点

### 1. セクション配置の誤り
- **問題**: 「公正さを支える6つの絶対条件」が基本設計セクション内に配置されている
- **正しい配置**: 基本設計セクション内の「公正さを支える6つの絶対条件」セクション内に配置

### 2. セクションタイトルのデザイン不統一
- **問題**: 「基本設計」セクションのタイトルが他のセクションと異なるデザイン
- **正しいデザイン**: 他のセクションと同じデザインパターンを使用

### 3. セクション構造の混乱
- **問題**: セクションコンポーネントの分割が元の構造と一致していない
- **正しい構造**: 元のファイルの完全な構造を維持

## 元のファイルの正確な構造

### セクション1: 問題と課題（The Conflict）
- **ID**: `#conflict`
- **タイトル**: "問題と課題"
- **内容**: 
  - 高すぎる「信用のコスト」
  - 構造的矛盾が誘発する「不誠実の連鎖」
  - 「正直者が報われない」構造の正体
  - そもそも「正当な評価」とは何か？
  - 日常に潜む「価値の目詰まり」の具体例（ThreeCardSection）

### セクション2: 歪められた価値の再定義（The Philosophy）
- **ID**: `#philosophy`
- **タイトル**: "歪められた価値の再定義"
- **内容**:
  - アコーディオン項目（philosophyItems）
  - 評価をごまかす優しさは、誰も救わない
  - ラディカルな正直さの物理法則

### セクション3: 基本設計（The Mechanism）
- **ID**: `#mechanism`
- **タイトル**: "基本設計"
- **内容**:
  - 設計思想の説明
  - **公正さを支える6つの絶対条件**（ThreeCardSection）
  - 各工程（Accordion）

### セクション4: 価値観で進化する組織構造（The Structure）
- **ID**: `#structure`
- **タイトル**: "価値観で進化する組織構造"
- **内容**:
  - 「価値観による分岐の自由」へ
  - フォーク：二つの進化のかたち
  - フォークが促す健全な進化のメカニズム

### セクション5: ロードマップ（The Path）
- **ID**: `#path`
- **タイトル**: "ロードマップ"
- **内容**:
  - 思想の具現化：100年続くインフラへの道筋
  - ロードマップアコーディオン（青枠付き）

### セクション6: 技術の進化がもたらす新しい『最適化』（The Declaration）
- **ID**: `#declaration`
- **タイトル**: "技術の進化がもたらす新しい『最適化』"
- **内容**:
  - 生き方の選択肢を増やしたい
  - 技術が可能にする『新しい最適化』

## 修正が必要な箇所

### 1. セクションタイトルのデザイン統一
**現在の問題**:
```tsx
<h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
  基本設計
</h2>
```

**正しいデザイン**:
```tsx
<p className={`text-base md:text-lg font-semibold ${colors.accent.primary} mb-2`}>3. The Mechanism</p>
<h2 className={`text-xl md:text-2xl md:text-4xl font-bold mb-8`}>
  基本設計
</h2>
```

### 2. 公正さを支える6つの絶対条件の配置修正
**現在の問題**: AbsoluteConditionsSectionとして独立したセクション
**正しい配置**: 基本設計セクション内の「公正さを支える6つの絶対条件」セクション内

### 3. セクション構造の修正
**現在の問題**: セクションが分割されすぎている
**正しい構造**: 元のファイルの完全な構造を維持

## 修正手順

### ステップ1: 元のファイルからの正確なテキスト内容復元

#### 1.1 元のファイルの完全な分析
```bash
# 元のファイルを取得
git show c06751d:app/philosophy/page.tsx > original_page.tsx

# 元のファイルの構造を詳細に分析
# - セクションの配置順序
# - 各セクションのタイトルと内容
# - スタイリングクラス
# - コンポーネントの使用方法
```

#### 1.2 テキスト内容の正確な抽出
**元のファイルから抽出すべき要素**:
- **セクションタイトル**: 各セクションの正確なタイトル
- **セクション番号**: 1. The Conflict, 2. The Philosophy, 3. The Mechanism など
- **テキスト内容**: すべての段落、リスト、引用文
- **スタイリング**: フォントサイズ、色、レイアウトクラス
- **コンポーネント**: ThreeCardSection, Accordion, ReadMore の使用方法
- **データ**: カードデータ、アコーディオンデータの正確な内容

#### 1.3 セクション別の詳細な内容マッピング
**セクション1: 問題と課題（The Conflict）**
```tsx
// 正確なタイトル構造
<p className={`text-base md:text-lg font-semibold ${colors.accent.primary} mb-2`}>1. The Conflict</p>
<h2 className={`text-xl md:text-2xl md:text-4xl font-bold mb-8`}>
  問題と課題
</h2>

// 正確な内容構造
- 高すぎる「信用のコスト」
- 構造的矛盾が誘発する「不誠実の連鎖」（複雑なグリッドレイアウト）
- 「正直者が報われない」構造の正体
- そもそも「正当な評価」とは何か？
- 日常に潜む「価値の目詰まり」の具体例（ThreeCardSection）
```

**セクション2: 歪められた価値の再定義（The Philosophy）**
```tsx
// 正確なタイトル構造
<p className={`text-base md:text-lg font-semibold ${colors.accent.primary} mb-2`}>2. The Philosophy</p>
<h2 className={`text-xl md:text-2xl md:text-4xl font-bold mb-8`}>
  歪められた価値の再定義
</h2>

// 正確な内容構造
- アコーディオン項目（philosophyItems）
- 評価をごまかす優しさは、誰も救わない
- ラディカルな正直さの物理法則
```

**セクション3: 基本設計（The Mechanism）**
```tsx
// 正確なタイトル構造
<p className={`text-base md:text-lg font-semibold ${colors.accent.primary} mb-2`}>3. The Mechanism</p>
<h2 className={`text-xl md:text-2xl md:text-4xl font-bold mb-8`}>
  基本設計
</h2>

// 正確な内容構造
- 設計思想の説明
- 公正さを支える6つの絶対条件（ThreeCardSection）
- 各工程（Accordion）
```

### ステップ2: セクションコンポーネントの修正

#### 2.1 ValueClogSection.tsx の完全な実装
```tsx
// 元のファイルから正確にコピー
- セクションタイトル（1. The Conflict）
- 問題と課題の完全な内容
- 高すぎる「信用のコスト」の複雑なレイアウト
- 構造的矛盾が誘発する「不誠実の連鎖」のグリッドレイアウト
- 「正直者が報われない」構造の正体
- そもそも「正当な評価」とは何か？
- 日常に潜む「価値の目詰まり」の具体例（ThreeCardSection）
```

#### 2.2 AbsoluteConditionsSection.tsx の修正
```tsx
// 基本設計セクション内の「公正さを支える6つの絶対条件」部分のみ
- セクションタイトル（公正さを支える6つの絶対条件）
- ThreeCardSection の使用
- 基本設計セクション内に配置
```

#### 2.3 PhilosophySection.tsx の完全な実装
```tsx
// 元のファイルから正確にコピー
- セクションタイトル（2. The Philosophy）
- 歪められた価値の再定義の完全な内容
- アコーディオン項目（philosophyItems）
- 評価をごまかす優しさは、誰も救わない
- ラディカルな正直さの物理法則
```

#### 2.4 RoadmapSection.tsx の完全な実装
```tsx
// 元のファイルから正確にコピー
- セクションタイトル（5. The Path）
- ロードマップの完全な内容
- 思想の具現化：100年続くインフラへの道筋
- ロードマップアコーディオン（青枠付き）
```

#### 2.5 DeclarationSection.tsx の完全な実装
```tsx
// 元のファイルから正確にコピー
- セクションタイトル（6. The Genesis）
- 技術の進化がもたらす新しい『最適化』の完全な内容
- 生き方の選択肢を増やしたい
- 技術が可能にする『新しい最適化』
```

### ステップ3: メインページファイルの修正

#### 3.1 セクションタイトルのデザイン統一
```tsx
// すべてのセクションタイトルを統一
<p className={`text-base md:text-lg font-semibold ${colors.accent.primary} mb-2`}>X. The Section</p>
<h2 className={`text-xl md:text-2xl md:text-4xl font-bold mb-8`}>
  セクションタイトル
</h2>
```

#### 3.2 セクション配置の修正
```tsx
// 正しいセクション配置順序
1. 問題と課題（The Conflict）
2. 歪められた価値の再定義（The Philosophy）
3. 基本設計（The Mechanism）
   - 公正さを支える6つの絶対条件（基本設計セクション内）
   - 各工程
4. 価値観で進化する組織構造（The Structure）
5. ロードマップ（The Path）
6. 技術の進化がもたらす新しい『最適化』（The Declaration）
```

#### 3.3 セクション構造の修正
```tsx
// 元のファイルの完全な構造を維持
- 各セクションの正確な内容
- コンポーネントの正確な使用方法
- スタイリングの正確な適用
```

### ステップ4: データファイルの修正

#### 4.1 各セクションのデータを正確に配置
```tsx
// 元のファイルから正確にコピー
- valueClogCards: 価値の目詰まり具体例のカードデータ
- absoluteConditionsCards: 公正さを支える6つの絶対条件のカードデータ
- philosophyItems: 哲学セクションのアコーディオンデータ
- processSteps: 各工程のアコーディオンデータ
- roadmapItems: ロードマップのアコーディオンデータ
```

#### 4.2 セクション間の関係を正しく維持
```tsx
// 元のファイルの完全な関係を維持
- セクション間の正確な順序
- コンポーネント間の正確な関係
- データ間の正確な関係
```

### ステップ5: テキスト内容の正確性検証

#### 5.1 一文字残らずの比較
```bash
# 元のファイルとの完全な比較
diff -u original_page.tsx corrected_page.tsx

# テキスト内容の正確性確認
grep -n "公正さを支える6つの絶対条件" original_page.tsx
grep -n "基本設計" original_page.tsx
grep -n "問題と課題" original_page.tsx
```

#### 5.2 セクション構造の正確性確認
```bash
# セクションタイトルの確認
grep -n "The Conflict" original_page.tsx
grep -n "The Philosophy" original_page.tsx
grep -n "The Mechanism" original_page.tsx
grep -n "The Structure" original_page.tsx
grep -n "The Path" original_page.tsx
grep -n "The Genesis" original_page.tsx
```

#### 5.3 コンポーネント使用の正確性確認
```bash
# ThreeCardSection の使用確認
grep -n "ThreeCardSection" original_page.tsx
grep -n "Accordion" original_page.tsx
grep -n "ReadMore" original_page.tsx
```

## 重要な注意事項

1. **一文字残らず元のファイルを把握**: 元のファイルの完全な構造を維持
2. **セクション配置の正確性**: 各セクションが正しい位置に配置される
3. **デザインの統一性**: すべてのセクションタイトルが同じデザインパターンを使用
4. **機能の完全性**: すべての機能（アコーディオン、モーダル、続きを読む等）が正しく動作
5. **パフォーマンスの維持**: パフォーマンス改善を維持しながら構造を修正

## 成功基準

- [ ] 元のファイルの完全な構造を維持
- [ ] セクション配置が正確
- [ ] セクションタイトルのデザインが統一
- [ ] すべての機能が正しく動作
- [ ] パフォーマンス改善を維持
- [ ] 一文字残らず元のファイルと一致
