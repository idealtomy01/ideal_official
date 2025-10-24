/**
 * セクション5: ロードマップ（The Path）
 * ロードマップセクション
 */

import React from 'react'
import { Accordion, AccordionItem } from '../ui/Accordion'
import { colors } from '../../lib/design-tokens'

// ロードマップのアコーディオンデータ
const roadmapItems: AccordionItem[] = [
  {
    id: 'phase-1',
    title: (
      <span>
        <span className="text-blue-400">フェーズ1</span>：基礎研究とプロトタイプの構築
      </span>
    ),
    content: (
      <div className="space-y-4">
        <p>
          この段階では、環境提供のために必要な要素をコードに変換するための開発・検証をします。
        </p>
        <ul className="list-disc list-inside space-y-4">
          <li>
            <strong>価値の定義と設計：</strong> 何を「貢献」とし、それに対してどのような対価（トークン等）を紐付けるのか。その価値交換システムの基本設計を確立します。
          </li>
          <li>
            <strong>技術的基盤の確立：</strong> 貢献を検知するAIと、それを記録するブロックチェーンが連携するための、基本的なアーキテクチャを設計・検証します。
          </li>
          <li>
            <strong>プライバシーと透明性の両立：</strong> ゼロ知識証明（zk-SNARKs等）の技術を活用し、貢献の事実は検証可能でありながら、個人のプライバシーを完全に保護する技術的アプローチを研究、検証します。
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 'phase-2',
    title: (
      <span>
        <span className="text-blue-400">フェーズ2</span>：AI仮想社会を活用したシミュレーション
      </span>
    ),
    content: (
      <div className="space-y-4">
        <p>
          開発したプロトタイプを、現実世界を模したAIによる仮想社会（デジタルサンドボックス）に投入し、テストと調整を繰り返します。
        </p>
        <ul className="list-disc list-inside space-y-4">
          <li>
            <strong>多様な組織モデルでの検証：</strong> 数人規模のチームから数万人規模のコミュニティまで、様々な組織、社会モデルをシミュレートし、システムの有効性と限界を洗い出します。
          </li>
          <li>
            <strong>報酬バランスの最適化：</strong> 貢献度に対する報酬の変数（インセンティブの強弱や時間経過による減衰率など）を動的に調整し、最も健全なエコシステムが生まれるパラメータを探求します。
          </li>
          <li>
            <strong>耐攻撃性のストレステスト：</strong> あらゆる「攻略法」を試みる敵対的なAIエージェントを投入し、システムの免疫機能が正しく作動するかを徹底的にテストします。
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 'phase-3',
    title: (
      <span>
        <span className="text-blue-400">フェーズ3</span>：社会実験と実装へ
      </span>
    ),
    content: (
      <div className="space-y-4">
        <p>
          技術そのものだけではなく<strong>&ldquo;中心に据える価値観を何にするか&rdquo;</strong>によって、
          &ldquo;貢献の定義&rdquo;と&ldquo;公正さの形&rdquo;がどう変わるのかという視点での検証を行い常に進化できる環境であることを確認、検証します。
        </p>
        <ul className="list-disc list-inside space-y-4">
          <li>
            <strong>価値観による適応性の検証：</strong> &ldquo;中心に据える価値観&rdquo;によって、&ldquo;貢献の定義&rdquo;と&ldquo;公正さの形&rdquo;がどう変化し、システムがそれに適応できるかを検証します。
          </li>
          <li>
            <strong>多様なユースケースでの実証：</strong> 個人の哲学、企業理念、社会課題解決など、様々な価値観を持つコミュニティでの適用可能性を実証します。
          </li>
        </ul>
        
        <p className="mt-4">
          DAOの実現に必要なのは&ldquo;環境&rdquo;であり、その環境に必要な要素を開発し、誰もが入手可能な状態とすることが、本格的な社会実装のスタートラインであり、当面の目標地点です。
        </p>
        <p className="mt-4 font-bold">
          持続可能で多様な組織の未来が形作られ、選択肢が広がる未来に必要なシステムとして機能するかの重要なフェーズです。
        </p>
      </div>
    )
  }
]

const RoadmapSection = React.memo(() => {
  return (
    <section id="path" className="py-8 md:py-16 border-b border-gray-800">
      <p className={`text-base md:text-lg font-semibold ${colors.accent.primary} mb-2`}>5. The Path</p>
      <h2 className={`text-xl md:text-2xl md:text-4xl font-bold mb-8`}>
        ロードマップ
      </h2>
      
      <div className="space-y-8 text-base md:text-lg leading-relaxed">
        <p>
          このシステムの実現に向けて、段階的な開発と検証を進めていきます。
          各フェーズで重要な技術的課題と社会的課題を解決しながら、最終的な社会実装を目指します。
        </p>

        <div className="mt-12">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 border-l-4 border-blue-400 pl-4">
            開発フェーズ
          </h3>
          
          <div className="border border-blue-400 rounded-lg p-4">
            <Accordion 
              items={roadmapItems}
              className="mt-8"
            />
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 border-l-4 border-green-400 pl-4">
            期待される成果
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-lg border border-blue-500/50">
              <h4 className="font-bold text-lg mb-3 text-blue-300">技術的成果</h4>
              <ul className="space-y-2 text-sm">
                <li>• AIによる貢献検知システムの確立</li>
                <li>• ブロックチェーン基盤の構築</li>
                <li>• プライバシー保護技術の実装</li>
                <li>• スマートコントラクトの最適化</li>
              </ul>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-green-900/30 to-blue-900/30 rounded-lg border border-green-500/50">
              <h4 className="font-bold text-lg mb-3 text-green-300">社会的成果</h4>
              <ul className="space-y-2 text-sm">
                <li>• 公正な評価システムの実現</li>
                <li>• 個人の尊厳の保護</li>
                <li>• 組織の効率性向上</li>
                <li>• 社会全体の多様性促進</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg border border-gray-600">
          <blockquote className="text-center">
            <p className="text-xl font-bold text-blue-400 italic mb-4">
              &ldquo;持続可能で多様な組織の未来&rdquo;
            </p>
            <p className="text-gray-300">
              このシステムにより、個人の尊厳を保ちながら、組織の効率性を最大化する
              新しい組織形態が実現されるでしょう。
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
})

RoadmapSection.displayName = 'RoadmapSection'

export default RoadmapSection