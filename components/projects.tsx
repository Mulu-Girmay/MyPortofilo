import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'WorldGram',
    description:
      'A global social media platform for connecting communities and sharing moments in real time.',
    tech: ['Next.js', 'React', 'Prisma', 'PostgreSQL'],
    link: 'https://worldgram.vercel.app',
    github: 'https://github.com/mulugirmay/worldgram',
    image: '/telegram.png',
    year: '2024',
    aspect: 'aspect-[16/9]',
  },
  {
    title: 'QuickReach',
    description:
      'Emergency response system connecting citizens with dispatchers and volunteers in seconds.',
    tech: ['Next.js', 'TypeScript', 'APIs', 'Maps'],
    link: 'https://quickreach.vercel.app',
    github: 'https://github.com/mulugirmay/quickreach',
    image: '/quickreach.png',
    year: '2024',
    aspect: 'aspect-[16/9]',
  },
  {
    title: 'BizChat',
    description:
      'AI-powered communication platform with real-time messaging and collaboration tools.',
    tech: ['React', 'WebSockets', 'AI', 'Node.js'],
    link: 'https://bizchat.vercel.app',
    github: 'https://github.com/mulugirmay/bizchat',
    image: '/bizcaht.png',
    year: '2024',
    aspect: 'aspect-[16/9]',
  },
  {
    title: 'Coin Lists',
    description:
      'A cryptocurrency portfolio tracker with price updates and simple market analysis.',
    tech: ['React', 'APIs', 'Charts', 'Redux'],
    link: 'https://coinlists.vercel.app',
    github: 'https://github.com/mulugirmay/coinlists',
    image: '/image.png',
    year: '2023',
    aspect: 'aspect-[4/5]',
  },
]

function ProjectPreview({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-white/8 bg-[#101b29] shadow-[0_20px_40px_rgba(0,0,0,0.22)]">
      <div className={`relative ${project.aspect}`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-contain bg-[#101b29] p-2"
        />
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Projects
          </h2>
          <div className="mx-auto mt-5 h-10 w-px bg-primary/80" />
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => {
            const mediaFirst = index % 2 === 1

            return (
              <div key={project.title} className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
                <div className={mediaFirst ? 'lg:order-2' : 'lg:order-1'}>
                  <ProjectPreview project={project} />
                </div>

                <div className={`space-y-5 ${mediaFirst ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div>
                    <div className="mb-3 flex items-center gap-3 text-[0.8rem] uppercase tracking-[0.28em] text-foreground/40">
                      <span>{project.year}</span>
                      <span className="h-px w-8 bg-primary/80" />
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-[2rem]">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-[0.96rem] leading-7 text-foreground/60">
                      {project.description}
                    </p>
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
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-sm border border-primary/70 px-5 py-3 text-[0.92rem] font-medium text-foreground transition-all hover:border-primary hover:bg-primary/10"
                    >
                      View project
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
