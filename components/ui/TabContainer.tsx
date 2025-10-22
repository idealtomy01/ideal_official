'use client'

import { Tab } from '@headlessui/react'
import { Fragment } from 'react'
import { colors, typography, transitions } from '../../lib/design-tokens'
import { TabContainerProps } from '../../types/service'

/**
 * タブコンテナコンポーネント
 * 単一責任: タブの表示と切り替えロジックのみを管理
 */
export function TabContainer({ tabs, defaultTab, className = '' }: TabContainerProps) {
  return (
    <div className={className}>
      <Tab.Group defaultIndex={defaultTab ? tabs.findIndex(tab => tab.id === defaultTab) : 0}>
        {/* タブボタン部分 */}
        <Tab.List className="flex flex-wrap lg:flex-nowrap space-x-4 border-b border-gray-700">
          {tabs.map((tab) => (
            <Tab as={Fragment} key={tab.id}>
              {({ selected }) => (
                <button
                  className={`
                    py-3 px-6 text-lg font-bold rounded-lg
                    ${transitions.colors}
                    focus:outline-none
                    focus-visible:outline-none
                    focus:ring-0
                    focus-visible:ring-0
                    ${selected
                      ? `${colors.text.primary} border-b-2 border-blue-400`
                      : `${colors.text.muted} hover:bg-blue-400/20 hover:text-blue-400`
                    }
                  `}
                >
                  {tab.name}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
        
        {/* 仕切り線 */}
        <div className="border-b border-gray-700 mt-0"></div>

        {/* タブコンテンツ部分 */}
        <Tab.Panels className="mt-8">
          {tabs.map((tab) => (
            <Tab.Panel 
              key={tab.id} 
              className={`
                ${typography.body} 
                ${colors.text.secondary}
                focus:outline-none
                focus-visible:outline-none
                focus:ring-0
                focus-visible:ring-0
              `}
            >
              {tab.content}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
