"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
  // Add more skills as needed
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
  // Add more skills as needed
]

export function SkillsCard() {
  const [mode, setMode] = useState<"2D" | "3D">("2D")

  return (
    <div className="w-full mx-auto ">
      <div
        className={`p-6 rounded-lg transition-all ${
          mode === "2D" ? "border-2 border-[#2E2E2E] bg-transparent" : "bg-[#2E2E2E] border-2 border-transparent"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className={`text-xl md:text-2xl font-medium ${mode === "3D" ? "text-white" : "text-[#2E2E2E]"}`}>
            Skills
          </h2>
          <Tabs defaultValue="2D" onValueChange={(value) => setMode(value as "2D" | "3D")}>
            <TabsList className="bg-transparent border border-gray-200">
              <TabsTrigger value="2D" className={mode === "2D" ? "bg-black text-white" : ""}>
                2D centric
              </TabsTrigger>
              <TabsTrigger value="3D" className={mode === "3D" ? "bg-black text-white" : ""}>
                3D centric
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="space-y-4 overflow-hidden">
          {[0, 1, 2].map((row) => (
            <TickerRow
              key={row}
              skills={mode === "2D" ? twoDSkills : threeDSkills}
              direction={row % 2 === 0 ? 1 : -1}
              mode={mode}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function TickerRow({
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
        className="flex gap-4 shrink-0"
        animate={{
          x: direction * -40 + "%",
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <span
            key={`${skill.id}-${index}`}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              mode === "2D"
                ? "bg-transparent border border-[#2E2E2E] text-[#2E2E2E]"
                : "bg-white/10 text-white border-transparent"
            }`}
          >
            {skill.name}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
