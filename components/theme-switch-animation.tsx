"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function ThemeSwitchAnimation() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={theme}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 pointer-events-none z-[-1]"
      >
        {theme === "dark" ? (
          // Dark mode animation elements
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-500 rounded-full opacity-70 animate-pulse"></div>
            <div className="absolute top-3/4 left-1/2 w-2 h-2 bg-purple-500 rounded-full opacity-50 animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-pink-500 rounded-full opacity-60 animate-pulse"></div>
          </div>
        ) : (
          // Light mode animation elements
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-yellow-300 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-orange-300 rounded-full opacity-20 animate-pulse"></div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
