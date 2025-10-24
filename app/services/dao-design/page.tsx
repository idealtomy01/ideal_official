import { Metadata } from 'next'
import { HeroSection } from '../../../components/sections/HeroSection'
import { ServiceNavigation } from '../../../components/sections/ServiceNavigation'

export const metadata: Metadata = {
  title: 'DAO設計 | ideal',
  description: '分散型自律組織（DAO）の設計と実装を通じて、新しい組織形態の可能性を探求します。',
  openGraph: {
    title: 'DAO設計 | ideal',
    description: '分散型自律組織（DAO）の設計と実装を通じて、新しい組織形態の可能性を探求します。',
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

export default function DAODesignPage() {
  return (
    <>
      {/* セクション0: ヒーローセクション */}
      <div className="border-b border-blue-400">
        <HeroSection
          title="DAO設計"
          subText="会社の核となる部分。分散型自律組織の設計と実装を通じて、新しい組織形態の可能性を探求します。"
        />
      </div>

      {/* サービスナビゲーション */}
      <ServiceNavigation
        serviceLinks={serviceNavLinks}
        currentServiceId="dao-design"
      />

      {/* コンテンツは今後追加 */}
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-white mb-4">DAO設計ページ</h2>
          <p className="text-gray-400">コンテンツは今後追加予定です</p>
        </div>
      </div>
    </>
  )
}
