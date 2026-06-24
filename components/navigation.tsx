'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl text-foreground hover:text-primary transition-colors">
          Jensen Omega
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="#projects" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
            Home
          </Link>
          <Link href="#" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
            About
          </Link>
          <Link href="#projects" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
            Projects
          </Link>
          <Link href="#contact" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
            Contacts
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="max-w-7xl mx-auto px-6 py-4 space-y-4">
              <Link
                href="#projects"
                className="block text-foreground hover:text-primary transition-colors font-semibold py-2"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="block text-foreground hover:text-primary transition-colors font-semibold py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="https://github.com/mulugirmay"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-2 bg-primary text-primary-foreground rounded-lg font-bold hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 text-center"
              >
                GitHub
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
