import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface TypographyProps {
  children: ReactNode
  className?: string
}

export function Heading1({ children, className = "" }: TypographyProps) {
  return <h1 className={cn("text-4xl md:text-5xl lg:text-6xl font-medium mb-4", className)}>{children}</h1>
}

export function Heading2({ children, className = "" }: TypographyProps) {
  return <h2 className={cn("text-3xl md:text-4xl font-medium mb-8 font-sans", className)}>{children}</h2>
}

export function Heading3({ children, className = "" }: TypographyProps) {
  return <h3 className={cn("text-xl font-medium mb-4", className)}>{children}</h3>
}

export function Subtitle({ children, className = "" }: TypographyProps) {
  return <p className={cn("text-xl md:text-2xl text-gray-600", className)}>{children}</p>
}

export function BodyText({ children, className = "" }: TypographyProps) {
  return <p className={cn("text-base text-gray-600 font-inter", className)}>{children}</p>
}

export function LargeBodyText({ children, className = "" }: TypographyProps) {
  return <p className={cn("text-lg text-gray-600", className)}>{children}</p>
}

export function Caption({ children, className = "" }: TypographyProps) {
  return <p className={cn("text-sm text-gray-600 mt-2 text-center", className)}>{children}</p>
}

export function Subheader({ children, className = "" }: TypographyProps) {
  return <h3 className={cn(`text-sm uppercase font-medium mb-2`, className)}>{children}</h3>
}
