"use client"

import { useState, useMemo, useCallback } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import React from "react" // Import React

type Skill = {
  id: number
  name: string
}

const twoDSkills: Skill[] = [
  { id: 1, name: "User research" },
  { id: 2, name: "Workshop facilitation" },
  { id: 3, name: "Design system" },
  { id: 4, name: "Information architecture" },
  { id: 5, name: "UX Design" },
  { id: 6, name: "UI Design" },
  { id: 7, name: "Interaction Design" },
  { id: 8, name: "Visual Design" },
  { id: 9, name: "User flows" },
  { id: 10, name: "Usability testing" },
  { id: 11, name: "Concept testing" },
  { id: 12, name: "Figma" },
  { id: 13, name: "Figjam" },
  { id: 14, name: "Adobe Illustrator" },
  { id: 15, name: "Jitter" },
]

const threeDSkills: Skill[] = [
  { id: 1, name: "3D Modeling" },
  { id: 2, name: "Texture mapping" },
  { id: 3, name: "Basic animation" },
  { id: 4, name: "Lighting" },
  { id: 5, name: "Storyboarding" },
  { id: 6, name: "XR design" },
  { id: 7, name: "XR prototyping" },
  { id: 8, name: "Blender" },
  { id: 9, name: "Unity" },
  { id: 10, name: "Meta XR SDK" },
  { id: 11, name: "Lens Studio" },
]

export function SkillsBanner() {
  const [mode, setMode] = useState<"2D" | "3D">("2D")

  const { skills, gradientColor, bgColor, textColor } = useMemo(
    () => ({
      skills: mode === "2D" ? twoDSkills : threeDSkills,
      gradientColor: mode === "2D" ? "white" : "#2E2E2E",
      bgColor: mode === "2D" ? "bg-white" : "bg-[#2E2E2E]",
      textColor: mode === "2D" ? "text-[#2e2e2e]" : "text-white",
    }),
    [mode],
  )

  const handleModeChange = useCallback((value: string) => {
    setMode(value as "2D" | "3D")
  }, [])

  return (
    <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw]">
      <div className="text-center mb-4">
        <Tabs defaultValue="2D" onValueChange={handleModeChange}>
          <TabsList className="bg-white border border-gray-200 inline-flex">
            <TabsTrigger value="2D" className={mode === "2D" ? "bg-[#2e2e2e] text-white" : ""}>
              {mode === "2D" ? "2D-Centric Skills" : "2D"}
            </TabsTrigger>
            <TabsTrigger value="3D" className={mode === "3D" ? "bg-[#2e2e2e] text-white" : ""}>
              {mode === "3D" ? "3D-Centric Skills" : "3D"}
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className={`w-full py-8 overflow-hidden ${bgColor} ${textColor} border-t border-b border-gray-300`}>
        <div className="mx-auto px-4 md:px-8 lg:px-16 relative">
          <div className="relative">
            <div
              className="absolute inset-y-0 left-0 w-16 z-10"
              style={{
                background: `linear-gradient(to right, ${gradientColor}, transparent)`,
              }}
            />
            <div
              className="absolute inset-y-0 right-0 w-16 z-10"
              style={{
                background: `linear-gradient(to left, ${gradientColor}, transparent)`,
              }}
            />
            <TickerRow skills={skills} direction={1} mode={mode} />
          </div>
        </div>
      </div>
    </div>
  )
}

const TickerRow = React.memo(function TickerRow({
  skills,
  direction,
  mode,
}: {
  skills: Skill[]
  direction: number
  mode: "2D" | "3D"
}) {
  return (
    <div className="relative flex overflow-hidden">
      <motion.div
        className="flex gap-8 shrink-0 px-16"
        animate={{
          x: direction * -50 + "%",
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <span
            key={`${skill.id}-${index}`}
            className={`text-sm md:text-lg font-medium whitespace-nowrap font-sans ${
              mode === "2D" ? "bg-gray-100 text-[#2e2e2e]" : "bg-gray-600 text-white"
            } px-6 py-3 rounded-full`}
          >
            {skill.name}
          </span>
        ))}
      </motion.div>
    </div>
  )
})
