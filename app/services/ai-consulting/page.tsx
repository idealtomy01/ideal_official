import { Metadata } from 'next'
import { HeroSection } from '../../../components/sections/HeroSection'
import { ServiceNavigation } from '../../../components/sections/ServiceNavigation'
import { SingleColumnSection } from '../../../components/sections/SingleColumnSection'
import { TwoColumnSection } from '../../../components/sections/TwoColumnSection'
import { ThreeCardSection } from '../../../components/sections/ThreeCardSection'
import { TabSection } from '../../../components/sections/TabSection'
import { FAQSection } from '../../../components/sections/FAQSection'
import { RelatedServicesSection } from '../../../components/sections/RelatedServicesSection'
import { ModalTrigger } from '../../../components/ui/ModalTrigger'
import { aiServiceData } from '../../../data/services/ai'

export const metadata: Metadata = {
  title: 'AI | ideal',
  description: 'AI導入・活用コンサルティングサービス。機械学習、深層学習、自然言語処理の専門知識でビジネスを革新します。',
  openGraph: {
    title: 'AI | ideal',
    description: 'AI導入・活用コンサルティングサービス。機械学習、深層学習、自然言語処理の専門知識でビジネスを革新します。',
  },
}

export default function AIConsultingPage() {
  // サービスナビゲーション用のデータ
  const serviceLinks = [
    { id: 'ai-consulting', name: 'AI', href: '/services/ai-consulting' },
    { id: 'web-development', name: 'Web開発', href: '/services/web-development' },
    { id: 'app-development', name: 'アプリ開発', href: '/services/app-development' },
    { id: 'game-development', name: 'ゲーム制作', href: '/services/game-development' },
    { id: 'blockchain-development', name: 'ブロックチェーン開発', href: '/services/blockchain-development' }
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* ヒーローセクション */}
      <HeroSection
        title={aiServiceData.hero.title}
        subText={aiServiceData.hero.subtitle}
      />

      {/* サービスナビゲーション */}
      <ServiceNavigation
        serviceLinks={serviceLinks}
        currentServiceId="ai-consulting"
      />

      {/* 1. AI技術の可能性 - 単一カラムセクション */}
      <div className="border-b border-blue-400">
        <SingleColumnSection
          title={aiServiceData.sections[1].title!}
          description={aiServiceData.sections[1].description!}
          className={aiServiceData.sections[1].className}
          variant="dark"
        >
        <div className="mt-6">
          <p className="text-gray-300 leading-relaxed">
            機械学習、深層学習、自然言語処理などの先進的なAI技術を活用し、
            ビジネスの効率化と価値創造を実現します。
          </p>
        </div>
        </SingleColumnSection>
      </div>

      {/* 2. 中小企業にこそ、AIがもたらす大きな恩恵 - 単一カラムセクション */}
      <div className="border-b border-blue-400">
        <SingleColumnSection
          title={aiServiceData.sections[2].title!}
          description={aiServiceData.sections[2].description!}
          variant="dark"
        >
          <div className="mt-6">
            <p className="text-gray-300 leading-relaxed">
              中小企業こそ、新しい技術の恩恵を最大限に活用できる柔軟性と意思決定の速さを持っています。
              限られたリソースを最大限に活用し、競争優位性を獲得するためのAI戦略を策定します。
            </p>
          </div>
        </SingleColumnSection>
      </div>

      {/* 3. 具体的な活用方法 - 3カードセクション */}
      <div className="border-b border-blue-400">
        <div className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                具体的な活用方法
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                AI技術を活用した具体的なビジネスソリューションをご提案します
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* カード1: 業務効率化・自動化 */}
              <ModalTrigger
                title="業務効率化・自動化"
                size="lg"
                modalContent={
                  <div className="space-y-6">
                    <h4 className="text-2xl font-bold text-white mb-4">
                      AIによる業務プロセスの再構築
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      私たちは、貴社の既存ワークフローを詳細に分析し、「AIに任せるべき業務」と「人が集中すべき業務」を明確に切り分けます。
                    </p>
                    
                    <div className="space-y-4">
                      <h5 className="text-xl font-semibold text-white">テキスト生成AIの活用</h5>
                      <p className="text-gray-300 leading-relaxed">
                        ChatGPTなどのLLM（大規模言語モデル）を連携させ、カスタマーサポートの一次対応、日報や議事録の自動要約、マーケティングメールのドラフト作成などを自動化します。
                      </p>
                      
                      <h5 className="text-xl font-semibold text-white">画像・データ認識AI</h5>
                      <p className="text-gray-300 leading-relaxed">
                        AI-OCRによる請求書や契約書のデータ化、画像認識AIによる工場の検品作業や在庫管理を自動化。人的ミスをゼロに近づけ、バックオフィスの負担を劇的に軽減します。
                      </p>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed font-medium">
                      これにより、従業員は単純作業から解放され、より付加価値の高い戦略的な業務にリソースを集中させることが可能になります。
                    </p>
                  </div>
                }
              >
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300 cursor-pointer group">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    業務効率化・自動化
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    AIが定型業務を代行し、ヒューマンエラーを削減。従業員をより創造的なコア業務へと解放し、企業全体の生産性を飛躍的に向上させます。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-900/50 text-blue-300 text-sm rounded-full">
                      自動化
                    </span>
                    <span className="px-3 py-1 bg-blue-900/50 text-blue-300 text-sm rounded-full">
                      効率化
                    </span>
                    <span className="px-3 py-1 bg-blue-900/50 text-blue-300 text-sm rounded-full">
                      ChatGPT
                    </span>
                  </div>
                  <div className="mt-4 text-blue-400 text-sm font-medium">
                    クリックして詳細を見る →
                  </div>
                </div>
              </ModalTrigger>

              {/* カード2: マーケティング・顧客分析 */}
              <ModalTrigger
                title="マーケティング・顧客分析"
                size="lg"
                modalContent={
                  <div className="space-y-6">
                    <h4 className="text-2xl font-bold text-white mb-4">
                      データドリブンな意思決定の実現
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      勘や経験に頼ったマーケティングから脱却し、AIによる客観的なデータ分析に基づいた戦略立案をサポートします。
                    </p>
                    
                    <div className="space-y-4">
                      <h5 className="text-xl font-semibold text-white">高精度な顧客セグメンテーション</h5>
                      <p className="text-gray-300 leading-relaxed">
                        購買履歴、Web閲覧ログ、デモグラフィック情報などをAIが分析し、高精度な顧客セグメント（クラスター）を作成。LTV（顧客生涯価値）の高い優良顧客層や、解約予備軍を特定します。
                      </p>
                      
                      <h5 className="text-xl font-semibold text-white">施策の最適化とトレンド予測</h5>
                      <p className="text-gray-300 leading-relaxed">
                        SNSの投稿データや広告の反応率をAIがリアルタイムで分析し、最もコンバージョン率の高い広告クリエイティブや配信時間を自動で最適化。さらに市場トレンドを監視・予測し、次の一手を先読みした戦略的なキャンペーン立案を可能にします。
                      </p>
                    </div>
                  </div>
                }
              >
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300 cursor-pointer group">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    マーケティング・顧客分析
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    AIが膨大な顧客データやSNSトレンドを分析。最適なターゲット層に、最適なタイミングでメッセージを届け、マーケティングROIを最大化します。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-900/50 text-blue-300 text-sm rounded-full">
                      SNS
                    </span>
                    <span className="px-3 py-1 bg-blue-900/50 text-blue-300 text-sm rounded-full">
                      データ分析
                    </span>
                    <span className="px-3 py-1 bg-blue-900/50 text-blue-300 text-sm rounded-full">
                      最適化
                    </span>
                  </div>
                  <div className="mt-4 text-blue-400 text-sm font-medium">
                    クリックして詳細を見る →
                  </div>
                </div>
              </ModalTrigger>

              {/* カード3: 品質管理・需要予測 */}
              <ModalTrigger
                title="品質管理・需要予測"
                size="lg"
                modalContent={
                  <div className="space-y-6">
                    <h4 className="text-2xl font-bold text-white mb-4">
                      AIによるリスクの最小化と未来の可視化
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      目視では見逃してしまう微細なエラーや、複雑な要因が絡み合う未来の需要を、AI技術で正確に捉えます。
                    </p>
                    
                    <div className="space-y-4">
                      <h5 className="text-xl font-semibold text-white">画像認識による品質管理（QC）</h5>
                      <p className="text-gray-300 leading-relaxed">
                        製造ラインのカメラ映像をAIがリアルタイムで解析。熟練技術者の「目」を学習させることで、人手不足の解消と検品精度の均一化を同時に実現し、不良品の流出を未然に防ぎます。
                      </p>
                      
                      <h5 className="text-xl font-semibold text-white">時系列データによる需要予測・予知保全</h5>
                      <p className="text-gray-300 leading-relaxed">
                        過去の売上データ、天候、経済指標などをAIが分析し、高精度な需要予測モデルを構築。過剰在庫や機会損失を防ぎます。また、機器の稼働データを監視し、「故障の兆候」を事前に検知する予知保全もサポートします。
                      </p>
                    </div>
                  </div>
                }
              >
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300 cursor-pointer group">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    品質管理・需要予測
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    AIの画像認識による不良品検知や、時系列データ分析による需要予測。製造業から小売業まで、あらゆるビジネスのリスクを最小化します。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-900/50 text-blue-300 text-sm rounded-full">
                      品質管理
                    </span>
                    <span className="px-3 py-1 bg-blue-900/50 text-blue-300 text-sm rounded-full">
                      予測分析
                    </span>
                    <span className="px-3 py-1 bg-blue-900/50 text-blue-300 text-sm rounded-full">
                      在庫管理
                    </span>
                  </div>
                  <div className="mt-4 text-blue-400 text-sm font-medium">
                    クリックして詳細を見る →
                  </div>
                </div>
              </ModalTrigger>
            </div>
          </div>
        </div>
      </div>

      {/* 5. タブセクション（1つ目） */}
      <div className="border-b border-blue-400">
        <TabSection
          title="AI人材が働くすべての人たちに最適なワークライフバランスを"
          description="AI導入は業務効率化だけでなく、従業員の働き方も変革します。創造的な業務に時間を割けるよう、技術導入を通じて、すべての従業員がより充実した仕事と私生活を実現できる環境づくりをサポートします。"
        tabs={[
          {
            id: 'ai-overview',
            name: 'AI概要',
            content: (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">機械学習</h3>
                    <p className="text-gray-300">
                      データから学習し、パターンを認識して予測や分類を行う機械学習技術。ビジネスの意思決定支援や自動化に活用します。
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">深層学習</h3>
                    <p className="text-gray-300">
                      複雑なニューラルネットワークを用いて、画像認識、自然言語処理、音声認識などの高度なタスクを実現します。
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">自然言語処理</h3>
                    <p className="text-gray-300">
                      テキストデータの解析、生成、翻訳などを行うAI技術。チャットボット、感情分析、文書分析などに活用します。
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">予測分析</h3>
                    <p className="text-gray-300">
                      過去のデータから将来のトレンドや結果を予測。需要予測、リスク分析、顧客行動予測などに活用します。
                    </p>
                  </div>
                </div>
              </div>
            )
          },
          {
            id: 'development-process',
            name: '開発プロセス',
            content: (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">1. 要件定義とデータ評価</h3>
                    <p className="text-gray-300">
                      ビジネス目標の明確化、必要なデータの特定、データ品質の評価を行います。
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">2. データ前処理と設計</h3>
                    <p className="text-gray-300">
                      データのクリーニング、特徴量エンジニアリング、モデルアーキテクチャの設計を行います。
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">3. モデル開発とトレーニング</h3>
                    <p className="text-gray-300">
                      AIモデルの開発、学習、パラメータの最適化を行います。
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">4. 評価と最適化</h3>
                    <p className="text-gray-300">
                      モデルの性能評価、精度向上のための調整、実環境でのテストを行います。
                    </p>
                  </div>
                </div>
              </div>
            )
          },
          {
            id: 'main-features',
            name: '主要機能',
            content: (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">機械学習</h3>
                    <p className="text-gray-300">
                      データから学習し、パターンを認識して予測や分類を行う機械学習技術。ビジネスの意思決定支援や自動化に活用します。
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">深層学習</h3>
                    <p className="text-gray-300">
                      複雑なニューラルネットワークを用いて、画像認識、自然言語処理、音声認識などの高度なタスクを実現します。
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">自然言語処理</h3>
                    <p className="text-gray-300">
                      テキストデータの解析、生成、翻訳などを行うAI技術。チャットボット、感情分析、文書分析などに活用します。
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">予測分析</h3>
                    <p className="text-gray-300">
                      過去のデータから将来のトレンドや結果を予測。需要予測、リスク分析、顧客行動予測などに活用します。
                    </p>
                  </div>
                </div>
              </div>
            )
          },
          {
            id: 'use-cases',
            name: '活用事例',
            content: (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">金融・フィンテック</h3>
                    <p className="text-gray-300">
                      リスク評価、不正検知、市場分析、ポートフォリオ最適化など、金融分野での高度な分析と自動化を実現します。
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">小売・Eコマース</h3>
                    <p className="text-gray-300">
                      需要予測、在庫最適化、レコメンデーション、顧客セグメンテーションなど、販売戦略の最適化を実現します。
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">製造業</h3>
                    <p className="text-gray-300">
                      予知保全、品質管理、生産最適化、需要予測など、製造プロセスの効率化と品質向上を支援します。
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">ヘルスケア</h3>
                    <p className="text-gray-300">
                      画像診断支援、疾病予測、医療記録分析、創薬研究支援など、医療分野でのAI活用を推進します。
                    </p>
                  </div>
                </div>
              </div>
            )
          }
        ]}
        defaultTab="ai-overview"
        variant="dark"
        />
      </div>

      {/* 6. 従来技術との比較 - 2カラムセクション */}
      <div className="border-b border-blue-400">
        <TwoColumnSection
          title="従来技術との比較"
        leftContent={
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">従来のシステム開発</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>ルールベースの固定的な処理</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>人手による大量のデータ処理</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>限定的なパターン認識</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>スケーリングが困難</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>新しい状況への適応が遅い</span>
              </li>
            </ul>
          </div>
        }
        rightContent={
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">最新のAIソリューション</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>データからの自動学習と適応</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>大規模データの高速処理</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>複雑なパターンの認識</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>効率的なスケーリング</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>リアルタイムでの状況対応</span>
              </li>
            </ul>
          </div>
        }
        variant="dark"
        />
      </div>

      {/* 7. 導入に必要な要素 - 3カラムセクション */}
      <div className="border-b border-blue-400">
        <ThreeCardSection
          title="導入に必要な要素"
          cards={[
            {
              title: "技術要素",
              description: "AI導入に必要な技術的な要素を整理します。",
              tags: ["機械学習", "深層学習", "データ処理"]
            },
            {
              title: "ビジネス要素",
              description: "AI導入に必要なビジネス的な要素を整理します。",
              tags: ["戦略", "ROI", "変革管理"]
            },
            {
              title: "人材要素",
              description: "AI導入に必要な人材的な要素を整理します。",
              tags: ["データサイエンティスト", "エンジニア", "専門家"]
            }
          ]}
          variant="dark"
        />
      </div>

      {/* 8. なぜ今、導入が必要なのか - 2カラムセクション */}
      <div className="border-b border-blue-400">
        <TwoColumnSection
          title="なぜ今、導入が必要なのか"
          description="AIは単なるトレンドではなく、ビジネスプロセスと意思決定の方法を根本から変革する技術です。以下の理由から、企業が今AI戦略を導入することが重要です："
        leftContent={
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">市場動向とビジネス変革</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-white text-xs">📈</span>
                </span>
                <p className="text-gray-300 text-sm">
                  大手企業からスタートアップまで、AIへの投資が急増しており、市場が急速に拡大中
                </p>
              </div>
              <div className="flex items-start">
                <span className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-white text-xs">🎯</span>
                </span>
                <p className="text-gray-300 text-sm">
                  データ駆動型意思決定の重要性が高まり、AIを活用した分析が競争優位性の源泉に
                </p>
              </div>
              <div className="flex items-start">
                <span className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-white text-xs">👤</span>
                </span>
                <p className="text-gray-300 text-sm">
                  顧客はパーソナライズされた体験を期待しており、AIによる個別化が標準に
                </p>
              </div>
            </div>
          </div>
        }
        rightContent={
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">技術革新と競争優位性</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-white text-xs">🚀</span>
                </span>
                <p className="text-gray-300 text-sm">
                  大規模言語モデルやディープラーニングの進化により、AIの適用範囲が急速に拡大
                </p>
              </div>
              <div className="flex items-start">
                <span className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-white text-xs">⚡</span>
                </span>
                <p className="text-gray-300 text-sm">
                  先行企業がAIを活用した業務効率化や新サービス開発で優位性を確立し始めている
                </p>
              </div>
              <div className="flex items-start">
                <span className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-white text-xs">💡</span>
                </span>
                <p className="text-gray-300 text-sm">
                  AIによる自動化と高度な分析で、人的リソースを創造的業務に集中させることが可能に
                </p>
              </div>
            </div>
          </div>
        }
        variant="dark"
        />
      </div>

      {/* 9. 技術提供 - タブセクション（2つ目） */}
      <div className="border-b border-blue-400">
        <TabSection
          title="技術提供"
        tabs={[
          {
            id: 'development',
            name: '開発',
            content: (
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-800 p-6 rounded-lg border border-blue-500/30">
                    <h3 className="text-lg font-semibold text-white mb-2">機械学習モデル開発</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      ビジネスニーズに合わせた機械学習モデルの設計と開発
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">TensorFlow</span>
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">PyTorch</span>
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">Scikit-learn</span>
                    </div>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg border border-blue-500/30">
                    <h3 className="text-lg font-semibold text-white mb-2">自然言語処理</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      テキストデータの分析、生成、翻訳などのNLPソリューション
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">BERT</span>
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">GPT</span>
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">Transformers</span>
                    </div>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg border border-blue-500/30">
                    <h3 className="text-lg font-semibold text-white mb-2">画像認識システム</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      深層学習を用いた画像認識・分類システムの開発
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">OpenCV</span>
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">CNNs</span>
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">YOLO</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          },
          {
            id: 'consulting',
            name: 'コンサルティング',
            content: (
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-800 p-6 rounded-lg border border-blue-500/30">
                    <h3 className="text-lg font-semibold text-white mb-2">AI戦略コンサルティング</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      ビジネス目標に合わせたAI導入戦略の策定
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">戦略立案</span>
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">ロードマップ作成</span>
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">KPI設定</span>
                    </div>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg border border-blue-500/30">
                    <h3 className="text-lg font-semibold text-white mb-2">データ分析コンサルティング</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      データ収集、前処理、分析手法の最適化支援
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">データマイニング</span>
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">統計分析</span>
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">可視化</span>
                    </div>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg border border-blue-500/30">
                    <h3 className="text-lg font-semibold text-white mb-2">AI実装支援</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      AI導入プロジェクトの実装と運用サポート
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">プロジェクト管理</span>
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">チーム構築</span>
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">技術支援</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        ]}
        defaultTab="development"
        variant="dark"
        />
      </div>

      {/* 10. FAQセクション */}
      <div className="border-b border-blue-400">
        <FAQSection
          title="よくある質問"
          faqs={aiServiceData.faqs!}
          variant="dark"
        />
      </div>

      {/* 11. 関連サービスセクション */}
      <div className="border-b border-blue-400">
        <RelatedServicesSection
          title="関連サービス"
          services={aiServiceData.relatedServices!}
          variant="dark"
        />
      </div>

      {/* 12. CTAセクション */}
      <div className="border-b border-blue-400">
        <SingleColumnSection
          title="AIで新しいビジネス価値を創造しませんか？"
          description="IDEALのAI開発サービスで、貴社のビジネスに革新をもたらします。まずはお気軽にお問い合わせください。"
          variant="dark"
          className="text-center"
        >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            お問い合わせ
          </button>
          <button className="px-8 py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-colors">
            サービス一覧に戻る
          </button>
        </div>
        </SingleColumnSection>
      </div>
    </div>
  )
}