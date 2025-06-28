import { Cpu, Zap, Settings, Network } from "lucide-react"

const innovations = [
  {
    icon: <Network className="w-8 h-8 text-purple-500" />,
    title: "Dynamic orchestration across non-transformers like RWKV & Mamba",
    description: "True multi-architecture support beyond just Transformers",
  },
  {
    icon: <Zap className="w-8 h-8 text-cyan-500" />,
    title: "LoRA + UniPELT-style tuning workflows inspired by state-of-the-art ML papers",
    description: "Research-grade fine-tuning techniques in production",
  },
  {
    icon: <Settings className="w-8 h-8 text-purple-500" />,
    title: "Native support for model optimization, deployment, and conversion",
    description: "End-to-end pipeline from training to deployment",
  },
  {
    icon: <Cpu className="w-8 h-8 text-cyan-500" />,
    title: "Multi-architecture support (Transformers, RNNs, SSMs)",
    description: "Universal interface across all model architectures",
  },
]

export default function DeepTechSection() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              🧠{" "}
              <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
                Deep Tech Innovation at the Core
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Unlike wrapper tools,{" "}
              <span className="text-purple-400 font-semibold">MultiMind SDK builds true deep tech infrastructure</span>:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {innovations.map((innovation, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-gray-700"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-gray-800 rounded-lg">{innovation.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-100 mb-2">{innovation.title}</h3>
                    <p className="text-gray-400">{innovation.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border border-purple-800/50 rounded-xl p-8 text-center">
            <p className="text-xl text-gray-200">
              This makes it <span className="text-purple-400 font-bold">one of the most advanced open-source SDKs</span>{" "}
              for fine-tuning and orchestrating LLMs in regulated environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
