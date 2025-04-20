"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Navigation() {
  const pathname = usePathname()
  // Consider case study pages as part of the 'Work' section
  const activePath = pathname.startsWith("/work/") ? "/work" : pathname

  return (
    <div className="fixed w-full bottom-8 md:bottom-auto md:top-8 z-50">
      <nav className="mx-auto max-w-fit p-2 rounded-full backdrop-blur-md bg-white/70 border border-gray-300/20 shadow-lg">
        <ul className="flex items-center gap-2 md:gap-4 text-base">
          <li>
            <Link href="/" className="block px-4 py-2 md:px-8 md:py-2 rounded-full hover:bg-gray-100">
              <div className="flex items-center justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9DkSNtE16nDtf776sR7UgjM5G2iIAp.png"
                  alt="Arthur Lee logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={cn(
                "transition-colors px-6 py-4 md:px-8  rounded-full text-sm md:text-base",
                activePath === "/about" ? "text-black bg-gray-100" : "text-gray-500 hover:text-black hover:bg-gray-100",
              )}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/work"
              className={cn(
                "transition-colors px-6 py-4 md:px-8 rounded-full text-sm md:text-base",
                activePath === "/work" ? "text-black bg-gray-100" : "text-gray-500 hover:text-black hover:bg-gray-100",
              )}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={cn(
                "transition-colors px-6 py-4 md:px-8 rounded-full text-sm md:text-base",
                activePath === "/contact"
                  ? "text-black bg-gray-100"
                  : "text-gray-500 hover:text-black hover:bg-gray-100",
              )}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
