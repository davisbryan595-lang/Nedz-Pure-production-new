"use client"

import { useEffect, useState } from "react"

interface CounterProps {
  end: number
  label: string
  suffix?: string
}

export function Counter({ end, label, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    if (!isAnimating) return

    let currentCount = 0
    const increment = end / 180

    const timer = setInterval(() => {
      currentCount += increment
      if (currentCount >= end) {
        setCount(end)
        setIsAnimating(false)
        clearInterval(timer)
      } else {
        setCount(Math.floor(currentCount))
      }
    }, 16) // ~60fps

    return () => clearInterval(timer)
  }, [end, isAnimating])

  return (
    <div className="glass p-6 rounded-2xl text-center">
      <div className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-white/80">{label}</div>
    </div>
  )
}
