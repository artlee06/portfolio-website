"use client"

import { motion } from "framer-motion"

interface TickerProps {
  text: string
  fontSize: string
}

export function Ticker({ text, fontSize }: TickerProps) {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full">
      <motion.div
        className="inline-block"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          duration: 30,
        }}
        style={{ fontSize }}
      >
        {[...Array(20)].map((_, i) => (
          <span key={i} className="inline-block px-4">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
