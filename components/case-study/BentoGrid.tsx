"use client"

import React, { type ReactNode } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface BentoGridItemProps {
  children?: ReactNode
  className?: string
  imageUrl?: string
  videoUrl?: string
  alt?: string
  colSpan?: number
  rowSpan?: number
  aspectRatio?: "16:9" | "square" | string
}

export const BentoGridItem = React.memo(function BentoGridItem({
  children,
  className = "",
  imageUrl,
  videoUrl,
  alt = "Case study image",
  colSpan = 1,
  rowSpan = 1,
  aspectRatio = "16:9",
}: BentoGridItemProps) {
  let colSpanClass = ""
  if (colSpan === 2) {
    colSpanClass = "md:col-span-2"
  } else if (colSpan === 3) {
    colSpanClass = "md:col-span-3"
  } else if (colSpan >= 4) {
    colSpanClass = "md:col-span-4"
  }
  const rowSpanClass = rowSpan === 2 ? "md:row-span-2" : ""

  // Determine aspect ratio class
  let aspectRatioClass = "pb-[56.25%]" // Default 16:9
  if (aspectRatio === "square") {
    aspectRatioClass = "pb-[100%]"
  } else if (aspectRatio !== "16:9") {
    // Custom aspect ratio if provided
    aspectRatioClass = `pb-[${aspectRatio}]`
  }

  return (
    <motion.div
      className={`bg-white overflow-hidden border border-gray-200 ${colSpanClass} ${rowSpanClass} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {videoUrl ? (
        aspectRatio === "square" ? (
          <div
            className="relative w-full aspect-square"
            style={{ aspectRatio: "1 / 1" }}
          >
            {videoUrl.includes("vimeo.com") ? (
              <iframe
                src={videoUrl.replace("vimeo.com", "player.vimeo.com/video").replace("?share=copy", "")}
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                loading="lazy"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="Video content"
                allowFullScreen
              ></iframe>
            ) : (
              <video
                src={videoUrl}
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            )}
          </div>
        ) : (
          <div className={`relative w-full h-0 ${aspectRatioClass}`}>
            {videoUrl.includes("vimeo.com") ? (
              <iframe
                src={videoUrl.replace("vimeo.com", "player.vimeo.com/video").replace("?share=copy", "")}
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                loading="lazy"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="Video content"
                allowFullScreen
              ></iframe>
            ) : (
              <video
                src={videoUrl}
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            )}
          </div>
        )
      ) : imageUrl ? (
        <div className={`relative w-full h-0 ${aspectRatioClass}`}>
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="p-6 h-full">{children}</div>
      )}
    </motion.div>
  )
})

interface BentoGridProps {
  children: ReactNode
  className?: string
  variant?: "highlights" | "solution"
}

export const BentoGrid = React.memo(function BentoGrid({
  children,
  className = "",
  variant = "highlights",
}: BentoGridProps) {
  // Different grid layouts based on the variant
  const gridClasses = {
    highlights: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
    solution: "grid grid-cols-1 gap-6",
  }

  return <div className={`${gridClasses[variant]} ${className}`}>{children}</div>
})