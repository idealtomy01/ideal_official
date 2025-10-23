import { ServiceLinkData } from '../../types/service'

// 全サービスページで使用する共通のサービスリンクデータ
export const serviceLinks: ServiceLinkData[] = [
  { id: 'ai-consulting', name: 'AI', href: '/services/ai-consulting' },
  { id: 'web-development', name: 'Web開発', href: '/services/web-development' },
  { id: 'app-development', name: 'アプリ開発', href: '/services/app-development' },
  { id: 'game-development', name: 'ゲーム制作', href: '/services/game-development' },
  { id: 'blockchain-development', name: 'ブロックチェーン開発', href: '/services/blockchain-development' }
]

// 現在のサービスIDを取得するヘルパー関数
export const getCurrentServiceId = (pathname: string): string => {
  const pathSegments = pathname.split('/')
  const servicePath = pathSegments[pathSegments.length - 1]
  
  switch (servicePath) {
    case 'ai-consulting':
      return 'ai-consulting'
    case 'web-development':
      return 'web-development'
    case 'app-development':
      return 'app-development'
    case 'game-development':
      return 'game-development'
    case 'blockchain-development':
      return 'blockchain-development'
    default:
      return 'ai-consulting' // デフォルト
  }
}

