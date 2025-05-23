"use client"

import { memo } from "react"
import { motion, useTransform, type MotionValue } from "framer-motion"
import { Boxes, Layers3 } from "lucide-react"

interface CubeProps {
  rotate: MotionValue<number>
}

export const Cube = memo(function Cube({ rotate }: CubeProps) {
  const rotateX = useTransform(rotate, (value) => value / 2)

  return (
    <div className="w-64 h-64 relative perspective mx-auto">
      <motion.div
        className="w-full h-full preserve-3d"
        style={{
          rotateY: rotate,
          rotateX: rotateX,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <CubeFace Icon={Layers3} rotation="rotateY(0deg)" />
        <CubeFace rotation="rotateY(180deg)" />
        <CubeFace rotation="rotateY(90deg)" />
        <CubeFace rotation="rotateY(-90deg)" />
        <CubeFace rotation="rotateX(90deg)" />
        <CubeFace Icon={Boxes} rotation="rotateX(-90deg)" />
      </motion.div>
    </div>
  )
})

interface CubeFaceProps {
  Icon?: typeof Layers3 | typeof Boxes
  rotation: string
}

const CubeFace = memo(function CubeFace({ Icon, rotation }: CubeFaceProps) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center bg-white border border-[#2e2e2e] border-4"
      style={{
        transform: `${rotation} translateZ(128px)`,
        backfaceVisibility: "hidden",
      }}
    >
      {Icon && <Icon className={`w-16 h-16 z-10 ${Icon === Boxes ? "rotate-180" : ""}`} />}
    </div>
  )
})
