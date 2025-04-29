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

  // Screen animation variants
  const bottomScreenVariants = {
    hidden: { y: 500, opacity: 0 },
    visible: {
      y: 200,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.3 },
    },
  }

  const middleScreenVariants = {
    hidden: { y: 500, opacity: 0 },
    visible: {
      y: 150,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.6 },
    },
  }

  const topScreenVariants = {
    hidden: { y: 500, opacity: 0 },
    visible: {
      y: 100,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.9 },
    },
  }

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-white flex flex-col">
      {/* Content Container - Title Section */}
      <div className="flex-grow flex flex-col items-center justify-center px-4 pt-16 md:pt-36">
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

      {/* Slanted Screens Container */}
      <div className="relative w-full p-8 md:p-0 h-[65vh] pointer-events-none">
        <div className="relative w-full max-w-6xl mx-auto h-full">
          {/* Bottom Screen */}
          <motion.div
            className="absolute left-[-5%] transform -translate-x-1/2 translate-y-[25%] w-[100%]"
            variants={bottomScreenVariants}
            initial="hidden"
            animate="visible"
          >
            <Image
              src="/case-studies/resumeboost/hero/Bottom_slant_hero.png"
              alt="ResumeBoost bottom interface"
              width={1100}
              height={800}
              priority
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </motion.div>

          {/* Middle Screen */}
          <motion.div
            className="absolute left-[0%] transform -translate-x-1/2 translate-y-[15%] w-[100%]"
            variants={middleScreenVariants}
            initial="hidden"
            animate="visible"
          >
            <Image
              src="/case-studies/resumeboost/hero/Middle_slant_hero.png"
              alt="ResumeBoost middle interface"
              width={1100}
              height={800}
              priority
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </motion.div>

          {/* Top Screen */}
          <motion.div
            className="absolute left-[5%] transform -translate-x-1/2 translate-y-[5%] w-[100%]"
            variants={topScreenVariants}
            initial="hidden"
            animate="visible"
          >
            <Image
              src="/case-studies/resumeboost/hero/Top_slant_hero.png"
              alt="ResumeBoost top interface"
              width={1100}
              height={800}
              priority
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
