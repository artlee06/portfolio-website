"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

type CaseStudy = {
  id: string
  title: string
  description: string
  imageUrl: string
  videoUrl?: string
  slug: string
}

const caseStudies: CaseStudy[] = [
  {
    id: "project-1",
    title: "Insight",
    description: "HDB BTO Unit Selection empowered by XR",
    imageUrl: "/case-studies/insight/thumbnail.jpg",
    videoUrl: "/case-studies/insight/Hero_square.mp4",
    slug: "insight",
  },
  {
    id: "project-2",
    title: "Project Two",
    description: "A brief description of the first project to be added here",
    imageUrl: "/images/placeholder.svg",
    slug: "coming-soon",
  },
  {
    id: "project-3",
    title: "Project Three",
    description: "A brief description of the first project to be added here",
    imageUrl: "/images/placeholder.svg",
    slug: "coming-soon",
  },
  {
    id: "project-4",
    title: "Project Four",
    description: "A brief description of the first project to be added here",
    imageUrl: "/images/placeholder.svg",
    slug: "coming-soon",
  },
]

export function CaseStudyGrid() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section id="case-studies" className="pt-16 md:pt-24 pb-8 md:pb-8">
      <h2 className="text-3xl md:text-4xl font-medium mb-12 text-left md:text-center">Featured Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {caseStudies.map((study, index) => (
          <CaseStudyCard
            key={study.id}
            caseStudy={study}
            index={index}
            isHovered={study.id === hoveredId}
            isAnyHovered={hoveredId !== null}
            onHover={() => setHoveredId(study.id)}
            onHoverEnd={() => setHoveredId(null)}
          />
        ))}
      </div>
    </section>
  )
}

function CaseStudyCard({
  caseStudy,
  index,
  isHovered,
  isAnyHovered,
  onHover,
  onHoverEnd,
}: {
  caseStudy: CaseStudy
  index: number
  isHovered: boolean
  isAnyHovered: boolean
  onHover: () => void
  onHoverEnd: () => void
}) {
  const isLarge = index === 0 || index === 3
  const hasVideo = !!caseStudy.videoUrl

  return (
    <motion.div
      className={`${isLarge ? "md:col-span-2" : ""}`}
      animate={{
        opacity: isAnyHovered && !isHovered ? 0.3 : 1,
        scale: isHovered ? 1.02 : 1,
        zIndex: isHovered ? 50 : 0,
      }}
      transition={{ duration: 0.2 }}
    >
      <Link
        href={`/work/${caseStudy.slug}`}
        className="block relative"
        onMouseEnter={onHover}
        onMouseLeave={onHoverEnd}
      >
        <div className="relative bg-gray-100 rounded-lg overflow-hidden">
          {/* Title and Arrow - Always visible */}
          <div className="absolute top-6 left-6 right-6 z-20 flex justify-between items-start">
            <p className={`text-sm font-medium ${isHovered && hasVideo ? "text-white" : "text-[#2e2e2e]"}`}>
              {caseStudy.title}
            </p>
            <motion.div
              animate={{
                rotate: isHovered ? 45 : 0,
              }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight className={`w-5 h-5 ${isHovered && hasVideo ? "text-white" : "text-[#2e2e2e]"}`} />
            </motion.div>
          </div>

          {/* Image or Video */}
          <div className="relative aspect-[16/9]">
            {isHovered && caseStudy.videoUrl ? (
              <video
                src={caseStudy.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <Image
                src={caseStudy.imageUrl || "/placeholder.svg"}
                alt={caseStudy.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            )}
          </div>
        </div>

        {/* Description - Appears below on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-full left-0 right-0 mt-4 text-center px-6 z-50 bg-white p-4"
            >
              <p className="text-lg md:text-xl text-[#2e2e2e]">{caseStudy.description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </Link>
    </motion.div>
  )
}

