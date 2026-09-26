"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="relative h-11 w-11 overflow-hidden rounded-full border border-[#111111]/10 bg-white/80 text-[#111111] hover:bg-white hover:text-[#B45309] dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:hover:text-[#D97706]"
      aria-label="Toggle color theme"
    >
      <div className="relative z-10" aria-hidden="true">
        <Moon size={18} className="block dark:hidden" />
        <Sun size={18} className="hidden dark:block" />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-gradient-to-br from-[#B45309]/8 to-[#111111]/5 transition-colors duration-300 dark:from-amber-200/10 dark:to-amber-500/10"
      />
    </Button>
  )
}
