/**
 * CallToAction セクション
 * 
 * 問い合わせへの誘導セクション
 * 目立つデザインでコンバージョンを促進
 */

import Link from 'next/link'
import { Button } from '../ui/Button'
import { Section } from '../ui/Section'
import { typography, colors } from '../../lib/design-tokens'

// デフォルトエクスポートに変更（dynamic import対応）
export default function CallToAction() {
  return (
    <Section backgroundColor="black">
      <div className="text-center max-w-4xl mx-auto">
        {/* 見出し */}
        <h2 className={`${typography.h2} ${colors.text.primary} mb-6`}>
          プロジェクトを始めませんか？
        </h2>

        {/* 説明文 */}
        <p className={`${typography.bodyLarge} ${colors.text.muted} mb-12`}>
          あなたのビジョンを、私たちの技術で実現します。
          <br className="hidden sm:block" />
          まずはお気軽にお問い合わせください。
        </p>

        {/* CTAボタン */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact">
            <Button variant="primary" size="lg">
              お問い合わせ
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="secondary" size="lg">
              サービス詳細を見る
            </Button>
          </Link>
        </div>

        {/* 装飾的な要素 */}
        <div className="mt-16 flex justify-center gap-8 text-gray-600">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">5</div>
            <div className="text-sm">事業分野</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">∞</div>
            <div className="text-sm">可能性</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
            <div className="text-sm">品質保証</div>
          </div>
        </div>
      </div>
    </Section>
  )
}

