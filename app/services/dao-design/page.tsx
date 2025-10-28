import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { HeroSection } from '../../../components/sections/HeroSection'
import { ServiceNavigation } from '../../../components/sections/ServiceNavigation'
import { SingleColumnSection } from '../../../components/sections/SingleColumnSection'
import { TwoColumnSection } from '../../../components/sections/TwoColumnSection'
import { ThreeCardSection } from '../../../components/sections/ThreeCardSection'
import { TabSection } from '../../../components/sections/TabSection'
import { FAQSection } from '../../../components/sections/FAQSection'
import { RelatedServicesSection } from '../../../components/sections/RelatedServicesSection'

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
  { id: 'ai-consulting', name: 'AI', href: '/services/ai-consulting' },
  { id: 'web-development', name: 'Web開発', href: '/services/web-development' },
  { id: 'app-development', name: 'アプリ開発', href: '/services/app-development' },
  { id: 'blockchain-development', name: 'ブロックチェーン', href: '/services/blockchain-development' },
  { id: 'metaverse', name: 'メタバース', href: '/services/metaverse' },
  { id: 'dao-design', name: 'DAO設計', href: '/services/dao-design' },
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

      {/* セクション0.5: サービスナビゲーション */}
      <div className="border-b border-blue-400">
      <ServiceNavigation
        serviceLinks={serviceNavLinks}
        currentServiceId="dao-design"
      />
      </div>

      {/* セクション1: 技術説明 */}
      <div className="border-b border-blue-400">
        <SingleColumnSection
          title="DAO（分散型自律組織）の可能性"
          description="DAOは、従来の中央集権的な組織運営から脱却し、透明性、自律性、協調性を重視した新しい組織形態です。私たちidealは、この革新的な組織形態が持つ可能性に注目し、テクノロジーを活用した公正で持続可能な社会の実現を目指しています。"
          variant="dark"
        >
          <div className="mt-6">
            <p className="text-gray-300 leading-relaxed">
              ブロックチェーンによる透明な記録、スマートコントラクトによるルールの自動執行、トークンによるインセンティブ設計などを組み合わせ、次世代の組織運営モデルを構築します。
            </p>
          </div>
        </SingleColumnSection>
      </div>

      {/* セクション2: ターゲット説明（CSS Media Query パララックス） */}
      <div className="border-b border-blue-400 relative overflow-hidden">
        {/* 背景画像 - レスポンシブパララックス効果 */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 z-0 hidden md:block parallax-bg"
          style={{ 
            backgroundImage: 'url(/images/DAO_para.png)'
          }}
        />
        
        {/* 黒の半透明オーバーレイ - デスクトップのみ */}
        <div className="absolute inset-0 bg-black/50 z-0 hidden md:block" />
        
        {/* コンテンツ */}
        <div className="relative z-10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                DAOがもたらす大きな恩恵
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                かつては一部の先進的なプロジェクトのものであったDAO。スマートコントラクト技術や低コストなブロックチェーンの登場により、中小企業やコミュニティでも導入・活用が可能になりました。
              </p>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">あらゆる規模の組織に、透明性と効率性をもたらす</h3>
                <p className="text-gray-300 leading-relaxed">
                  意思決定の透明化、インセンティブの自動化、グローバルな協力体制の構築など、組織の規模に関わらず大きなメリットをもたらします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* セクション3: 活用方法 */}
      <div className="border-b border-blue-400">
        <ThreeCardSection
          title="具体的な活用方法"
          description="DAOの様々な活用形態をご紹介します"
          cards={[
            {
              title: '投資DAO / VC DAO',
              description: 'メンバーからの資金を集め、投票によって投資先を決定。利益分配もスマートコントラクトで自動化します。',
              tags: ['投資', 'VC', '資金調達'],
              modalTitle: '投資DAO / VC DAO',
              modalContent: (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-4">投資DAO / VC DAO</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">投資プロセスの透明化</h4>
                      <p className="text-gray-300">全ての投資判断がブロックチェーン上に記録され、メンバー全員が確認可能です。（詳細は後日追加予定）</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">ガバナンス設計</h4>
                      <p className="text-gray-300">投票権の配分や意思決定プロセスを設計します。（詳細は後日追加予定）</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">法的論点</h4>
                      <p className="text-gray-300">各国の規制に準拠した設計をサポートします。（詳細は後日追加予定）</p>
                    </div>
                  </div>
                </div>
              ),
              modalSize: "lg"
            },
            {
              title: 'プロトコルDAO / プロダクトDAO',
              description: 'DeFiプロトコルやWeb3サービスの開発・運営方針をコミュニティの投票で決定。貢献者への報酬も自動分配します。',
              tags: ['DeFi', 'Web3', 'プロダクト'],
              modalTitle: 'プロトコルDAO / プロダクトDAO',
              modalContent: (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-4">プロトコルDAO / プロダクトDAO</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">ガバナンストークンの役割</h4>
                      <p className="text-gray-300">プロトコルの運営方針を決定するための投票権を提供します。（詳細は後日追加予定）</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">開発資金管理</h4>
                      <p className="text-gray-300">トレジャリーの管理と資金配分を透明化します。（詳細は後日追加予定）</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">ロードマップ策定プロセス</h4>
                      <p className="text-gray-300">コミュニティ主導での開発方針決定をサポートします。（詳細は後日追加予定）</p>
                    </div>
                  </div>
                </div>
              ),
              modalSize: "lg"
            },
            {
              title: 'コミュニティDAO / ソーシャルDAO',
              description: '共通の目的を持つメンバーが集まり、オンラインコミュニティの運営方針や共有資産の管理を民主的に行います。',
              tags: ['コミュニティ', 'ソーシャル', 'NFT'],
              modalTitle: 'コミュニティDAO / ソーシャルDAO',
              modalContent: (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-4">コミュニティDAO / ソーシャルDAO</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">メンバーシップNFT</h4>
                      <p className="text-gray-300">コミュニティへのアクセス権と特典を提供します。（詳細は後日追加予定）</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">貢献度評価</h4>
                      <p className="text-gray-300">メンバーの貢献を可視化し、公平に評価します。（詳細は後日追加予定）</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">イベント企画・実行プロセス</h4>
                      <p className="text-gray-300">コミュニティ主導でのイベント開催をサポートします。（詳細は後日追加予定）</p>
                    </div>
                  </div>
                </div>
              ),
              modalSize: "lg"
            }
          ]}
          variant="dark"
        />
      </div>

      {/* セクション4: 説明セクション */}
      <div className="border-b border-blue-400">
        <SingleColumnSection
          title="DAOが創る、新しい組織と働き方"
          description="DAOの導入は、単なる組織形態の変更だけでなく、意思決定プロセスの民主化、貢献評価の透明化、そして地理的な制約を超えた新しい働き方を可能にします。私たちは、DAO設計を通じて、組織の持続的な成長とメンバーのエンゲージメント向上をサポートします。"
          variant="dark"
        >
          <div></div>
        </SingleColumnSection>
      </div>

      {/* セクション5: 比較セクション */}
      <div className="border-b border-blue-400">
        <TwoColumnSection
          title="従来組織との比較"
          leftContent={
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">従来の中央集権組織</h3>
              <ul className="space-y-3 text-gray-300 inline-block text-left">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>トップダウンの意思決定</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>情報の非対称性</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>恣意的な評価・報酬</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>地理的・時間的制約</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>運営コストの高さ</span>
                </li>
              </ul>
            </div>
          }
          rightContent={
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">DAO（分散型自律組織）</h3>
              <ul className="space-y-3 text-gray-300 inline-block text-left">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>ボトムアップ / 分散型の意思決定</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>透明性の高い情報共有</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>コードに基づく自動的な評価・報酬</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>グローバルで非同期な協力</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>運営の自動化・効率化</span>
                </li>
              </ul>
            </div>
          }
          variant="dark"
          textAlign="center"
        />
      </div>

      {/* セクション6: 導入要素 */}
      <div className="border-b border-blue-400">
        <ThreeCardSection
          title="導入に必要な要素"
          description="DAO構築成功のための3つの重要な要素をご説明します"
          cards={[
            {
              title: "技術要素",
              description: "DAOの基盤となる技術的な要素を整理します。",
              tags: ["ブロックチェーン", "スマートコントラクト", "Web3"],
              modalTitle: "技術要素",
              modalContent: (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-4">技術要素</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">ブロックチェーン選定</h4>
                      <p className="text-gray-300">目的に応じた最適なブロックチェーンの選定をサポートします。（詳細は後日追加予定）</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">スマートコントラクト開発（Solidity等）</h4>
                      <p className="text-gray-300">安全で効率的なスマートコントラクトを開発します。（詳細は後日追加予定）</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">フロントエンド（Web3連携）</h4>
                      <p className="text-gray-300">ユーザーフレンドリーなdAppインターフェースを構築します。（詳細は後日追加予定）</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">分散ストレージ（IPFS）</h4>
                      <p className="text-gray-300">分散型ストレージの活用をサポートします。（詳細は後日追加予定）</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">オラクル連携</h4>
                      <p className="text-gray-300">外部データとの連携を実現します。（詳細は後日追加予定）</p>
                    </div>
                  </div>
                </div>
              ),
              modalSize: "lg"
            },
            {
              title: "ビジネス・法務要素",
              description: "DAOの目的達成と持続可能性に必要な要素を整理します。",
              tags: ["ガバナンス", "トークノミクス", "法務"],
              modalTitle: "ビジネス・法務要素",
              modalContent: (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-4">ビジネス・法務要素</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">目的・KPI設定</h4>
                      <p className="text-gray-300">DAOの目的と成功指標を明確化します。（詳細は後日追加予定）</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">ガバナンス設計（投票/提案）</h4>
                      <p className="text-gray-300">最適な意思決定プロセスを設計します。（詳細は後日追加予定）</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">トークノミクス設計（発行/分配/効用）</h4>
                      <p className="text-gray-300">持続可能なトークンエコノミーを構築します。（詳細は後日追加予定）</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">法人格・税務</h4>
                      <p className="text-gray-300">法的枠組みと税務対応をサポートします。（詳細は後日追加予定）</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">コミュニティ戦略</h4>
                      <p className="text-gray-300">活発なコミュニティ形成を支援します。（詳細は後日追加予定）</p>
                    </div>
                  </div>
                </div>
              ),
              modalSize: "lg"
            },
            {
              title: "人材要素",
              description: "DAOの構築・運営に必要な人材的な要素を整理します。",
              tags: ["開発者", "コミュニティ", "専門家"],
              modalTitle: "人材要素",
              modalContent: (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-4">人材要素</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">スマートコントラクト開発者</h4>
                      <p className="text-gray-300">安全なスマートコントラクトを実装できる開発者。（詳細は後日追加予定）</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">コミュニティマネージャー</h4>
                      <p className="text-gray-300">DAOコミュニティの活性化と運営を担当。（詳細は後日追加予定）</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">ガバナンス設計者</h4>
                      <p className="text-gray-300">最適な意思決定プロセスを設計できる専門家。（詳細は後日追加予定）</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">トークノミスト</h4>
                      <p className="text-gray-300">トークンエコノミーを設計できる専門家。（詳細は後日追加予定）</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">法務・税務専門家</h4>
                      <p className="text-gray-300">DAO関連の法的・税務的課題に対応できる専門家。（詳細は後日追加予定）</p>
                    </div>
                  </div>
                </div>
              ),
              modalSize: "lg"
            }
          ]}
          variant="dark"
        />
      </div>

      {/* セクション7: 理由説明 */}
      <div className="border-b border-blue-400">
        <TwoColumnSection
          title="なぜ今、DAOが必要なのか"
          leftContent={
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">市場動向と社会変化</h3>
              <div className="space-y-3 text-gray-300">
                <p>Web3、メタバースへの関心の高まりと分散型システムへの期待</p>
                <p>リモートワーク普及による、地理に縛られない新しい働き方の模索</p>
                <p>中央集権型プラットフォームへの不信感と、より民主的なシステムへの要求</p>
              </div>
            </div>
          }
          rightContent={
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">技術革新と競争優位性</h3>
              <div className="space-y-3 text-gray-300">
                <p>スマートコントラクトとブロックチェーン技術の成熟による実現可能性の向上</p>
                <p>トークンエコノミクスによる新しいインセンティブ設計と資金調達手法の登場</p>
                <p>先行するDAOプロジェクトが、イノベーションとコミュニティ主導の成長で注目を集めている</p>
              </div>
            </div>
          }
          variant="dark"
        />
      </div>

      {/* セクション8: 技術提供 */}
      <div className="border-b border-blue-400">
        <TabSection
          title="技術提供"
          tabs={[
            {
              id: 'development',
              name: '開発',
              content: (
                <ThreeCardSection
                  padding="sm"
                  cards={[
                    {
                      title: 'スマートコントラクト開発',
                      description: 'Solidity等を用いた安全で効率的なスマートコントラクトを設計・開発・監査します。',
                      tags: ['Solidity', 'Hardhat', 'OpenZeppelin'],
                      modalTitle: 'スマートコントラクト開発',
                      modalContent: (
                        <div className="space-y-6">
                          <h4 className="text-2xl font-bold text-white mb-4">
                            安全で効率的なスマートコントラクト開発
                          </h4>
                          <div className="space-y-4">
                            <div>
                              <h5 className="font-semibold text-blue-400 mb-2">EVM互換チェーン対応</h5>
                              <p className="text-gray-300">Ethereum、Polygon、BSCなど様々なチェーンに対応します。（詳細は後日追加予定）</p>
                            </div>
                            <div>
                              <h5 className="font-semibold text-blue-400 mb-2">OpenZeppelin利用</h5>
                              <p className="text-gray-300">実績のあるライブラリを活用し、セキュリティを確保します。（詳細は後日追加予定）</p>
                            </div>
                            <div>
                              <h5 className="font-semibold text-blue-400 mb-2">セキュリティ監査プロセス</h5>
                              <p className="text-gray-300">徹底したセキュリティ監査を実施します。（詳細は後日追加予定）</p>
                            </div>
                            <div>
                              <h5 className="font-semibold text-blue-400 mb-2">アップグレード可能性考慮</h5>
                              <p className="text-gray-300">将来的な機能拡張を見越した設計を行います。（詳細は後日追加予定）</p>
                            </div>
                          </div>
                        </div>
                      ),
                      modalSize: "lg"
                    },
                    {
                      title: 'フロントエンド開発（Web3連携）',
                      description: 'Next.js等で、ウォレット接続やコントラクト対話が可能なdAppフロントエンドを構築します。',
                      tags: ['Next.js', 'Ethers.js', 'Web3'],
                      modalTitle: 'フロントエンド開発（Web3連携）',
                      modalContent: (
                        <div className="space-y-6">
                          <h4 className="text-2xl font-bold text-white mb-4">
                            ユーザーフレンドリーなdAppフロントエンド
                          </h4>
                          <div className="space-y-4">
                            <div>
                              <h5 className="font-semibold text-blue-400 mb-2">Ethers.js/Web3.js</h5>
                              <p className="text-gray-300">ブロックチェーンとの通信を実現します。（詳細は後日追加予定）</p>
                            </div>
                            <div>
                              <h5 className="font-semibold text-blue-400 mb-2">WalletConnect/MetaMask連携</h5>
                              <p className="text-gray-300">主要なウォレットに対応します。（詳細は後日追加予定）</p>
                            </div>
                            <div>
                              <h5 className="font-semibold text-blue-400 mb-2">IPFS/Arweave連携</h5>
                              <p className="text-gray-300">分散型ストレージとの連携を実現します。（詳細は後日追加予定）</p>
                            </div>
                            <div>
                              <h5 className="font-semibold text-blue-400 mb-2">UI/UX設計</h5>
                              <p className="text-gray-300">直感的で使いやすいインターフェースを設計します。（詳細は後日追加予定）</p>
                            </div>
                          </div>
                        </div>
                      ),
                      modalSize: "lg"
                    },
                    {
                      title: 'ブロックチェーン基盤選定・構築',
                      description: '目的やコストに応じ最適なL1/L2ブロックチェーンを選定、またはプライベートチェーンの構築を支援します。',
                      tags: ['Ethereum', 'Polygon', 'L2'],
                      modalTitle: 'ブロックチェーン基盤選定・構築',
                      modalContent: (
                        <div className="space-y-6">
                          <h4 className="text-2xl font-bold text-white mb-4">
                            最適なブロックチェーン選定
                          </h4>
                          <div className="space-y-4">
                            <div>
                              <h5 className="font-semibold text-blue-400 mb-2">パブリック vs プライベート</h5>
                              <p className="text-gray-300">用途に応じた最適な選択をサポートします。（詳細は後日追加予定）</p>
                            </div>
                            <div>
                              <h5 className="font-semibold text-blue-400 mb-2">ガス代比較</h5>
                              <p className="text-gray-300">コスト効率の高いチェーンを選定します。（詳細は後日追加予定）</p>
                            </div>
                            <div>
                              <h5 className="font-semibold text-blue-400 mb-2">スケーラビリティ比較</h5>
                              <p className="text-gray-300">将来的な拡張性を考慮した選定を行います。（詳細は後日追加予定）</p>
                            </div>
                            <div>
                              <h5 className="font-semibold text-blue-400 mb-2">ノード運用</h5>
                              <p className="text-gray-300">必要に応じてノード運用をサポートします。（詳細は後日追加予定）</p>
                            </div>
                          </div>
                        </div>
                      ),
                      modalSize: "lg"
                    }
                  ]}
                  variant="dark"
                />
              )
            },
            {
              id: 'consulting',
              name: 'コンサルティング',
              content: (
                <ThreeCardSection
                  padding="sm"
                  cards={[
                    {
                      title: 'DAO/ガバナンス設計',
                      description: '組織の目的に合わせた最適な意思決定プロセスと権限構造を設計します。',
                      tags: ['ガバナンス', '投票', '提案'],
                      modalTitle: 'DAO/ガバナンス設計',
                      modalContent: (
                        <div className="space-y-6">
                          <h4 className="text-2xl font-bold text-white mb-4">
                            最適なガバナンスモデルの設計
                          </h4>
                          <div className="space-y-4">
                            <div>
                              <h5 className="font-semibold text-blue-400 mb-2">投票メカニズム</h5>
                              <p className="text-gray-300">1人1票、トークン比例、二次投票など最適な方式を選定します。（詳細は後日追加予定）</p>
                            </div>
                            <div>
                              <h5 className="font-semibold text-blue-400 mb-2">提案プロセス</h5>
                              <p className="text-gray-300">効率的で民主的な提案プロセスを設計します。（詳細は後日追加予定）</p>
                            </div>
                            <div>
                              <h5 className="font-semibold text-blue-400 mb-2">評議会モデル</h5>
                              <p className="text-gray-300">必要に応じて評議会制度を設計します。（詳細は後日追加予定）</p>
                            </div>
                            <div>
                              <h5 className="font-semibold text-blue-400 mb-2">オフチェーン/オンチェーン投票</h5>
                              <p className="text-gray-300">コストと透明性のバランスを考慮した選択をサポートします。（詳細は後日追加予定）</p>
                            </div>
                          </div>
                        </div>
                      ),
                      modalSize: "lg"
                    },
                    {
                      title: 'トークノミクス設計',
                      description: 'DAOの持続可能性と参加インセンティブを高めるトークンの発行・分配・効用を設計します。',
                      tags: ['トークン', 'インセンティブ', '経済設計'],
                      modalTitle: 'トークノミクス設計',
                      modalContent: (
                        <div className="space-y-6">
                          <h4 className="text-2xl font-bold text-white mb-4">
                            持続可能なトークンエコノミー
                          </h4>
                          <div className="space-y-4">
                            <div>
                              <h5 className="font-semibold text-blue-400 mb-2">トークン種類（ガバナンス/ユーティリティ）</h5>
                              <p className="text-gray-300">目的に応じたトークン設計を行います。（詳細は後日追加予定）</p>
                            </div>
                            <div>
                              <h5 className="font-semibold text-blue-400 mb-2">発行上限</h5>
                              <p className="text-gray-300">適切な発行量とスケジュールを設計します。（詳細は後日追加予定）</p>
                            </div>
                            <div>
                              <h5 className="font-semibold text-blue-400 mb-2">ベスティング</h5>
                              <p className="text-gray-300">長期的な参加を促すベスティング設計を行います。（詳細は後日追加予定）</p>
                            </div>
                            <div>
                              <h5 className="font-semibold text-blue-400 mb-2">ステーキング/ファーミング報酬設計</h5>
                              <p className="text-gray-300">持続可能な報酬メカニズムを構築します。（詳細は後日追加予定）</p>
                            </div>
                          </div>
                        </div>
                      ),
                      modalSize: "lg"
                    },
                    {
                      title: 'コミュニティ戦略・運用支援',
                      description: '活発で自律的なコミュニティ形成のための戦略立案から、Discord等のツール運用までサポートします。',
                      tags: ['コミュニティ', 'Discord', '運用'],
                      modalTitle: 'コミュニティ戦略・運用支援',
                      modalContent: (
                        <div className="space-y-6">
                          <h4 className="text-2xl font-bold text-white mb-4">
                            活発なコミュニティの形成と運営
                          </h4>
                          <div className="space-y-4">
                            <div>
                              <h5 className="font-semibold text-blue-400 mb-2">オンボーディング設計</h5>
                              <p className="text-gray-300">新メンバーがスムーズに参加できる仕組みを構築します。（詳細は後日追加予定）</p>
                            </div>
                            <div>
                              <h5 className="font-semibold text-blue-400 mb-2">貢献度評価システム</h5>
                              <p className="text-gray-300">メンバーの貢献を可視化し、評価する仕組みを設計します。（詳細は後日追加予定）</p>
                            </div>
                            <div>
                              <h5 className="font-semibold text-blue-400 mb-2">コミュニケーション活性化施策</h5>
                              <p className="text-gray-300">活発なコミュニケーションを促進する施策を提案します。（詳細は後日追加予定）</p>
                            </div>
                            <div>
                              <h5 className="font-semibold text-blue-400 mb-2">イベント企画</h5>
                              <p className="text-gray-300">コミュニティを盛り上げるイベントの企画・実施をサポートします。（詳細は後日追加予定）</p>
                            </div>
        </div>
                        </div>
                      ),
                      modalSize: "lg"
                    }
                  ]}
                  variant="dark"
                />
              )
            }
          ]}
          defaultTab="development"
          variant="dark"
        />
      </div>

      {/* セクション9: FAQ */}
      <div className="border-b border-blue-400">
        <FAQSection
          title="よくある質問"
          faqs={[
            {
              id: 'faq-1',
              question: 'DAOの構築にはどのくらいの期間がかかりますか？',
              answer: 'プロジェクトの規模や複雑さによって異なりますが、一般的には3ヶ月から6ヶ月程度です。スマートコントラクトの開発、セキュリティ監査、コミュニティ形成など、各フェーズに適切な時間を確保します。（詳細は後日追加予定）'
            },
            {
              id: 'faq-2',
              question: 'DAOの法的な位置づけはどうなりますか？',
              answer: '各国の法制度によって異なりますが、適切な法的枠組みの選択と設計をサポートします。LLCやFoundationなどの法人格と組み合わせることも可能です。（詳細は後日追加予定）'
            },
            {
              id: 'faq-3',
              question: '既存の組織をDAOに移行することは可能ですか？',
              answer: 'はい、可能です。段階的な移行プランを策定し、既存の組織構造からDAOへのスムーズな移行をサポートします。（詳細は後日追加予定）'
            },
            {
              id: 'faq-4',
              question: 'スマートコントラクトのセキュリティは大丈夫ですか？',
              answer: 'セキュリティを最優先に考え、実績のあるライブラリの活用、徹底したコードレビュー、第三者による監査を実施します。（詳細は後日追加予定）'
            },
            {
              id: 'faq-5',
              question: 'DAO運営に必要な初期コストはどのくらいですか？',
              answer: 'DAOの規模や機能によって異なりますが、スマートコントラクト開発、監査、初期のコミュニティ形成などを含めた総合的なお見積もりを提供します。（詳細は後日追加予定）'
            }
          ]}
          variant="dark"
        />
      </div>

      {/* セクション10: 関連サービス */}
      <div className="border-b border-blue-400">
        <RelatedServicesSection
          title="関連サービス"
          services={[
            {
              id: 'blockchain-development',
              title: 'ブロックチェーン開発',
              description: 'ブロックチェーン技術を活用した革新的なシステム開発',
              tags: ['Ethereum', 'Solidity', 'Web3'],
              href: '/services/blockchain-development'
            },
            {
              id: 'web-development',
              title: 'Web開発',
              description: 'モダンなWebアプリケーションの開発',
              tags: ['React', 'Next.js', 'TypeScript'],
              href: '/services/web-development'
            },
            {
              id: 'ai-consulting',
              title: 'AI技術コンサルティング',
              description: 'AI技術を活用したビジネス変革支援',
              tags: ['機械学習', '自然言語処理', 'データ分析'],
              href: '/services/ai-consulting'
            }
          ]}
          variant="dark"
        />
      </div>

      {/* セクション11: CTA */}
      <div className="border-b border-blue-400">
        <SingleColumnSection
          title="DAOで新しい組織の可能性を探りませんか？"
          description="IDEALのDAO設計サービスで、透明性と自律性を備えた次世代の組織を実現します。まずはお気軽にお問い合わせください。"
          variant="dark"
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                お問い合わせ
              </button>
            </Link>
            <Link href="/services">
              <button className="px-8 py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-colors">
                サービス一覧に戻る
              </button>
            </Link>
        </div>
        </SingleColumnSection>
      </div>
    </>
  )
}
