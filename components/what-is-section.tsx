import { CheckCircle, Zap, Brain, Shield, Cpu, Database, Bot } from "lucide-react"

export default function WhatIsSection() {
  const whyDifferent = [
    "Fine-tune any model: LoRA, QLoRA, Adapters, MAML",
    "Orchestrate Transformer & non-Transformer models (e.g. RWKV, Mamba)",
    "Privacy-first: Built-in GDPR, HIPAA, and SOC 2",
    "Full-stack: Training → RAG → Agent → Deployment → Audit",
    "Works offline, cloud, or edge",
  ]

  const keyFeatures = [
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: "🧬 Model-Agnostic LLM Orchestration",
      description: "Run workflows across GPT, Claude, Mamba, RWKV, Falcon, Mixtral & more.",
    },
    {
      icon: <Zap className="w-8 h-8 text-cyan-500" />,
      title: "🛠️ Next-Gen Fine-Tuning",
      description: "Supports LoRA, QLoRA, UniPELT+, MAML, Adapters. Optimized for CPU/GPU, quantization-ready.",
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: "📚 RAG 2.0 – Retrieval-Augmented Generation",
      description: "Hybrid context: Vector + Graph. Auto-chunking, semantic compression, metadata filtering.",
    },
    {
      icon: <Bot className="w-8 h-8 text-cyan-500" />,
      title: "🧠 Agent Framework with Tool Use",
      description: "Build AI agents with memory, reasoning, tool-calling, and dynamic LLM routing.",
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: "🔐 Compliance Layer Built-In",
      description: "Enable GDPR/HIPAA/SOC 2 compliance with PII redaction, logging, access tracking.",
    },
    {
      icon: <Cpu className="w-8 h-8 text-cyan-500" />,
      title: "🚀 Deployment Ready",
      description: "Export to GGUF, ONNX, TorchScript, TFLite. Run on Hugging Face, Ollama, browser, or edge.",
    },
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              💡{" "}
              <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
                What is MultiMind SDK?
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              MultiMind SDK is a <span className="text-purple-400 font-semibold">deep tech, model-agnostic</span> AI
              development framework that gives you full control over fine-tuning, RAG, agent workflows, and model
              orchestration. Whether you're building healthcare chatbots, financial copilots, or custom private LLMs,
              MultiMind is your toolkit.
            </p>
          </div>


          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              🔧{" "}
              <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
                Key Features at a Glance
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-950 border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-gray-700"
                >
                  <div className="flex items-center gap-3 mb-3">
                    {feature.icon}
                    <h4 className="font-semibold text-lg">{feature.title}</h4>
                  </div>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
