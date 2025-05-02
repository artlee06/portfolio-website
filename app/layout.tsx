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
  title: "Arthur's Portfolio",
  description: "A portfolio for Arthur, a designer who loves to tinker and build.",
  icons: {
    icon: [ {url: '/favicon.ico'}, {url: '/favicon-16x16.png', sizes: '16x16'}, {url: '/favicon-32x32.png', sizes: '32x32'}],
    apple: [ {url: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180'} ],
    android: [ {url: '/android-chrome-192x192.png', sizes: '192x192'}, {url: '/android-chrome-512x512.png', sizes: '512x512'}],
  },
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
