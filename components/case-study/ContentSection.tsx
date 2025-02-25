import type React from "react"
interface ContentSectionProps {
  id: string
  title: string
  children: React.ReactNode
  className?: string
}

export function ContentSection({ id, title, children, className = "" }: ContentSectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 -mx-4 md:-mx-8 lg:-mx-16 px-4 md:px-8 lg:px-16 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium mb-8">{title}</h2>
        {children}
      </div>
    </section>
  )
}

