"use client"

import { motion } from "framer-motion"

interface SectionTitleProps {
  title: string
  subtitle?: string
  center?: boolean
  className?: string
}

export default function SectionTitle({ title, subtitle, center = true, className = "" }: SectionTitleProps) {
  return (
    <div className={`${center ? "text-center" : ""} mb-16 ${className}`}>
      <div className="inline-flex items-center gap-3 mb-4 px-6 py-2 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/10 rounded-lg mx-auto">
        <motion.div
          className="w-3 h-3 rounded-full bg-[#ff6b6b] shadow-sm shadow-[#ff6b6b]/30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{title}</h2>
      </div>
      {subtitle && <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">{subtitle}</p>}
    </div>
  )
}
