'use client'

import { colors, typography, spacing } from '../../lib/design-tokens'
import { TabContainer } from '../ui/TabContainer'
import { TabData } from '../../types/service'

/**
 * TabSection コンポーネント
 * 単一責任: タブセクションの表示のみを管理
 */

export interface TabSectionProps {
  /** セクションのタイトル */
  title?: string
  /** セクションのサブタイトル */
  subtitle?: string
  /** セクションの説明文 */
  description?: string
  /** タブデータの配列 */
  tabs: TabData[]
  /** デフォルトで選択されるタブのID */
  defaultTab?: string
  /** 追加のCSSクラス */
  className?: string
  /** 背景色のバリアント */
  variant?: 'default' | 'dark' | 'accent'
  /** パディングのサイズ */
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  /** タブの配置 */
  tabAlignment?: 'left' | 'center' | 'right'
  /** タブのレイアウト */
  tabLayout?: 'auto' | 'compact' | 'wide'
}

export function TabSection({
  title,
  subtitle,
  description,
  tabs,
  defaultTab,
  className = '',
  variant = 'default',
  padding = 'lg',
  tabAlignment = 'center',
  tabLayout = 'auto'
}: TabSectionProps) {
  // バリアント別のスタイル
  const getVariantStyles = () => {
    return 'bg-black'
  }

  // パディングサイズ
  const getPaddingStyles = () => {
    switch (padding) {
      case 'sm':
        return 'py-8'
      case 'md':
        return 'py-12'
      case 'lg':
        return 'py-16'
      case 'xl':
        return 'py-20'
      default:
        return 'py-16'
    }
  }

  // タブ配置
  const getTabAlignmentStyles = () => {
    switch (tabAlignment) {
      case 'left':
        return 'justify-start'
      case 'right':
        return 'justify-end'
      default:
        return 'justify-center'
    }
  }

  // タブレイアウト
  const getTabLayoutStyles = () => {
    switch (tabLayout) {
      case 'compact':
        return 'flex-wrap lg:flex-nowrap' // 4つのタブ用：PCで1行、モバイルで折り返し
      case 'wide':
        return 'flex-nowrap' // 2つのタブ用：常に1行
      default:
        return 'flex-wrap lg:flex-nowrap' // 自動：タブ数に応じて調整
    }
  }

  return (
    <section className={`${getVariantStyles()} ${getPaddingStyles()} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ヘッダー部分 */}
        {(title || subtitle || description) && (
          <div className="mb-12 text-center">
            {subtitle && (
              <p className={`text-sm font-medium ${colors.accent.text} mb-2`}>
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {title}
              </h2>
            )}
            {description && (
              <p className={`text-lg ${colors.text.secondary} max-w-3xl mx-auto`}>
                {description}
              </p>
            )}
          </div>
        )}

        {/* タブコンテンツ */}
        <div className={getTabAlignmentStyles()}>
          <TabContainer
            tabs={tabs}
            defaultTab={defaultTab}
            className={`w-full ${getTabLayoutStyles()}`}
          />
        </div>
      </div>
    </section>
  )
}
