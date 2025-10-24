/**
 * DAOOverviewSection - DAO概要セクション
 * DAOの重要性や面白さを簡潔に伝えるセクション
 */

import React from 'react'
import Link from 'next/link'
import { colors } from '../../lib/design-tokens'

const DAOOverviewSection = React.memo(() => {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            DAOについて
          </h2>
          <p className="text-lg text-gray-300">
            分散型自律組織（DAO）がもたらす新しい組織の可能性
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-800 rounded-lg p-8 mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">
              なぜidealがDAOを研究するのか
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              DAO（分散型自律組織）は、従来の中央集権的な組織運営から脱却し、
              透明性、自律性、協調性を重視した新しい組織形態です。
              私たちidealは、この革新的な組織形態が持つ可能性に注目し、
              テクノロジーを活用した公正で持続可能な社会の実現を目指しています。
            </p>
            <p className="text-gray-300 leading-relaxed">
              DAOの研究を通じて、個人の価値観と組織の目標が一致する環境を創造し、
              誰もが自分らしく貢献できる社会システムの構築を追求しています。
              これは単なる技術的な革新ではなく、人間の働き方と組織の在り方を
              根本から変革する可能性を秘めています。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">透明性</h4>
              <p className="text-gray-300 text-sm">
                すべての意思決定と活動がブロックチェーン上で記録され、誰でも検証可能
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">自律性</h4>
              <p className="text-gray-300 text-sm">
                中央集権的な管理なしに、メンバーが自律的に意思決定と実行を行う
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">協調性</h4>
              <p className="text-gray-300 text-sm">
                多様な価値観を持つメンバーが協力し、共通の目標に向かって活動
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/dao"
              className={`inline-flex items-center px-8 py-4 ${colors.accent.bg} text-white font-medium rounded-lg ${colors.accent.bgHover} transition-colors duration-200 text-lg`}
            >
              詳しくはこちら&gt;&gt;
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
})

DAOOverviewSection.displayName = 'DAOOverviewSection'

export default DAOOverviewSection
