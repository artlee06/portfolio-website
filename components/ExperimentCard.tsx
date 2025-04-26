"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Linkedin, Twitter, Instagram } from "lucide-react"
import { cn } from "@/lib/utils"

type Experiment = {
  id: string
  title: string
  description: string
  imageUrl: string
  platform: string
  date: string
  link: string
  aspectRatio?: "square" | "16:9"
}

interface ExperimentCardProps {
  experiment: Experiment
  isHovered?: boolean
  isAnyHovered?: boolean
  onHover?: () => void
  onHoverEnd?: () => void
}

export function ExperimentCard({ experiment, isHovered, isAnyHovered, onHover, onHoverEnd }: ExperimentCardProps) {
  const [isMobile, setIsMobile] = useState(false)
  const aspectRatio = experiment.aspectRatio || "square"
  const is16by9 = aspectRatio === "16:9"

  // // Check if we're on mobile //TODO: Remove this once we're sure the card is responsive
  // useEffect(() => {
  //   const checkMobile = () => {
  //     setIsMobile(window.innerWidth < 768)
  //   }

  //   // Initial check
  //   checkMobile()

  //   // Add resize listener
  //   window.addEventListener("resize", checkMobile)

  //   // Cleanup
  //   return () => window.removeEventListener("resize", checkMobile)
  // }, [])

  // Get platform icon
  const getPlatformIcon = () => {
    switch (experiment.platform) {
      case "LinkedIn":
        return <Linkedin className="w-5 h-5 text-white" />
      case "Twitter":
        return <Twitter className="w-5 h-5 text-white" />
      case "Instagram":
        return <Instagram className="w-5 h-5 text-white" />
      case "Medium":
        return (
          <svg
            className="w-5 h-5 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13 12c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6 6 2.69 6 6zm8 0c0 3.31-1.343 6-3 6s-3-2.69-3-6 1.343-6 3-6 3 2.69 3 6zm3 0c0 3.31-.343 6-1 6s-1-2.69-1-6 .343-6 1-6 1 2.69 1 6z" />
          </svg>
        )
      default:
        return <ArrowUpRight className="w-5 h-5 text-[#00ffbfe6]" />
    }
  }

  return (
    <motion.div
      animate={{
        opacity: isAnyHovered && !isHovered ? 0.3 : 1,
        scale: isHovered ? 1.02 : 1,
        zIndex: isHovered ? 50 : 0,
      }}
      transition={{ duration: 0.2 }}
      className="relative aspect-square h-full"
    >
      <Link
        href={experiment.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative h-full"
        onMouseEnter={onHover}
        onMouseLeave={onHoverEnd}
      >
        <div className="relative bg-[#2A2A2A] overflow-hidden h-full border border-[#3A3A3A] group">
          {/* Image Container - For 16:9 content, we add padding and a background pattern */}
          <div className="absolute inset-0 flex items-center justify-center">
            {is16by9 && (
              <div
                className="absolute inset-0 opacity-30 z-0"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(0, 255, 191, 0.05) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(0, 255, 191, 0.05) 1px, transparent 1px)
                  `,
                  backgroundSize: "20px 20px",
                }}
              />
            )}

            {/* Image - For 16:9, we constrain height to maintain aspect ratio */}
            <div
              className={cn(
                "relative w-full opacity-70 transition-opacity duration-300 group-hover:opacity-50 z-10",
                is16by9 ? "h-[56.25%]" : "h-full", // 56.25% is the height for 16:9 ratio
              )}
            >
              <Image
                src={experiment.imageUrl || "/placeholder.svg"}
                alt={experiment.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Top Gradient Overlay */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/70 to-transparent z-20" />

          {/* Bottom Gradient Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent z-20" />

          {/* Title and Platform Icon - Always visible */}
          <div className="absolute top-6 left-6 right-6 z-30 flex justify-between items-start">
            <div className="flex items-center gap-2">
              {getPlatformIcon()}
              <p className="text-sm font-medium text-white">{experiment.title}</p>
            </div>
            <motion.div
              animate={{
                rotate: isHovered ? 45 : 0,
              }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight className="w-5 h-5 text-[#00ffbfe6]" />
            </motion.div>
          </div>

          {/* Date */}
          <div className="absolute top-14 left-6 z-30">
            <p className="text-xs text-white">{experiment.date}</p>
          </div>

          {/* Description at bottom */}
          <div className="absolute bottom-6 left-6 right-6 z-30">
            <p className="text-sm text-white line-clamp-3">{experiment.description}</p>
          </div>

          {/* Aspect ratio indicator */}
          {is16by9 && (
            <div className="absolute top-6 right-14 z-30">
              <div className="bg-[#00ffbf40] text-[#00ffbf] text-xs px-2 py-1 rounded-sm">16:9</div>
            </div>
          )}

          {/* Hover border effect */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00ffbfe6] transition-colors duration-300 pointer-events-none z-20" />
        </div>
      </Link>

      {/* Read on Platform - Appears on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 right-0 text-center px-6 z-[100] p-4"
          >
            <p className="text-lg text-white">Read on {experiment.platform}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
