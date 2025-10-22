/**
 * Hero セクション
 * 
 * トップページのファーストビュー
 * 大見出し、サブ見出し、CTAボタン
 */

import Link from 'next/link'
import { Button } from '../ui/Button'
import { typography, colors } from '../../lib/design-tokens'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* メイン見出し */}
        <h1
          className={`
            ${typography.h1}
            ${colors.text.primary}
            mb-6
            animate-fade-in
          `}
        >
          高級感・最先端の
          <br />
          デジタル体験を
        </h1>

        {/* サブ見出し */}
        <p
          className={`
            ${typography.bodyLarge}
            ${colors.text.muted}
            mb-12
            max-w-3xl mx-auto
          `}
        >
          Webサイト制作、アプリ開発、ゲーム制作、AIコンサル、ブロックチェーン開発まで。
          <br className="hidden sm:block" />
          ideal は、あなたのビジョンを現実にします。
        </p>

        {/* CTAボタン */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact">
            <Button variant="primary" size="lg">
              お問い合わせ
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" size="lg">
              サービス詳細
            </Button>
          </Link>
        </div>

        {/* スクロールインジケーター */}
        <div className="mt-20 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

