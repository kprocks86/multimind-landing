"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const models = [
  { name: "GPT-4", color: "#10a37f" },
  { name: "Claude-3", color: "#a37f10" },
  { name: "Mistral", color: "#7f10a3" },
  { name: "LLaMA", color: "#10a3a3" },
  { name: "Gemini", color: "#a31010" },
]

export default function ModelSwitchAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % models.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full max-w-md mx-auto bg-gray-900 border border-gray-800 rounded-lg p-6 overflow-hidden">
      <div className="mb-4 text-sm text-gray-400">Switch between models with a single line of code:</div>

      <div className="font-mono text-sm bg-gray-950 rounded p-4">
        <div className="text-white">
          <span className="text-purple-400">from</span> multimind <span className="text-purple-400">import</span>{" "}
          MultiMind
        </div>
        <div className="text-white mt-2">mm = MultiMind()</div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-4"
          >
            <div className="text-white">
              <span className="text-green-400"># Switch to {models[currentIndex].name}</span>
            </div>
            <div className="text-white">
              mm.set_model(<span style={{ color: models[currentIndex].color }}>"{models[currentIndex].name}"</span>)
            </div>
            <div className="mt-2 text-gray-400">
              <span className="text-green-400"># Result:</span> Model switched to {models[currentIndex].name}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
