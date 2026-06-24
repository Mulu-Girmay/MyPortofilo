'use client'

import Link from 'next/link'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="px-4 py-14 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/6 bg-white/[0.02] px-5 py-8 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="space-y-4">
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.32em] text-foreground/45">
              Contacts
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Let&apos;s build something sharp and memorable.
            </h2>
            <p className="max-w-2xl text-[0.96rem] leading-7 text-foreground/60">
              If you want a clean portfolio site, a product landing page, or a practical web app, I&apos;m happy to talk.
            </p>

            <div className="grid gap-3 pt-2 sm:grid-cols-3">
              <div className="flex items-start gap-3 rounded-2xl border border-white/6 bg-[#122031] px-4 py-4">
                <Mail className="mt-1 h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <p className="text-sm text-foreground/55">mulu.girmay@example.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-white/6 bg-[#122031] px-4 py-4">
                <Phone className="mt-1 h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">Phone</p>
                  <p className="text-sm text-foreground/55">+251 123 456 789</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-white/6 bg-[#122031] px-4 py-4">
                <MapPin className="mt-1 h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">Location</p>
                  <p className="text-sm text-foreground/55">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Link
              href="mailto:mulu.girmay@example.com"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-[0.92rem] font-medium text-primary-foreground transition-all hover:bg-[#ff8a70]"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
