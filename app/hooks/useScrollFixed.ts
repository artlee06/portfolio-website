"use client"

import { useState, useEffect, useRef } from "react"

interface ScrollFixedOptions {
  threshold?: number
  duration?: number
}

export function useScrollFixed({ threshold = 0.5, duration = 1000 }: ScrollFixedOptions = {}) {
  const [isFixed, setIsFixed] = useState(false)
  const [hasCompleted, setHasCompleted] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const element = elementRef.current

    if (!element) return

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasCompleted) {
          setIsFixed(true)

          // Set a timeout to release the fixed position after the animation
          if (timeoutRef.current) clearTimeout(timeoutRef.current)
          timeoutRef.current = setTimeout(() => {
            setIsFixed(false)
            setHasCompleted(true)
          }, duration)
        }
      },
      {
        threshold,
      },
    )

    observerRef.current.observe(element)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [threshold, duration, hasCompleted])

  return { ref: elementRef, isFixed, hasCompleted }
}
