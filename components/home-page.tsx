'use client'

import { useSyncExternalStore } from 'react'

import { Contact } from '@/components/contact'
import { Hero } from '@/components/hero'
import { Navigation } from '@/components/navigation'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'

const subscribe = () => () => {}

export function HomePage() {
  const mounted = useSyncExternalStore(subscribe, () => true, () => false)

  if (!mounted) {
    return <main className="relative min-h-screen w-full overflow-hidden bg-background" />
  }

  return (
    <main className="relative w-full overflow-hidden">
      <Navigation />
      <div>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}
