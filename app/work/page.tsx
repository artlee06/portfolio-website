"use client"

import { useState, useEffect } from "react"
import { CaseStudyCard } from "@/components/CaseStudyCard"
import { Footer } from "@/components/Footer"
import { ExperimentCard } from "@/components/ExperimentCard"
import { useRouter, useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"

const caseStudies = [
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
    title: "Nursing Registration",
    description: "(Coming soon) Designing user-friendly and efficient registration for foreign nurses in Singapore",
    imageUrl: "/case-studies/prs/thumbnail.webp",
    slug: "coming-soon",
    comingSoon: true,
    thumbnailTextColor: "text-[#2e2e2e]",
    thumbnailTextColorOnHover: "text-[#2e2e2e]",
  },
  {
    id: "project-3",
    title: "FocusTime",
    description: "(Coming soon) The pomodoro technique reimagined for XR. Clinched runner up at XR Design Challenge 2024",
    imageUrl: "/case-studies/focustime/thumbnail.webp",
    slug: "coming-soon",
    comingSoon: true,
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

// Sample experiments data - now in chronological order with mixed aspect ratios
const experiments = [
  {
    id: "exp-1",
    title: "Building My Portfolio Website in Public",
    description: "Sharing my journey of creating a personal portfolio website using v0.dev, Next.js and Tailwind CSS.",
    imageUrl: "/experiments/portfoliowebsite_thumbnail_experiments.webp",
    platform: "LinkedIn",
    date: "Feb 26, 2025",
    link: "https://www.linkedin.com/posts/arthur-lee-ying-kiu_buildinpublic-activity-7300356427921903616-iZ1D",
    aspectRatio: "square",
  },
  {
    id: "exp-2",
    title: "2024 Wrap Up: XR projects throughout the year",
    description: "Reflecting on 2024, I managed to stay consistent in creating XR projects and learning new things.",
    imageUrl: "/experiments/2024_wrapup_thumbnail.webp",
    platform: "LinkedIn",
    date: "Dec 30, 2024",
    link: "https://www.linkedin.com/posts/arthur-lee-ying-kiu_2024-was-a-big-year-resumeboost-launched-activity-7279330362139230208-OLjU",
    aspectRatio: "square",
  },
  {
    id: "exp-3",
    title: "XR Apartment Visualizer: Prototype Club Project",
    description: "Shared an early version of Insight, an XR apartment visualizer, at Prototype Club.",
    imageUrl: "/experiments/prototypeclub_XR_apartment_visualiser.webp",
    platform: "LinkedIn",
    date: "Oct 28, 2024",
    link: "https://www.linkedin.com/posts/iggylove_xr-virtualreality-architecture-ugcPost-7256351551076581378-715H",
    aspectRatio: "square",
  },
  {
    id: "exp-4",
    title: "My First UX Talk at Friends of Figma Singapore",
    description: "Reflections on delivering my first UX presentation at Friends of Figma Singapore, sharing insights on tinkering and prototyping.",
    imageUrl: "/experiments/Tinkering_Sharing_work.webp",
    platform: "LinkedIn",
    date: "Oct 10, 2024",
    link: "https://www.linkedin.com/posts/arthur-lee-ying-kiu_just-gave-my-first-ever-ux-talk-at-friends-activity-7249976990579994626-HeKe",
    aspectRatio: "square",
  },
  {
    id: "exp-5",
    title: "New Iteration of FocusTime: Enhanced Productivity App",
    description: "Updates on the latest version of FocusTime, featuring improved user experience and quality of life features.",
    imageUrl: "/experiments/focusTime_update.webp",
    platform: "LinkedIn",
    date: "Sep 30, 2024",
    link: "https://www.linkedin.com/posts/arthur-lee-ying-kiu_just-wrapped-up-a-new-iteration-of-focustime-activity-7246364389518311425-4F5B",
    aspectRatio: "square",
  },
  {
    id: "exp-6",
    title: "Runner up of the XR Design Challenge 2024",
    description: "Celebrating a win in the first XR Design challenge with FocusTime, a productivity app for XR.",
    imageUrl: "/experiments/XRDC_runnerup.webp",
    platform: "LinkedIn",
    date: "Aug 13, 2024",
    link: "https://www.linkedin.com/posts/arthur-lee-ying-kiu_design-winners-of-the-first-xrd-are-in-congrats-activity-7228948628856258561-4VfW",
    aspectRatio: "square",
  },
  {
    id: "exp-7",
    title: "Creating a Unity Prototype for XR Design",
    description: "A detailed look at my process of building a functional XR prototype in Unity for the first time.",
    imageUrl: "/experiments/UnityProtoMedium.webp",
    platform: "Medium",
    date: "May 22, 2024",
    link: "https://medium.com/design-bootcamp/i-created-a-prototype-on-unity-for-xr-design-b8a030486e53",
    aspectRatio: "square",
  },
  {
    id: "exp-8",
    title: "Envision: Interior Design App for Spatial Computing",
    description: "Designing an interior design application to empower interior designers leveraging extended reality.",
    imageUrl: "/experiments/XRID_hero_image_mobile.webp",
    platform: "Medium",
    date: "Feb 25, 2024",
    link: "https://medium.com/design-bootcamp/i-designed-an-interior-design-app-for-spatial-computing-extended-reality-62865c8decf4",
    aspectRatio: "square",
  },
  {
    id: "exp-9",
    title: "Research: Emerging Technologies in Interior Design",
    description: "Exploring how XR could transform the interior design industry through user research.",
    imageUrl: "/experiments/envision_research.webp",
    platform: "Medium",
    date: "Dec 26, 2023",
    link: "https://medium.com/design-bootcamp/my-exploration-of-emerging-tech-in-interior-design-the-research-bits-988554c7c019",
    aspectRatio: "square",
  },
  {
    id: "exp-10",
    title: "Creating an XR Prototype with Figma and Bezel",
    description: "A walkthrough of my process creating a Spotify Karaoke XR experience using Figma and Bezel.",
    imageUrl: "/experiments/spotify_karaoke_bezi.webp",
    platform: "Medium",
    date: "Oct 1, 2023",
    link: "https://medium.com/design-bootcamp/i-made-an-xr-prototype-with-figma-and-bezel-627c4c37e0cf",
    aspectRatio: "square",
  },
  {
    id: "exp-11",
    title: "3D Donut Animation in Blender",
    description: "My journey learning 3D modeling and animation in Blender by creating a stylized donut scene.",
    imageUrl: "/experiments/Blender_donut.webp",
    platform: "LinkedIn",
    date: "Aug 26, 2023",
    link: "https://www.linkedin.com/posts/arthur-lee-ying-kiu_blender-3dmodeling-donuttutorial-activity-7101081446299140096-yjZw",
    aspectRatio: "square",
  },
  {
    id: "exp-12",
    title: "Designing a Karaoke Experience for Apple Vision Pro",
    description: "A case study on designing an immersive karaoke application for Apple's spatial computing platform.",
    imageUrl: "/experiments/immersion mode with friends small.webp",
    platform: "Medium",
    date: "July 8, 2023",
    link: "https://medium.com/design-bootcamp/designing-a-karaoke-experience-for-apple-vision-pro-c5b7e2b0b776",
    aspectRatio: "square",
  },
]

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState<"case-studies" | "experiments">("case-studies")
  const [hoveredId, setHoveredId] = useState<string | null>(null)
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
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-8 md:pt-32 pb-16">
        {/* Tab Navigation */}
        <div className="flex space-x-8 mb-6">
          <button
            onClick={() => handleTabChange("case-studies")}
            className={cn(
              "text-2xl md:text-5xl font-medium pb-2 transition-all",
              activeTab === "case-studies" ? "border-b-2 border-current opacity-100" : "opacity-50 hover:opacity-80",
            )}
          >
            Case Studies
          </button>
          <button
            onClick={() => handleTabChange("experiments")}
            className={cn(
              "text-2xl md:text-5xl font-medium pb-2 transition-all",
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
                textColorOnHover={study.thumbnailTextColorOnHover}
                textColor={study.thumbnailTextColor}
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
