import Link from "next/link"
import { Github, MessageSquare, Heart, FileText, ExternalLink } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold text-white flex items-center">
            <img src="/logos/brand_logo.png" alt="MultiMind Logo" className="w-10 h-10 mr-2" />
              <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
                MultiMind
              </span>
            </Link>
            <p className="mt-2 text-gray-400">Built by Ai2Innovate</p>
            <p className="mt-4 text-gray-400">The unified interface for all major language models.</p>
            <div className="flex items-center gap-4 mt-6">
              <Link
                href="https://github.com/multimindlab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://discord.gg/K64U65je7h"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <MessageSquare size={20} />
              </Link>
              {/* <Link
                href="https://notion.so"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FileText size={20} />
              </Link> */}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="https://github.com/multimindlab/multimind-sdk/tree/develop/docs" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1">
                  Documentation
                </Link>
              </li>

              <li>
                <Link href="https://github.com/multimindlab/multimind-sdk/tree/develop/examples" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1">
                  Examples
                </Link>
              </li>
              <li>
                <Link
                  href="https://mercurial-sailfish-6e7.notion.site/MultiMind-SDK-Roadmap-1f25f30ce5dc8060abe0e9817770d93f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  Roadmap
                  <ExternalLink size={14} />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://github.com/multimindlab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  GitHub
                  <ExternalLink size={14} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://discord.gg/K64U65je7h"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  Discord
                  <ExternalLink size={14} />
                </Link>
              </li>
              <li>
                <Link href="https://x.com/Ai2Innovate" className="text-gray-400 hover:text-white transition-colors">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Contributing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="https://github.com/multimindlab/multimind-sdk?tab=Apache-2.0-1-ov-file" className="text-gray-400 hover:text-white transition-colors">
                  License
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ai2Innovate. Released under the MIT License.
          </p>
          <div className="flex items-center gap-2 mt-4 md:mt-0 text-gray-500 text-sm">
            <span>Made with</span>
            <Heart size={14} className="text-red-500" fill="currentColor" />
            <span>by Ai2Innovate team</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
