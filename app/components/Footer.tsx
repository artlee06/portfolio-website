import { Linkedin, Instagram } from "lucide-react"
import Image from "next/image"
import { ClientTicker } from "./ClientTicker"

export function Footer() {
  return (
    <footer className="bg-[#2E2E2E] text-white mt-16 py-8 md:py-12 w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Main content wrapper */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          {/* Logo and social icons */}
          <div className="flex md:flex-col justify-between md:justify-start items-center md:items-start">
            <div className="h-12 w-12 md:h-[72px] md:w-[72px] mb-6">
              <Image
                src="/Portfolio Website Logo.png"
                alt="Arthur Lee logo"
                width={72}
                height={72}
                className="object-contain"
              />
            </div>
            <div className="flex gap-4 md:gap-6 mb-8 md:mb-0">
              <a
                href="https://www.linkedin.com/in/ykarthurlee/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#434343] rounded-full p-2 hover:bg-[#5c5c5c] transition-colors"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="w-5 h-5 bi bi-linkedin fill-white" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                </svg>
              </a>
              <a
                href="https://medium.com/@ykarthurlee"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#434343] rounded-full p-2 hover:bg-[#5c5c5c] transition-colors"
                aria-label="Medium"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 12c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6 6 2.69 6 6zm8 0c0 3.31-1.343 6-3 6s-3-2.69-3-6 1.343-6 3-6 3 2.69 3 6zm3 0c0 3.31-.343 6-1 6s-1-2.69-1-6 .343-6 1-6 1 2.69 1 6z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/ykarthurlee/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#434343] rounded-full p-2 hover:bg-[#5c5c5c] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact and CV information */}
          <div className="flex flex-col items-start md:items-end space-y-6">
            <div className="flex flex-col items-start md:items-end">
              <p className="text-sm md:text-base">Say hi 👋</p>
              <a href="mailto:ykarthurlee@gmail.com" className="hover:underline">
                ykarthurlee@gmail.com
              </a>
            </div>
            <div className="flex flex-col items-start md:items-end">
              <p className="text-sm md:text-base mb-2">Need details in a PDF?</p>
              <a
                href="/cv.pdf"
                className="inline-block px-6 py-3 rounded-full bg-[#434343] hover:bg-[#5c5c5c] transition-colors"
              >
                Read my CV
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker - now full width */}
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] my-8">
        <ClientTicker />
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-sm text-gray-400 text-center">© Arthur Lee 2025. Made with lots of 🍵</div>
      </div>
    </footer>
  )
}
