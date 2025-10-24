import { Metadata } from 'next'
import { HeroSection } from '../../../components/sections/HeroSection'
import { ServiceNavigation } from '../../../components/sections/ServiceNavigation'

export const metadata: Metadata = {
  title: 'メタバース | ideal',
  description: 'VR空間構築から、企画・運用・活用提案まで',
  openGraph: {
    title: 'メタバース | ideal',
    description: 'VR空間構築から、企画・運用・活用提案まで',
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

export default function MetaversePage() {
  return (
    <>
      {/* セクション0: ヒーローセクション */}
      <div className="border-b border-blue-400">
        <HeroSection
          title="メタバース"
          subText="VR空間構築から、企画・運用・活用提案まで"
        />
      </div>

      {/* サービスナビゲーション */}
      <ServiceNavigation
        serviceLinks={serviceNavLinks}
        currentServiceId="metaverse"
      />

      {/* コンテンツは今後追加 */}
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-white mb-4">メタバースページ</h2>
          <p className="text-gray-400">コンテンツは今後追加予定です</p>
        </div>
      </div>
    </>
  )
}
