/**
 * サービスページ
 * 
 * 5つのサービスの詳細を紹介
 * 将来的に各サービスの個別ページへリンク
 */

import { Metadata } from 'next'
import { Section } from '../../components/ui/Section'
import { CallToAction } from '../../components/sections/CallToAction'
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
    id: 'web-development',
    title: 'Webサイト制作',
    description:
      '高級感あふれるデザインと、最先端の技術で、あなたのビジネスを次のレベルへ導きます。',
    features: [
      'レスポンシブデザイン（スマホ・タブレット・PC対応）',
      'SEO最適化（検索エンジン上位表示）',
      'パフォーマンス最適化（高速表示）',
      'アクセシビリティ対応（誰でも使いやすい）',
      'CMS導入（簡単コンテンツ更新）',
    ],
    icon: '🌐',
  },
  {
    id: 'app-development',
    title: 'アプリ開発',
    description:
      'iOS、Android、Web。すべてのプラットフォームで、最高のユーザー体験を提供します。',
    features: [
      'ネイティブアプリ開発（iOS / Android）',
      'クロスプラットフォーム開発（React Native / Flutter）',
      'Webアプリ開発（PWA対応）',
      'UI/UXデザイン',
      'アプリストア申請代行',
    ],
    icon: '📱',
  },
  {
    id: 'game-development',
    title: 'ゲーム制作',
    description:
      '没入感のある世界観と、革新的なゲームプレイ。あなたの夢のゲームを実現します。',
    features: [
      '2D/3Dゲーム開発（Unity / Unreal Engine）',
      'モバイルゲーム開発',
      'ブラウザゲーム開発',
      'ゲームデザイン・企画',
      'キャラクター・背景デザイン',
    ],
    icon: '🎮',
  },
  {
    id: 'ai-consulting',
    title: 'AIコンサル',
    description:
      '最新のAI技術を活用し、ビジネスの効率化と競争力強化を実現します。',
    features: [
      'AI導入コンサルティング',
      '機械学習モデル開発',
      '自然言語処理（NLP）',
      '画像認識・音声認識',
      'データ分析・可視化',
    ],
    icon: '🤖',
  },
  {
    id: 'blockchain-development',
    title: 'ブロックチェーン開発',
    description:
      '分散型アプリケーション（DApps）やスマートコントラクトの設計・開発を支援します。',
    features: [
      'スマートコントラクト開発（Solidity / Rust）',
      'DApps開発（Ethereum / Solana / Polygon）',
      'NFTプラットフォーム構築',
      'トークンエコノミー設計',
      'ブロックチェーン導入コンサルティング',
    ],
    icon: '⛓️',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* ページヘッダー */}
      <section className="flex items-center justify-center bg-black py-24 lg:py-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            私たちのサービス
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            5つの事業分野で、最高のソリューションを提供します。
            <br className="hidden sm:block" />
            あなたのビジョンを、私たちの技術で実現しましょう。
          </p>
        </div>
      </section>

      {/* サービス詳細セクション */}
      {services.map((service, index) => (
        <Section
          key={service.id}
          backgroundColor="black"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* アイコン・タイトル（偶数は左、奇数は右） */}
            <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
              <div className="text-6xl mb-6">{service.icon}</div>
              <h2 className={`${typography.h2} ${colors.text.primary} mb-4`}>
                {service.title}
              </h2>
              <p className={`${typography.body} ${colors.text.muted} mb-8`}>
                {service.description}
              </p>
            </div>

            {/* 特徴リスト（偶数は右、奇数は左） */}
            <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
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
        </Section>
      ))}

      {/* CTA セクション */}
      <CallToAction />
    </>
  )
}

