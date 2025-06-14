"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function useThemeEffect() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // After mounting, we have access to the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  // Add a class to the document element when theme changes
  useEffect(() => {
    if (!mounted) return

    const root = document.documentElement

    // Add a class to trigger animations when theme changes
    root.classList.add("theme-changing")

    // Remove the class after animation completes
    const timer = setTimeout(() => {
      root.classList.remove("theme-changing")
    }, 300)

    return () => clearTimeout(timer)
  }, [theme, mounted])

  return {
    theme,
    resolvedTheme,
    isDark: mounted && (theme === "dark" || resolvedTheme === "dark"),
    isLight: mounted && (theme === "light" || resolvedTheme === "light"),
    mounted,
  }
}
