import { Network, Wrench, Database, Bot, Shield, Zap, Puzzle } from "lucide-react"

const features = [
  {
    icon: <Network className="w-10 h-10 text-purple-500" />,
    title: "🧬 Model-Agnostic Orchestration",
    description: "Route tasks dynamically between Transformers (e.g. GPT) and Non-Transformers (e.g. RWKV, Mamba)",
    category: "Orchestration",
  },
  {
    icon: <Wrench className="w-10 h-10 text-cyan-500" />,
    title: "🛠️ Fine-Tuning Engine",
    description: "Supports LoRA, QLoRA, UniPELT+, MAML, Reptile, Adapters with research-grade techniques",
    category: "Training",
  },
  {
    icon: <Database className="w-10 h-10 text-purple-500" />,
    title: "📚 Advanced RAG",
    description: "Hybrid retrieval (Vector + Graph), semantic chunking, metadata tracking",
    category: "Retrieval",
  },
  {
    icon: <Bot className="w-10 h-10 text-cyan-500" />,
    title: "🤖 Agent Framework",
    description: "Custom agents with tool use, memory, chat workflows, model control",
    category: "Agents",
  },
  {
    icon: <Shield className="w-10 h-10 text-purple-500" />,
    title: "🛡️ Privacy & Compliance Ready",
    description: "GDPR, HIPAA, SOC 2, PII redaction, cost tracking, audit logs",
    category: "Compliance",
  },
  {
    icon: <Zap className="w-10 h-10 text-cyan-500" />,
    title: "🚀 Model Optimization",
    description: "Converts to GGUF, ONNX, Safetensors, quantization + pruning",
    category: "Optimization",
  },
  // {
  //   icon: <Puzzle className="w-10 h-10 text-purple-500" />,
  //   title: "🔌 Plugin Architecture",
  //   description: "Modular system for tools, knowledge bases, model endpoints",
  //   category: "Extensibility",
  // },
]

export default function FeatureSection() {
  return (
    <section id="features" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🔧{" "}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
              Full-Stack AI Toolkit
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need: Training → RAG → Agents → Deployment → Compliance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-gray-700 hover:shadow-lg hover:shadow-purple-500/5"
            >
              <div className="mb-4">{feature.icon}</div>
              <div className="mb-2">
                <span className="text-xs font-medium text-purple-400 bg-purple-900/30 px-2 py-1 rounded-full">
                  {feature.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
