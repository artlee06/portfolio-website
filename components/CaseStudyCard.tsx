"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

type CaseStudy = {
  id: string
  title: string
  description: string
  imageUrl?: string
  videoUrl?: string
  slug: string
  comingSoon?: boolean
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy
  isSquare?: boolean
  // Add these props for external hover state management
  isHovered?: boolean
  isAnyHovered?: boolean
  onHover?: () => void
  onHoverEnd?: () => void
  textColorOnHover: string
  textColor: string
}

export function CaseStudyCard({
  caseStudy,
  isSquare = false,
  // Allow both internal and external hover state management
  isHovered: externalIsHovered,
  isAnyHovered: externalIsAnyHovered,
  onHover,
  onHoverEnd,
  textColorOnHover,
  textColor,
}: CaseStudyCardProps) {
  // Internal hover state (used when external state is not provided)
  const [internalIsHovered, setInternalIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Use external hover state if provided, otherwise use internal
  const isHovered = externalIsHovered !== undefined ? externalIsHovered : internalIsHovered
  const isAnyHovered = externalIsAnyHovered !== undefined ? externalIsAnyHovered : false

  const hasVideo = !!caseStudy.videoUrl
  const isFirstProject = caseStudy.id === "project-1"
  const isResumeBoost = caseStudy.slug === "resumeboost"

  // Get the URL for the case study - now all case studies are under /work/
  const getUrl = () => {
    return `/work/${caseStudy.slug}`
  }

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkMobile()

    // Add resize listener
    window.addEventListener("resize", checkMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Handle hover events based on whether external handlers are provided
  const handleMouseEnter = () => {
    if (onHover) {
      onHover()
    } else {
      setInternalIsHovered(true)
    }
  }

  const handleMouseLeave = () => {
    if (onHoverEnd) {
      onHoverEnd()
    } else {
      setInternalIsHovered(false)
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
      className={`${isSquare ? "aspect-square" : ""} relative h-full`}
    >
      <Link
        href={getUrl()}
        className="block relative h-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative bg-gray-100 overflow-hidden h-full">
          {/* Title and Arrow - Always visible */}
          <div className="absolute top-6 left-6 right-6 z-20 flex justify-between items-start">
            <p
              className={`text-sm font-medium ${
                isHovered ? textColorOnHover : textColor
              }`}
            >
              {caseStudy.title}
            </p>
            <motion.div
              animate={{
                rotate: isHovered ? 45 : 0,
              }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight
                className={`w-5 h-5 ${
                  isHovered ? textColorOnHover : textColor
                }`}
              />
            </motion.div>
          </div>

          {/* Image or Video */}
          <div className="absolute inset-0">
            {(isHovered || (isMobile && isFirstProject)) && caseStudy.videoUrl ? (
              <video src={caseStudy.videoUrl} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            ) : caseStudy.comingSoon ? (
              <div className="w-full h-full flex items-center justify-center bg-gray-50">
                <p className="text-xl font-medium text-center text-gray-500">Coming Soon</p>
              </div>
            ) : (
              <Image
                src={caseStudy.imageUrl || "/placeholder.svg"}
                alt={caseStudy.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                style={isResumeBoost ? { objectPosition: "10% center" } : undefined}
              />
            )}
          </div>
        </div>
      </Link>

      {/* Description - Appears below on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 right-0 mt-4 text-center px-6 z-[100] bg-white p-4"
          >
            <p className="text-lg md:text-xl text-[#2e2e2e]">{caseStudy.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
