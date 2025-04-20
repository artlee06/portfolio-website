import type React from "react"
import { Heading2 } from "./Typography"
import { cn } from "@/lib/utils"

interface ContentSectionProps {
  id: string
  title: string
  children: React.ReactNode
  className?: string
}

export function ContentSection({ id, title, children, className = "" }: ContentSectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-20 -mx-4 md:-mx-8 lg:-mx-16 px-4 md:px-8 lg:px-16", className)}>
      <div className="mx-auto">
        <Heading2 className="max-w-3xl mx-auto">{title}</Heading2>
        {children}
      </div>
    </section>
  )
}
