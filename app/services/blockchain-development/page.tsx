import { Metadata } from 'next'
import { Section } from '../../../components/ui/Section'
import { HeroSection } from '../../../components/sections/HeroSection'
import { ServiceNavigation } from '../../../components/sections/ServiceNavigation'
import { CallToAction } from '../../../components/sections/CallToAction'
import { typography, colors } from '../../../lib/design-tokens'

export const metadata: Metadata = {
  title: 'ブロックチェーン開発 | ideal',
  description: 'ブロックチェーン・Web3・DeFi・NFT開発サービス。スマートコントラクトからDAppまで、分散型アプリケーションを構築します。',
  openGraph: {
    title: 'ブロックチェーン開発 | ideal',
    description: 'ブロックチェーン・Web3・DeFi・NFT開発サービス。スマートコントラクトからDAppまで、分散型アプリケーションを構築します。',
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

export default function BlockchainDevelopmentPage() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* セクション0: ヒーローセクション */}
      <div className="border-b border-blue-400">
        <HeroSection
          title="ブロックチェーン開発"
          subText="分散型アプリケーション（DApp）開発・NFT活用など"
        />
      </div>

      {/* サービスナビゲーション */}
      <ServiceNavigation
        serviceLinks={serviceNavLinks}
        currentServiceId="blockchain-development"
      />

      {/* サービス詳細 */}
      <Section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className={`${typography.h2} ${colors.text.primary} mb-6`}>
                スマートコントラクト開発
              </h2>
              <p className={`${typography.body} ${colors.text.secondary} mb-6`}>
                イーサリアム、Polygon、BSCなど主要ブロックチェーン上で、
                安全で効率的なスマートコントラクトを開発します。
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className={colors.text.secondary}>Solidity開発</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className={colors.text.secondary}>セキュリティ監査</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className={colors.text.secondary}>ガス最適化</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <h3 className={`${typography.h3} ${colors.text.primary} mb-4`}>
                対応ブロックチェーン
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">Ethereum</h4>
                  <p className="text-sm text-gray-300">スマートコントラクト、DeFi</p>
                </div>
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">Polygon</h4>
                  <p className="text-sm text-gray-300">スケーラビリティ、低コスト</p>
                </div>
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">BSC</h4>
                  <p className="text-sm text-gray-300">Binance Smart Chain</p>
                </div>
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">Solana</h4>
                  <p className="text-sm text-gray-300">高速・低コスト取引</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* DApp開発セクション */}
      <Section className="py-16 lg:py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className={`${typography.h2} ${colors.text.primary} text-center mb-12`}>
            DApp開発サービス
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className={`${typography.h3} ${colors.text.primary} mb-4`}>
                DeFiアプリケーション
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                分散型金融（DeFi）プロトコルの開発
              </p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• DEX（分散型取引所）</li>
                <li>• レンディングプロトコル</li>
                <li>• 流動性プール</li>
                <li>• イールドファーミング</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className={`${typography.h3} ${colors.text.primary} mb-4`}>
                NFTマーケットプレイス
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                NFTの作成・販売・取引プラットフォーム
              </p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• NFTミント機能</li>
                <li>• オークション機能</li>
                <li>• ロイヤリティシステム</li>
                <li>• メタデータ管理</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className={`${typography.h3} ${colors.text.primary} mb-4`}>
                DAO（分散自律組織）
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                コミュニティ主導の分散型組織システム
              </p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• ガバナンストークン</li>
                <li>• 投票システム</li>
                <li>• 提案・実行機能</li>
                <li>• 資金管理</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className={`${typography.h3} ${colors.text.primary} mb-4`}>
                GameFi
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                ブロックチェーンゲームとDeFiの融合
              </p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Play-to-Earnゲーム</li>
                <li>• NFTゲームアイテム</li>
                <li>• ゲーム内経済システム</li>
                <li>• トークンエコノミー</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className={`${typography.h3} ${colors.text.primary} mb-4`}>
                Web3インフラ
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                Web3アプリケーションの基盤技術
              </p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• ウォレット連携</li>
                <li>• IPFS統合</li>
                <li>• オラクルサービス</li>
                <li>• クロスチェーン橋</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className={`${typography.h3} ${colors.text.primary} mb-4`}>
                セキュリティ監査
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                スマートコントラクトの安全性確保
              </p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• コード監査</li>
                <li>• 脆弱性診断</li>
                <li>• ペネトレーションテスト</li>
                <li>• セキュリティレポート</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* 技術スタックセクション */}
      <Section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className={`${typography.h2} ${colors.text.primary} text-center mb-12`}>
            技術スタック
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <h3 className={`${typography.h3} ${colors.text.primary} mb-6`}>
                ブロックチェーン開発
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">Solidity</h4>
                  <p className="text-sm text-gray-300">イーサリアムスマートコントラクト開発</p>
                </div>
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">Rust</h4>
                  <p className="text-sm text-gray-300">Solana、Polkadot開発</p>
                </div>
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">Move</h4>
                  <p className="text-sm text-gray-300">Aptos、Sui開発</p>
                </div>
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">Web3.js</h4>
                  <p className="text-sm text-gray-300">フロントエンド・ブロックチェーン連携</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <h3 className={`${typography.h3} ${colors.text.primary} mb-6`}>
                開発ツール・フレームワーク
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">Hardhat</h4>
                  <p className="text-sm text-gray-300">イーサリアム開発環境</p>
                </div>
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">Truffle</h4>
                  <p className="text-sm text-gray-300">スマートコントラクト開発フレームワーク</p>
                </div>
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">OpenZeppelin</h4>
                  <p className="text-sm text-gray-300">セキュアなスマートコントラクトライブラリ</p>
                </div>
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">IPFS</h4>
                  <p className="text-sm text-gray-300">分散ストレージ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 開発プロセスセクション */}
      <Section className="py-16 lg:py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className={`${typography.h2} ${colors.text.primary} text-center mb-12`}>
            開発プロセス
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">1</span>
              </div>
              <h3 className={`${typography.h3} ${colors.text.primary} mb-3`}>
                要件定義
              </h3>
              <p className="text-sm text-gray-300">
                ビジネス要件の分析と技術仕様の策定
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">2</span>
              </div>
              <h3 className={`${typography.h3} ${colors.text.primary} mb-3`}>
                アーキテクチャ設計
              </h3>
              <p className="text-sm text-gray-300">
                ブロックチェーン選択とシステム設計
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">3</span>
              </div>
              <h3 className={`${typography.h3} ${colors.text.primary} mb-3`}>
                開発・テスト
              </h3>
              <p className="text-sm text-gray-300">
                スマートコントラクト開発とテストネット検証
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">4</span>
              </div>
              <h3 className={`${typography.h3} ${colors.text.primary} mb-3`}>
                監査・デプロイ
              </h3>
              <p className="text-sm text-gray-300">
                セキュリティ監査とメインネットデプロイ
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CallToAction />
    </div>
  )
}
