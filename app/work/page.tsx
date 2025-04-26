"use client"

import { useState, useEffect } from "react"
import { CaseStudyCard } from "@/components/CaseStudyCard"
import { Footer } from "@/components/Footer"
import { ExperimentCard } from "@/components/ExperimentCard"
import { useRouter, useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"

// Sample case study data
const caseStudies = [
  {
    id: "project-1",
    title: "Insight",
    description: "HDB BTO Unit Selection empowered by XR",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Thumbnail-kb41xkIr89cyWG9KSwcr4WxuN8GFfn.jpeg",
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero_square-RpWuD5v9oRCWYpy8U8gaQ79peuUuDQ.mp4",
    slug: "insight",
  },
  {
    id: "project-2",
    title: "Project Two",
    description: "A brief description of the project",
    comingSoon: true,
    slug: "coming-soon",
  },
  {
    id: "project-3",
    title: "Project Three",
    description: "A brief description of the project",
    comingSoon: true,
    slug: "coming-soon",
  },
  {
    id: "project-4",
    title: "ResumeBoost",
    description: "Helping Jobseekers Improve Their Resumes with AI",
    imageUrl: "/images/Thumbnail.jpg",
    videoUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rb-case-study_thumbnail_hover-WJ7rjwhTcjGkvm9J3rilovwUTI3vU6.mp4",
    slug: "resumeboost",
  },
]

// Sample experiments data - now in chronological order with mixed aspect ratios
const experiments = [
  {
    id: "exp-1",
    title: "Designing for XR: Lessons from Building a VR Prototype",
    description:
      "Sharing my experience and key learnings from developing a VR prototype for real estate visualization.",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-26%20at%209.37.05%E2%80%AFAM-WjDhYEr1oGblu0QR1s7DbfSB0zYCdQ.png",
    platform: "LinkedIn",
    date: "April 15, 2025",
    link: "https://linkedin.com/in/arthur-lee-ying-kiu/",
    aspectRatio: "square",
  },
  {
    id: "exp-2",
    title: "The Future of Resume Design in the Age of AI",
    description: "An exploration of how AI is transforming resume design and job application processes.",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-26%20at%209.52.29%E2%80%AFAM-WCrJB868POF1yrjJ5wd9cX8A94AiIg.png",
    platform: "Medium",
    date: "March 22, 2025",
    link: "https://medium.com/@ykarthurlee",
    aspectRatio: "16:9",
  },
  {
    id: "exp-3",
    title: "3D Animation Experiments with Three.js",
    description: "A series of experimental 3D animations created with Three.js and WebGL.",
    imageUrl: "/webgl-cityscape.png",
    platform: "Instagram",
    date: "February 10, 2025",
    link: "https://instagram.com/ykarthurlee/",
    aspectRatio: "square",
  },
  {
    id: "exp-4",
    title: "Micro-interactions: Small Details, Big Impact",
    description: "How thoughtful micro-interactions can significantly enhance user experience.",
    imageUrl: "/interactive-elements.png",
    platform: "Twitter",
    date: "January 28, 2025",
    link: "https://twitter.com/",
    aspectRatio: "16:9",
  },
  {
    id: "exp-5",
    title: "Design Systems for Government Digital Services",
    description: "Insights from building and maintaining design systems for government digital services.",
    imageUrl: "/digital-governance-blueprint.png",
    platform: "LinkedIn",
    date: "December 12, 2024",
    link: "https://linkedin.com/in/arthur-lee-ying-kiu/",
    aspectRatio: "16:9",
  },
  {
    id: "exp-6",
    title: "Exploring Generative AI in Design Workflows",
    description: "How I've been integrating generative AI tools into my design process.",
    imageUrl: "/ai-design-studio.png",
    platform: "Medium",
    date: "November 5, 2024",
    link: "https://medium.com/@ykarthurlee",
    aspectRatio: "square",
  },
  {
    id: "exp-7",
    title: "Behind the Scenes: Creating 3D Product Visualizations",
    description: "A look at my process for creating realistic 3D product visualizations.",
    imageUrl: "/sleek-speaker-display.png",
    platform: "Instagram",
    date: "October 18, 2024",
    link: "https://instagram.com/ykarthurlee/",
    aspectRatio: "square",
  },
  {
    id: "exp-8",
    title: "Accessibility First: Designing for Everyone",
    description: "Why accessibility should be a priority from the start of any design project.",
    imageUrl: "/inclusive-design-meeting.png",
    platform: "Twitter",
    date: "September 30, 2024",
    link: "https://twitter.com/",
    aspectRatio: "16:9",
  },
]

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState<"case-studies" | "experiments">("case-studies")
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const router = useRouter()
  const searchParams = useSearchParams()

  // Set active tab based on URL hash
  useEffect(() => {
    const hash = window.location.hash.replace("#", "")
    if (hash === "experiments") {
      setActiveTab("experiments")
    } else {
      setActiveTab("case-studies")
    }
  }, [searchParams])

  // Update URL when tab changes
  const handleTabChange = (tab: "case-studies" | "experiments") => {
    setActiveTab(tab)
    if (tab === "experiments") {
      window.location.hash = "experiments"
    } else {
      // Remove hash or set to case-studies
      window.history.pushState("", document.title, window.location.pathname)
    }
  }

  return (
    <main
      className={cn(
        "min-h-screen font-sans transition-colors duration-300",
        activeTab === "experiments" ? "bg-[#1E1E1E] text-white" : "bg-white text-[#2e2e2e]",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-32 pb-16">
        {/* Tab Navigation */}
        <div className="flex space-x-8 mb-6">
          <button
            onClick={() => handleTabChange("case-studies")}
            className={cn(
              "text-3xl md:text-5xl font-medium pb-2 transition-all",
              activeTab === "case-studies" ? "border-b-2 border-current opacity-100" : "opacity-50 hover:opacity-80",
            )}
          >
            Case Studies
          </button>
          <button
            onClick={() => handleTabChange("experiments")}
            className={cn(
              "text-3xl md:text-5xl font-medium pb-2 transition-all",
              activeTab === "experiments" ? "border-b-2 border-[#00ffbfe6] opacity-100" : "opacity-50 hover:opacity-80",
            )}
          >
            Experiments
          </button>
        </div>

        {/* Tab Description */}
        <p className="text-lg mb-12 max-w-3xl">
          {activeTab === "case-studies"
            ? "Polished case studies showcasing complete projects with in-depth process and outcomes."
            : "Work in progress, learnings, articles, and experimental work shared across various social platforms."}
        </p>

        {/* Tab Content */}
        {activeTab === "case-studies" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard
                key={study.id}
                caseStudy={study}
                isSquare={true}
                isHovered={study.id === hoveredId}
                isAnyHovered={hoveredId !== null}
                onHover={() => setHoveredId(study.id)}
                onHoverEnd={() => setHoveredId(null)}
              />
            ))}
          </div>
        ) : (
          <div className="relative">
            {/* Green Grid Background */}
            <div
              className="absolute inset-0 -z-10"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(0, 255, 191, 0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(0, 255, 191, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Render all experiments in chronological order */}
              {experiments.map((experiment) => (
                <ExperimentCard
                  key={experiment.id}
                  experiment={experiment}
                  isHovered={experiment.id === hoveredId}
                  isAnyHovered={hoveredId !== null}
                  onHover={() => setHoveredId(experiment.id)}
                  onHoverEnd={() => setHoveredId(null)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </main>
  )
}
