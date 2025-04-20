import type { ReactNode } from "react"
import { Subheader } from "./Typography"

interface ProjectDetailProps {
  label: string
  children: ReactNode
}

export function ProjectDetail({ label, children }: ProjectDetailProps) {
  return (
    <div>
      <Subheader>{label}</Subheader>
      {children}
    </div>
  )
}
