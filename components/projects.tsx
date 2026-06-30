'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Sparkles } from 'lucide-react'

import { Reveal } from '@/components/reveal'

const projects = [
  {
    title: 'WorldGram',
    year: '2024',
    description:
      'Telegram-style real-time messaging app with private chats, group messaging, and channels. Includes JWT-based login, refresh tokens, and role-based access for group admins.',
    role: 'Real-time messaging app',
    focus: ['Socket.IO updates', 'JWT authentication', 'Vercel & Render deploy'],
    tech: ['React', 'Redux Toolkit', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Tailwind', 'JWT'],
    link: 'https://world-gram.vercel.app',
    github: 'https://github.com/mulugirmay/worldgram',
    image: '/telegram.png',
    aspect: 'aspect-[16/9]',
    accent: 'from-[#152432] via-[#12202d] to-[#0f1a27]',
  },
  {
    title: 'BizChat',
    year: '2024',
    description:
      'Business chat and order management app with a real-time messaging system that also handles order updates, so businesses can message and track orders in one place.',
    role: 'Business chat & orders',
    focus: ['Live order updates', 'Socket.IO events', 'Split frontend/backend'],
    tech: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Socket.IO'],
    link: 'https://biz-chat-beta.vercel.app/',
    github: 'https://github.com/mulugirmay/bizchat',
    image: '/bizcaht.png',
    aspect: 'aspect-[16/9]',
    accent: 'from-[#2b201a] via-[#1b1720] to-[#11151e]',
  },
  {
    title: 'QuickReach',
    year: '2024',
    description:
      'Emergency response system where users send alerts and receive real-time responses. JWT authentication ensures only verified users can send and receive emergency requests.',
    role: 'Emergency response system',
    focus: ['Real-time alerts', 'Verified users', 'Alert history API'],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'JWT'],
    link: 'https://quickreach-tawny.vercel.app/',
    github: 'https://github.com/mulugirmay/quickreach',
    image: '/quickreach.png',
    aspect: 'aspect-[16/9]',
    accent: 'from-[#1b1730] via-[#111a2d] to-[#0d1623]',
  },
  {
    title: 'CryptoMobileApp',
    year: '2024',
    description:
      'Cross-platform Flutter app that fetches and displays live cryptocurrency prices via a public API, with a clean responsive UI for both Android and iOS.',
    role: 'Cryptocurrency tracker',
    focus: ['Live price data', 'Cross-platform UI', 'Public API integration'],
    tech: ['Flutter', 'Dart', 'REST API'],
    link: 'https://github.com/mulugirmay/coinlists',
    github: 'https://github.com/mulugirmay/coinlists',
    image: '/image.png',
    aspect: 'aspect-[4/5]',
    accent: 'from-[#101628] via-[#0f1320] to-[#090d17]',
  },
  
]

function ProjectPreview({
  project,
  flip,
}: {
  project: (typeof projects)[number]
  flip: boolean
}) {
  return (
    <div className={`overflow-hidden rounded-[1.75rem] border border-white/8 bg-gradient-to-br ${project.accent} shadow-[0_20px_60px_rgba(0,0,0,0.28)]`}>
      <div className={`relative ${project.aspect}`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`bg-[#101b29] p-2 object-contain ${flip ? 'object-right' : 'object-center'}`}
        />
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.04] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.35em] text-foreground/60">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Selected work
          </div>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[0.98rem] leading-7 text-foreground/55">
            Full-stack web apps, mobile projects, and systems programming work from my portfolio and CV.
          </p>
        </Reveal>

        <div className="space-y-12 lg:space-y-16">
          {projects.map((project, index) => {
            const flip = index % 2 === 1

            return (
              <Reveal key={project.title} delay={index * 90}>
                <article className="grid gap-7 rounded-[2rem] border border-white/6 bg-white/[0.02] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.16)] lg:grid-cols-2 lg:items-center lg:gap-10 lg:p-6">
                  <div className={flip ? 'lg:order-2' : 'lg:order-1'}>
                    <ProjectPreview project={project} flip={flip} />
                  </div>

                  <div className={`space-y-5 px-1 pb-2 ${flip ? 'lg:order-1 lg:pr-4' : 'lg:order-2 lg:pl-2'}`}>
                    <div className="flex items-center gap-3 text-[0.78rem] uppercase tracking-[0.28em] text-foreground/40">
                      <span>{project.year}</span>
                      <span className="h-px w-8 bg-primary/80" />
                      <span>{project.role}</span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-[2rem]">
                        {project.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-[0.98rem] leading-7 text-foreground/60">
                        {project.description}
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      {project.focus.map((item) => (
                        <div key={item} className="rounded-2xl border border-white/6 bg-[#122031] px-4 py-4">
                          <p className="text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-primary/80">
                            Focus
                          </p>
                          <p className="mt-2 text-[0.92rem] leading-6 text-foreground/70">{item}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-white/[0.04] px-3 py-1 text-[0.72rem] font-medium text-foreground/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-sm bg-primary px-5 py-3 text-[0.92rem] font-medium text-primary-foreground transition-all hover:bg-[#ff8a70]"
                      >
                        View GitHub
                      </Link>
                      {project.link !== project.github && (
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-sm border border-primary/70 px-5 py-3 text-[0.92rem] font-medium text-foreground transition-all hover:border-primary hover:bg-primary/10"
                        >
                          View project
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
