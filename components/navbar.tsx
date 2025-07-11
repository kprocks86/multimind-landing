"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Menu, X, Star } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-white flex items-center">
            <Image src="/logos/brand_logo.png" alt="MultiMind Logo" className="w-10 h-10 mr-2" width={40} height={40} />
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
              MultiMind
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/#features" className="text-gray-300 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="/#code" className="text-gray-300 hover:text-white transition-colors">
            Code
          </Link>
          <Link href="/#roadmap" className="text-gray-300 hover:text-white transition-colors">
            Roadmap
          </Link>
          <Link href="/#community" className="text-gray-300 hover:text-white transition-colors">
            Community
          </Link>
          <Link href="/blogs" className="text-gray-300 hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="https://github.com/multimindlab/multimind-sdk" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="flex items-center gap-2 text-gray-900 border-gray-700">
              <Github size={18} />
              <span>SDK</span>
            </Button>
          </Link>
          {/* <Link href="https://github.com/multimindlab/multimind-sdk-js" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="flex items-center gap-2 text-gray-900 border-gray-700">
              <Github size={18} />
              <span>JS SDK</span>
            </Button>
          </Link> */}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            <Link
              href="/#features"
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/#code"
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Code
            </Link>
            <Link
              href="/#roadmap"
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Roadmap
            </Link>
            <Link
              href="/#community"
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </Link>
            <Link
              href="/blogs"
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <div className="flex flex-col space-y-3 pt-2 w-full">
              <Link href="https://github.com/multimindlab/multimind-sdk" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="outline" className="w-full flex items-center gap-2 text-gray-900 border-gray-700">
                  <Github size={18} />
                  <span>SDK</span>
                </Button>
              </Link>
            </div>
            {/* <div className="flex flex-col space-y-3 pt-2 w-full">
              <Link href="https://github.com/multimindlab/multimind-sdk-js" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="outline" className="w-full flex items-center gap-2 text-gray-900 border-gray-700">
                  <Github size={18} />
                  <span>JS SDK</span>
                </Button>
              </Link>
            </div> */}
          </div>
        </div>
      )}
    </nav>
  )
}
