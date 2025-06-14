"use client"

import { useState, useEffect, useRef } from "react"

interface UseCounterProps {
  end: number
  start?: number
  duration?: number
  delay?: number
  formatter?: (value: number) => string
}

export function useCounter({
  end,
  start = 0,
  duration = 2000,
  delay = 0,
  formatter = (value: number) => Math.floor(value).toString(),
}: UseCounterProps) {
  const [count, setCount] = useState(start)
  const countRef = useRef(start)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    // Wait for the specified delay before starting the animation
    const delayTimer = setTimeout(() => {
      const startTime = Date.now()

      // Clear any existing animation
      if (timerRef.current) {
        cancelAnimationFrame(timerRef.current)
      }

      // Animation function
      const animate = () => {
        const now = Date.now()
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Easing function for smoother animation (ease-out)
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)

        // Calculate current count value
        const currentCount = start + (end - start) * easeOutQuart
        countRef.current = currentCount
        setCount(currentCount)

        // Continue animation until complete
        if (progress < 1) {
          timerRef.current = requestAnimationFrame(animate)
        }
      }

      // Start animation
      timerRef.current = requestAnimationFrame(animate)
    }, delay)

    // Cleanup function
    return () => {
      clearTimeout(delayTimer)
      if (timerRef.current) {
        cancelAnimationFrame(timerRef.current)
      }
    }
  }, [start, end, duration, delay])

  return formatter(count)
}
