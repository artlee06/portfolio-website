"use client"

import { useState, useEffect } from "react"

interface UseScrollPositionOptions {
  threshold?: number
}

export function useScrollPosition({ threshold = 0.8 }: UseScrollPositionOptions = {}) {
  const [isPassedThreshold, setIsPassedThreshold] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight
      setIsPassedThreshold(window.scrollY > viewportHeight * threshold)
    }

    // Initial check
    handleScroll()

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll)
  }, [threshold])

  return isPassedThreshold
}
