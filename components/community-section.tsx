import { Button } from "@/components/ui/button";
import { Github, MessageSquare, Star, GitFork, Users } from "lucide-react";

export default function CommunitySection() {
  return (
    <section
      id="community"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-950"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
              Join as an Early Adopter
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Sign up for insider updates, product deep-dives, and invite-only
            test builds designed for forward-thinking developers, researchers,
            and builders.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <div className="flex justify-center mb-4">
                <Star className="w-12 h-12 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Star on GitHub</h3>
              <p className="text-gray-400 mb-4">Show your support by starring our repository</p>
              <div className="flex justify-center">
                <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full text-gray-300">
                  <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
                  <span>1,200+</span>
                </div>
              </div>
            </div> */}

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <div className="flex justify-center mb-4">
                <MessageSquare className="w-12 h-12 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Join Discord</h3>
              <p className="text-gray-400 mb-4">
                Connect with other developers and get support
              </p>
              <div className="flex justify-center">
                <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full text-gray-300">
                  <Users className="w-4 h-4 text-purple-500" />
                  {/* <span>500+ members</span> */}
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <div className="flex justify-center mb-4">
                <GitFork className="w-12 h-12 text-cyan-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Contribute</h3>
              <p className="text-gray-400 mb-4">
                Help improve MultiMind with code contributions
              </p>
              <div className="flex justify-center">
                <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full text-gray-300">
                  <GitFork className="w-4 h-4 text-cyan-500" />
                  {/* <span>100+ PRs merged</span> */}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://github.com/multimindlabs/multimind-sdk" target="_blank" rel="noopener noreferrer">

            <Button
              className="bg-white text-gray-900 hover:bg-gray-200 flex items-center gap-2"
              size="lg"
            >
              <Github size={20} />
              GitHub
            </Button>
            </a>
            <a href="https://discord.gg/9yBXckgn" target="_blank" rel="noopener noreferrer">
              <Button
                className="bg-[#5865F2] hover:bg-[#4752c4] flex items-center gap-2"
                size="lg"
              >
                <MessageSquare size={20} />
                Join Discord
              </Button>
            </a>
            {/* <Button variant="outline" className="border-gray-700 hover:bg-gray-800" size="lg">
              Documentation
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
