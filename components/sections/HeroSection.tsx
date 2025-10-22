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
    <section className={`py-24 lg:py-32 ${className}`}>
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className={`${typography.h1} ${colors.text.primary} mb-6`}>
          {title}
        </h1>
        <p className={`${typography.bodyLarge} ${colors.text.secondary} max-w-2xl mx-auto`}>
          {subText}
        </p>
      </div>
    </section>
  )
}

