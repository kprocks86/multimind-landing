"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const models = [
  {
    name: "OpenAI",
    logo: "/logos/openai.png",
  },
  {
    name: "Claude",
    logo: "/logos/claude.png",
  },
  {
    name: "Mistral",
    logo: "/logos/mistral.png",
  },
  {
    name: "LLaMA",
    logo: "/logos/llama.png",
  },
  {
    name: "HuggingFace",
    logo: "/logos/huggingface.png",
  },
  {
    name: "Ollama",
    logo: "/logos/ollama.png",
  },
]

export function ModelCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % models.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full overflow-hidden py-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">Supported Models</h3>
        <p className="text-gray-400">One SDK to connect them all</p>
      </div>
      <div className="flex justify-center items-center gap-8 md:gap-16">
        {models.map((model, index) => (
          <div
            key={model.name}
            className={cn(
              "transition-all duration-500 flex flex-col items-center",
              activeIndex === index ? "opacity-100 scale-110" : "opacity-50 scale-90",
            )}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 relative mb-2">
              <Image
                src={model.logo || "/placeholder.svg"}
                alt={`${model.name} logo`}
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm text-gray-300">{model.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
