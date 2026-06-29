'use client'

const timeline = [
  {
    year: '2028',
    title: 'B.Sc. in Software Engineering',
    company: 'Addis Ababa University',
    description:
      'Expected graduation. Relevant coursework: Data Structures & Algorithms, OOP, Database Systems, and Operating Systems.',
  },
  {
    year: '2023 – Present',
    title: 'Software Engineering Student (3rd Year)',
    company: 'Addis Ababa University',
    description:
      'Building full-stack web apps with the MERN/PERN stack and mobile apps with Flutter while studying core computer science fundamentals.',
  },
  {
    year: '2024',
    title: 'Independent Project Developer',
    company: 'Personal Projects',
    description:
      'Shipped WorldGram, BizChat, QuickReach, CryptoMobileApp, and MiniGit — covering real-time web apps, mobile development, and systems programming.',
  },
]

export function Experience() {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20 space-y-4">
          <p className="text-primary font-bold text-sm uppercase tracking-widest">
            Education & Projects
          </p>
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mt-6">
            My academic background and hands-on project work as a software engineering student.
          </p>
        </div>

        <div className="space-y-12">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="relative pl-8 md:pl-16 pb-12"
            >
              {index !== timeline.length - 1 && (
                <div className="absolute left-4 md:left-8 top-12 bottom-0 w-px bg-gradient-to-b from-primary to-transparent"></div>
              )}

              <div className="absolute left-0 top-2 w-8 h-8 bg-card border-2 border-primary rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>

              <div className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-all duration-300">
                <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
                  {item.year}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-lg font-semibold text-primary mb-4">
                  {item.company}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
