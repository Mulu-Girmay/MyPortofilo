'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/6 bg-[#0d1722]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="#home" className="text-[1rem] font-semibold tracking-tight text-foreground transition-colors hover:text-primary">
          Jensen Omega
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="#home" className="text-[0.95rem] text-foreground/85 transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="#about" className="text-[0.95rem] text-foreground/85 transition-colors hover:text-primary">
            About
          </Link>
          <Link href="#projects" className="text-[0.95rem] text-foreground/85 transition-colors hover:text-primary">
            Projects
          </Link>
          <Link href="#contact" className="text-[0.95rem] text-foreground/85 transition-colors hover:text-primary">
            Contacts
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 top-full border-b border-white/6 bg-[#0d1722]/95 md:hidden">
            <div className="mx-auto max-w-6xl space-y-3 px-4 py-4 sm:px-6">
              <Link
                href="#home"
                className="block py-2 text-foreground/85 transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#about"
                className="block py-2 text-foreground/85 transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#projects"
                className="block py-2 text-foreground/85 transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="block py-2 text-foreground/85 transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Contacts
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
