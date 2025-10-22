import { Metadata } from 'next'
import { Section } from '../../../components/ui/Section'
import { CallToAction } from '../../../components/sections/CallToAction'
import { typography, colors } from '../../../lib/design-tokens'

export const metadata: Metadata = {
  title: 'Webサイト制作 | ideal',
  description: '高品質なWebサイト制作サービス。レスポンシブデザイン、SEO最適化、高速パフォーマンスを実現します。',
  openGraph: {
    title: 'Webサイト制作 | ideal',
    description: '高品質なWebサイト制作サービス。レスポンシブデザイン、SEO最適化、高速パフォーマンスを実現します。',
  },
}

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* ヒーローセクション */}
      <Section className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className={`${typography.h1} ${colors.text.primary} mb-6`}>
            Webサイト制作
          </h1>
          <p className={`${typography.bodyLarge} ${colors.text.secondary} mb-8`}>
            高品質なWebサイト制作で、あなたのビジネスをデジタル世界で成功に導きます。
          </p>
        </div>
      </Section>

      {/* サービス詳細 */}
      <Section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className={`${typography.h2} ${colors.text.primary} mb-6`}>
                レスポンシブデザイン
              </h2>
              <p className={`${typography.body} ${colors.text.secondary} mb-6`}>
                モバイル、タブレット、デスクトップすべてのデバイスで最適な表示を実現。
                ユーザーエクスペリエンスを重視した設計で、アクセス性と使いやすさを向上させます。
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className={colors.text.secondary}>モバイルファーストデザイン</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className={colors.text.secondary}>タッチフレンドリーなUI</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className={colors.text.secondary}>クロスブラウザ対応</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <h3 className={`${typography.h3} ${colors.text.primary} mb-4`}>
                技術スタック
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">フロントエンド</h4>
                  <p className="text-sm text-gray-300">React, Next.js, TypeScript, Tailwind CSS</p>
                </div>
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">バックエンド</h4>
                  <p className="text-sm text-gray-300">Node.js, Express, PostgreSQL, MongoDB</p>
                </div>
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">デプロイ</h4>
                  <p className="text-sm text-gray-300">Vercel, AWS, Docker</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SEO最適化セクション */}
      <Section className="py-16 lg:py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h3 className={`${typography.h3} ${colors.text.primary} mb-4`}>
                SEO最適化
              </h3>
              <p className={`${typography.body} ${colors.text.secondary} mb-6`}>
                検索エンジン最適化により、あなたのWebサイトをより多くの人に見つけてもらいます。
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className={colors.text.secondary}>メタデータ最適化</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className={colors.text.secondary}>構造化データ実装</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className={colors.text.secondary}>サイトマップ生成</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className={`${typography.h2} ${colors.text.primary} mb-6`}>
                パフォーマンス最適化
              </h2>
              <p className={`${typography.body} ${colors.text.secondary} mb-6`}>
                高速な読み込み速度とスムーズなユーザーエクスペリエンスを実現。
                Core Web Vitalsの指標を満たす最適化されたWebサイトを提供します。
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-400">90+</div>
                  <div className="text-sm text-gray-300">Lighthouse Score</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-400">&lt;3s</div>
                  <div className="text-sm text-gray-300">読み込み時間</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* プロセスセクション */}
      <Section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className={`${typography.h2} ${colors.text.primary} text-center mb-12`}>
            制作プロセス
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">1</span>
              </div>
              <h3 className={`${typography.h3} ${colors.text.primary} mb-3`}>
                ヒアリング・企画
              </h3>
              <p className={colors.text.secondary}>
                お客様のニーズを詳しくヒアリングし、最適なソリューションを企画します。
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">2</span>
              </div>
              <h3 className={`${typography.h3} ${colors.text.primary} mb-3`}>
                デザイン・開発
              </h3>
              <p className={colors.text.secondary}>
                モダンなデザインと最新技術を使用して、高品質なWebサイトを制作します。
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">3</span>
              </div>
              <h3 className={`${typography.h3} ${colors.text.primary} mb-3`}>
                テスト・公開
              </h3>
              <p className={colors.text.secondary}>
                徹底的なテストを行い、問題なく公開できる状態で納品します。
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CallToAction />
    </div>
  )
}
