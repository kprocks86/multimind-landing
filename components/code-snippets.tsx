"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

const codeSnippets = [
  {
    id: "chat",
    title: "Simple Chat",
    code: `from multimind import MultiMind

# Initialize the SDK
mm = MultiMind()

# Set your preferred model
mm.set_model("gpt-4")  # Or "claude", "mistral", "llama", etc.

# Get a response
response = mm.chat("Explain quantum computing in simple terms")

# Print the response
print(response.text)

# Switch models on the fly
mm.set_model("claude")
response = mm.chat("Now explain it differently")
`,
  },
  {
    id: "fine-tuning",
    title: "Fine-Tuning",
    code: `from multimind import MultiMind, FineTuner
from multimind.models import MistralModel

# Initialize with your dataset
tuner = FineTuner(
    base_model=MistralModel("mistral-7b"),
    dataset="./my_training_data.jsonl",
    method="qlora"  # Quantized Low-Rank Adaptation
)

# Start fine-tuning
tuned_model = tuner.train(
    epochs=3,
    learning_rate=2e-5,
    batch_size=8
)

# Use your fine-tuned model
mm = MultiMind()
mm.load_model(tuned_model)
response = mm.chat("How does this look with my custom model?")
`,
  },
  {
    id: "agent",
    title: "Agent Tooling",
    code: `from multimind import MultiMind, Agent
from multimind.tools import WebSearch, Calculator, CodeInterpreter

# Create an agent with tools
agent = Agent(
    model="gpt-4",  # Base model for reasoning
    tools=[
        WebSearch(),
        Calculator(),
        CodeInterpreter(language="python")
    ],
    memory=True  # Enable conversation memory
)

# Run the agent with a task
result = agent.run(
    "Find the latest AI research papers on LLM fine-tuning,
    summarize the top 3, and calculate the average citation count"
)

# Access structured results
for paper in result.papers:
    print(f"Title: {paper.title}")
    print(f"Summary: {paper.summary}")
    print(f"Citations: {paper.citations}")

print(f"Average citations: {result.average_citations}")
`,
  },
  {
    id: "fallback",
    title: "Fallback Logic",
    code: `from multimind import MultiMind
from multimind.models import ModelGroup

# Create a model group with fallback logic
models = ModelGroup([
    "gpt-4",        # Primary model
    "claude-3",     # First fallback
    "mistral-7b",   # Second fallback (local)
    "llama-3-70b"   # Third fallback
])

# Initialize with the model group
mm = MultiMind(model=models)

# MultiMind automatically tries the next model if one fails
try:
    response = mm.chat("What's the latest breakthrough in fusion energy?")
    print(f"Response from {response.model_used}: {response.text}")
except Exception as e:
    print(f"All models failed: {e}")
`,
  },
];

export default function CodeSnippets() {
  const [activeTab, setActiveTab] = useState("chat");
  const [copied, setCopied] = useState(false);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="code" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
              Demo Code Snippets
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See how easy it is to work with any LLM using MultiMind
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs
            defaultValue="chat"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              {codeSnippets.map((snippet) => (
                <TabsTrigger
                  key={snippet.id}
                  value={snippet.id}
                  className="data-[state=active]:bg-gray-800 data-[state=active]:text-white"
                >
                  {snippet.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {codeSnippets.map((snippet) => (
              <TabsContent key={snippet.id} value={snippet.id}>
                <div className="relative bg-gray-900 border border-gray-800 rounded-lg shadow-xl overflow-hidden">
                  <div className="flex items-center justify-between p-4 border-b border-gray-800">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="ml-2 text-sm text-gray-400">
                        {snippet.title}.py
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyCode(snippet.code)}
                      className="text-gray-400 hover:text-white"
                    >
                      {copied ? <Check size={16} /> : <Copy size={16} />}
                      <span className="ml-2">
                        {copied ? "Copied!" : "Copy"}
                      </span>
                    </Button>
                  </div>
                  <pre className="p-4 overflow-x-auto text-sm">
                    <code className="language-python">
                      {snippet.code.split("\n").map((line, i) => {
                        // Handle comments
                        if (line.trim().startsWith("#")) {
                          return (
                            <div key={i}>
                              <span className="text-gray-400">{line}</span>
                            </div>
                          );
                        }
                        // Handle imports
                        if (line.includes("import")) {
                          const parts = line.split("import");
                          return (
                            <div key={i}>
                              <span className="text-cyan-400">{parts[0]}</span>
                              <span className="text-cyan-400">import</span>
                              <span>{parts[1]}</span>
                            </div>
                          );
                        }
                        // Handle strings
                        const stringRegex = /("[^"]*"|'[^']*')/g;
                        if (stringRegex.test(line)) {
                          return (
                            <div key={i}>
                              {line.split(stringRegex).map((part, j) => {
                                if (
                                  part.startsWith('"') ||
                                  part.startsWith("'")
                                ) {
                                  return (
                                    <span key={j} className="text-green-400">
                                      {part}
                                    </span>
                                  );
                                }
                                return part;
                              })}
                            </div>
                          );
                        }
                        // Default case
                        return <div key={i}>{line}</div>;
                      })}
                    </code>
                  </pre>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
