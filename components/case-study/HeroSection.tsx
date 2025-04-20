"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { ArrowDownIcon } from "@heroicons/react/24/outline"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1.8)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Parallax effects
  const headsetY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scaleEffect = useTransform(scrollYProgress, [0, 1], [1, 0.9])

  // Calculate appropriate scale based on viewport size
  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth

      // Base scale on the viewport width to ensure it fits
      if (viewportWidth <= 640) {
        // Mobile
        setScale(1)
      } else if (viewportWidth <= 1920) {
        // Tablet
        setScale(1.2)
      } else {
        // Desktop
        setScale(1.6)
      }
    }

    // Initial calculation
    handleResize()

    // Update on resize
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Background color transition
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["#1a1a1a", "#ffffff"], // Dark gray to white
  )

  return (
    <motion.div ref={containerRef} className="relative h-[100vh] overflow-hidden" style={{ backgroundColor }}>
      {/* Title and subtitle as one group at the top */}
      <motion.div
        className="absolute top-[10%] md:top-[13%] left-0 w-full text-center z-10 px-4"
        style={{ y: textY, opacity }}
      >
        <h1 className="text-6xl md:text-8xl font-medium text-white drop-shadow-lg mb-2 md:mb-6">Insight</h1>
        <p className="text-lg md:text-2xl text-white/80 font-regular max-w-2xl mx-auto">
          {/* Mobile version with line break */}
          <span className="md:hidden">
            HDB BTO Unit Selection <br />
            Empowered By XR
          </span>
          {/* Desktop version without line break */}
          <span className="hidden md:inline">HDB BTO Unit Selection Empowered By XR</span>
        </p>
      </motion.div>

      {/* VR Headset with dotted outline */}
      <div className="absolute inset-0 flex flex-col items-center justify-center mt-24 md:mt-80">
        <motion.div
          className="relative w-full max-w-4xl mx-auto"
          style={{
            y: headsetY,
            opacity,
            scale: scaleEffect,
          }}
        >
          {/* VR Headset Cutout Container */}
          <div className="relative w-full aspect-[1.8/1] mx-auto">
            {/* Dotted outline effect */}
            <VRHeadsetDottedOutline scale={scale} />

            {/* Video/GIF placeholder with mask */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: "url(#vr-headset-mask)",
                transform: `scale(${scale})`,
                transformOrigin: "center center",
              }}
            >
              {/* Square video */}
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                preload="auto"
              >
                <source
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero_square-RpWuD5v9oRCWYpy8U8gaQ79peuUuDQ.mp4"
                  type="video/mp4"
                />
                {/* Fallback for browsers that don't support video */}
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="VR experience preview"
                  fill
                  priority
                  className="object-cover"
                />
              </video>
            </div>

            {/* SVG definition for the mask */}
            <svg width="0" height="0" style={{ position: "absolute" }}>
              <defs>
                <clipPath id="vr-headset-mask" clipPathUnits="objectBoundingBox">
                  <path d="M0.865,0.178c0.042,0.044,0.084,0.115,0.093,0.267c0.013,0.222-0.036,0.459-0.143,0.503c-0.088,0.037-0.161,0-0.209-0.097c-0.057-0.112-0.151-0.115-0.215,0c-0.052,0.094-0.121,0.134-0.209,0.097c-0.107-0.044-0.156-0.281-0.143-0.503c0.009-0.152,0.052-0.218,0.093-0.267c0.147-0.179,0.561-0.183,0.734,0Z" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </motion.div>

        {/* Scroll indicator - positioned directly below the VR headset */}
        <motion.div
          className="mt-8"
          style={{ opacity }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <button
            onClick={() => {
              // Find the first section after the hero
              const sections = document.querySelectorAll("section, .max-w-7xl > div.grid")
              if (sections.length > 0) {
                const projectDetails = document.querySelector(".max-w-7xl > div.grid")
                if (projectDetails) {
                  projectDetails.scrollIntoView({ behavior: "smooth" })
                } else {
                  sections[0].scrollIntoView({ behavior: "smooth" })
                }
              }
            }}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700/50 text-white hover:bg-gray-600/50 transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDownIcon className="w-6 h-6" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  )
}

// VR Headset dotted outline with 8 radiating paths
function VRHeadsetDottedOutline({ scale }: { scale: number }) {
  // Base path that follows the VR headset shape
  const basePath =
    "M86.5,17.8 c4.2,4.4,8.4,11.5,9.3,26.7 c1.3,22.2,-3.6,45.9,-14.3,50.3 c-8.8,3.7,-16.1,0,-20.9,-9.7 c-5.7,-11.2,-15.1,-11.5,-21.5,0 c-5.2,9.4,-12.1,13.4,-20.9,9.7 c-10.7,-4.4,-15.6,-28.1,-14.3,-50.3 c0.9,-15.2,5.2,-21.8,9.3,-26.7 c14.7,-17.9,56.1,-18.3,73.4,0 Z"

  // Create 8 paths with increasing scale and decreasing opacity
  const createRadiatingPaths = () => {
    const paths = []
    const totalPaths = 5

    for (let i = 1; i < totalPaths + 1; i++) {
      // Calculate scale factor for each path (1.0 to 1.35)
      const pathScale = 1 + i * 0.03

      // Calculate opacity (from 0.9 to 0.1)
      const opacity = 0.9 - i * 0.2

      // Calculate dot spacing (increasing as we go outward)
      const dotSpacing = 0.5 + i * 0.15
      const gapSpacing = 0.8 + i * 0.2

      // Calculate dot size (decreasing as we go outward)
      const dotSize = 0.15

      paths.push(
        <path
          key={i}
          d={basePath}
          fill="none"
          stroke="white"
          strokeWidth={dotSize}
          strokeDasharray={`${dotSpacing} ${gapSpacing}`}
          strokeOpacity={opacity}
          style={{
            transform: `scale(${pathScale})`,
            transformOrigin: "center center",
          }}
        />,
      )
    }

    return paths
  }

  return (
    <div
      className="absolute inset-0"
      style={{
        transform: `scale(${scale})`,
        transformOrigin: "center center",
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        {createRadiatingPaths()}
      </svg>
    </div>
  )
}
