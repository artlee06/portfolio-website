"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Footer } from "@/components/Footer"

interface CaseStudyLayoutProps {
  children: React.ReactNode
  title: string
  subtitle: string
  role: string
  duration: string
  responsibilities: string[]
}

export function CaseStudyLayout({ children, title, subtitle, role, duration, responsibilities }: CaseStudyLayoutProps) {
  const [activeSection, setActiveSection] = useState("")
  const observer = useRef<IntersectionObserver | null>(null)
  const sections = ["problem", "highlights", "research", "evolution", "solution", "impact", "retro"]
  const [isHeroPassed, setIsHeroPassed] = useState(false)

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        // Find the visible sections
        const visibleEntries = entries.filter((entry) => entry.isIntersecting)

        if (visibleEntries.length > 0) {
          // Sort by their position in the document (top to bottom)
          // This ensures we follow the natural order of sections
          const sortedVisibleSections = visibleEntries
            .map((entry) => entry.target.id)
            .sort((a, b) => {
              return sections.indexOf(a) - sections.indexOf(b)
            })

          // Select the first visible section in the natural order
          setActiveSection(sortedVisibleSections[0])
        }
      },
      {
        threshold: 0.2,
        rootMargin: "-10% 0px -70% 0px", // Bias toward the top of the viewport
      },
    )

    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) observer.current?.observe(element)
    })

    return () => observer.current?.disconnect()
  }, [sections])

  useEffect(() => {
    const handleScroll = () => {
      // Assuming the hero section is approximately 100vh
      const heroHeight = window.innerHeight
      setIsHeroPassed(window.scrollY > heroHeight * 0.8) // Show nav after scrolling 80% of hero height
    }

    // Initial check
    handleScroll()

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Add this function after the handleScroll function
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      // Set the active section immediately to avoid flickering
      setActiveSection(sectionId)

      // Scroll to the element with smooth behavior
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })

      // Update URL without causing a page jump
      window.history.pushState(null, "", `#${sectionId}`)
    }
  }

  return (
    <main className="min-h-screen bg-white text-[#2e2e2e] font-sans">
      {/* Sticky Navigation */}
      <nav
        className={`fixed top-32 right-8 z-40 hidden xl:block transition-opacity duration-300 ${isHeroPassed ? "opacity-100" : "opacity-0 pointer-events-none"}`}
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
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-4">{title}</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12">{subtitle}</p>
        </motion.div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div>
            <h3 className="text-lg font-medium mb-2">Role</h3>
            <p className="text-gray-600">{role}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Duration</h3>
            <p className="text-gray-600">{duration}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Responsibilities</h3>
            <ul className="list-disc list-inside text-gray-600">
              {responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl">{children}</div>
      </div>

      <Footer />
    </main>
  )
}

