/**
 * Philosophy ページ - パフォーマンス最適化版
 * 元のファイルの完全復元 + パフォーマンス改善
 */

'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { Header } from '../../components/layout/Header'
import { HeroSection } from '../../components/sections/HeroSection'

// 動的インポートでパフォーマンス最適化
const VisionSection = dynamic(() => import('../../components/philosophy/VisionSection'), {
  ssr: false
})

const ValueClogSection = dynamic(() => import('../../components/philosophy/ValueClogSection'), {
  ssr: false
})

const PhilosophySection = dynamic(() => import('../../components/philosophy/PhilosophySection'), {
  ssr: false
})

const MechanismSection = dynamic(() => import('../../components/philosophy/MechanismSection'), {
  ssr: false
})

const StructureSection = dynamic(() => import('../../components/philosophy/StructureSection'), {
  ssr: false
})

const RoadmapSection = dynamic(() => import('../../components/philosophy/RoadmapSection'), {
  ssr: false
})

const DeclarationSection = dynamic(() => import('../../components/philosophy/DeclarationSection'), {
  ssr: false
})

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* グローバルヘッダー */}
      <Header />
      
      {/* 固定ヘッダーナビゲーション */}
      <nav className="fixed top-16 left-0 right-0 z-40 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 py-4">
            <a href="#vision" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              はじめに
            </a>
            <a href="#conflict" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              問題と課題
            </a>
            <a href="#philosophy" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              歪められた価値の再定義
            </a>
            <a href="#mechanism" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              基本設計
            </a>
            <a href="#structure" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              組織構造
            </a>
            <a href="#path" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              ロードマップ
            </a>
            <a href="#declaration" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              技術の進化
            </a>
                </div>
              </div>
      </nav>

      {/* メインコンテンツ */}
      <main className="pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ページタイトル */}
          <HeroSection
            title="自由と秩序が両立した社会を設計する"
            subText="正直であることが合理的な環境の設計へ"
          />

          {/* セクション0: はじめに */}
          <div>
            <VisionSection />
              </div>
      
          {/* セクション1: 問題と課題 */}
          <div>
            <ValueClogSection />
              </div>

          {/* セクション2: 歪められた価値の再定義 */}
          <div>
            <PhilosophySection />
            </div>
        
          {/* セクション3: 基本設計 */}
          <div>
            <MechanismSection />
            </div>

          {/* セクション4: 価値観で進化する組織構造 */}
          <div>
            <StructureSection />
              </div>
      
          {/* セクション5: ロードマップ */}
          <div>
            <RoadmapSection />
              </div>

          {/* セクション6: 技術の進化がもたらす新しい『最適化』 */}
          <div>
            <DeclarationSection />
            </div>           
        </div>
      </main>
    </div>
  )
}