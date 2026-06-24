'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-background relative overflow-hidden">
      {/* Decorative geometric elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border-4 border-primary/20 transform rotate-45"></div>
      <div className="absolute bottom-32 left-10 w-24 h-24 border-2 border-primary/15 transform -rotate-12"></div>
      <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-primary rounded-full opacity-60"></div>
      
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Greeting */}
          <div className="space-y-2">
            <p className="text-primary font-bold text-2xl">
              Hello <span className="text-primary">.</span>
            </p>
            <p className="text-foreground/70 text-xl font-semibold">
              I&apos;m Mulu
            </p>
          </div>

          {/* Title */}
          <h1 className="text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Full-Stack<br />Developer
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded font-bold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
            >
              Get a project?
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded font-bold hover:bg-primary/10 transition-all duration-300"
            >
              My resume
            </Link>
          </div>

          {/* Skills */}
          <div className="space-y-3 pt-8">
            <p className="text-muted-foreground text-sm font-semibold uppercase tracking-wide">
              Technical Skills
            </p>
            <div className="flex flex-wrap gap-3">
              {['HTML5', 'CSS', 'JavaScript', 'Node.js', 'React', 'Git', 'GitHub'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-semibold text-muted-foreground border border-border rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center items-center hidden lg:flex">
          {/* Circular background accent */}
          <div className="absolute w-80 h-80 rounded-full border-2 border-primary/30 opacity-50"></div>
          <div className="absolute w-72 h-72 rounded-full bg-primary/10 blur-2xl"></div>
          
          {/* Profile Image */}
          <div className="relative w-64 h-80 flex items-center justify-center">
            <Image
              src="/profile.jpg"
              alt="Mulu Girmay"
              width={300}
              height={400}
              className="relative w-64 h-80 object-cover rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* About Section below hero */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground mb-8">About me</h2>
          <div className="grid grid-cols-3 gap-8 max-w-2xl">
            <div>
              <p className="text-3xl font-bold text-primary">120+</p>
              <p className="text-muted-foreground text-sm mt-2">Completed Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">95%</p>
              <p className="text-muted-foreground text-sm mt-2">Client satisfaction</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">10+</p>
              <p className="text-muted-foreground text-sm mt-2">Years of experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
