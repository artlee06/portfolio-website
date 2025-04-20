"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowDownIcon } from "@heroicons/react/24/outline"

export function ResumeBoostHero() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Scroll to content when arrow is clicked
  const scrollToContent = () => {
    const sections = document.querySelectorAll("section, .max-w-7xl > div.grid")
    if (sections.length > 0) {
      const projectDetails = document.querySelector(".max-w-7xl > div.grid")
      if (projectDetails) {
        projectDetails.scrollIntoView({ behavior: "smooth" })
      } else {
        sections[0].scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const uiElementVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  }

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-white">
      {/* Background UI Image - 90% width, maintaining aspect ratio */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <div className="relative w-[90%] h-auto max-w-6xl mx-auto">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6AIOcIw5TZJYuqOuap8XevF3pwAufN.png"
            alt="ResumeBoost interface showing resume analysis"
            width={1200}
            height={675}
            priority
            className="w-full h-auto object-contain"
          />

          {/* UI Element 1 - Top Right */}
          <motion.div
            className="absolute -top-10 -right-10 md:top-0 md:-right-20 lg:-right-32 w-[280px] md:w-[320px] lg:w-[380px] transform rotate-6"
            variants={uiElementVariants}
            initial="hidden"
            animate="visible"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3Q4wQmdsokeQIRnUZ5GCBh7CUIfPNy.png"
              alt="ResumeBoost feedback card showing suggested improvements"
              width={450}
              height={350}
              className="w-full h-auto drop-shadow-xl"
            />
          </motion.div>

          {/* UI Element 2 - Bottom Left */}
          <motion.div
            className="absolute -bottom-10 -left-10 md:bottom-0 md:-left-20 lg:-left-32 w-[280px] md:w-[320px] lg:w-[380px] transform -rotate-6"
            variants={uiElementVariants}
            initial="hidden"
            animate="visible"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1GrgLw9lmrzlHIr1GVkGBTA2aVsHAP.png"
              alt="Resume template example"
              width={450}
              height={600}
              className="w-full h-auto drop-shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      {/* White overlay with blur effect - positioned above the UI elements */}
      <div
        className="absolute inset-0 bg-white/85 backdrop-filter backdrop-blur-[8px] z-10"
        style={{ backdropFilter: "blur(8px)" }}
      ></div>

      {/* Content Container - centered text - highest z-index */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4">
        <motion.div className="text-center" initial="hidden" animate="visible" variants={containerVariants}>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-medium text-black mb-4 md:mb-6"
            variants={itemVariants}
          >
            ResumeBoost
          </motion.h1>

          <motion.p
            className="text-xl md:text-3xl lg:text-4xl text-black font-medium max-w-4xl mx-auto"
            variants={itemVariants}
          >
            Helping jobseekers enhance their resumes with AI
          </motion.p>

          <motion.div
            className="mt-12"
            variants={itemVariants}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          >
            <button
              onClick={scrollToContent}
              className="flex items-center justify-center w-12 h-12 mx-auto rounded-full bg-[#0a2540] text-white hover:bg-[#0a2540]/80 transition-colors"
              aria-label="Scroll down"
            >
              <ArrowDownIcon className="w-6 h-6" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
