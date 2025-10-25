/**
 * サービスページ
 * 
 * 5つのサービスの詳細を紹介
 * 将来的に各サービスの個別ページへリンク
 */

import { Metadata } from 'next'
import Image from 'next/image'
import { Section } from '../../components/ui/Section'
import { HeroSection } from '../../components/sections/HeroSection'
import { ServiceNavigation } from '../../components/sections/ServiceNavigation'
import CallToAction from '../../components/sections/CallToAction'
import { typography, colors } from '../../lib/design-tokens'

export const metadata: Metadata = {
  title: 'サービス | ideal',
  description: 'Webサイト制作、アプリ開発、ゲーム制作、AIコンサル、ブロックチェーン開発。5つの事業分野で最高のソリューションを提供します。',
  openGraph: {
    title: 'サービス | ideal',
    description: 'Webサイト制作、アプリ開発、ゲーム制作、AIコンサル、ブロックチェーン開発。5つの事業分野で最高のソリューションを提供します。',
  },
}

// サービス詳細データ
const services = [
  {
    id: 'dao-design',
    title: 'DAO設計',
    description:
      '会社の核となる部分。分散型自律組織の設計と実装を通じて、新しい組織形態の可能性を探求します。',
    features: [
      'DAO設計・コンサルティング',
      'ガバナンストークン設計',
      '投票システム構築',
      '分散型意思決定プロセス設計',
      'DAO運営サポート',
    ],
  },
  {
    id: 'web-development',
    title: 'Webサイト制作',
    description:
      '既存の強み。高級感あふれるデザインと、最先端の技術で、あなたのビジネスを次のレベルへ導きます。',
    features: [
      'レスポンシブデザイン（スマホ・タブレット・PC対応）',
      'SEO最適化（検索エンジン上位表示）',
      'パフォーマンス最適化（高速表示）',
      'アクセシビリティ対応（誰でも使いやすい）',
      'CMS導入（簡単コンテンツ更新）',
    ],
  },
  {
    id: 'ai-consulting',
    title: 'AI',
    description:
      '重要な技術軸。最新のAI技術を活用し、ビジネスの効率化と競争力強化を実現します。',
    features: [
      'AI導入コンサルティング',
      '機械学習モデル開発',
      '自然言語処理（NLP）',
      '画像認識・音声認識',
      'データ分析・可視化',
    ],
  },
  {
    id: 'app-development',
    title: 'アプリ開発',
    description:
      '分野をまとめて分かりやすく。iOS、Android、Web、ゲーム。すべてのプラットフォームで、最高のユーザー体験を提供します。',
    features: [
      'ネイティブアプリ開発（iOS / Android）',
      'クロスプラットフォーム開発（React Native / Flutter）',
      'Webアプリ開発（PWA対応）',
      '2D/3Dゲーム開発（Unity / Unreal Engine）',
      'モバイルゲーム開発',
    ],
  },
  {
    id: 'metaverse',
    title: 'メタバース',
    description:
      '未来への展望を示す新しい柱。没入感のある仮想空間と、革新的なデジタル体験を提供します。',
    features: [
      'メタバース空間設計・構築',
      'VR/ARアプリケーション開発',
      '仮想イベント・展示会企画',
      'アバター・NFTシステム構築',
      'メタバースコンサルティング',
    ],
  },
  {
    id: 'blockchain-development',
    title: 'ブロックチェーン',
    description:
      'DAOとも関連するコア技術。分散型アプリケーション（DApps）やスマートコントラクトの設計・開発を支援します。',
    features: [
      'スマートコントラクト開発（Solidity / Rust）',
      'DApps開発（Ethereum / Solana / Polygon）',
      'NFTプラットフォーム構築',
      'トークンエコノミー設計',
      'ブロックチェーン導入コンサルティング',
    ],
  },
]

// サービスナビゲーション用のリンク
const serviceNavLinks = [
  { id: 'ai-consulting', name: 'AI', href: '/services/ai-consulting' },
  { id: 'web-development', name: 'Web開発', href: '/services/web-development' },
  { id: 'app-development', name: 'アプリ開発', href: '/services/app-development' },
  { id: 'blockchain-development', name: 'ブロックチェーン', href: '/services/blockchain-development' },
  { id: 'metaverse', name: 'メタバース', href: '/services/metaverse' },
  { id: 'dao-design', name: 'DAO設計', href: '/services/dao-design' },
]

export default function ServicesPage() {
  return (
    <>
      {/* ページヘッダー */}
      <HeroSection
        title="私たちのサービス"
        subText="5つの事業分野で、最高のソリューションを提供します。あなたのビジョンを、私たちの技術で実現しましょう。"
      />

      {/* サービスナビゲーション */}
      <ServiceNavigation
        serviceLinks={serviceNavLinks}
        currentServiceId=""
      />

      {/* サービス詳細セクション */}
      {services.map((service, index) => (
        <Section
          key={service.id}
          backgroundColor="black"
          className="py-16 md:py-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* アイコン・タイトル（偶数は左、奇数は右） */}
            <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
              <div className="relative overflow-hidden rounded-lg">
                {/* 背景画像 */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/test01.png"
                    alt={service.title}
                    fill
                    className="object-cover opacity-20"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                
                {/* コンテンツ */}
                <div className="relative z-10 p-8 md:p-12">
                  <div className="text-6xl mb-6"></div>
                  <h2 className={`${typography.h2} ${colors.text.primary} mb-4`}>
                    {service.title}
                  </h2>
                  <p className={`${typography.body} ${colors.text.muted} mb-8`}>
                    {service.description}
                  </p>
                </div>
              </div>
            </div>

            {/* 特徴リスト（偶数は右、奇数は左） */}
            <div className={`text-center ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
              <div className="inline-block text-left">
                <h3 className={`${typography.h4} ${colors.text.primary} mb-6`}>
                  主な機能・サービス
                </h3>
                <ul className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className={`${typography.body} ${colors.text.secondary}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* CTA セクション */}
      <CallToAction />
    </>
  )
}

