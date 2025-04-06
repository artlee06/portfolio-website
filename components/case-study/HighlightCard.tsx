"use client"

import React from "react"
import { motion } from "framer-motion"

interface HighlightCardProps {
  number: string
  label: string
  description: string
}

export const HighlightCard = React.memo(function HighlightCard({ number, label, description }: HighlightCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg border border-gray-200"
    >
      <div className="text-4xl md:text-5xl font-medium mb-2">{number}</div>
      <div className="text-lg font-medium mb-2">{label}</div>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
})

