import { Metadata } from 'next'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { HeroSection } from '../../../components/sections/HeroSection'
import { ServiceNavigation } from '../../../components/sections/ServiceNavigation'
import { SingleColumnSection } from '../../../components/sections/SingleColumnSection'
import { TwoColumnSection } from '../../../components/sections/TwoColumnSection'

// 重いコンポーネントを動的インポート（レンダリングブロック解消）
const ThreeCardSection = dynamic(() => import('../../../components/sections/ThreeCardSection').then(mod => ({ default: mod.ThreeCardSection })), {
  loading: () => <div className="animate-pulse bg-gray-800 rounded-lg h-64" />
})

const TabSection = dynamic(() => import('../../../components/sections/TabSection').then(mod => ({ default: mod.TabSection })), {
  loading: () => <div className="animate-pulse bg-gray-800 rounded-lg h-64" />
})

const FAQSection = dynamic(() => import('../../../components/sections/FAQSection').then(mod => ({ default: mod.FAQSection })), {
  loading: () => <div className="animate-pulse bg-gray-800 rounded-lg h-64" />
})

const RelatedServicesSection = dynamic(() => import('../../../components/sections/RelatedServicesSection').then(mod => ({ default: mod.RelatedServicesSection })), {
  loading: () => <div className="animate-pulse bg-gray-800 rounded-lg h-64" />
})

import { webDevelopmentData } from '../../../data/services/web-development'
import { serviceLinks } from '../../../data/services/service-links'

export const metadata: Metadata = {
  title: 'Web開発 | ideal',
  description: '高品質なWeb開発サービス。レスポンシブデザイン、SEO最適化、高速パフォーマンスを実現します。',
  openGraph: {
    title: 'Web開発 | ideal',
    description: '高品質なWeb開発サービス。レスポンシブデザイン、SEO最適化、高速パフォーマンスを実現します。',
  },
}

// サービスナビゲーション用のリンク
const serviceNavLinks = [
  { id: 'ai-consulting', name: 'AI', href: '/services/ai-consulting' },
  { id: 'web-development', name: 'Web開発', href: '/services/web-development' },
  { id: 'app-development', name: 'アプリ開発', href: '/services/app-development' },
  { id: 'blockchain-development', name: 'ブロックチェーン', href: '/services/blockchain-development' },
  { id: 'metaverse', name: 'メタバース', href: '/services/metaverse' },
  { id: 'dao-design', name: 'DAO設計', href: '/services/dao-design' },
]

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* セクション0: ヒーローセクション */}
      <div className="border-b border-blue-400">
        <HeroSection
          title={webDevelopmentData.hero.title}
          subText={webDevelopmentData.hero.subtitle}
        />
      </div>

      {/* サービスナビゲーション */}
      <ServiceNavigation
        serviceLinks={serviceNavLinks}
        currentServiceId="web-development"
      />


      {/* セクション1: 技術説明 */}
      <div className="border-b border-blue-400">
        <SingleColumnSection
          title={webDevelopmentData.sections[0].title}
          description={webDevelopmentData.sections[0].description}
          variant="dark"
        >
          {webDevelopmentData.sections[0].content}
        </SingleColumnSection>
      </div>

      {/* セクション2: ターゲット説明（CSS Media Query パララックス） */}
      <div className="border-b border-blue-400 relative overflow-hidden">
        {/* 背景画像 - レスポンシブパララックス効果 */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 z-0 hidden md:block parallax-bg"
          style={{ 
            backgroundImage: 'url(/images/web_para.png)'
          }}
        />
        
        {/* 黒の半透明オーバーレイ - デスクトップのみ */}
        <div className="absolute inset-0 bg-black/50 z-0 hidden md:block" />
        
        {/* コンテンツ */}
        <div className="relative z-10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {webDevelopmentData.sections[1].title}
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                {webDevelopmentData.sections[1].description}
              </p>
              <div className="mt-6">
                {webDevelopmentData.sections[1].content}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* セクション3: 活用方法 */}
      <div className="border-b border-blue-400">
        <ThreeCardSection
          title={webDevelopmentData.sections[2].title}
          description={webDevelopmentData.sections[2].description}
          cards={webDevelopmentData.sections[2].data.cards}
          variant="dark"
          enableMobileScroll={true}
        />
      </div>

      {/* セクション4: 説明セクション */}
      <div className="border-b border-blue-400">
        <SingleColumnSection
          title={webDevelopmentData.sections[3].title}
          description={webDevelopmentData.sections[3].description}
          variant="dark"
        >
          {webDevelopmentData.sections[3].content}
        </SingleColumnSection>
      </div>

      {/* セクション5: 比較セクション */}
      <div className="border-b border-blue-400">
        <TwoColumnSection
          title={webDevelopmentData.sections[4].title}
          leftContent={webDevelopmentData.sections[4].data.leftContent}
          rightContent={webDevelopmentData.sections[4].data.rightContent}
          variant="dark"
          textAlign="center"
        />
      </div>

      {/* セクション6: 導入要素 */}
      <div className="border-b border-blue-400">
        <ThreeCardSection
          title={webDevelopmentData.sections[5].title}
          description={webDevelopmentData.sections[5].description}
          cards={webDevelopmentData.sections[5].data.cards}
          variant="dark"
          enableMobileScroll={true}
        />
      </div>

      {/* セクション7: 理由説明 */}
      <div className="border-b border-blue-400">
        <TwoColumnSection
          title={webDevelopmentData.sections[6].title}
          leftContent={webDevelopmentData.sections[6].data.leftContent}
          rightContent={webDevelopmentData.sections[6].data.rightContent}
          variant="dark"
        />
      </div>

      {/* セクション8: 技術提供 */}
      <div className="border-b border-blue-400">
        <TabSection
          title={webDevelopmentData.sections[7].title}
          tabs={webDevelopmentData.sections[7].data.tabs.map((tab: { content: { type: string; cards: any[] } }) => ({ // eslint-disable-line @typescript-eslint/no-explicit-any
            ...tab,
            content: tab.content.type === 'three-cards' ? (
              <ThreeCardSection
                cards={tab.content.cards as any} // eslint-disable-line @typescript-eslint/no-explicit-any
                variant="dark"
                padding="sm"
                enableMobileScroll={true}
              />
            ) : tab.content
          }))}
          defaultTab={webDevelopmentData.sections[7].data.defaultTab}
          variant="dark"
        />
      </div>

      {/* セクション9: FAQ */}
      <div className="border-b border-blue-400">
        <FAQSection
          title="よくある質問"
          faqs={webDevelopmentData.faqs || []}
          variant="dark"
        />
      </div>

      {/* セクション10: 関連サービス */}
      <div className="border-b border-blue-400">
        <RelatedServicesSection
          title="関連サービス"
          services={webDevelopmentData.relatedServices || []}
          variant="dark"
        />
      </div>

      {/* セクション11: CTA */}
      <div className="border-b border-blue-400">
        <SingleColumnSection
          title="Webで新しいビジネス価値を創造しませんか？"
          description="IDEALのWeb開発サービスで、貴社のビジネスに革新をもたらします。まずはお気軽にお問い合わせください。"
          variant="dark"
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              お問い合わせ
            </button>
            <button className="px-8 py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-colors">
              サービス一覧に戻る
            </button>
          </div>
        </SingleColumnSection>
      </div>
    </div>
  )
}
