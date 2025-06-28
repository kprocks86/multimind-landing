"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"

const codeSnippets = [
  {
    id: "rag",
    title: "RAG Client",
    code: `from multimind.client.rag_client import RAGClient, Document

# Initialize RAG client with hybrid retrieval
client = RAGClient(
    vector_store="faiss",  # or "chromadb"
    embedding_model="openai",
    knowledge_graph=True
)

# Add documents with metadata
await client.add_documents([
    Document(
        text="MultiMind SDK is a model-agnostic framework...",
        metadata={"type": "intro", "category": "documentation"}
    )
])

# Query with hybrid retrieval
answer = await client.query(
    "What is MultiMind SDK?",
    retrieval_mode="hybrid",  # vector + knowledge graph
    max_tokens=500
)

print(f"Answer: {answer.text}")
print(f"Sources: {answer.sources}")
print(f"Confidence: {answer.confidence}")`,
  },
  {
    id: "fine-tuning",
    title: "Fine-Tuning",
    code: `from multimind.fine_tuning import UniPELTPlusTuner
from multimind.optimization import QuantizationConfig

# Configure fine-tuning with multiple methods
tuner = UniPELTPlusTuner(
    base_model_name="microsoft/DialoGPT-medium",
    available_methods=["lora", "adapter", "prefix_tuning"],
    quantization=QuantizationConfig(
        method="qlora",
        bits=4,
        double_quant=True
    )
)

# Train with automatic device selection
tuner.train(
    train_dataset=ds_train,
    eval_dataset=ds_eval,
    epochs=3,
    learning_rate=2e-5,
    auto_device_map=True,  # Automatic GPU/CPU selection
    gradient_checkpointing=True
)

# Save optimized model
tuner.save_model("./fine_tuned_model", 
                 format=["pytorch", "onnx", "gguf"])`,
  },
  {
    id: "orchestration",
    title: "Model Orchestration",
    code: `from multimind.orchestration import ModelOrchestrator
from multimind.agents import Agent

# Create orchestrator for multiple model types
orchestrator = ModelOrchestrator()

# Add transformer and non-transformer models
orchestrator.add_model("gpt4", model_type="transformer", 
                      cost_per_token=0.00003)
orchestrator.add_model("rwkv", model_type="non_transformer", 
                      cost_per_token=0.000001)
orchestrator.add_model("claude", model_type="transformer", 
                      cost_per_token=0.000015)

# Create agents with different capabilities
reasoning_agent = Agent(
    name="reasoning",
    models=["gpt4", "claude"],
    tools=["calculator", "web_search"]
)

efficiency_agent = Agent(
    name="efficiency", 
    models=["rwkv"],
    tools=["text_processing"]
)

# Route tasks based on requirements and optimize for cost
print("Routing task to optimal model...")
print("Selected model: rwkv (cost-efficient)")
print("Total cost: $0.001")
print("Task completed successfully")`,
  },
  {
    id: "compliance",
    title: "Enterprise Compliance",
    code: `from multimind.compliance import ComplianceManager
from multimind.privacy import PIIRedactor, DifferentialPrivacy

# Initialize compliance manager
compliance = ComplianceManager(
    standards=["GDPR", "HIPAA", "SOC2"],
    audit_logging=True,
    data_retention_days=90
)

# Configure privacy protection
pii_redactor = PIIRedactor(
    entities=["PERSON", "EMAIL", "PHONE", "SSN"],
    replacement_strategy="synthetic"
)

dp = DifferentialPrivacy(
    epsilon=1.0,  # Privacy budget
    delta=1e-5
)

# Process data with compliance
@compliance.audit_trail
async def process_sensitive_data(text: str):
    # Redact PII
    redacted_text = pii_redactor.redact(text)
    
    # Apply differential privacy
    private_text = dp.add_noise(redacted_text)
    
    # Process with model
    output = await model.generate(private_text)
    
    # Log for audit
    compliance.log_processing(
        input_hash=hash(text),
        model_used="gpt-4",
        privacy_applied=True
    )
    
    return output

# Generate and display compliance report
print("Generating compliance report...")
print("Processed requests: 1,234")
print("Privacy violations: 0")
print("Audit trail: Complete")`,
  },
]

export default function CodeSnippets() {
  const [activeTab, setActiveTab] = useState("rag")
  const [copied, setCopied] = useState(false)

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="code" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
              Example in Action
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See how MultiMind SDK simplifies complex AI workflows with enterprise-grade capabilities
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="rag" value={activeTab} onValueChange={setActiveTab}>
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
                        {snippet.title.toLowerCase().replace(/\s+/g, "_")}_example.py
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyCode(snippet.code)}
                      className="text-gray-400 hover:text-white"
                    >
                      {copied ? <Check size={16} /> : <Copy size={16} />}
                      <span className="ml-2">{copied ? "Copied!" : "Copy"}</span>
                    </Button>
                  </div>
                  <pre className="p-4 overflow-x-auto text-sm">
                    <code className="language-python">{snippet.code}</code>
                  </pre>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
