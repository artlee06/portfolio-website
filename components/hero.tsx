import { Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Lexend } from "next/font/google"

const lexendMedium = Lexend({ subsets: ["latin"], weight: "500" })

export function Hero() {
  return (
    <section className="pt-20 pb-16 px-4 sm:pt-32 sm:pb-20 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg sm:text-xl mb-3 sm:mb-4 font-lexend">Hello Arthur here!</h2>
        <div className="space-y-3 sm:space-y-4">
          <h1 className={`text-4xl sm:text-6xl font-medium leading-tight ${lexendMedium.className}`}>
            <span className="text-[#787878]">I'm an</span>
            <div className="relative block my-2 sm:my-4">
              <span className="relative z-10 bg-white px-3 py-1 sm:px-6 sm:py-3 border-2 border-black inline-block">
                interdisciplinary designer
              </span>
              <div className="absolute inset-0 bg-black transform translate-x-1 translate-y-1 sm:translate-x-2 sm:translate-y-2 -z-10"></div>
            </div>
            <span className="text-[#787878]">who loves to tinker and create</span>
          </h1>
        </div>
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4">
          <Button variant="outline" className="rounded-full font-lexend text-sm sm:text-base">
            Read my CV
          </Button>
          <Link href="https://linkedin.com" className="p-2 hover:text-gray-600 transition-colors">
            <Linkedin size={20} />
          </Link>
          <Link href="mailto:contact@example.com" className="p-2 hover:text-gray-600 transition-colors">
            <Mail size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}

