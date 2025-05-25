"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Footer } from "@/components/Footer"
import { Heading1, Subtitle } from "./Typography"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
import { useScrollPosition } from "@/hooks/useScrollPosition"
import { ProjectDetail } from "./ProjectDetail"

interface CaseStudyLayoutProps {
  children: React.ReactNode
  title: string
  subtitle: string
  role: string
  duration: string
  responsibilities: string[]
}

export function CaseStudyLayout({ children, title, subtitle, role, duration, responsibilities }: CaseStudyLayoutProps) {
  const sections = ["problem", "highlights", "research", "evolution", "solution", "impact", "retro"]
  const { activeSection, handleAnchorClick } = useIntersectionObserver({ sections })
  const isHeroPassed = useScrollPosition({ threshold: 0.8 })

  return (
    <main className="min-h-screen bg-white text-[#2e2e2e] font-sans">
      {/* Sticky Navigation */}
      <nav
        className={cn(
          "fixed top-32 right-8 z-40 hidden xl:block transition-opacity duration-300",
          isHeroPassed ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        <ul className="space-y-4 w-48">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={(e) => handleAnchorClick(e, section)}
                className={cn(
                  "block py-2 px-4 rounded-full text-sm transition-colors",
                  activeSection === section
                    ? "bg-[#2e2e2e] text-white"
                    : "text-gray-500 hover:text-[#2e2e2e] hover:bg-gray-100",
                )}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-12 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <Heading1>{title}</Heading1>
          <Subtitle className="mb-12">{subtitle}</Subtitle>
        </motion.div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ProjectDetail label="Role">
            <p className="text-gray-600 font-inter text-base">{role}</p>
          </ProjectDetail>

          <ProjectDetail label="Duration">
            <p className="text-gray-600 font-inter text-base">{duration}</p>
          </ProjectDetail>

          <ProjectDetail label="Responsibilities">
            <ul className="list-disc list-inside text-gray-600 font-inter text-base">
              {responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </ProjectDetail>
        </div>

        {/* Main Content */}
        <div className="case-study-content">{children}</div>
      </div>

      <Footer />
    </main>
  )
}
