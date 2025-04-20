"use client"

import { motion } from "framer-motion"
import { Square3Stack3DIcon, CubeIcon, CodeBracketIcon, PaintBrushIcon } from "@heroicons/react/24/outline"

export function ContactCTA() {
  return (
    <div className="w-full mx-auto md:max-w-none">
      <div className="bg-[#2E2E2E] p-12 text-center content-center" style={{ minHeight: "60vh" }}>
        <div className="mb-8">
          <AutoRotatingCube />
          <h2 className="text-white text-2xl md:text-3xl font-medium mt-4">
            Now that you know me, let&apos;s get in touch!
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:ykarthurlee@gmail.com"
            className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-white text-black hover:bg-gray-100 transition-colors"
          >
            Email me
          </a>
          <a
            href="https://www.linkedin.com/in/arthur-lee-ying-kiu/"
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

function AutoRotatingCube() {
  const icons = [Square3Stack3DIcon, CubeIcon, CodeBracketIcon, PaintBrushIcon]

  return (
    <div className="mx-auto relative perspective w-16 h-16">
      <motion.div
        className="w-full h-full preserve-3d"
        animate={{ rotateY: 360 }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        {icons.map((Icon, index) => (
          <div
            key={index}
            className="absolute inset-0 flex items-center justify-center bg-white"
            style={{
              transform: `rotateY(${index * 90}deg) translateZ(32px)`,
              backfaceVisibility: "hidden",
            }}
          >
            <Icon className="w-8 h-8 text-[#2E2E2E]" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
