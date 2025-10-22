/**
 * トップページ
 * 
 * サーバーコンポーネント（データフェッチなし）
 * Hero, ServicesOverview, CallToAction セクションで構成
 */

import { Hero } from '../components/sections/Hero'
import { ServicesOverview } from '../components/sections/ServicesOverview'
import { CallToAction } from '../components/sections/CallToAction'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <CallToAction />
    </>
  )
}
