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
        <ThreeCardSection
          title="具体的な活用方法"
          description="AI技術を活用した具体的なビジネスソリューションをご提案します"
          cards={[
            {
              title: '業務効率化・自動化',
              description: 'AIが定型業務を代行し、ヒューマンエラーを削減。従業員をより創造的なコア業務へと解放し、企業全体の生産性を飛躍的に向上させます。',
              tags: ['自動化', '効率化', 'ChatGPT'],
              modalTitle: '業務効率化・自動化',
              modalContent: (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-4">業務効率化・自動化</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">文書処理の自動化</h4>
                      <p className="text-gray-300">契約書、請求書、レポートなどの文書を自動で分類・処理。OCR技術と自然言語処理を組み合わせ、従来の手作業を大幅に削減します。</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">チャットボット・カスタマーサポート</h4>
                      <p className="text-gray-300">24時間365日の自動対応システム。よくある質問への回答、問い合わせの分類、エスカレーション判断を自動化し、顧客満足度を向上させます。</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">データ入力・集計の自動化</h4>
                      <p className="text-gray-300">Excel、データベースへの自動入力、集計レポートの自動生成。RPA（ロボティック・プロセス・オートメーション）とAIを組み合わせた高度な自動化を実現します。</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">スケジュール・リソース管理</h4>
                      <p className="text-gray-300">会議室予約、人員配置、プロジェクト管理を自動化。過去のデータを学習し、最適なスケジュールを提案します。</p>
                    </div>
                  </div>
                </div>
              ),
              modalSize: "lg"
            },
            {
              title: 'マーケティング・顧客分析',
              description: 'AIが膨大な顧客データやSNSトレンドを分析。最適なターゲット層に、最適なタイミングでメッセージを届け、マーケティングROIを最大化します。',
              tags: ['SNS', 'データ分析', '最適化'],
              modalTitle: 'マーケティング・顧客分析',
              modalContent: (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-4">マーケティング・顧客分析</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">顧客セグメンテーション</h4>
                      <p className="text-gray-300">購買履歴、行動データ、デモグラフィック情報を分析し、顧客を自動的にグループ化。ターゲティング精度を向上させ、マーケティング効果を最大化します。</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">SNS・Web分析</h4>
                      <p className="text-gray-300">Twitter、Instagram、FacebookなどのSNSデータをリアルタイムで分析。トレンドの早期発見、ブランド監視、競合分析を自動化します。</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">パーソナライズドマーケティング</h4>
                      <p className="text-gray-300">個々の顧客の嗜好や行動パターンを学習し、最適な商品推薦、メール配信、広告表示を自動化。コンバージョン率を大幅に向上させます。</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">価格最適化</h4>
                      <p className="text-gray-300">需要予測、競合価格、季節性を考慮した動的価格設定。収益最大化と顧客満足度の両立を実現します。</p>
                    </div>
                  </div>
                </div>
              ),
              modalSize: "lg"
            },
            {
              title: '品質管理・需要予測',
              description: 'AIの画像認識による不良品検知や、時系列データ分析による需要予測。製造業から小売業まで、あらゆるビジネスのリスクを最小化します。',
              tags: ['品質管理', '予測分析', '在庫管理'],
              modalTitle: '品質管理・需要予測',
              modalContent: (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-4">品質管理・需要予測</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">画像認識による品質検査</h4>
                      <p className="text-gray-300">製造ラインでの自動品質検査。欠陥品の検出、規格適合性の判定、統計的品質管理をリアルタイムで実行し、品質向上とコスト削減を実現します。</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">需要予測・在庫最適化</h4>
                      <p className="text-gray-300">過去の販売データ、季節性、外部要因を分析し、将来の需要を高精度で予測。過剰在庫と欠品のリスクを最小化し、キャッシュフローを改善します。</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">予知保全</h4>
                      <p className="text-gray-300">設備のセンサーデータを分析し、故障の兆候を早期発見。計画的なメンテナンスにより、突発的な設備停止を防ぎ、稼働率を向上させます。</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">サプライチェーン最適化</h4>
                      <p className="text-gray-300">調達、生産、配送の各段階を統合的に分析。リードタイム短縮、コスト削減、リスク管理を自動化し、サプライチェーンの効率性を最大化します。</p>
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
                    <h3 className="text-xl font-semibold text-white">予測分析</h3>
                    <p className="text-gray-300">
                    機械学習モデルを活用した高精度な予測分析。需要予測、売上予測、リスク分析など、データに基づく意思決定を支援します。
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">自然言語処理</h3>
                    <p className="text-gray-300">
                    テキストデータの高度な分析と生成。チャットボット、文書分類、感情分析、要約生成など、言語処理に関する様々なソリューションを提供します。
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">画像認識</h3>
                    <p className="text-gray-300">
                    深層学習を用いた高精度な画像認識・分類。物体検出、顔認識、異常検知など、視覚的なデータ処理を自動化します。
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">レコメンデーション</h3>
                    <p className="text-gray-300">
                    ユーザーの行動データを分析し、個別化されたレコメンデーションを提供。ECサイト、コンテンツ配信、マーケティングなどで活用できます。
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
           description="AI導入成功のための3つの重要な要素をご説明します"
           cards={[
             {
               title: "技術要素",
               description: "AI導入に必要な技術的な要素を整理します。",
               tags: ["機械学習", "深層学習", "データ処理"],
               modalTitle: "技術要素",
               modalContent: (
                 <div className="space-y-4">
                   <h3 className="text-xl font-bold text-white mb-4">技術要素</h3>
                   <div className="space-y-3">
                     <div>
                       <h4 className="font-semibold text-blue-400 mb-2">データ基盤</h4>
                       <p className="text-gray-300">高品質なデータの収集、蓄積、管理システムの構築</p>
                     </div>
                     <div>
                       <h4 className="font-semibold text-blue-400 mb-2">アルゴリズム</h4>
                       <p className="text-gray-300">機械学習・深層学習モデルの開発と最適化</p>
                     </div>
                     <div>
                       <h4 className="font-semibold text-blue-400 mb-2">インフラ</h4>
                       <p className="text-gray-300">クラウド・オンプレミス環境の構築と運用</p>
                     </div>
                   </div>
                 </div>
               ),
               modalSize: "lg"
             },
             {
               title: "ビジネス要素",
               description: "AI導入に必要なビジネス的な要素を整理します。",
               tags: ["戦略", "ROI", "変革管理"],
               modalTitle: "ビジネス要素",
               modalContent: (
                 <div className="space-y-4">
                   <h3 className="text-xl font-bold text-white mb-4">ビジネス要素</h3>
                   <div className="space-y-3">
                     <div>
                       <h4 className="font-semibold text-blue-400 mb-2">戦略策定</h4>
                       <p className="text-gray-300">AI導入の目的と目標の明確化、ロードマップの策定</p>
                     </div>
                     <div>
                       <h4 className="font-semibold text-blue-400 mb-2">ROI分析</h4>
                       <p className="text-gray-300">投資対効果の算出と継続的な効果測定</p>
                     </div>
                     <div>
                       <h4 className="font-semibold text-blue-400 mb-2">変革管理</h4>
                       <p className="text-gray-300">組織の変革と従業員のスキルアップ支援</p>
                     </div>
                   </div>
                 </div>
               ),
               modalSize: "lg"
             },
             {
               title: "人材要素",
               description: "AI導入に必要な人材的な要素を整理します。",
               tags: ["データサイエンティスト", "エンジニア", "専門家"],
               modalTitle: "人材要素",
               modalContent: (
                 <div className="space-y-4">
                   <h3 className="text-xl font-bold text-white mb-4">人材要素</h3>
                   <div className="space-y-3">
                     <div>
                       <h4 className="font-semibold text-blue-400 mb-2">データサイエンティスト</h4>
                       <p className="text-gray-300">データ分析とモデル開発の専門家</p>
                     </div>
                     <div>
                       <h4 className="font-semibold text-blue-400 mb-2">AIエンジニア</h4>
                       <p className="text-gray-300">AIシステムの実装と運用の技術者</p>
                     </div>
                     <div>
                       <h4 className="font-semibold text-blue-400 mb-2">AIコンサルタント</h4>
                       <p className="text-gray-300">AI戦略の策定と導入支援の専門家</p>
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
                  {/* カード1: 機械学習モデル開発 */}
                  <ModalTrigger
                    title="機械学習モデル開発"
                    size="lg"
                    modalContent={
                      <div className="space-y-6">
                        <h4 className="text-2xl font-bold text-white mb-4">
                          ビジネス課題を解決するカスタムAIモデル
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                          私たちは、汎用的なAIソリューションでは解決できない、貴社特有の複雑な課題に焦点を当てます。
                        </p>
                        
                        <div className="space-y-4">
                          <h5 className="text-xl font-semibold text-white">予測・分類・最適化</h5>
                          <p className="text-gray-300 leading-relaxed">
                            蓄積されたビジネスデータを基に、高精度な予測モデル（需要予測、株価予測など）、分類モデル（顧客セグメンテーション、スパム検出など）、最適化モデル（最適な広告配信、最短配送ルート探索など）をスクラッチから設計・開発します。
                          </p>
                          
                          <h5 className="text-xl font-semibold text-white">継続的な精度向上</h5>
                          <p className="text-gray-300 leading-relaxed">
                            モデルは開発して終わりではありません。市場の変化や新しいデータに適応し続けるため、継続的な学習とチューニングを行うMLOps（機械学習基盤）の構築までを一貫してサポートし、AIの価値を最大化し続けます。
                          </p>
                        </div>
                      </div>
                    }
                  >
                    <div className="bg-gray-800 p-6 rounded-lg border border-blue-500/30 hover:border-blue-400 transition-all duration-300 cursor-pointer group">
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">機械学習モデル開発</h3>
                      <p className="text-gray-300 text-sm mb-4">
                        ビジネスニーズに合わせた機械学習モデルの設計と開発
                      </p>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">TensorFlow</span>
                        <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">PyTorch</span>
                        <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">Scikit-learn</span>
                      </div>
                      <div className="mt-3 text-blue-400 text-xs font-medium">
                        クリックして詳細を見る →
                      </div>
                    </div>
                  </ModalTrigger>

                  {/* カード2: 自然言語処理 */}
                  <ModalTrigger
                    title="自然言語処理"
                    size="lg"
                    modalContent={
                      <div className="space-y-6">
                        <h4 className="text-2xl font-bold text-white mb-4">
                          「言葉」のデータをビジネス資産に変えるNLP
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                          顧客の声、社内ドキュメント、SNS上の口コミなど、企業内外に溢れる膨大なテキストデータは「未開拓の油田」です。私たちは、最先端のNLP技術でその価値を引き出します。
                        </p>
                        
                        <div className="space-y-4">
                          <h5 className="text-xl font-semibold text-white">高度なテキスト分析</h5>
                          <p className="text-gray-300 leading-relaxed">
                            BERTやGPTなどの大規模言語モデル（LLM）を活用し、単なるキーワード抽出に留まらない、文脈や感情（ポジネガ）までを深く理解したテキスト分析を実現。カスタマーサポートの自動化、チャットボットの高度化、社内ナレッジ検索エンジンの構築を支援します。
                          </p>
                          
                          <h5 className="text-xl font-semibold text-white">AIによる生成・翻訳</h5>
                          <p className="text-gray-300 leading-relaxed">
                            マーケティングコピーの自動生成、専門的なドキュメントの多言語翻訳、複雑なレポートの自動要約など、言語に関わるあらゆる知的生産活動をAIがサポートし、ビジネスのグローバル展開とスピードアップに貢献します。
                          </p>
                        </div>
                      </div>
                    }
                  >
                    <div className="bg-gray-800 p-6 rounded-lg border border-blue-500/30 hover:border-blue-400 transition-all duration-300 cursor-pointer group">
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">自然言語処理</h3>
                      <p className="text-gray-300 text-sm mb-4">
                        テキストデータの分析、生成、翻訳などのNLPソリューション
                      </p>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">BERT</span>
                        <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">GPT</span>
                        <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">Transformers</span>
                      </div>
                      <div className="mt-3 text-blue-400 text-xs font-medium">
                        クリックして詳細を見る →
                      </div>
                    </div>
                  </ModalTrigger>

                  {/* カード3: 画像認識システム */}
                  <ModalTrigger
                    title="画像認識システム"
                    size="lg"
                    modalContent={
                      <div className="space-y-6">
                        <h4 className="text-2xl font-bold text-white mb-4">
                          人間の「目」を超える、高精度な画像認識AI
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                          深層学習（ディープラーニング）を用いた画像認識技術は、人間の認識能力を超えるレベルに達しています。私たちは、この「AIの目」を貴社のビジネスに実装します。
                        </p>
                        
                        <div className="space-y-4">
                          <h5 className="text-xl font-semibold text-white">検品・監視の自動化</h5>
                          <p className="text-gray-300 leading-relaxed">
                            製造業の検品ラインにおける微細な傷や異物の検出（外観検査）、監視カメラ映像からの異常行動検知（セキュリティ）、医療画像（CT、MRI）の解析支援など、目視による作業を自動化・高度化し、ヒューマンエラーの撲滅と品質の均一化を実現します。
                          </p>
                          
                          <h5 className="text-xl font-semibold text-white">特定物体・領域の検出</h5>
                          <p className="text-gray-300 leading-relaxed">
                            CNNsやYOLOといった最先端のアルゴリズムを用い、画像内の特定の物体（例: 棚の商品、通行する車両）や領域をリアルタイムで検出・分類。在庫管理の自動化、スマートシティの交通量解析など、幅広い分野に応用します。
                          </p>
                        </div>
                      </div>
                    }
                  >
                    <div className="bg-gray-800 p-6 rounded-lg border border-blue-500/30 hover:border-blue-400 transition-all duration-300 cursor-pointer group">
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">画像認識システム</h3>
                      <p className="text-gray-300 text-sm mb-4">
                        深層学習を用いた画像認識・分類システムの開発
                      </p>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">OpenCV</span>
                        <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">CNNs</span>
                        <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">YOLO</span>
                      </div>
                      <div className="mt-3 text-blue-400 text-xs font-medium">
                        クリックして詳細を見る →
                      </div>
                    </div>
                  </ModalTrigger>
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
                  {/* カード1: AI戦略コンサルティング */}
                  <ModalTrigger
                    title="AI戦略コンサルティング"
                    size="lg"
                    modalContent={
                      <div className="space-y-6">
                        <h4 className="text-2xl font-bold text-white mb-4">
                          AI導入を「成功」に導く羅針盤
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                          「AIで何かしたいが、何から手をつければいいか分からない」——。私たちは、その漠然とした期待を、明確なビジネス成果に結びつけるための戦略地図（ロードマップ）を策定します。
                        </p>
                        
                        <div className="space-y-4">
                          <h5 className="text-xl font-semibold text-white">課題の特定とROI試算</h5>
                          <p className="text-gray-300 leading-relaxed">
                            貴社のビジネス目標と現状の課題を深くヒアリングし、AIを導入すべき最適な領域を特定します。単なる技術導入に留まらず、投資対効果（ROI）を厳密に試算し、経営判断の材料となる明確なKPI（重要業績評価指標）を設定します。
                          </p>
                          
                          <h5 className="text-xl font-semibold text-white">導入ロードマップの策定</h5>
                          <p className="text-gray-300 leading-relaxed">
                            短期的な成果（Quick Win）と中長期的なビジョン（Grand Design）を見据え、フェーズごと（PoC、本開発、全社展開）の具体的な実行計画とタイムラインを作成。技術選定から組織体制の構築まで、AI導入プロジェクト全体の設計図を提示します。
                          </p>
                        </div>
                      </div>
                    }
                  >
                    <div className="bg-gray-800 p-6 rounded-lg border border-blue-500/30 hover:border-blue-400 transition-all duration-300 cursor-pointer group">
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">AI戦略コンサルティング</h3>
                      <p className="text-gray-300 text-sm mb-4">
                        ビジネス目標に合わせたAI導入戦略の策定
                      </p>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">戦略立案</span>
                        <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">ロードマップ作成</span>
                        <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">KPI設定</span>
                      </div>
                      <div className="mt-3 text-blue-400 text-xs font-medium">
                        クリックして詳細を見る →
                      </div>
                    </div>
                  </ModalTrigger>

                  {/* カード2: データ分析コンサルティング */}
                  <ModalTrigger
                    title="データ分析コンサルティング"
                    size="lg"
                    modalContent={
                      <div className="space-y-6">
                        <h4 className="text-2xl font-bold text-white mb-4">
                          データを「価値」に変換するプロセス支援
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                          AIの性能は「データの質」で決まります。私たちは、社内に散在するデータを収集・整備し、AIが学習可能な「クリーンな燃料」へと加工するプロセス全体を支援します。
                        </p>
                        
                        <div className="space-y-4">
                          <h5 className="text-xl font-semibold text-white">データ収集・前処理（データエンジニアリング）</h5>
                          <p className="text-gray-300 leading-relaxed">
                            サイロ化した各部門のデータベース、Excelファイル、外部のAPIなど、あらゆるデータソースから情報を収集・統合します。欠損値の補完、ノイズの除去、フォーマットの統一といった地道な前処理（クレンジング）を行い、分析に耐えうる高品質なデータ基盤を構築します。
                          </p>
                          
                          <h5 className="text-xl font-semibold text-white">最適な分析手法の選定</h5>
                          <p className="text-gray-300 leading-relaxed">
                            課題の目的に応じて、統計的手法、機械学習、深層学習など、数ある分析アプローチの中から最も効果的な手法を選定。データの可視化（ダッシュボード構築）を通じて、ビジネスの意思決定に直結する「インサイト（洞察）」を導き出します。
                          </p>
                        </div>
                      </div>
                    }
                  >
                    <div className="bg-gray-800 p-6 rounded-lg border border-blue-500/30 hover:border-blue-400 transition-all duration-300 cursor-pointer group">
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">データ分析コンサルティング</h3>
                      <p className="text-gray-300 text-sm mb-4">
                        データ収集、前処理、分析手法の最適化支援
                      </p>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">データマイニング</span>
                        <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">統計分析</span>
                        <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">可視化</span>
                      </div>
                      <div className="mt-3 text-blue-400 text-xs font-medium">
                        クリックして詳細を見る →
                      </div>
                    </div>
                  </ModalTrigger>

                  {/* カード3: AI実装支援 */}
                  <ModalTrigger
                    title="AI実装支援"
                    size="lg"
                    modalContent={
                      <div className="space-y-6">
                        <h4 className="text-2xl font-bold text-white mb-4">
                          計画を「現実」にする、伴走型の実装サポート
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                          優れた戦略やモデルも、現場で使われなければ価値を生みません。私たちは、AI導入プロジェクトの全工程にわたって貴社のチームと伴走し、「絵に描いた餅」で終わらせないための実装・運用を強力にサポートします。
                        </p>
                        
                        <div className="space-y-4">
                          <h5 className="text-xl font-semibold text-white">プロジェクト管理（PM）</h5>
                          <p className="text-gray-300 leading-relaxed">
                            アジャイルな開発手法を用い、仕様変更や予期せぬ課題に柔軟に対応しながらプロジェクトを推進。スケジュール、コスト、品質のすべてを管理し、プロジェクトを成功へと導きます。
                          </p>
                          
                          <h5 className="text-xl font-semibold text-white">チーム構築と技術支援（内製化支援）</h5>
                          <p className="text-gray-300 leading-relaxed">
                            貴社内のエンジニアやデータサイエンティストへの技術トレーニング、コードレビュー、開発体制の構築支援も行います。将来的に貴社が自走してAIを活用・改善できる「内製化」をゴールに見据えた、持続可能なサポートを提供します。
                          </p>
                        </div>
                      </div>
                    }
                  >
                    <div className="bg-gray-800 p-6 rounded-lg border border-blue-500/30 hover:border-blue-400 transition-all duration-300 cursor-pointer group">
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">AI実装支援</h3>
                      <p className="text-gray-300 text-sm mb-4">
                        AI導入プロジェクトの実装と運用サポート
                      </p>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">プロジェクト管理</span>
                        <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">チーム構築</span>
                        <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">技術支援</span>
                      </div>
                      <div className="mt-3 text-blue-400 text-xs font-medium">
                        クリックして詳細を見る →
                      </div>
                    </div>
                  </ModalTrigger>
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