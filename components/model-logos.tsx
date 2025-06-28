export default function ModelLogos() {
  const logos = [
    {
      name: "OpenAI",
      logo: "/logos/openai.webp",
      className: "h-8",
    },
    {
      name: "Claude",
      logo: "/logos/anthropic.svg",
      className: "h-8",
    },
    {
      name: "Mistral",
      logo: "/logos/mistral.svg",
      className: "h-7",
    },
    {
      name: "LLaMA",
      logo: "/logos/meta.svg",
      className: "h-8",
    },
    {
      name: "Ollama",
      logo: "/logos/ollama.png",
      className: "h-8",
    },
    {
      name: "HuggingFace",
      logo: "/logos/huggingface.svg",
      className: "h-7",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-xl text-gray-500 mb-10">Works with 30+ Models and Providers</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex flex-col items-center"
            >
              <img src={logo.logo || "/placeholder.svg"} alt={`${logo.name} logo`} className={logo.className} />
              <span className="text-gray-400 text-sm mt-2">{logo.name}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="text-gray-400">
            <span className="text-purple-400 font-semibold">Transformer & Non-Transformer</span> models supported
          </p>
        </div>
      </div>
    </section>
  )
}
