"use client"

import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

export function ContactButton() {
  return (
    <motion.div className="absolute -bottom-4 right-0 z-10" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <div className="relative w-28 h-28 bg-[#2e2e2e] rounded-full flex items-center justify-center">
        <ArrowUpRight className="w-11 h-11 text-white" />
        <motion.div
          className="absolute w-full h-full p-2"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <path id="textCircle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
            </defs>
            <text className="text-[12px] fill-white uppercase tracking-wider">
              <textPath href="#textCircle" startOffset="0%">
                Lets talk · Lets talk · Lets talk · Lets talk ·
              </textPath>
            </text>
          </svg>
        </motion.div>
      </div>
    </motion.div>
  )
}
