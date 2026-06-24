import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Contact } from '@/components/contact'

export default function Home() {
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
