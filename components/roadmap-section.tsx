"use client"

import { CheckCircle2, Circle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const roadmapItems = [
  {
    phase: "Phase 1",
    title: "Core SDK",
    description: "Unified API for all major LLMs with fine-tuning capabilities",
    status: "completed",
    items: [
      "Model abstraction layer",
      "Fine-Tuning",
      "Agent capabilities",
      "Local model support",
      "Cloud API integrations",
      "CLI Interface",
      "Router & Fallback",
      "RAG & Orchestration",
    ],
  },
  {
    phase: "Phase 2",
    title: "Visual Agent Builder",
    description: "No-code interface for creating and deploying AI agents",
    status: "in-progress",
    items: [
      "Drag-and-drop workflow builder",
      "Visual prompt engineering",
      "Agent templates library",
      "Performance monitoring",
      "One-click deployment",
      "One-Click Deployment",
      "YAML ↔ UI Sync",
    ],
  },
  {
    phase: "Phase 3",
    title: "Enterprise Features",
    description: "Scale, secure, and govern your AI platform",
    status: "planned",
    items: [
      "Multi-Tenant Architecture",
      "Advanced Security Controls",
      "Custom Model Hosting",
      "Audit Logging & Compliance",
      "High-Availability Clustering",
      "Data Encryption & Tokenization",
      "Service-Level Agreements",
    ],
  },
]

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
              Roadmap Preview
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-6">Our vision for the future of MultiMind</p>
          <div className="flex justify-center">
            <Button
              variant="outline"
              className="border-gray-700 text-gray-700 hover:bg-gray-800 hover:text-white flex items-center gap-2"
              onClick={() => window.open("https://mercurial-sailfish-6e7.notion.site/MultiMind-SDK-Roadmap-1f25f30ce5dc8060abe0e9817770d93f", "_blank")}
            >
              <span>View Full Roadmap on Notion</span>
              <ExternalLink size={16} />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {roadmapItems.map((item, index) => (
            <div
              key={index}
              className={`
                bg-gray-950 border rounded-xl p-6 transition-all duration-300
                ${
                  item.status === "completed"
                    ? "border-green-700"
                    : item.status === "in-progress"
                      ? "border-purple-700"
                      : "border-gray-800"
                }
              `}
            >
              <div className="mb-4">
                <span
                  className={`
                  text-sm font-medium px-3 py-1 rounded-full
                  ${
                    item.status === "completed"
                      ? "bg-green-900/30 text-green-400"
                      : item.status === "in-progress"
                        ? "bg-purple-900/30 text-purple-400"
                        : "bg-gray-800 text-gray-400"
                  }
                `}
                >
                  {item.phase}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 mb-4">{item.description}</p>
              <ul className="space-y-2">
                {item.items.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    {item.status === "completed" ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    ) : (
                      <Circle
                        className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          item.status === "in-progress" ? "text-purple-500" : "text-gray-600"
                        }`}
                      />
                    )}
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Want to contribute? Check our{" "}
            <a
              href="https://github.com/multimindlabs/multimind-sdk/blob/develop/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 underline"
            >
              GitHub
            </a>{" "}
            or join our{" "}
            <a
              href="https://discord.gg/K64U65je7h"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 underline"
            >
              Discord
            </a>{" "}
            to get involved.
          </p>
        </div>
      </div>
    </section>
  )
}
