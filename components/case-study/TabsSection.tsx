"use client"

import type React from "react"

import { useState } from "react"
import { CaseStudyTabs, CaseStudyTabsContent, CaseStudyTabsList, CaseStudyTabsTrigger } from "./CaseStudyTabs"

interface Tab {
  id: string
  label: string
  content: React.ReactNode
}

interface TabsSectionProps {
  tabs: Tab[]
  defaultValue?: string
  className?: string
}

export function TabsSection({ tabs, defaultValue, className = "" }: TabsSectionProps) {
  const [activeTab, setActiveTab] = useState(defaultValue || tabs[0].id)

  return (
    <CaseStudyTabs defaultValue={activeTab} onValueChange={setActiveTab} className={`w-full ${className}`}>
      <CaseStudyTabsList className="w-full mb-2">
        {tabs.map((tab) => (
          <CaseStudyTabsTrigger key={tab.id} value={tab.id}>
            {tab.label}
          </CaseStudyTabsTrigger>
        ))}
      </CaseStudyTabsList>

      {tabs.map((tab) => (
        <CaseStudyTabsContent key={tab.id} value={tab.id} className="mt-4">
          {tab.content}
        </CaseStudyTabsContent>
      ))}
    </CaseStudyTabs>
  )
}

