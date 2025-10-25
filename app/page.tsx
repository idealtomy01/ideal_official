/**
 * トップページ
 * 
 * サーバーコンポーネント（データフェッチなし）
 * Hero, TwoCardSection, ServiceGridSection, DAOOverviewSection, CallToAction セクションで構成
 */

import { Hero } from '../components/sections/Hero'
import { TwoCardSectionFixed } from '../components/sections/TwoCardSectionFixed'
import ServiceGridSectionFixed from '../components/sections/ServiceGridSectionFixed'
import DAOOverviewSection from '../components/sections/DAOOverviewSection'
import CallToAction from '../components/sections/CallToAction'

export default function Home() {
  // 私たちの取り組みデータ（2枚並び）
  const twoCardData = [
    {
      id: 'dao-research',
      title: 'DAO研究・取り組み',
      description: '分散型自律組織（DAO）の研究と実装を通じて、新しい組織形態の可能性を探求しています。透明性、自律性、協調性を重視した次世代の組織運営を目指します。',
      image: '/images/test02.png',
      link: '/dao',
      linkText: 'DAO研究・取り組みへ>>',
      priority: true  // Above the fold画像を優先読み込み
    },
    {
      id: 'it-services',
      title: 'ITサービス提供',
      description: 'AI、Web開発、ブロックチェーン、アプリ開発など、最新技術を活用した包括的なITソリューションを提供しています。お客様のビジネス成長を技術でサポートします。',
      image: '/images/test03.png',
      link: '/services',
      linkText: 'ITサービス一覧へ>>',
      priority: true  // Above the fold画像を優先読み込み
    }
  ]

  // 提供サービスデータ（4枚並び）
  const serviceData = [
    {
      id: 'ai-consulting',
      title: 'AI',
      description: 'AI活用のためのコンサルティングから環境構築、AI人材育成サポートまで対応します。',
      image: '/images/test01.png',
      link: '/services/ai-consulting',
      linkText: 'AI関連詳細へ>>'
    },
    {
      id: 'web-development',
      title: 'Web開発',
      description: 'react、next.jsでの高速Webサイト作成、運用、保守、コンサルティングまで対応します。',
      image: '/images/test01.png',
      link: '/services/web-development',
      linkText: 'Web開発詳細へ>>'
    },
    {
      id: 'blockchain-development',
      title: 'ブロックチェーン開発',
      description: '分散型アプリケーション（DApp）の開発やNFT活用など各種コンサルティングを行います。',
      image: '/images/test01.png',
      link: '/services/blockchain-development',
      linkText: 'ブロックチェーン開発詳細へ>>'
    },
    {
      id: 'app-development',
      title: 'アプリ開発',
      description: 'スマホ向けのネイティブアプリ、スマホゲームアプリの企画・開発に対応します。',
      image: '/images/test01.png',
      link: '/services/app-development',
      linkText: 'アプリ開発詳細へ>>'
    }
  ]

  return (
    <>
      <Hero />
      <TwoCardSectionFixed
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
