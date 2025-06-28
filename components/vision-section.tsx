export default function VisionSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            📈{" "}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">Vision</span>
          </h2>
          <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border border-purple-800/50 rounded-2xl p-12">
            <h3 className="text-4xl font-bold text-white mb-6">One SDK for the AI World</h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              MultiMind SDK aims to become the{" "}
              <span className="text-purple-400 font-semibold">universal interface</span> for LLM operations—where
              models, agents, and workflows converge
              <span className="text-cyan-400 font-semibold"> securely, compliantly, and scalably</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
