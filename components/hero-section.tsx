"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Github, ArrowRight, Star } from "lucide-react"
import { motion } from "framer-motion"
import ContactModal from "./contact-modal"
import Link from "next/link"

const models = ["OpenAI", "Claude", "Mistral", "LLaMA", "Ollama", "Gemini"]
const codeExamples = [
  {
    title: "Model Orchestration",
    code: ` from multimind.orchestration import ModelOrchestrator

# Route tasks between Transformer and Non-Transformer models
orchestrator = ModelOrchestrator()
orchestrator.add_model("gpt4", type="transformer")
orchestrator.add_model("rwkv", type="non_transformer")
orchestrator.add_model("mamba", type="state_space")

# Dynamic routing based on task requirements
print("Routing to optimal model...")
print("Selected: RWKV (efficient for long sequences)")`,
  },
  {
    title: "Advanced Fine-Tuning",
    code: ` from multimind.fine_tuning import UniPELTPlusTuner

# Research-grade fine-tuning with multiple methods
tuner = UniPELTPlusTuner(
    base_model="microsoft/DialoGPT-medium",
    methods=["lora", "unipelt", "maml"],
    quantization="qlora_4bit"
)

tuner.train(
    dataset=medical_data,
    privacy_mode="differential",
    compliance=["HIPAA", "GDPR"]
)`,
  },
  {
    title: "Hybrid RAG Pipeline",
    code: ` from multimind.rag import HybridRAGClient

# Advanced RAG with vector + graph retrieval
rag = HybridRAGClient(
    vector_store="faiss",
    knowledge_graph=True,
    semantic_chunking=True
)

# Query with hybrid context
answer = await rag.query(
    "Explain the latest AI research",
    retrieval_mode="hybrid",
    metadata_tracking=True
)`,
  },
]

export default function HeroSection() {
  const [currentModelIndex, setCurrentModelIndex] = useState(0)
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [typingText, setTypingText] = useState("")
  const [showResponse, setShowResponse] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const typingTimer = useRef<NodeJS.Timeout | null>(null)
  const responseTimer = useRef<NodeJS.Timeout | null>(null)
  const [currentExampleIndex, setCurrentExampleIndex] = useState(0)
  const nextExampleTimer = useRef<NodeJS.Timeout | null>(null)

  // Model rotation effect (only rotates model, does not affect code animation)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentModelIndex((prevIndex) => (prevIndex + 1) % models.length)
    }, 5000)

    return () => {
      clearInterval(interval)
      if (typingTimer.current) clearTimeout(typingTimer.current)
      if (responseTimer.current) clearTimeout(responseTimer.current)
      if (nextExampleTimer.current) clearTimeout(nextExampleTimer.current)
    }
  }, [])

  // Only run typing animation on mount and when currentExampleIndex changes
  useEffect(() => {
    startTypingAnimation(currentExampleIndex)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentExampleIndex])

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      if (typingTimer.current) clearTimeout(typingTimer.current)
      if (responseTimer.current) clearTimeout(responseTimer.current)
      if (nextExampleTimer.current) clearTimeout(nextExampleTimer.current)
    }
  }, [])

  const startTypingAnimation = (exampleIndex: number) => {
    setTypingText("")
    setIsTyping(true)
    if (typingTimer.current) clearTimeout(typingTimer.current)
    if (nextExampleTimer.current) clearTimeout(nextExampleTimer.current)

    const code = codeExamples[exampleIndex].code
    let i = 0

    const typeNextChar = () => {
      if (i < code.length) {
        setTypingText((prev) => prev + code.charAt(i))
        i++
        typingTimer.current = setTimeout(typeNextChar, Math.random() * 30 + 10)
      } else {
        setIsTyping(false)
        // After typing is done, wait 2s, then go to next example
        nextExampleTimer.current = setTimeout(() => {
          setCurrentExampleIndex((prevIndex) => (prevIndex + 1) % codeExamples.length)
        }, 2000)
      }
    }

    typeNextChar()
  }

  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div>
              <div className="inline-block px-3 py-1 mb-6 text-sm font-medium rounded-full bg-purple-900/30 text-purple-400 border border-purple-800/50">
              Deep Tech • Model-Agnostic Toolkit
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                MultiMind SDK. <br />
                Your Toolkit for <br />
                <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
                Model-Agnostic AI
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-400 max-w-lg">
                Deep tech framework that gives you full control over fine-tuning, RAG, agent workflows, and model orchestration. Build healthcare chatbots, financial copilots, or custom private LLMs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Link href="https://github.com/multimindlab" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button
                  className="w-full bg-white text-gray-900 hover:bg-gray-200 flex items-center gap-2 text-base py-6 px-6"
                  size="lg"
                >
                  <Star size={20} />
                  Star on GitHub
                </Button>
              </Link>
              <div className="w-full sm:w-auto">
                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 flex items-center gap-2 text-base py-6 px-6"
                  size="lg"
                  onClick={() => setContactModalOpen(true)}
                >
                  Join Us
                </Button>
              </div>
              <Link href="https://opencollective.com/multimind-sdk" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button
                  className="w-full bg-white text-gray-900 hover:bg-gray-200 flex items-center gap-2 text-base py-6 px-6"
                  size="lg"
                >
                  Support Us
                </Button>
              </Link>
            </div>

            {/* <div className="flex items-center gap-2 text-gray-500 text-sm">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gray-800 border-2 border-gray-950 flex items-center justify-center text-xs"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <span>1,200+ GitHub stars and growing</span>
            </div> */}
          </div>

          <div className="w-full lg:w-1/2 md:w-2/3 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg blur-3xl opacity-20"></div>
            <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-6 shadow-xl">
              <div className="flex items-center gap-2 mb-4 ">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-2 text-sm text-gray-400">
                  {codeExamples[currentExampleIndex].title.toLowerCase().replace(/\s+/g, "_")}_demo.py
                </div>
              </div>
              <div className="bg-gray-950 rounded-md p-4 font-mono text-sm overflow-hidden min-h-[420px] md:min-h-[350px] h-[220px] md:h-auto w-full">
                <pre className="text-gray-300 whitespace-pre-wrap h-full">
                  {typingText}
                  {isTyping && <span className="inline-block w-2 h-4 bg-white ml-1 animate-pulse"></span>}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </section>
  )
}
