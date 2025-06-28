import { Heart, DollarSign, MessageSquare, Laptop, Network } from "lucide-react"

const useCases = [
  {
    icon: <Heart className="w-8 h-8 text-red-500" />,
    title: "🏥 Healthcare AI Assistants",
    description: "Fine-tune compliant medical models with PII redaction",
    tags: ["HIPAA", "Medical", "Compliance"],
  },
  {
    icon: <DollarSign className="w-8 h-8 text-green-500" />,
    title: "🧾 Financial Copilots",
    description: "Secure, auditable agent workflows for document analysis",
    tags: ["Finance", "Security", "Audit"],
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
    title: "📞 RAG + Chat + Agents",
    description: "Combine Retrieval, Agents, and Tool Use for copilots",
    tags: ["RAG", "Agents", "Tools"],
  },
  {
    icon: <Laptop className="w-8 h-8 text-purple-500" />,
    title: "💻 On-Prem/Offline LLMs",
    description: "Convert to GGUF/ONNX and run local models securely",
    tags: ["Offline", "GGUF", "Privacy"],
  },
  {
    icon: <Network className="w-8 h-8 text-cyan-500" />,
    title: "🔁 Multi-Model Orchestration",
    description: "Route tasks to GPT, Claude, RWKV, or Mamba intelligently",
    tags: ["Orchestration", "Multi-Model", "Routing"],
  },
]

export default function UseCasesSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🧪{" "}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
              Use Cases
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real-world applications where MultiMind SDK delivers enterprise-grade AI solutions
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {useCases.slice(0, 3).map((useCase, index) => (
              <div
                key={index}
                className="bg-gray-950 border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-gray-700"
              >
                <div className="flex items-center gap-3 mb-4">
                  {useCase.icon}
                  <h3 className="text-lg font-semibold text-gray-100">{useCase.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{useCase.description}</p>
                <div className="flex flex-wrap gap-2">
                  {useCase.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-medium text-purple-400 bg-purple-900/30 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {useCases.slice(3).map((useCase, index) => (
              <div
                key={index + 3}
                className="bg-gray-950 border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-gray-700"
              >
                <div className="flex items-center gap-3 mb-4">
                  {useCase.icon}
                  <h3 className="text-lg font-semibold text-gray-100">{useCase.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{useCase.description}</p>
                <div className="flex flex-wrap gap-2">
                  {useCase.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-medium text-purple-400 bg-purple-900/30 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
