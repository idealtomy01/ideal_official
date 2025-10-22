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

  // スクロール時の背景変化
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ナビゲーションリンク
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
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
          </ul>
        </div>
      )}
    </header>
  )
}

