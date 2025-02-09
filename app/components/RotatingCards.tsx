"use client"

import { useRef, useState, useEffect, useCallback, memo } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Square3Stack3DIcon, CubeIcon } from "@heroicons/react/24/outline"
import { Cube } from "./Cube"
import { AnimatePresence } from "framer-motion"

export function RotatingCards() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [is3D, setIs3D] = useState(false)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const rotate = useTransform(scrollYProgress, [0.3, 0.5], [0, 180])

  useEffect(() => {
    const unsubscribe = rotate.onChange((latest) => {
      setIs3D(latest >= 150)
    })
    return () => unsubscribe()
  }, [rotate])

  const renderCard = useCallback(() => {
    return is3D ? (
      <CardContent text="As well as 3D mediums for the future" />
    ) : (
      <CardContent text="I design in 2D mediums for the here and now" />
    )
  }, [is3D])

  return (
    <div className="min-h-[200vh]" ref={containerRef}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Mobile View */}
        <div className="md:hidden h-full flex flex-col items-center justify-center gap-4">
          <div className="flex justify-center items-center">
            <div className="scale-75">
              <Cube rotate={rotate} />
            </div>
          </div>
          <div className="flex justify-center items-center px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={is3D ? "3d" : "2d"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {renderCard()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex h-full flex-col items-center justify-center gap-16">
          <div className="flex justify-center items-center">
            <Cube rotate={rotate} />
          </div>
          <div className="flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={is3D ? "3d" : "2d"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {renderCard()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Fallback for no-js */}
        <noscript>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <div className="border border-gray-900 rounded-lg p-6">
                <Square3Stack3DIcon className="w-8 h-8" />
                <p>I design in 2D mediums for the here and now</p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="border border-gray-900 rounded-lg p-6">
                <CubeIcon className="w-8 h-8" />
                <p>As well as 3D mediums for the future</p>
              </div>
            </div>
          </div>
        </noscript>
      </div>
    </div>
  )
}

const CardContent = memo(function CardContent({ text }: { text: string }) {
  return (
    <div className="p-6 space-y-4 bg-white max-w-auto">
      <p className="text-2xl md:text-3xl text-center">{text}</p>
    </div>
  )
})

