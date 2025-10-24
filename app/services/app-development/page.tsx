import { Metadata } from 'next'
import { Section } from '../../../components/ui/Section'
import { HeroSection } from '../../../components/sections/HeroSection'
import { ServiceNavigation } from '../../../components/sections/ServiceNavigation'
import { CallToAction } from '../../../components/sections/CallToAction'
import { typography, colors } from '../../../lib/design-tokens'

export const metadata: Metadata = {
  title: 'アプリ開発 | ideal',
  description: 'iOS・Android・Webアプリの開発サービス。ネイティブアプリからクロスプラットフォームまで対応します。',
  openGraph: {
    title: 'アプリ開発 | ideal',
    description: 'iOS・Android・Webアプリの開発サービス。ネイティブアプリからクロスプラットフォームまで対応します。',
  },
}

// サービスナビゲーション用のリンク
const serviceNavLinks = [
  { id: 'web-development', name: 'Webサイト', href: '/services/web-development' },
  { id: 'ai-consulting', name: 'AI', href: '/services/ai-consulting' },
  { id: 'app-development', name: 'アプリ開発', href: '/services/app-development' },
  { id: 'metaverse', name: 'メタバース', href: '/services/metaverse' },
  { id: 'blockchain-development', name: 'ブロックチェーン', href: '/services/blockchain-development' },
]

export default function AppDevelopmentPage() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* セクション0: ヒーローセクション */}
      <div className="border-b border-blue-400">
        <HeroSection
          title="アプリ開発"
          subText="iOS・Android対応のアプリやスマホゲーム作成まで"
        />
      </div>

      {/* サービスナビゲーション */}
      <ServiceNavigation
        serviceLinks={serviceNavLinks}
        currentServiceId="app-development"
      />

      {/* サービス詳細 */}
      <Section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className={`${typography.h2} ${colors.text.primary} mb-6`}>
                ネイティブアプリ開発
              </h2>
              <p className={`${typography.body} ${colors.text.secondary} mb-6`}>
                iOS（Swift）・Android（Kotlin）のネイティブアプリを開発。
                各プラットフォームの特性を活かした最高のパフォーマンスを実現します。
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className={colors.text.secondary}>iOS（Swift/SwiftUI）</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className={colors.text.secondary}>Android（Kotlin/Jetpack Compose）</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className={colors.text.secondary}>App Store・Google Play対応</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <h3 className={`${typography.h3} ${colors.text.primary} mb-4`}>
                クロスプラットフォーム
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">React Native</h4>
                  <p className="text-sm text-gray-300">JavaScriptでiOS・Android両対応</p>
                </div>
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">Flutter</h4>
                  <p className="text-sm text-gray-300">Dartで高速なクロスプラットフォーム開発</p>
                </div>
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">PWA</h4>
                  <p className="text-sm text-gray-300">Web技術でアプリライクな体験</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 技術スタックセクション */}
      <Section className="py-16 lg:py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className={`${typography.h2} ${colors.text.primary} text-center mb-12`}>
            技術スタック
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className={`${typography.h3} ${colors.text.primary} mb-4`}>
                フロントエンド
              </h3>
              <ul className="space-y-2">
                <li className="text-gray-300">React Native</li>
                <li className="text-gray-300">Flutter</li>
                <li className="text-gray-300">Swift/SwiftUI</li>
                <li className="text-gray-300">Kotlin/Jetpack Compose</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className={`${typography.h3} ${colors.text.primary} mb-4`}>
                バックエンド
              </h3>
              <ul className="space-y-2">
                <li className="text-gray-300">Node.js</li>
                <li className="text-gray-300">Firebase</li>
                <li className="text-gray-300">AWS Amplify</li>
                <li className="text-gray-300">GraphQL</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className={`${typography.h3} ${colors.text.primary} mb-4`}>
                開発・運用
              </h3>
              <ul className="space-y-2">
                <li className="text-gray-300">Git/GitHub</li>
                <li className="text-gray-300">CI/CD</li>
                <li className="text-gray-300">App Store Connect</li>
                <li className="text-gray-300">Google Play Console</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* 開発プロセスセクション */}
      <Section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className={`${typography.h2} ${colors.text.primary} text-center mb-12`}>
            開発プロセス
          </h2>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-lg font-bold text-black">1</span>
              </div>
              <div>
                <h3 className={`${typography.h3} ${colors.text.primary} mb-2`}>
                  要件定義・設計
                </h3>
                <p className={colors.text.secondary}>
                  アプリの機能要件を整理し、UI/UXデザイン、アーキテクチャを設計します。
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-lg font-bold text-black">2</span>
              </div>
              <div>
                <h3 className={`${typography.h3} ${colors.text.primary} mb-2`}>
                  プロトタイプ開発
                </h3>
                <p className={colors.text.secondary}>
                  主要機能のプロトタイプを作成し、早期にフィードバックを得ます。
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-lg font-bold text-black">3</span>
              </div>
              <div>
                <h3 className={`${typography.h3} ${colors.text.primary} mb-2`}>
                  本格開発・テスト
                </h3>
                <p className={colors.text.secondary}>
                  フル機能のアプリを開発し、包括的なテストを実施します。
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-lg font-bold text-black">4</span>
              </div>
              <div>
                <h3 className={`${typography.h3} ${colors.text.primary} mb-2`}>
                  リリース・運用
                </h3>
                <p className={colors.text.secondary}>
                  ストアへの申請・公開、継続的なアップデートとサポートを提供します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CallToAction />
    </div>
  )
}
