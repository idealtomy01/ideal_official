import { colors, typography } from '../../lib/design-tokens'
import { HeroSectionProps } from '../../types/service'

/**
 * ヒーローセクションコンポーネント
 * 単一責任: ヒーローセクションの表示のみを管理
 */
export function HeroSection({ 
  title, 
  subText, 
  className = '' 
}: HeroSectionProps) {
  return (
    <section className={`flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black py-24 lg:py-48 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
          {subText}
        </p>
      </div>
    </section>
  )
}

