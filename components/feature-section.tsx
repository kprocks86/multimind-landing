import { Layers, Cpu, Cloud, ArrowDownToLine, RotateCcw, Bot } from "lucide-react"

const features = [
  {
    icon: <Layers className="w-10 h-10 text-purple-500" />,
    title: "Unified API",
    description: "One consistent interface for all major language models. Write once, run anywhere.",
  },
  {
    icon: <RotateCcw className="w-10 h-10 text-cyan-500" />,
    title: "Fallback Logic",
    description: "Automatic model fallback ensures your application stays resilient even when APIs fail.",
  },
  {
    icon: <ArrowDownToLine className="w-10 h-10 text-purple-500" />,
    title: "Fine-Tuning",
    description: "Fine-tune open-source models like Mistral and LLaMA using LoRA or QLoRA techniques.",
  },
  {
    icon: <Cpu className="w-10 h-10 text-cyan-500" />,
    title: "Local Models",
    description: "Run models locally with Ollama integration for privacy and reduced latency.",
  },
  {
    icon: <Cloud className="w-10 h-10 text-purple-500" />,
    title: "Cloud APIs",
    description: "Seamlessly connect to cloud providers like OpenAI, Anthropic, and more.",
  },
  {
    icon: <Bot className="w-10 h-10 text-cyan-500" />,
    title: "Agent Tooling",
    description: "Build sophisticated agents with memory, tools, and context routing capabilities.",
  },
]

export default function FeatureSection() {
  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
              Feature Highlights
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to build powerful AI applications with any language model
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-950 border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-gray-700 hover:shadow-lg hover:shadow-purple-500/5"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
