"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"

interface UseIntersectionObserverOptions {
  threshold?: number
  rootMargin?: string
  sections: string[]
}

export function useIntersectionObserver({
  threshold = 0.2,
  rootMargin = "-10% 0px -70% 0px",
  sections,
}: UseIntersectionObserverOptions) {
  const [activeSection, setActiveSection] = useState("")
  const observer = useRef<IntersectionObserver | null>(null)

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
        threshold,
        rootMargin,
      },
    )

    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) observer.current?.observe(element)
    })

    return () => observer.current?.disconnect()
  }, [sections, threshold, rootMargin])

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

  return { activeSection, handleAnchorClick }
}
