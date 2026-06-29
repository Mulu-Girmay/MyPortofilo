'use client'

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Reveal } from "@/components/reveal";

const highlights = [
  "Full-stack MERN/PERN apps",
  "Real-time features with Socket.IO",
  "Mobile apps with Flutter",
  "REST APIs & JWT authentication",
];

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB",
  "Flutter",
  "Socket.IO",
  "Git",
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-14 pt-28 sm:px-6 lg:pb-20 lg:pt-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal className="space-y-7">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.04] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.35em] text-foreground/60">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                Portfolio
              </div>
              <p className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Hello<span className="text-primary">.</span>
              </p>
              <p className="text-xl font-medium tracking-tight text-foreground/80 sm:text-2xl">
                I&apos;m Mulu Girmay
              </p>
            </div>

            <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              I build{" "}
              <span className="text-gradient-coral">
                full-stack web and mobile applications.
              </span>
            </h1>

            <p className="max-w-xl text-[1rem] leading-7 text-foreground/65">
              3rd-year Software Engineering student at Addis Ababa University with
              hands-on experience across the MERN/PERN stack, real-time features,
              and Flutter. Open to remote and local internships or junior developer
              roles.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-5 py-3 text-[0.95rem] font-medium text-primary-foreground transition-all duration-300 hover:translate-y-[-1px] hover:bg-[#ff8a70]"
              >
                View projects
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-sm border border-primary/80 px-5 py-3 text-[0.95rem] font-medium text-foreground transition-all duration-300 hover:border-primary hover:bg-primary/10"
              >
                Let&apos;s talk
              </Link>
            </div>

            <div className="grid gap-2 pt-2 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/6 bg-white/[0.03] px-4 py-3 text-[0.92rem] text-foreground/65"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="pt-5">
              <div className="mb-4 h-px w-14 bg-primary/70" />
              <div className="flex flex-wrap gap-2.5">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/6 bg-white/3 px-3 py-1 text-[0.72rem] font-medium tracking-wide text-foreground/45"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal
            delay={150}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="absolute -right-2 top-8 h-72 w-72 rounded-full border-[10px] border-primary/80 opacity-70 sm:h-80 sm:w-80 lg:h-[26rem] lg:w-[26rem] float-slow" />
            <div className="absolute right-10 top-16 h-56 w-56 rounded-full bg-primary/10 blur-2xl" />
            <div className="relative mt-4 h-[22rem] w-[22rem] overflow-hidden rounded-full border border-primary/15 bg-[#111c29] shadow-[0_0_0_1px_rgba(239,122,96,0.08),0_30px_80px_rgba(0,0,0,0.45)] sm:h-[25rem] sm:w-[25rem] lg:h-[28rem] lg:w-[28rem]">
              <Image
                src="/profile.jpg"
                alt="Mulu Girmay"
                fill
                priority
                sizes="(max-width: 1024px) 22rem, 28rem"
                className="object-cover object-center"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
