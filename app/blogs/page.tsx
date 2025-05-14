import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { BlogPostCard, blogPosts } from "@/components/blog-section";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className=" mx-auto">
          <h1 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
              MultiMind Blog
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-12">
            Insights, tutorials, and updates from the Ai2Innovate team
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogPostCard post={post} key={post.id} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
