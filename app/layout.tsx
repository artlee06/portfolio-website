import type { Metadata } from "next"
import { Lexend } from "next/font/google"
import "./globals.css"
import type React from "react"

const lexend = Lexend({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Arthur Lee - Interdisciplinary Designer",
  description: "Portfolio website showcasing design and development work",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <body className={`${lexend.className} text-base`}>{children}</body>
    </html>
  )
}

