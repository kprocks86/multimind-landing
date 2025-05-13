"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Github, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import ContactModal from "./contact-modal"
import Link from "next/link"

const models = ["OpenAI", "Claude", "Mistral", "LLaMA", "Ollama", "Gemini"]

export default function HeroSection() {
  const [currentModelIndex, setCurrentModelIndex] = useState(0)
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [typingText, setTypingText] = useState("")
  const [showResponse, setShowResponse] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const typingTimer = useRef<NodeJS.Timeout | null>(null)
  const responseTimer = useRef<NodeJS.Timeout | null>(null)

  // Model rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentModelIndex((prevIndex) => (prevIndex + 1) % models.length)

      // Start typing animation when model changes
      startTypingAnimation()
    }, 5000)

    return () => {
      clearInterval(interval)
      if (typingTimer.current) clearTimeout(typingTimer.current)
      if (responseTimer.current) clearTimeout(responseTimer.current)
    }
  }, [])

  // Initial typing animation on mount
  useEffect(() => {
    startTypingAnimation()
  }, [])

  const startTypingAnimation = () => {
    // Reset states
    setTypingText("")
    setShowResponse(false)
    setIsTyping(true)

    // Clear any existing timers
    if (typingTimer.current) clearTimeout(typingTimer.current)
    if (responseTimer.current) clearTimeout(responseTimer.current)

    // Type the command character by character
    const command = `mm.chat(model="${models[currentModelIndex]}", prompt="Tell me about AI agents")`
    let i = 0

    const typeNextChar = () => {
      if (i < command.length) {
        setTypingText((prev) => prev + command.charAt(i))
        i++
        typingTimer.current = setTimeout(typeNextChar, Math.random() * 50 + 20)
      } else {
        setIsTyping(false)
        // Show response after typing is complete
        responseTimer.current = setTimeout(() => {
          setShowResponse(true)
        }, 500)
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
                Open Source SDK
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                One SDK. <br />
                Every AI Model. <br />
                <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
                  Unlimited Agents.
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-400 max-w-lg">
                The unified interface for all major language models. Build, fine-tune, and deploy AI applications
                with a single API.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://github.com/multimindlabs/multimind-sdk" target="_blank" rel="noopener noreferrer">
                <Button
                  className="bg-white text-gray-900 hover:bg-gray-200 flex items-center gap-2 text-base py-6 px-6"
                  size="lg"
                >
                  <Github size={20} />
                  Try on GitHub
                </Button>
              </Link>
              {/* <Button
                variant="outline"
                className="border-gray-700 hover:bg-gray-800 flex items-center gap-2 text-base py-6 px-6"
                size="lg"
              >
                Get Started
                <ArrowRight size={18} />
              </Button> */}
              <Button
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 flex items-center gap-2 text-base py-6 px-6"
                size="lg"
                onClick={() => setContactModalOpen(true)}
              >
                Join Us
              </Button>
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

          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg blur-3xl opacity-20"></div>
            <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-6 shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-2 text-sm text-gray-400">multimind_demo.py</div>
              </div>
              <div className="bg-gray-950 rounded-md p-4 font-mono text-sm md:text-base overflow-hidden">
                <div className="text-gray-400"># Import the MultiMind SDK</div>
                <div>
                  <span className="text-cyan-400">from</span>
                  <span className="text-white"> multimind </span>
                  <span className="text-cyan-400">import</span>
                  <span className="text-white"> MultiMind</span>
                </div>
                <div className="text-gray-400 mt-2"># Initialize the SDK</div>
                <div className="text-white">mm = MultiMind()</div>

                <div className="text-gray-400 mt-2"># Switch between any model with one line</div>
                <div className="flex items-start mt-1">
                  <span className="text-green-400">
                    {">"}
                    {">"}
                    {">"}{" "}
                  </span>
                  <div className="flex-1">
                    <div className="text-white flex items-center">
                      <span>{typingText}</span>
                      {isTyping && <span className="inline-block w-2 h-4 bg-white ml-1 animate-pulse"></span>}
                    </div>

                    {showResponse && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-2 text-gray-300"
                      >
                        <div className="text-gray-400"># Response from {models[currentModelIndex]}</div>
                        <div className="text-yellow-300 mt-1">
                          "AI agents are autonomous systems that can perceive their environment, make decisions, and
                          take actions to achieve specific goals..."
                        </div>

                        <div className="mt-3 text-gray-400"># Switch models with a single parameter</div>
                        <div className="text-white mt-1">
                          <span className="text-green-400">
                            {">"}
                            {">"}
                            {">"}{" "}
                          </span>
                          mm.set_model("
                          <span className="text-purple-400">{models[(currentModelIndex + 1) % models.length]}</span>")
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </section>
  )
}
