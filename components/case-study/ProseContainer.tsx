import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ProseContainerProps {
  children: ReactNode
  className?: string
}

export function ProseContainer({ children, className = "" }: ProseContainerProps) {
  return <div className={cn("prose prose-gray max-w-3xl mx-auto", className)}>{children}</div>
}
