/**
 * Section コンポーネント
 * 
 * セクションの共通レイアウトを提供
 * 余白（padding）とコンテナ幅を統一
 */

import { ReactNode } from 'react'
import { layout } from '../../lib/design-tokens'

type SectionSize = 'default' | 'small'
type ContainerSize = 'default' | 'narrow' | 'wide' | 'full'

interface SectionProps {
  children: ReactNode
  size?: SectionSize
  containerSize?: ContainerSize
  className?: string
  id?: string
  backgroundColor?: 'black' | 'gray-900' | 'transparent'
}

export function Section({
  children,
  size = 'default',
  containerSize = 'default',
  className = '',
  id,
  backgroundColor = 'transparent',
}: SectionProps) {
  // サイズ別のクラス
  const sizeClasses = {
    default: layout.section,
    small: layout.sectionSmall,
  }

  // コンテナサイズ別のクラス
  const containerClasses = {
    default: layout.container,
    narrow: layout.containerNarrow,
    wide: layout.containerWide,
    full: '',
  }

  // 背景色のクラス
  const bgClasses = {
    black: 'bg-black',
    'gray-900': 'bg-gray-900',
    transparent: 'bg-transparent',
  }

  return (
    <section
      id={id}
      className={`
        ${sizeClasses[size]}
        ${bgClasses[backgroundColor]}
        ${className}
      `}
    >
      <div className={containerClasses[containerSize]}>{children}</div>
    </section>
  )
}

