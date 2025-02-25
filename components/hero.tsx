"use client"

import { ArrowDownIcon } from "@heroicons/react/24/outline"
import { motion } from "framer-motion"
import { AutoRotatingCube } from "./AutoRotatingCube"

export function Hero() {
  return (
    <>
      {/* Fixed background with grid pattern and fade effect */}
      <div
        className="fixed inset-0 w-screen h-screen pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #2e2e2e 1px, transparent 1px),
            linear-gradient(to bottom, #2e2e2e 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          opacity: 0.4,
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
        }}
      />

      <section className="min-h-screen flex flex-col justify-start md:justify-center items-start md:items-center text-left md:text-center px-4 md:px-0 w-full mt-24 md:mt-0 relative z-10">
        <div className="w-auto flex justify-start md:justify-center relative">
          <AutoRotatingCube inverse={false} className="scale-75 md:scale-100" />
        </div>
        <div className="mt-8 space-y-2 md:space-y-4 relative">
          <motion.p
            className="text-xl md:text-2xl text-[#2e2e2e]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I&apos;m Arthur!
          </motion.p>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-medium leading-snug"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gray-400">I&apos;m an </span>
            <span className="text-[#2e2e2e]">interdisciplinary designer&nbsp;</span>
            <br className="hidden md:inline" />
            <span className="text-gray-400 md:mt-2 inline-block">who loves to&nbsp;</span>
            <span className="text-[#2e2e2e]">tinker and create</span>
          </motion.h1>
          <motion.div
            className="w-full md:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#case-studies"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#2e2e2e] text-white hover:bg-[#2e2e2e]/80 transition-colors mt-8"
            >
              <ArrowDownIcon className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}

