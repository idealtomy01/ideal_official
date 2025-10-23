'use client'

import { colors } from '../../lib/design-tokens'
import Image from 'next/image'
import { ModalTrigger } from '../ui/ModalTrigger'

/**
 * ThreeCardSection コンポーネント
 * 単一責任: 3カラムカードレイアウトのセクション表示のみを管理
 */

export interface CardData {
  /** カードのタイトル */
  title: string
  /** カードの説明文 */
  description: string
  /** カードのアイコン（オプション） */
  icon?: string
  /** カードの画像URL（オプション） */
  image?: string
  /** カードのタグ（オプション） */
  tags?: string[]
  /** カードのリンクURL（オプション） */
  href?: string
  /** カードのクリックイベント（オプション） */
  onClick?: () => void
  /** モーダルのタイトル（オプション） */
  modalTitle?: string
  /** モーダルのコンテンツ（オプション） */
  modalContent?: React.ReactNode
  /** モーダルのサイズ（オプション） */
  modalSize?: 'sm' | 'md' | 'lg' | 'xl'
}

export interface ThreeCardSectionProps {
  /** セクションのタイトル */
  title?: string
  /** セクションのサブタイトル */
  subtitle?: string
  /** セクションの説明文 */
  description?: string
  /** カードデータの配列 */
  cards: CardData[]
  /** 追加のCSSクラス */
  className?: string
  /** 背景色のバリアント */
  variant?: 'default' | 'dark' | 'accent'
  /** パディングのサイズ */
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  /** カードの配置 */
  cardAlignment?: 'left' | 'center' | 'right'
  /** カードのサイズ */
  cardSize?: 'sm' | 'md' | 'lg'
}

export function ThreeCardSection({
  title,
  subtitle,
  description,
  cards,
  className = '',
  variant = 'default', // eslint-disable-line @typescript-eslint/no-unused-vars
  padding = 'lg',
  cardAlignment = 'center',
  cardSize = 'md'
}: ThreeCardSectionProps) {
  // variant パラメータは将来の拡張性のために保持
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

  // カード配置
  const getCardAlignmentStyles = () => {
    switch (cardAlignment) {
      case 'left':
        return 'justify-start'
      case 'right':
        return 'justify-end'
      default:
        return 'justify-center'
    }
  }

  // カードサイズ
  const getCardSizeStyles = () => {
    switch (cardSize) {
      case 'sm':
        return 'p-4'
      case 'lg':
        return 'p-8'
      default:
        return 'p-6'
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

        {/* 3カラムカードグリッド */}
        <div className={`
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8
          ${getCardAlignmentStyles()}
        `}>
          {cards.map((card, index) => {
            // モーダル機能がある場合のカード
            if (card.modalTitle && card.modalContent) {
              return (
                <ModalTrigger
                  key={index}
                  title={card.modalTitle}
                  size={card.modalSize || 'lg'}
                  modalContent={card.modalContent}
                >
                  <div className={`
                    ${colors.bg.secondary} ${colors.border.default} border rounded-lg
                    ${getCardSizeStyles()}
                    ${colors.state.hover} ${colors.state.focus}
                    focus:outline-none cursor-pointer
                    transition-all duration-300
                    hover:scale-105 hover:shadow-lg
                    h-full flex flex-col
                  `}>
                    {/* アイコンまたは画像 */}
                    {(card.icon || card.image) && (
                      <div className="mb-4 text-center">
                        {card.image ? (
                          <Image
                            src={card.image}
                            alt={card.title}
                            width={64}
                            height={64}
                            className="w-16 h-16 mx-auto rounded-full object-cover"
                          />
                        ) : (
                          <div className="text-4xl mb-2">{card.icon}</div>
                        )}
                      </div>
                    )}

                    {/* タイトル */}
                    <h3 className={`text-xl font-semibold ${colors.text.primary} mb-3`}>
                      {card.title}
                    </h3>

                    {/* 説明文 */}
                    <p className={`${colors.text.secondary} mb-4 flex-grow`}>
                      {card.description}
                    </p>

                    {/* タグ */}
                    {card.tags && card.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {card.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={`
                              px-2 py-1 text-xs font-medium rounded-full
                              ${colors.accent.bg} ${colors.text.primary}
                            `}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* リンク */}
                    {card.href && (
                      <div className="text-center mt-auto">
                        <a
                          href={card.href}
                          className={`
                            inline-flex items-center text-sm font-medium
                            ${colors.accent.text} hover:${colors.text.primary}
                            transition-colors duration-200
                          `}
                          onClick={(e) => e.stopPropagation()}
                        >
                          詳細を見る
                          <svg
                            className="ml-1 w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </ModalTrigger>
              )
            }

            // 通常のカード（モーダル機能なし）
            return (
              <div
                key={index}
                className={`
                  ${colors.bg.secondary} ${colors.border.default} border rounded-lg
                  ${getCardSizeStyles()}
                  ${colors.state.hover} ${colors.state.focus}
                  focus:outline-none cursor-pointer
                  transition-all duration-300
                  hover:scale-105 hover:shadow-lg
                  h-full flex flex-col
                `}
                onClick={card.onClick}
              >
                {/* アイコンまたは画像 */}
                {(card.icon || card.image) && (
                  <div className="mb-4 text-center">
                    {card.image ? (
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={64}
                        height={64}
                        className="w-16 h-16 mx-auto rounded-full object-cover"
                      />
                    ) : (
                      <div className="text-4xl mb-2">{card.icon}</div>
                    )}
                  </div>
                )}

                {/* タイトル */}
                <h3 className={`text-xl font-semibold ${colors.text.primary} mb-3`}>
                  {card.title}
                </h3>

                {/* 説明文 */}
                <p className={`${colors.text.secondary} mb-4 flex-grow`}>
                  {card.description}
                </p>

                {/* タグ */}
                {card.tags && card.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {card.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`
                          px-2 py-1 text-xs font-medium rounded-full
                          ${colors.accent.bg} ${colors.text.primary}
                        `}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* リンク */}
                {card.href && (
                  <div className="text-center mt-auto">
                    <a
                      href={card.href}
                      className={`
                        inline-flex items-center text-sm font-medium
                        ${colors.accent.text} hover:${colors.text.primary}
                        transition-colors duration-200
                      `}
                      onClick={(e) => e.stopPropagation()}
                    >
                      詳細を見る
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
