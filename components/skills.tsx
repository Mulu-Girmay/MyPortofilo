'use client'

import { CloudCog, Code2, Smartphone, Sparkles } from 'lucide-react'

const services = [
  {
    title: 'Website Development',
    icon: Code2,
  },
  {
    title: 'App Development',
    icon: Smartphone,
  },
  {
    title: 'Website Hosting',
    icon: CloudCog,
  },
]

const stats = [
  {
    value: '120+',
    label: 'Completed projects',
  },
  {
    value: '95%',
    label: 'Client satisfaction',
  },
  {
    value: '10+',
    label: 'Years of experience',
  },
]

export function Skills() {
  return (
    <section id="about" className="px-4 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/6 bg-white/[0.02] px-5 py-10 shadow-[0_20px_80px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-6 w-px bg-primary/90" />
              <span className="text-[0.78rem] font-semibold uppercase tracking-[0.32em] text-foreground/45">
                Services
              </span>
            </div>

            <div className="space-y-1 pl-1">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div key={service.title} className="relative flex gap-4 py-5">
                    <div className="absolute left-4 top-0 h-full w-px bg-primary/70" />
                    <div className="absolute left-[0.95rem] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-primary" />

                    <div className="relative z-10 flex h-11 w-11 flex-none items-center justify-center rounded-lg border border-white/10 bg-[#122031] text-primary">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="pt-1">
                      <p className="text-base font-semibold text-foreground sm:text-[1.05rem]">
                        {service.title}
                      </p>
                      <p className="mt-1 text-[0.9rem] leading-6 text-foreground/55">
                        {index === 0
                          ? 'Structured, responsive websites with a clean visual hierarchy.'
                          : index === 1
                            ? 'Practical mobile-ready experiences with modern UI patterns.'
                            : 'Reliable deployment and hosting setups with a fast delivery flow.'}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="space-y-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-[0.78rem] font-semibold uppercase tracking-[0.32em] text-foreground/45">
                  About me
                </span>
              </div>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                About me
              </h2>

              <p className="mt-4 max-w-xl text-[0.98rem] leading-7 text-foreground/60">
                I started my software journey from photography and gradually moved into building interfaces.
                That mix taught me how to balance visual storytelling with reliable front-end and back-end work.
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
          </div>
        </div>
      </div>
    </section>
  )
}
