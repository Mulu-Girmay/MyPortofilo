'use client'

import { Camera, CloudCog, Code2, Sparkles } from 'lucide-react'

import { Reveal } from '@/components/reveal'

const principles = [
  {
    title: 'Full-stack development',
    description: 'Building end-to-end apps with React, Node.js, Express, MongoDB, and PostgreSQL across the MERN/PERN stack.',
    icon: Code2,
  },
  {
    title: 'Real-time systems',
    description: 'Implementing live messaging, alerts, and order updates with Socket.IO, JWT auth, and REST APIs.',
    icon: Sparkles,
  },
  {
    title: 'Mobile & tooling',
    description: 'Shipping cross-platform Flutter apps and low-level projects in C++, with Git, Agile, and DSA practice.',
    icon: CloudCog,
  },
]

const stats = [
  {
    value: '5+',
    label: 'Full-stack projects built',
  },
  {
    value: '33',
    label: 'LeetCode problems solved',
  },
  {
    value: '2028',
    label: 'Expected graduation (AAU)',
  },
]

export function Skills() {
  return (
    <section id="about" className="px-4 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/6 bg-white/[0.02] px-5 py-10 shadow-[0_20px_80px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          <Reveal className="space-y-7">
            <div className="flex items-center gap-3">
              <div className="h-6 w-px bg-primary/90" />
              <span className="text-[0.78rem] font-semibold uppercase tracking-[0.32em] text-foreground/45">
                About
              </span>
            </div>

            <div className="space-y-4">
              <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Software engineering student with full-stack experience.
              </h2>
              <p className="max-w-xl text-[0.98rem] leading-7 text-foreground/60">
                I&apos;m a 3rd-year Software Engineering student at Addis Ababa University,
                building full-stack web apps with the MERN/PERN stack and mobile apps with
                Flutter. I&apos;m comfortable across frontend and backend development, real-time
                features, and REST APIs.
              </p>
            </div>

            <div className="grid gap-4">
              {principles.map((principle) => {
                const Icon = principle.icon
                return (
                  <div
                    key={principle.title}
                    className="flex gap-4 rounded-2xl border border-white/6 bg-[#122031] px-4 py-4"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-white/8 bg-white/[0.04] text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-foreground sm:text-[1.05rem]">
                        {principle.title}
                      </p>
                      <p className="mt-1 text-[0.9rem] leading-6 text-foreground/55">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </Reveal>

          <Reveal delay={150} className="space-y-6">
            <div className="rounded-[1.75rem] border border-white/6 bg-[#111c29] p-6">
              <div className="flex items-center gap-3">
                <Camera className="h-4 w-4 text-primary" />
                <span className="text-[0.78rem] font-semibold uppercase tracking-[0.32em] text-foreground/45">
                  My approach
                </span>
              </div>
              <p className="mt-4 text-[1rem] leading-7 text-foreground/65">
                Relevant coursework includes Data Structures &amp; Algorithms, OOP, Database
                Systems, and Operating Systems. I also work with Tailwind CSS, Redux Toolkit,
                Vite, Supabase, and Linux CLI in personal projects.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/6 bg-[#122031] px-5 py-5">
                  <p className="text-3xl font-semibold tracking-tight text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-2 max-w-[8rem] text-[0.88rem] leading-6 text-foreground/55">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-[1.75rem] border border-primary/20 bg-primary/10 px-6 py-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
                Creative note
              </p>
              <p className="mt-3 text-[0.96rem] leading-7 text-foreground/70">
                Open to remote and local internships or junior developer roles. I enjoy turning
                project ideas into deployed products with clean architecture and real-time features.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
