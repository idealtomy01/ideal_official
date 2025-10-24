/**
 * Hero セクション
 * 
 * トップページのファーストビュー
 * 大見出し、サブ見出し、CTAボタン
 */

import { typography, colors } from '../../lib/design-tokens'

export function Hero() {
  return (
    <section className="flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black py-24 lg:py-48">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* メイン見出し */}
        <h1
          className={`
            ${typography.h1}
            ${colors.text.primary}
            mb-6
            animate-fade-in
          `}
        >
          テクノロジーで
          <br />
          自由と秩序が両立した未来へ
        </h1>
      </div>
    </section>
  )
}

