'use client'

const timeline = [
  {
    year: '2024',
    title: 'Full-Stack Developer',
    company: 'Independent',
    description: 'Building and shipping multiple full-stack applications, focusing on user experience and modern development practices.',
  },
  {
    year: '2023',
    title: 'Software Engineer',
    company: 'Tech Startup',
    description: 'Developed scalable backend systems and responsive frontend interfaces for a growing SaaS platform.',
  },
  {
    year: '2022',
    title: 'Junior Developer',
    company: 'Web Development Agency',
    description: 'Contributed to various client projects, improving skills in React, Node.js, and database management.',
  },
  {
    year: '2021',
    title: 'Education & Training',
    company: 'Self-taught & Online Courses',
    description: 'Completed advanced courses in full-stack development, data structures, and web technologies.',
  },
]

export function Experience() {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20 space-y-4">
          <p className="text-primary font-bold text-sm uppercase tracking-widest">
            Career Journey
          </p>
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mt-6">
            My professional evolution and key milestones throughout my development career.
          </p>
        </div>

        <div className="space-y-12">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="relative pl-8 md:pl-16 pb-12"
            >
              {/* Timeline line */}
              {index !== timeline.length - 1 && (
                <div className="absolute left-4 md:left-8 top-12 bottom-0 w-px bg-gradient-to-b from-primary to-transparent"></div>
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-8 h-8 bg-card border-2 border-primary rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>

              {/* Content */}
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
