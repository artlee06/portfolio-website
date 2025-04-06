"use client"
import { AutoRotatingCube } from "./AutoRotatingCube"

export function ContactCTA() {
  return (
    <div className="w-full mx-auto md:max-w-none">
      <div className="bg-[#2E2E2E] p-12 text-center content-center" style={{ minHeight: "40vh" }}>
        <div className="mb-8 flex flex-col items-center">
          <AutoRotatingCube inverse className="scale-75 md:scale-100" />
          <h2 className="text-white text-2xl md:text-3xl font-medium mt-8">
            Let&apos;s create something amazing together!
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:ykarthurlee@gmail.com"
            className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-white text-[#2E2E2E] hover:bg-gray-100 transition-colors"
          >
            Email me
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-transparent border border-white text-white hover:bg-white/10 transition-colors"
          >
            Message on LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}

