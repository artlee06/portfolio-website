"use client"

import type { ReactNode } from "react"
import { Subheader } from "./Typography"

interface IterationSectionProps {
  title: string
  videoSrc: string
  isReversed?: boolean
  children: ReactNode
}

export function IterationSection({ title, videoSrc, isReversed = false, children }: IterationSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-center">
      <div className={`order-2 col-span-1 ${isReversed ? "md:order-2" : "md:order-1"}`}>
        <Subheader>{title}</Subheader>
        {children}
      </div>
      <div className={`order-1 col-span-2 ${isReversed ? "md:order-1" : "md:order-2"}`}>
        <div className="relative w-full overflow-hidden border-4">
          <video src={videoSrc} autoPlay loop muted playsInline className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}
