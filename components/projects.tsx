'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'WorldGram',
    description: 'A global social media platform for connecting communities and sharing moments in real-time.',
    tech: ['Next.js', 'React', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    link: 'https://worldgram.vercel.app',
    github: 'https://github.com/mulugirmay/worldgram',
    image: '/worldgram.png',
    year: '2024',
  },
  {
    title: 'QuickReach',
    description: 'Emergency response system connecting citizens with dispatchers and volunteers in seconds.',
    tech: ['Next.js', 'TypeScript', 'Real-time APIs', 'Maps', 'Node.js'],
    link: 'https://quickreach.vercel.app',
    github: 'https://github.com/mulugirmay/quickreach',
    image: '/quickreach.png',
    year: '2024',
  },
  {
    title: 'BizChat',
    description: 'AI-powered business communication platform with real-time messaging and collaboration tools.',
    tech: ['React', 'WebSockets', 'AI/ML', 'Node.js', 'MongoDB'],
    link: 'https://bizchat.vercel.app',
    github: 'https://github.com/mulugirmay/bizchat',
    image: '/bizchat.png',
    year: '2024',
  },
  {
    title: 'Coin Lists',
    description: 'Cryptocurrency portfolio tracker with real-time price updates and market analysis.',
    tech: ['React', 'APIs', 'Charts.js', 'Redux', 'Responsive Design'],
    link: 'https://coinlists.vercel.app',
    github: 'https://github.com/mulugirmay/coinlists',
    image: '/coinlists.png',
    year: '2023',
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-background relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Projects
          </h2>
          <div className="flex justify-center">
            <div className="w-1 h-12 bg-primary rounded-full"></div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:auto-cols-fr' : ''
              }`}
              style={{
                direction: index % 2 === 1 ? 'rtl' : 'ltr',
              }}
            >
              {/* Project Image/Content Box */}
              <div style={{ direction: 'ltr' }} className="relative">
                {index % 2 === 1 ? (
                  // Code snippet for odd projects
                  <div className="bg-card border border-border rounded-lg p-6 font-mono text-sm">
                    <div className="text-primary mb-4">
                      <span className="text-muted-foreground">const</span> <span className="text-foreground">result</span> = <span className="text-primary">await</span> <span className="text-foreground">fetch</span>(<span className="text-primary">&apos;/api/project&apos;</span>)
                    </div>
                    <div className="text-primary">
                      console.<span className="text-foreground">log</span>(<span className="text-primary">&quot;Building amazing projects&quot;</span>)
                    </div>
                  </div>
                ) : (
                  // Image for even projects
                  <div className="relative rounded-lg overflow-hidden h-72 lg:h-80">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div style={{ direction: 'ltr' }} className="space-y-6">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-semibold text-muted-foreground border border-border rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-primary text-primary-foreground rounded font-bold hover:shadow-lg hover:shadow-primary/50 transition-all"
                  >
                    View GitHub
                  </Link>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 border-2 border-primary text-primary rounded font-bold hover:bg-primary/10 transition-all inline-flex items-center gap-2"
                  >
                    View project
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
