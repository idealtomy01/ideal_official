/**
 * セクション4: 価値観で進化する組織構造（The Structure）
 * 構造セクション
 */

import React from 'react'
import { colors } from '../../lib/design-tokens'

const StructureSection = React.memo(() => {
  return (
    <section id="structure" className="py-8 md:py-16 border-b border-gray-800">
      <p className={`text-base md:text-lg font-semibold ${colors.accent.primary} mb-2`}>4. The Structure</p>
      <h2 className={`text-xl md:text-2xl md:text-4xl font-bold mb-8`}>
        価値観で進化する組織構造
      </h2>
      
      <div className="space-y-8 text-base md:text-lg leading-relaxed">
        <p>
          このシステムが実現する未来の組織は、従来の階層構造とは根本的に異なります。
          価値観の一致を基盤とした、動的で進化し続ける組織構造が生まれるでしょう。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-blue-400 border-l-4 border-blue-400 pl-4">
              従来の組織構造
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-800 rounded-lg border border-gray-600">
                <h4 className="font-bold text-red-400 mb-2">固定化された階層</h4>
                <p className="text-sm">役職や地位による固定的な権力構造</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg border border-gray-600">
                <h4 className="font-bold text-red-400 mb-2">評価の曖昧さ</h4>
                <p className="text-sm">主観的な評価基準による不公平な分配</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg border border-gray-600">
                <h4 className="font-bold text-red-400 mb-2">摩擦コストの蓄積</h4>
                <p className="text-sm">価値観の不一致による組織内摩擦</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-green-400 border-l-4 border-green-400 pl-4">
              新しい組織構造
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-800 rounded-lg border border-green-600">
                <h4 className="font-bold text-green-400 mb-2">動的な価値観マッチング</h4>
                <p className="text-sm">価値観の一致による自然な集団形成</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg border border-green-600">
                <h4 className="font-bold text-green-400 mb-2">透明な評価システム</h4>
                <p className="text-sm">AIによる客観的で公平な貢献評価</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg border border-green-600">
                <h4 className="font-bold text-green-400 mb-2">摩擦の最小化</h4>
                <p className="text-sm">価値観の一致による組織内協調の最大化</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-500/50">
          <h3 className="text-2xl font-bold text-center mb-8 text-blue-300">
            組織の進化プロセス
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h4 className="font-bold text-lg mb-2">価値観の明確化</h4>
              <p className="text-sm">組織の核となる価値観を明確に定義し、共有する</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h4 className="font-bold text-lg mb-2">動的マッチング</h4>
              <p className="text-sm">価値観の一致するメンバーが自然に集まる</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h4 className="font-bold text-lg mb-2">継続的進化</h4>
              <p className="text-sm">価値観の変化に応じて組織構造も進化する</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 border-l-4 border-blue-400 pl-4">
            実現される未来
          </h3>
          
          <div className="space-y-6">
            <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-600">
              <h4 className="font-bold text-lg mb-3 text-blue-400">個人の解放</h4>
              <p>
                個人は自分らしさを保ちながら、価値観の一致する集団で活動できるようになります。
                無理に組織に合わせる必要がなくなり、真の自己実現が可能になります。
              </p>
            </div>
            
            <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-600">
              <h4 className="font-bold text-lg mb-3 text-green-400">組織の効率化</h4>
              <p>
                価値観の一致により、組織内の摩擦が最小化され、創造性と生産性が最大化されます。
                無駄な調整コストが削減され、本質的な価値創造に集中できます。
              </p>
            </div>
            
            <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-600">
              <h4 className="font-bold text-lg mb-3 text-purple-400">社会の多様性</h4>
              <p>
                様々な価値観を持つ組織が共存し、競争し合うことで、社会全体の多様性と活力が保たれます。
                画一的な価値観に縛られることなく、真の多様性が実現されます。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg border border-gray-600">
          <blockquote className="text-center">
            <p className="text-xl font-bold text-blue-400 italic mb-4">
              &ldquo;価値観の一致が組織の基盤となる未来&rdquo;
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

StructureSection.displayName = 'StructureSection'

export default StructureSection
