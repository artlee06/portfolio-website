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
  thumbnailTextColor: string
  thumbnailTextColorOnHover: string
}

const caseStudies: CaseStudy[] = [
  {
    id: "project-1",
    title: "Insight",
    description: "HDB BTO Unit Selection empowered by XR",
    imageUrl: "/case-studies/insight/Thumbnail.webp",
    videoUrl: "/case-studies/insight/Hero_square.mp4",
    slug: "insight",
    thumbnailTextColor: "text-[#2e2e2e]",
    thumbnailTextColorOnHover: "text-white",
  },
  {
    id: "project-2",
    title: "Registration for Foreign Nurses",
    description: "(Coming soon) Designing user-friendly and efficient registration for foreign nurses in Singapore",
    imageUrl: "/case-studies/prs/thumbnail.webp",
    slug: "coming-soon",
    thumbnailTextColor: "text-[#2e2e2e]",
    thumbnailTextColorOnHover: "text-[#2e2e2e]",
  },
  {
    id: "project-3",
    title: "FocusTime",
    description: "(Coming soon) The pomodoro technique reimagined for XR. Clinched runner up at XR Design Challenge 2024",
    imageUrl: "/case-studies/focustime/thumbnail.webp",
    slug: "coming-soon",
    thumbnailTextColor: "text-white",
    thumbnailTextColorOnHover: "text-white",
  },
  {
    id: "project-4",
    title: "ResumeBoost",
    description: "Helping Jobseekers Improve Their Resumes with AI",
    imageUrl: "/case-studies/resumeboost/Thumbnail.webp",
    videoUrl: "/case-studies/resumeboost/rb-case-study_thumbnail_hover.mp4",
    slug: "resumeboost",
    thumbnailTextColor: "text-[#2e2e2e]",
    thumbnailTextColorOnHover: "text-[#2e2e2e]",
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
            textColorOnHover={study.thumbnailTextColorOnHover}
            textColor={study.thumbnailTextColor}
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
  textColorOnHover,
  textColor,
}: {
  caseStudy: CaseStudy
  index: number
  isHovered: boolean
  isAnyHovered: boolean
  onHover: () => void
  onHoverEnd: () => void
  textColorOnHover: string
  textColor: string
}) {
  const isLarge = index === 0 || index === 3
  const hasVideo = !!caseStudy.videoUrl
  const isFirstProject = index === 0
  const isResumeBoost = caseStudy.id === "project-4"
  const [isMobile, setIsMobile] = useState(false)

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

  // Get the URL for the case study - now all case studies are under /work/
  const getUrl = () => {
    return `/work/${caseStudy.slug}`
  }

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
      <Link href={getUrl()} className="block relative" onMouseEnter={onHover} onMouseLeave={onHoverEnd}>
        <div className="relative bg-gray-100 overflow-hidden">
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
          <div className={`relative ${isMobile ? "aspect-square" : "aspect-[16/9]"}`}>
            {(isHovered || (isMobile && isFirstProject)) && caseStudy.videoUrl ? (
              <video
                src={caseStudy.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : caseStudy.comingSoon ? (
              <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gray-50">
                <p className="text-xl font-medium text-center text-gray-500">Coming Soon</p>
              </div>
            ) : (
              <Image
                src={caseStudy.imageUrl || "/placeholder.svg"}
                alt={caseStudy.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                style={
                  isResumeBoost || (isMobile && caseStudy.id === "project-4")
                    ? { objectPosition: "10% center" }
                    : undefined
                }
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
              className="absolute top-full left-0 right-0 mt-4 text-center px-6 z-[100] bg-white p-4"
            >
              <p className="text-lg md:text-xl text-[#2e2e2e]">{caseStudy.description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </Link>
    </motion.div>
  )
}
