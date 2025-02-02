"use client"

import { Button } from "@/components/ui/button"
import { Linkedin, SunMediumIcon as Medium, Instagram } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex justify-between items-start mb-8 sm:mb-12">
          <Link href="/" className="relative">
            <div className="w-10 h-10 flex items-center justify-center bg-white text-gray-900 font-bold text-xl rounded-full">
              AL
            </div>
          </Link>
          <div className="flex flex-col items-end gap-4 sm:gap-6">
            <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-6">
              <span className="text-sm sm:text-base">Say hi 👋</span>
              <Link href="mailto:ykarthurlee@gmail.com" className="text-base sm:text-lg font-lexend">
                ykarthurlee@gmail.com
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-4">
              <span className="text-xs sm:text-sm text-gray-400 font-lexend">Need details in a PDF?</span>
              <Button variant="secondary" size="sm" className="rounded-full font-lexend text-xs sm:text-sm">
                Read my CV
              </Button>
            </div>
          </div>
        </div>
        <div className="overflow-hidden py-6 bg-gray-900">
          <div className="animate-marquee whitespace-nowrap">
            <span className="mx-4 font-lexend text-5xl">Thank you for reading!</span>
            <span className="mx-4 font-lexend text-5xl">Thank you for reading!</span>
            <span className="mx-4 font-lexend text-5xl">Thank you for reading!</span>
            <span className="mx-4 font-lexend text-5xl">Thank you for reading!</span>
            <span className="mx-4 font-lexend text-5xl">Thank you for reading!</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-gray-800 gap-4 sm:gap-0">
          <div className="flex gap-4">
            <Link href="#" className="hover:text-gray-400 transition-colors">
              <Linkedin size={18} />
            </Link>
            <Link href="#" className="hover:text-gray-400 transition-colors">
              <Medium size={18} />
            </Link>
            <Link href="#" className="hover:text-gray-400 transition-colors">
              <Instagram size={18} />
            </Link>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 font-lexend text-center sm:text-left">
            © Arthur Lee 2024. Made with lots of ❤️
          </p>
        </div>
      </div>
    </footer>
  )
}

