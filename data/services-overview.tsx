/**
 * サービス一覧データ
 * トップページのサービス紹介セクション用
 */

export interface ServiceOverviewData {
  id: string
  title: string
  description: string
  image: string
  link: string
  linkText: string
  category: string
  featured: boolean
}

export const servicesOverviewData: ServiceOverviewData[] = [
  {
    id: 'ai-consulting',
    title: 'AIコンサルティング',
    description: '人工知能技術を活用したビジネスソリューションの企画・設計・実装をサポートします。',
    image: '/images/test01.jpg',
    link: '/services/ai-consulting',
    linkText: 'AIコンサルティング詳細へ>>',
    category: 'AI・機械学習',
    featured: true
  },
  {
    id: 'web-development',
    title: 'Web開発',
    description: 'モダンなWebアプリケーションの開発から保守まで、包括的なWebソリューションを提供します。',
    image: '/images/test01.jpg',
    link: '/services/web-development',
    linkText: 'Web開発詳細へ>>',
    category: 'Web開発',
    featured: true
  },
  {
    id: 'blockchain-development',
    title: 'ブロックチェーン開発',
    description: 'ブロックチェーン技術を活用した分散型アプリケーション（DApp）の開発とコンサルティングを行います。',
    image: '/images/test01.jpg',
    link: '/services/blockchain-development',
    linkText: 'ブロックチェーン開発詳細へ>>',
    category: 'ブロックチェーン',
    featured: true
  },
  {
    id: 'app-development',
    title: 'アプリ開発',
    description: 'iOS・Android向けのネイティブアプリからクロスプラットフォームアプリまで、幅広いアプリ開発に対応します。',
    image: '/images/test01.jpg',
    link: '/services/app-development',
    linkText: 'アプリ開発詳細へ>>',
    category: 'アプリ開発',
    featured: true
  }
]

export const getFeaturedServices = (): ServiceOverviewData[] => {
  return servicesOverviewData.filter(service => service.featured)
}

export const getServicesByCategory = (category: string): ServiceOverviewData[] => {
  return servicesOverviewData.filter(service => service.category === category)
}
