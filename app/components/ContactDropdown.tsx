"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ContactDropdownProps {
  children: React.ReactNode
  align?: "start" | "center" | "end"
}

export function ContactDropdown({ children, align = "end" }: ContactDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={align}
        className="bg-white rounded-lg shadow-lg border border-gray-200 p-2 min-w-[180px]"
      >
        <DropdownMenuItem asChild>
          <a
            href="https://www.linkedin.com/in/arthur-lee-ying-kiu/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 rounded-md cursor-pointer hover:bg-gray-100 transition-colors"
          >
            LinkedIn Message
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a
            href="mailto:ykarthurlee@gmail.com"
            className="flex items-center px-4 py-2 rounded-md cursor-pointer hover:bg-gray-100 transition-colors"
          >
            Email Me
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 