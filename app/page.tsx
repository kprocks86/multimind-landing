import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FeatureSection from "@/components/feature-section"
import CodeSnippets from "@/components/code-snippets"
import ModelLogos from "@/components/model-logos"
import BuiltForSection from "@/components/built-for-section"
import RoadmapSection from "@/components/roadmap-section"
import CommunitySection from "@/components/community-section"
import Footer from "@/components/footer"
import ModelSwitchAnimation from "@/components/model-switch-animation"
import { BlogSection } from "@/components/blog-section"
import { FloatingStarWidget } from "@/components/floating-star-widget"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navbar />
      <main>
        <HeroSection />
        <FeatureSection />
        <div className="py-16 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
                  Switch Models Seamlessly
                </span>
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">One line of code to switch between any supported model</p>
            </div>
            <ModelSwitchAnimation />
          </div>
        </div>
        <BlogSection />
        <CodeSnippets />
        <ModelLogos />
        <BuiltForSection />
        <RoadmapSection />
        <CommunitySection />
      </main>
      <Footer />
      <FloatingStarWidget />
    </div>
  )
}
