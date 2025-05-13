import { Badge } from "@/components/ui/badge"
import { Code2, Rocket, Briefcase, GraduationCap, Lightbulb, Laptop, Server, Users, BookOpen, Building, User, Database } from "lucide-react"

const categories = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "AI Engineers",
    description: "Build and deploy sophisticated AI applications with minimal overhead",
    tags: ["Model Orchestration", "Fine-Tuning", "Prompt Engineering"],
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Indie Hackers",
    description: "Launch AI-powered products quickly without managing multiple APIs",
    tags: ["Quick Prototyping", "Cost Optimization", "Flexibility"],
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Startups",
    description: "Avoid vendor lock-in and maintain flexibility as your needs evolve",
    tags: ["Vendor Agnostic", "Scalability", "Future-Proof"],
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Researchers",
    description: "Compare model performance and experiment with fine-tuning techniques",
    tags: ["Benchmarking", "Experimentation", "Academic Research"],
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Product Teams",
    description: "Integrate AI capabilities into existing products with minimal friction",
    tags: ["Easy Integration", "Consistent API", "Reliability"],
  },
  {
    icon: <Laptop className="w-6 h-6" />,
    title: "Hobbyists",
    description: "Learn and experiment with different models through a unified interface",
    tags: ["Learning", "Exploration", "Personal Projects"],
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "MLOps Engineers",
    description: "Automate deployment, monitoring, and lifecycle management of AI models in production.",
    tags: ["CI/CD", "Monitoring", "Automation"],
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Consultants",
    description: "Deliver turnkey, AI-powered solutions to clients with customizable workflows and rapid prototyping.",
    tags: ["Customization", "Client Delivery", "Integration"],
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Educators & Trainers",
    description: "Build interactive tutorials, workshops, and course materials using a unified SDK for hands-on AI learning.",
    tags: ["Curriculum Development", "Workshops", "Hands-On Labs"],
  },
  {
    icon: <Building className="w-6 h-6" />,
    title: "Enterprise IT & Architecture Teams",
    description: "Design, deploy, and govern AI infrastructure at scale across the organization.",
    tags: ["Scalability", "Security", "Compliance"],
  },
  {
    icon: <User className="w-6 h-6" />,
    title: "Junior AI Engineers",
    description: "Get up to speed with AI fundamentals, sample projects, and best practices.",
    tags: ["Tutorials", "Starter Kits", "Community Support"],
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Data Scientists & Analysts",
    description: "Leverage your data expertise to build AI-driven insights and end-to-end pipelines.",
    tags: ["Data Processing", "Model Evaluation", "Visualization"],
  },
]

export default function BuiltForSection() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
              Built For
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            MultiMind serves diverse users across the AI ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-gray-700"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gray-800 rounded-lg text-purple-500">{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <p className="text-gray-400 mb-4">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.tags.map((tag, tagIndex) => (
                  <Badge
                    key={tagIndex}
                    variant="outline"
                    className="bg-gray-800/50 text-gray-300 border-gray-700 hover:bg-gray-800"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
