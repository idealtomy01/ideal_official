/**
 * Philosophy ページ - パフォーマンス最適化版
 * 元のファイルの完全復元 + パフォーマンス改善
 */

'use client'

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Header } from '../../components/layout/Header'

// 動的インポートでパフォーマンス最適化
const ValueClogSection = dynamic(() => import('../../components/philosophy/ValueClogSection'), {
  loading: () => (
    <div className="py-8 md:py-16 border-b border-gray-800">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-700 rounded mb-4"></div>
        <div className="h-6 bg-gray-700 rounded mb-8"></div>
        <div className="space-y-4">
          <div className="h-4 bg-gray-700 rounded"></div>
          <div className="h-4 bg-gray-700 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  ),
  ssr: false
})

const PhilosophySection = dynamic(() => import('../../components/philosophy/PhilosophySection'), {
  loading: () => (
    <div className="py-8 md:py-16 border-b border-gray-800">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-700 rounded mb-4"></div>
        <div className="h-6 bg-gray-700 rounded mb-8"></div>
        <div className="space-y-4">
          <div className="h-4 bg-gray-700 rounded"></div>
          <div className="h-4 bg-gray-700 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  ),
  ssr: false
})

const MechanismSection = dynamic(() => import('../../components/philosophy/MechanismSection'), {
  loading: () => (
    <div className="py-8 md:py-16 border-b border-gray-800">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-700 rounded mb-4"></div>
        <div className="h-6 bg-gray-700 rounded mb-8"></div>
        <div className="space-y-4">
          <div className="h-4 bg-gray-700 rounded"></div>
          <div className="h-4 bg-gray-700 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  ),
  ssr: false
})

const StructureSection = dynamic(() => import('../../components/philosophy/StructureSection'), {
  loading: () => (
    <div className="py-8 md:py-16 border-b border-gray-800">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-700 rounded mb-4"></div>
        <div className="h-6 bg-gray-700 rounded mb-8"></div>
        <div className="space-y-4">
          <div className="h-4 bg-gray-700 rounded"></div>
          <div className="h-4 bg-gray-700 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  ),
  ssr: false
})

const RoadmapSection = dynamic(() => import('../../components/philosophy/RoadmapSection'), {
  loading: () => (
    <div className="py-8 md:py-16 border-b border-gray-800">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-700 rounded mb-4"></div>
        <div className="h-6 bg-gray-700 rounded mb-8"></div>
        <div className="space-y-4">
          <div className="h-4 bg-gray-700 rounded"></div>
          <div className="h-4 bg-gray-700 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  ),
  ssr: false
})

const DeclarationSection = dynamic(() => import('../../components/philosophy/DeclarationSection'), {
  loading: () => (
    <div className="py-8 md:py-16">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-700 rounded mb-4"></div>
        <div className="h-6 bg-gray-700 rounded mb-8"></div>
        <div className="space-y-4">
          <div className="h-4 bg-gray-700 rounded"></div>
          <div className="h-4 bg-gray-700 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  ),
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
          <div className="text-center py-16 md:py-24">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Philosophy
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              技術の進化がもたらす新しい『最適化』
            </p>
          </div>

          {/* セクション1: 問題と課題 */}
          <Suspense fallback={
            <div className="py-8 md:py-16 border-b border-gray-800">
              <div className="animate-pulse">
                <div className="h-8 bg-gray-700 rounded mb-4"></div>
                <div className="h-6 bg-gray-700 rounded mb-8"></div>
              </div>
            </div>
          }>
            <ValueClogSection />
          </Suspense>

          {/* セクション2: 歪められた価値の再定義 */}
          <Suspense fallback={
            <div className="py-8 md:py-16 border-b border-gray-800">
              <div className="animate-pulse">
                <div className="h-8 bg-gray-700 rounded mb-4"></div>
                <div className="h-6 bg-gray-700 rounded mb-8"></div>
              </div>
            </div>
          }>
            <PhilosophySection />
          </Suspense>

          {/* セクション3: 基本設計 */}
          <Suspense fallback={
            <div className="py-8 md:py-16 border-b border-gray-800">
              <div className="animate-pulse">
                <div className="h-8 bg-gray-700 rounded mb-4"></div>
                <div className="h-6 bg-gray-700 rounded mb-8"></div>
              </div>
            </div>
          }>
            <MechanismSection />
          </Suspense>

          {/* セクション4: 価値観で進化する組織構造 */}
          <Suspense fallback={
            <div className="py-8 md:py-16 border-b border-gray-800">
              <div className="animate-pulse">
                <div className="h-8 bg-gray-700 rounded mb-4"></div>
                <div className="h-6 bg-gray-700 rounded mb-8"></div>
              </div>
            </div>
          }>
            <StructureSection />
          </Suspense>

          {/* セクション5: ロードマップ */}
          <Suspense fallback={
            <div className="py-8 md:py-16 border-b border-gray-800">
              <div className="animate-pulse">
                <div className="h-8 bg-gray-700 rounded mb-4"></div>
                <div className="h-6 bg-gray-700 rounded mb-8"></div>
              </div>
            </div>
          }>
            <RoadmapSection />
          </Suspense>

          {/* セクション6: 技術の進化がもたらす新しい『最適化』 */}
          <Suspense fallback={
            <div className="py-8 md:py-16">
              <div className="animate-pulse">
                <div className="h-8 bg-gray-700 rounded mb-4"></div>
                <div className="h-6 bg-gray-700 rounded mb-8"></div>
              </div>
            </div>
          }>
            <DeclarationSection />
          </Suspense>
        </div>
      </main>
    </div>
  )
}