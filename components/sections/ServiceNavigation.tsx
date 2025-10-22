import Link from 'next/link'
import { colors, typography, transitions } from '../../lib/design-tokens'
import { ServiceNavigationProps } from '../../types/service'

/**
 * サービスナビゲーションコンポーネント
 * 単一責任: サービス間のナビゲーション表示のみを管理
 */
export function ServiceNavigation({ 
  serviceLinks, 
  currentServiceId,
  className = '' 
}: ServiceNavigationProps) {
  return (
    <section className={`py-8 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-2 sm:gap-4">
          {serviceLinks.map((link) => {
            const isActive = currentServiceId === link.id
            
            return (
              <Link
                key={link.id}
                href={link.href}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium
                  ${transitions.colors}
                  ${colors.state.focus}
                  focus:outline-none
                  ${isActive
                    ? `${colors.accent.bg} ${colors.text.primary}`
                    : `${colors.text.secondary} hover:${colors.text.primary} hover:bg-gray-800/50`
                  }
                `}
              >
                {link.name}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
