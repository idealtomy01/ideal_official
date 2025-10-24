/**
 * セクション6: 技術の進化がもたらす新しい『最適化』（The Declaration）
 * 宣言セクション
 */

import React from 'react'
import { colors } from '../../lib/design-tokens'

const DeclarationSection = React.memo(() => {
  return (
    <section id="declaration" className="py-8 md:py-16">
      <p className={`text-base md:text-lg font-semibold ${colors.accent.primary} mb-2`}>6. The Declaration</p>
      <h2 className={`text-xl md:text-2xl md:text-4xl font-bold mb-8`}>
        技術の進化がもたらす新しい『最適化』
      </h2>
      
      <div className="space-y-8 text-base md:text-lg leading-relaxed">
        <p>
          このシステムの実現により、個人と組織の関係性が根本的に変化します。
          技術の進化が、これまで不可能だった新しい最適化を可能にするでしょう。
        </p>

        <div className="mt-12">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 border-l-4 border-blue-400 pl-4">
            個人の最適化
          </h3>
          
          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border border-blue-500/50">
              <h4 className="font-bold text-lg mb-3 text-blue-300">自己実現の最大化</h4>
              <p>
                個人は自分らしさを保ちながら、価値観の一致する集団で活動できるようになります。
                無理に組織に合わせる必要がなくなり、真の自己実現が可能になります。
              </p>
            </div>
            
            <div className="p-6 bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-lg border border-green-500/50">
              <h4 className="font-bold text-lg mb-3 text-green-300">貢献の可視化</h4>
              <p>
                AIによる客観的な評価により、これまで見落とされていた貢献が適切に評価されます。
                個人の努力と成果が公正に認識され、報われる社会が実現されます。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 border-l-4 border-green-400 pl-4">
            組織の最適化
          </h3>
          
          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/50">
              <h4 className="font-bold text-lg mb-3 text-purple-300">摩擦の最小化</h4>
              <p>
                価値観の一致により、組織内の摩擦が最小化され、創造性と生産性が最大化されます。
                無駄な調整コストが削減され、本質的な価値創造に集中できます。
              </p>
            </div>
            
            <div className="p-6 bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-lg border border-orange-500/50">
              <h4 className="font-bold text-lg mb-3 text-orange-300">動的適応性</h4>
              <p>
                組織は環境の変化に応じて柔軟に進化し、常に最適な状態を維持できます。
                固定化された構造に縛られることなく、持続的な成長が可能になります。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 border-l-4 border-purple-400 pl-4">
            社会の最適化
          </h3>
          
          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/50">
              <h4 className="font-bold text-lg mb-3 text-cyan-300">多様性の促進</h4>
              <p>
                様々な価値観を持つ組織が共存し、競争し合うことで、社会全体の多様性と活力が保たれます。
                画一的な価値観に縛られることなく、真の多様性が実現されます。
              </p>
            </div>
            
            <div className="p-6 bg-gradient-to-r from-teal-900/30 to-green-900/30 rounded-lg border border-teal-500/50">
              <h4 className="font-bold text-lg mb-3 text-teal-300">持続可能性</h4>
              <p>
                公正な評価システムにより、長期的な視点での価値創造が促進されます。
                短期的な利益追求ではなく、持続可能な発展が可能になります。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg border border-gray-600">
          <h3 className="text-2xl font-bold text-center mb-8 text-blue-300">
            実現される未来
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👤</span>
              </div>
              <h4 className="font-bold text-lg mb-2">個人の解放</h4>
              <p className="text-sm">自分らしさを保ちながら、真の自己実現が可能</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h4 className="font-bold text-lg mb-2">組織の進化</h4>
              <p className="text-sm">価値観の一致による効率的で創造的な組織</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h4 className="font-bold text-lg mb-2">社会の多様性</h4>
              <p className="text-sm">多様な価値観が共存する豊かな社会</p>
            </div>
          </div>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-lg border border-blue-500/50">
          <blockquote className="text-center">
            <p className="text-2xl font-bold text-blue-300 italic mb-4">
              &ldquo;技術の進化がもたらす新しい最適化&rdquo;
            </p>
            <p className="text-lg text-gray-300">
              このシステムにより、個人の尊厳を保ちながら、組織の効率性を最大化し、
              社会全体の多様性と持続可能性を実現する新しい世界が生まれます。
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
})

DeclarationSection.displayName = 'DeclarationSection'

export default DeclarationSection