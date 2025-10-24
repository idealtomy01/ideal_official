/**
 * トップページ
 * 
 * サーバーコンポーネント（データフェッチなし）
 * Hero, TwoCardSection, ServiceGridSection, DAOOverviewSection, CallToAction セクションで構成
 */

import { Hero } from '../components/sections/Hero'
import { TwoCardSectionFixed } from '../components/sections/TwoCardSectionFixed'
import { ServiceGridSectionFixed } from '../components/sections/ServiceGridSectionFixed'
import DAOOverviewSection from '../components/sections/DAOOverviewSection'
import { CallToAction } from '../components/sections/CallToAction'

export default function Home() {
  // 私たちの取り組みデータ（2枚並び）
  const twoCardData = [
    {
      id: 'dao-research',
      title: 'DAO研究・取り組み',
      description: '分散型自律組織（DAO）の研究と実装を通じて、新しい組織形態の可能性を探求しています。透明性、自律性、協調性を重視した次世代の組織運営を目指します。',
      image: '/images/test02.jpg',
      link: '/dao',
      linkText: 'DAO研究・取り組みへ>>'
    },
    {
      id: 'it-services',
      title: 'ITサービス提供',
      description: 'AI、Web開発、ブロックチェーン、アプリ開発など、最新技術を活用した包括的なITソリューションを提供しています。お客様のビジネス成長を技術でサポートします。',
      image: '/images/test02.jpg',
      link: '/services',
      linkText: 'ITサービス一覧へ>>'
    }
  ]

  // 提供サービスデータ（4枚並び）
  const serviceData = [
    {
      id: 'ai-consulting',
      title: 'AIコンサルティング',
      description: '人工知能技術を活用したビジネスソリューションの企画・設計・実装をサポートします。',
      image: '/images/test01.jpg',
      link: '/services/ai-consulting',
      linkText: 'AIコンサルティング詳細へ>>'
    },
    {
      id: 'web-development',
      title: 'Web開発',
      description: 'モダンなWebアプリケーションの開発から保守まで、包括的なWebソリューションを提供します。',
      image: '/images/test01.jpg',
      link: '/services/web-development',
      linkText: 'Web開発詳細へ>>'
    },
    {
      id: 'blockchain-development',
      title: 'ブロックチェーン開発',
      description: 'ブロックチェーン技術を活用した分散型アプリケーション（DApp）の開発とコンサルティングを行います。',
      image: '/images/test01.jpg',
      link: '/services/blockchain-development',
      linkText: 'ブロックチェーン開発詳細へ>>'
    },
    {
      id: 'app-development',
      title: 'アプリ開発',
      description: 'iOS・Android向けのネイティブアプリからクロスプラットフォームアプリまで、幅広いアプリ開発に対応します。',
      image: '/images/test01.jpg',
      link: '/services/app-development',
      linkText: 'アプリ開発詳細へ>>'
    }
  ]

  return (
    <>
      <Hero />
      <TwoCardSectionFixed
        title="私たちの取り組み"
        description="理想合同会社は、DAO研究・取り組みとITサービス提供の2つの核を通じて、テクノロジーで自由と秩序が両立した未来を創造します。"
        cards={twoCardData}
      />
      <ServiceGridSectionFixed
        title="提供サービス"
        description="最新技術を活用した包括的なITソリューションで、お客様のビジネス成長をサポートします。"
        services={serviceData}
      />
      <DAOOverviewSection />
      <CallToAction />
    </>
  )
}
