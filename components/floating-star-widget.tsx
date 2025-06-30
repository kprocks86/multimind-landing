"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingStarWidget() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-fade-in">
      <Link href="https://github.com/multimindlab" target="_blank" rel="noopener noreferrer">
        <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 flex items-center text-base gap-2 px-4 py-2 rounded-full">
          <Star className="h-4 w-4 text-yellow-400" />
          <span>Star MultiMind SDK</span>
        </Button>
      </Link>
    </div>
  )
}
