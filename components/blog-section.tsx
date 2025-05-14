import Link from "next/link"
import Image from "next/image"
import { CalendarIcon, Clock } from "lucide-react"
import { formatDate } from "@/lib/utils"

type BlogPost = {
  id: string
  title: string
  excerpt: string
  coverImage: string
  date: string
  author: {
    name: string
    avatar: string
  }
  readingTime: string
  category: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "what-is-ai",
    title: "What is AI? A Practical Explanation Without the Buzzwords",
    excerpt:
      "Confused by all the AI terminology? This straightforward guide explains what artificial intelligence actually is and how you can start using it for practical projects today.",
    coverImage: "/blog/what-is-ai.jpg",
    date: "2023-12-15",
    author: {
      name: "Robert Chen",
      avatar: "/avatars/robert.jpg",
    },
    readingTime: "10 min read",
    category: "Beginners",
  },
  {
    id: "ai-project-roadmap",
    title: "AI Project Roadmap: How to Build Your First AI Application Using Multimind SDK",
    excerpt:
      "From idea to deployment: A step-by-step guide for beginners to create their first AI application without getting overwhelmed.",
    coverImage: "/blog/ai-project-roadmap.jpg",
    date: "2023-12-10",
    author: {
      name: "Jennifer Wu",
      avatar: "/avatars/jennifer.jpg",
    },
    readingTime: "11 min read",
    category: "Beginners",
  },
  {
    id: "multimind-roadmap-2024",
    title: "MultiMind SDK Roadmap for 2024: What's Coming Next",
    excerpt:
      "Explore our exciting plans for MultiMind SDK in 2024, including new features, integrations, and community initiatives.",
    coverImage: "/blog/roadmap-2024.jpg",
    date: "2023-12-01",
    author: {
      name: "Thomas Lee",
      avatar: "/avatars/thomas.jpg",
    },
    readingTime: "7 min read",
    category: "Announcements",
  },
  {
    id: "fine-tuning-ai-models",
    title: "Fine-Tuning AI Models: A Practical Beginner's Guide Using Multimind SDK",
    excerpt:
      "Learn how to customize AI models for your specific needs without a PhD in machine learning - perfect for developers and enthusiasts getting started with AI.",
    coverImage: "/blog/fine-tuning-guide.jpg",
    date: "2023-11-25",
    author: {
      name: "Daniel Park",
      avatar: "/avatars/daniel.jpg",
    },
    readingTime: "9 min read",
    category: "Tutorials",
  },
  {
    id: "ai-agents-beginners-guide",
    title: "What Are AI Agents? A Simple Guide for Beginners (Using Multimind SDK)",
    excerpt:
      "Confused about AI agents? This beginner-friendly guide explains what they are, how they work, and how you can build your own without writing code.",
    coverImage: "/blog/ai-agents-beginners.jpg",
    date: "2023-11-15",
    author: {
      name: "Sarah Johnson",
      avatar: "/avatars/sarah.jpg",
    },
    readingTime: "8 min read",
    category: "Beginners",
  },
  {
    id: "building-next-generation-ai-agents",
    title:
      "Building Next-Generation AI Agents Without Code: How Multimind SDK is Revolutionizing Enterprise Applications",
    excerpt:
      "Transform your business operations with intelligent AI agents that remember, reason, and collaborate - no coding required.",
    coverImage: "/blog/ai-agents-enterprise.jpg",
    date: "2023-11-05",
    author: {
      name: "Michael Chen",
      avatar: "/avatars/michael.jpg",
    },
    readingTime: "10 min read",
    category: "Enterprise",
  },
  {
    id: "multimind-ecommerce-applications",
    title: "Using Multimind SDK for E-Commerce Applications",
    excerpt:
      "Discover how to leverage Multimind SDK's capabilities for building AI agents with memory, planning, and multi-agent communication to transform your e-commerce platform.",
    coverImage: "/blog/ecommerce-applications.jpg",
    date: "2024-03-20",
    author: {
      name: "Sarah Johnson",
      avatar: "/avatars/sarah.jpg",
    },
    readingTime: "15 min read",
    category: "Enterprise",
  },
]

interface BlogPostCardProps {
  post: BlogPost
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link
      key={post.id}
      href={`/blogs/${post.id}`}
      className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{post.title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span>{post.author.name}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <CalendarIcon className="h-4 w-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readingTime}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export function BlogSection() {
  return (
    <section id="blogs" className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Latest from Our Blog</h2>
        <p className="text-xl text-gray-300">Insights, tutorials, and updates from the Ai2Innovate team</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.slice(0, 6).map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/blogs"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors"
        >
          View All Posts
        </Link>
      </div>
    </section>
  )
}
