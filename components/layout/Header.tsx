'use client'

/**
 * Header コンポーネント
 * 
 * 全ページ共通のナビゲーションヘッダー
 * スクロール時に背景が半透明＋ブラー効果
 * モバイル対応（ハンバーガーメニュー）
 */

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { layout, colors, transitions, zIndex } from '@/lib/design-tokens'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)

  // スクロール時の背景変化
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (isServicesDropdownOpen) {
        const target = event.target as HTMLElement
        if (!target.closest('[data-dropdown]')) {
          setIsServicesDropdownOpen(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('click', handleClickOutside)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isServicesDropdownOpen])

  // ナビゲーションリンク
  const navLinks = [
    { href: '/', label: 'トップ' },
    { href: '/philosophy', label: 'idealとは' },
    { href: '/contact', label: '問い合わせ' },
  ]

  // サービスドロップダウンメニュー
  const serviceLinks = [
    { href: '/services/web-development', label: 'Webサイト制作' },
    { href: '/services/app-development', label: 'アプリ開発' },
    { href: '/services/game-development', label: 'ゲーム制作' },
    { href: '/services/ai-consulting', label: 'AI' },
    { href: '/services/blockchain-development', label: 'ブロックチェーン開発' },
  ]

  return (
    <header
      className={`
        fixed top-0 w-full ${zIndex.fixed}
        ${layout.header}
        ${transitions.all}
        ${isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}
      `}
    >
      <nav
        className={`${layout.container} h-full flex items-center justify-between`}
        role="navigation"
        aria-label="メインナビゲーション"
      >
        {/* ロゴ */}
        <Link
          href="/"
          className={`
            text-2xl font-bold ${colors.text.primary}
            ${transitions.colors}
            hover:${colors.accent.primary}
          `}
        >
          ideal
        </Link>

        {/* デスクトップメニュー */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`
                  ${colors.text.secondary}
                  ${transitions.colors}
                  hover:${colors.text.primary}
                  ${colors.state.focus}
                  focus:outline-none
                  text-base lg:text-lg
                `}
              >
                {link.label}
              </Link>
            </li>
          ))}
          
          {/* Services ドロップダウン */}
          <li className="relative" data-dropdown>
            <button
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              className={`
                ${colors.text.secondary}
                ${transitions.colors}
                hover:${colors.text.primary}
                ${colors.state.focus}
                focus:outline-none
                text-base lg:text-lg
                flex items-center gap-1
              `}
            >
              Services
              <svg 
                className={`w-4 h-4 ${transitions.all} ${isServicesDropdownOpen ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isServicesDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50">
                <div className="py-2">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                      onClick={() => setIsServicesDropdownOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="border-t border-gray-700 my-2"></div>
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-sm text-blue-400 hover:bg-gray-800 transition-colors"
                    onClick={() => setIsServicesDropdownOpen(false)}
                  >
                    すべてのサービスを見る
                  </Link>
                </div>
              </div>
            )}
          </li>
        </ul>

        {/* モバイルメニューボタン */}
        <button
          type="button"
          className={`
            md:hidden
            ${colors.text.primary}
            ${colors.state.focus}
            focus:outline-none
            p-2
          `}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="メニューを開く"
          aria-expanded={isMobileMenuOpen}
        >
          {/* ハンバーガーアイコン */}
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              // ✕ アイコン
              <>
                <path d="M6 18L18 6M6 6l12 12" />
              </>
            ) : (
              // ≡ アイコン
              <>
                <path d="M4 6h16M4 12h16M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* モバイルメニュー */}
      {isMobileMenuOpen && (
        <div
          className={`
            md:hidden
            ${colors.bg.primary}
            border-t ${colors.luxury.border}
          `}
        >
          <ul className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`
                    block
                    ${colors.text.secondary}
                    ${transitions.colors}
                    hover:${colors.text.primary}
                    ${colors.state.focus}
                    focus:outline-none
                    text-lg
                    py-2
                  `}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            
            {/* モバイル用Servicesメニュー */}
            <li>
              <div className="text-gray-300 font-medium mb-2">Services</div>
              <ul className="ml-4 space-y-2">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`
                        block
                        ${colors.text.secondary}
                        ${transitions.colors}
                        hover:${colors.text.primary}
                        ${colors.state.focus}
                        focus:outline-none
                        text-base
                        py-1
                      `}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/services"
                    className={`
                      block
                      text-blue-400
                      ${transitions.colors}
                      hover:text-blue-300
                      ${colors.state.focus}
                      focus:outline-none
                      text-base
                      py-1
                    `}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    すべてのサービスを見る
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

