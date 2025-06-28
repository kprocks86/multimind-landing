"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Zap, DollarSign, Clock } from "lucide-react"

const models = [
  { name: "GPT-4", type: "Transformer", cost: "High", speed: "Medium", use: "Complex Reasoning" },
  { name: "Claude-3", type: "Transformer", cost: "Medium", speed: "Fast", use: "Analysis & Writing" },
  { name: "RWKV", type: "Non-Transformer", cost: "Low", speed: "Very Fast", use: "Efficient Processing" },
  { name: "LLaMA-2", type: "Transformer", cost: "Low", speed: "Medium", use: "General Purpose" },
]

export default function OrchestrationSection() {
  const [selectedOptimization, setSelectedOptimization] = useState("cost")

  const getOptimizedModel = () => {
    switch (selectedOptimization) {
      case "cost":
        return models.find((m) => m.name === "RWKV")
      case "performance":
        return models.find((m) => m.name === "GPT-4")
      case "speed":
        return models.find((m) => m.name === "Claude-3")
      default:
        return models[0]
    }
  }

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
              Model-Agnostic Orchestration
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Universal orchestration layer that routes across transformer and non-transformer LLMs based on task
            requirements, maximizing performance and cost-effectiveness
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-950 border border-gray-800 rounded-xl p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Optimize for:</h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { key: "cost", label: "Cost Efficiency", icon: <DollarSign size={16} /> },
                  { key: "performance", label: "Performance", icon: <Zap size={16} /> },
                  { key: "speed", label: "Speed", icon: <Clock size={16} /> },
                ].map((option) => (
                  <button
                    key={option.key}
                    onClick={() => setSelectedOptimization(option.key)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                      selectedOptimization === option.key
                        ? "bg-purple-600 border-purple-500 text-white"
                        : "bg-gray-800 border-gray-700 text-gray-300 hover:border-gray-600"
                    }`}
                  >
                    {option.icon}
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-lg font-semibold mb-4">Available Models</h4>
                <div className="space-y-3">
                  {models.map((model, index) => (
                    <motion.div
                      key={model.name}
                      className={`p-4 rounded-lg border transition-all ${
                        getOptimizedModel()?.name === model.name
                          ? "bg-purple-900/30 border-purple-600"
                          : "bg-gray-800 border-gray-700"
                      }`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">{model.name}</div>
                          <div className="text-sm text-gray-400">{model.type}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-400">Cost: {model.cost}</div>
                          <div className="text-sm text-gray-400">Speed: {model.speed}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center">
                <ArrowRight className="w-8 h-8 text-purple-500 mb-4" />
                <div className="text-center">
                  <h4 className="text-lg font-semibold mb-2">Optimal Selection</h4>
                  <motion.div
                    key={selectedOptimization}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 p-6 rounded-xl"
                  >
                    <div className="text-xl font-bold">{getOptimizedModel()?.name}</div>
                    <div className="text-purple-200">{getOptimizedModel()?.type}</div>
                    <div className="text-sm mt-2 text-purple-100">Best for: {getOptimizedModel()?.use}</div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
