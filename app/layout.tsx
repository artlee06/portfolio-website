import { Lexend } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${lexend.variable} font-sans`}>
      <body className={`${lexend.variable} font-sans`}>{children}</body>
    </html>
  )
}

