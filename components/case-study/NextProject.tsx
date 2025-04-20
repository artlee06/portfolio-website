"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface NextProjectProps {
  title: string
  description: string
  href: string
}

export function NextProject({ title, description, href }: NextProjectProps) {
  return (
    <div className="border-t border-gray-200 mt-16 pt-16 pb-32">
      <div className="max-w-6xl mx-auto">
        <motion.div whileHover={{ x: 20 }} className="group">
          <Link href={href} className="block">
            <div className="text-lg text-gray-600 mb-2">Next Project</div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-medium mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
              <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
