import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Subheader } from "./Typography"

interface MediaContainerProps {
  children: ReactNode
  className?: string
  caption?: string
}

export function MediaContainer({ children, className = "", caption }: MediaContainerProps) {
  return (
    <div className={cn("flex flex-col items-center mt-8 w-full", className)}>
      {children}
      {caption && <p className="text-sm text-gray-600 mt-2 text-center max-w-3xl mx-auto">{caption}</p>}
    </div>
  )
}

interface ResponsiveImageProps {
  src: string
  alt: string
  aspectRatio?: string
  className?: string
}

export function ResponsiveImage({ src, alt, aspectRatio = "16/9", className = "" }: ResponsiveImageProps) {
  return (
    <div className={cn(`relative aspect-[${aspectRatio}] w-full overflow-hidden`, className)}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 800px, 1200px"
        className="object-cover"
      />
    </div>
  )
}

interface InsightBlockProps {
  title: string
  children: ReactNode
}

export function InsightBlock({ title, children }: InsightBlockProps) {
  return (
    <div className="py-6">
      <Subheader>{title}</Subheader>
      <div className="space-y-4 text-gray-600">{children}</div>
    </div>
  )
}
