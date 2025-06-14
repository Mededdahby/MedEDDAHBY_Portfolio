"use client"

import { useState, useEffect } from "react"

export function useParallax() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // Add scroll event listener with passive flag for better performance
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return scrollY
}
