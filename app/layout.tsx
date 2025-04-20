import { Lexend, Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/Navigation"
import type { ReactNode } from "react"

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata = {
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className={`${lexend.variable} ${inter.variable}`}>
      <body className={`${lexend.variable} font-sans antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
