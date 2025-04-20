"use client"

import dynamic from "next/dynamic"
import type { ReactNode } from "react"

// Dynamically import components with client-side dependencies
const RotatingCards = dynamic(() => import("../components/RotatingCards").then((mod) => mod.RotatingCards), {
  ssr: false,
})

const TestimonialsSection = dynamic(
  () => import("../components/TestimonialsSection").then((mod) => mod.TestimonialsSection),
  {
    ssr: false,
  },
)

const SkillsBanner = dynamic(() => import("../components/SkillsBanner").then((mod) => mod.SkillsBanner), {
  ssr: false,
})

interface AboutClientComponentsProps {
  children?: ReactNode
}

export function AboutClientComponents({ children }: AboutClientComponentsProps) {
  return (
    <>
      <div className="mt-16 md:mt-48">
        <SkillsBanner />
      </div>

      <div>
        <RotatingCards />
      </div>

      <div className="mt-16 md:mt-24">
        <TestimonialsSection />
      </div>

      {children}
    </>
  )
}
