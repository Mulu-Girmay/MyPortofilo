'use client'

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design', 'Web Performance'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL', 'Database Design'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git & GitHub', 'Vercel', 'Docker', 'Figma', 'Firebase', 'VS Code'],
  },
  {
    category: 'Skills',
    skills: ['Problem Solving', 'System Design', 'Testing', 'Agile', 'Communication', 'Leadership'],
  },
]

export function Skills() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12">My Services</h2>
        
        <div className="space-y-6">
          {skillCategories.slice(0, 3).map((category, index) => (
            <div
              key={index}
              className="flex gap-6 items-start pb-6 border-b border-border last:border-b-0"
            >
              {/* Icon placeholder */}
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 text-primary">→</div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {category.category}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {category.skills.join(', ')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
