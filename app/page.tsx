import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import WhatIsSection from "@/components/what-is-section"
import FeatureSection from "@/components/feature-section"
import DeepTechSection from "@/components/deep-tech-section"
import CodeSnippets from "@/components/code-snippets"
import OrchestrationSection from "@/components/orchestration-section"
import UseCasesSection from "@/components/use-cases-section"
import ModelLogos from "@/components/model-logos"
import BuiltForSection from "@/components/built-for-section"
import VisionSection from "@/components/vision-section"
import RoadmapSection from "@/components/roadmap-section"
import CommunitySection from "@/components/community-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navbar />
      <main>
        <HeroSection />
        <WhatIsSection />
        <FeatureSection />
        <DeepTechSection />
        <CodeSnippets />
        {/* <OrchestrationSection /> */}
        <UseCasesSection />
        <ModelLogos />
        <BuiltForSection />
        <VisionSection />
        <RoadmapSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  )
}
