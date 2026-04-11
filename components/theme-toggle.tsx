"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // After mounting, we can safely show the UI that depends on the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = resolvedTheme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative h-11 w-11 overflow-hidden rounded-full border border-[#111111]/10 bg-white/80 text-[#111111] hover:bg-white hover:text-[#B45309] dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:hover:text-[#D97706]"
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} theme` : "Toggle theme"}
    >
      <div className="relative z-10">
        {mounted && isDark ? <Sun size={18} /> : <Moon size={18} />}
      </div>

      {/* Animation background */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`absolute inset-0 rounded-full ${
          isDark
            ? "bg-gradient-to-br from-amber-200/10 to-amber-500/10"
            : "bg-gradient-to-br from-[#B45309]/8 to-[#111111]/5"
        }`}
      />
    </Button>
  )
}
