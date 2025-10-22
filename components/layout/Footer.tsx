/**
 * Footer コンポーネント
 * 
 * 全ページ共通のフッター
 * サーバーコンポーネント（静的な内容のみ）
 */

import Link from 'next/link'
import { layout, colors, borders } from '@/lib/design-tokens'

export function Footer() {
  const currentYear = new Date().getFullYear()

  // ナビゲーションリンク
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <footer
      className={`
        ${colors.bg.secondary}
        ${borders.borderTop}
        ${layout.footer}
      `}
    >
      <div className={layout.container}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* 会社情報 */}
          <div>
            <h3 className={`${colors.text.primary} text-xl font-bold mb-4`}>
              ideal
            </h3>
            <p className={`${colors.text.muted} text-sm leading-relaxed`}>
              高級感・宇宙・最先端をコンセプトに、
              <br />
              最高のデジタル体験を提供します。
            </p>
          </div>

          {/* ナビゲーションリンク */}
          <div>
            <h4 className={`${colors.text.primary} text-lg font-bold mb-4`}>
              サイトマップ
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`
                      ${colors.text.muted}
                      hover:${colors.text.primary}
                      text-sm
                      transition-colors duration-300
                      focus:outline-none focus:ring-2 focus:ring-blue-400
                    `}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SNS・その他（将来用） */}
          <div>
            <h4 className={`${colors.text.primary} text-lg font-bold mb-4`}>
              Follow Us
            </h4>
            <p className={`${colors.text.muted} text-sm`}>
              SNSリンクは今後追加予定
            </p>
          </div>
        </div>

        {/* 著作権表記 */}
        <div className={`mt-12 pt-8 ${borders.borderTop} text-center`}>
          <p className={`${colors.text.muted} text-sm`}>
            &copy; {currentYear} ideal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

