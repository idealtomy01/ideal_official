/**
 * 企業理念ページ（ホワイトペーパー）
 * 
 * 既存のHTMLホワイトペーパーをNext.jsコンポーネントに変換
 * テキスト内容は変更せず、スタイリングのみ現在のデザインシステムに合わせる
 */

import { Metadata } from 'next'
import { Header } from '../../components/layout/Header'
import { SmoothScroll } from '../../components/layout/SmoothScroll'
import { Accordion } from '../../components/ui/Accordion'
import { 
  ValueClogSection, 
  AbsoluteConditionsSection, 
  PhilosophySection, 
  RoadmapSection, 
  DeclarationSection 
} from '../../components/philosophy'
import { processSteps } from '../../data/philosophy/processSteps'

export const metadata: Metadata = {
  title: '企業理念・ホワイトペーパー | ideal',
  description: '新しい"価値基準"のインフラ設計図 - ideal Whitepaper。自由と秩序が両立した社会を設計する、正直であることが合理的な環境の設計へ。',
  openGraph: {
    title: '企業理念・ホワイトペーパー | ideal',
    description: '新しい"価値基準"のインフラ設計図 - ideal Whitepaper。自由と秩序が両立した社会を設計する、正直であることが合理的な環境の設計へ。',
  },
}

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Header />
      <SmoothScroll />

      {/* 固定ヘッダーナビゲーション */}
      <nav className="fixed top-16 left-0 right-0 z-40 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex space-x-6 md:space-x-8 py-4 text-sm md:text-base">
            <a href="#vision" className="hover:text-blue-400 transition-colors">0. Vision</a>
            <a href="#conflict" className="hover:text-blue-400 transition-colors">1. Conflict</a>
            <a href="#philosophy" className="hover:text-blue-400 transition-colors">2. Philosophy</a>
            <a href="#mechanism" className="hover:text-blue-400 transition-colors">3. Mechanism</a>
            <a href="#structure" className="hover:text-blue-400 transition-colors">4. Structure</a>
            <a href="#path" className="hover:text-blue-400 transition-colors">5. Path</a>
            <a href="#declaration" className="hover:text-blue-400 transition-colors">6. Declaration</a>
          </div>
        </div>
      </nav>

      <main className="pt-48 md:pt-40">
        {/* 第0章：ビジョン（The Vision） */}
        <section id="vision" className="py-8 md:py-16 border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              IDEAL WHITEPAPER
            </h1>
            <p className="text-xl md:text-2xl text-center text-gray-300 mb-12">
              新しい&ldquo;価値基準&rdquo;のインフラ設計図
            </p>
            <div className="text-center">
              <p className="text-lg text-gray-400 mb-8">
                自由と秩序が両立した社会を設計する、正直であることが合理的な環境の設計へ。
              </p>
            </div>
          </div>
        </section>

        {/* 第1章：対立（The Conflict） */}
        <section id="conflict" className="py-8 md:py-16 border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              対立の構造
            </h2>
            <p className="text-center text-gray-400 mb-8">
              現在の社会システムが抱える根本的な対立構造を分析します。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 border border-gray-700 rounded-lg bg-gray-800/50">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">個人の合理性</h3>
                <p className="text-gray-300">
                  個人は自分の利益を最大化するために行動する。これは合理的な選択である。
                </p>
              </div>
              <div className="p-6 border border-gray-700 rounded-lg bg-gray-800/50">
                <h3 className="text-xl font-semibold mb-4 text-red-400">集団の合理性</h3>
                <p className="text-gray-300">
                  集団は全体の利益を最大化するために個人の行動を制限する。これも合理的な選択である。
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-300 mb-4">
                この対立は、<strong>個人の合理性</strong>と<strong>集団の合理性</strong>の間で発生する根本的な構造的問題です。
              </p>
              <p className="text-gray-400">
                従来の解決策では、どちらか一方を犠牲にすることで、真の解決には至りません。
              </p>
            </div>
          </div>
        </section>

        {/* 価値の目詰まりセクション */}
        <ValueClogSection />

        {/* 公正さを支える6つの絶対条件セクション */}
        <AbsoluteConditionsSection />

        {/* 哲学セクション */}
        <PhilosophySection />

        {/* 第3章：基本設計（The Mechanism） */}
        <section id="mechanism" className="py-8 md:py-16 border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              基本設計
            </h2>
            <p className="text-center text-gray-400 mb-8">
              新しい評価システムの基本設計原理を説明します。
            </p>

            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  透明性と自動化
                </h3>
                <p className="text-gray-300">
                  すべての評価プロセスは透明で、自動化されたシステムによって実行されます。
                  人間の主観的な判断による歪みを排除し、公正な評価を実現します。
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  プライバシー保護
                </h3>
                <p className="text-gray-300">
                  ゼロ知識証明技術を活用し、個人のプライバシーを保護しながら、
                  貢献の事実を検証可能な状態を実現します。
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  価値観の多様性
                </h3>
                <p className="text-gray-300">
                  異なる価値観を持つ組織やコミュニティでも適用可能な柔軟性を持ち、
                  各組織の価値観に応じて評価基準を調整できます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 第4章：構造（The Structure） */}
        <section id="structure" className="py-8 md:py-16 border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              システム構造
            </h2>
            <p className="text-center text-gray-400 mb-8">
              新しい評価システムの技術的構造を説明します。
            </p>

            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 border border-gray-700 rounded-lg bg-gray-800/50 text-center">
                  <h3 className="text-lg font-semibold mb-3 text-blue-400">AI検知システム</h3>
                  <p className="text-gray-300 text-sm">
                    貢献を自動的に検知・記録するAIシステム
                  </p>
                </div>
                <div className="p-6 border border-gray-700 rounded-lg bg-gray-800/50 text-center">
                  <h3 className="text-lg font-semibold mb-3 text-blue-400">ブロックチェーン</h3>
                  <p className="text-gray-300 text-sm">
                    改ざん不可能な貢献履歴の記録システム
                  </p>
                </div>
                <div className="p-6 border border-gray-700 rounded-lg bg-gray-800/50 text-center">
                  <h3 className="text-lg font-semibold mb-3 text-blue-400">DAO</h3>
                  <p className="text-gray-300 text-sm">
                    自律分散型組織による運営システム
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 第5章：道筋（The Path） */}
        <section id="path" className="py-8 md:py-16 border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              実現への道筋
            </h2>
            <p className="text-center text-gray-400 mb-8">
              理想的な社会システムの実現に向けた具体的なロードマップを提示します。
            </p>

            <div className="space-y-8">
              <div className="text-center mb-8">
                <p className="text-lg text-gray-300 mb-4">
                  <strong>未来の誰もが使える&ldquo;部品（プリミティブ）&rdquo;を一つひとつ丹念に作り上げ、その有効性を徹底的に検証していく</strong>こと。
                  それが、ideal合同会社の&ldquo;経営戦略&rdquo;です。
                </p>
              </div>
        
              <div className="mt-12">
                <Accordion 
                  items={processSteps}
                  className="space-y-4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ロードマップセクション */}
        <RoadmapSection />

        {/* 宣言セクション */}
        <DeclarationSection />

        {/* 第6章：技術の進化がもたらす新しい『最適化』（The Declaration） */}
        <section id="declaration" className="py-8 md:py-16 border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              技術の進化がもたらす新しい『最適化』
            </h2>
            <p className="text-center text-gray-400 mb-8">
              技術の進化により、これまで不可能だった新しい最適化が可能になります。
            </p>

            <div className="space-y-6 text-base md:text-lg leading-relaxed">
              <p className="mt-6 pt-6 border-t border-gray-700 font-bold text-blue-400 text-xl">
                個人の合理的な選択を、根本から変える。
              </p>
              <p>
                もはや、集団の価値観に合わせるために自分を偽り、摩擦コストを生み出す必要はありません。
              </p>
              <p className="font-bold text-gray-100">
                <strong>&ldquo;正直さを隠して現在の集団に留まる&rdquo;よりも、&ldquo;ありのままの自分でいられる最適な集団（DAO）を探し、移動する&rdquo;ことが合理的になる</strong>からです。
              </p>
              <p>
                個人はミスマッチからの解放、組織は内部摩擦の解消、双方にとっての最適解となる可能性があり、
                このメタシステムを通じて実現したい、次の進化を遂げた社会の姿です。
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
