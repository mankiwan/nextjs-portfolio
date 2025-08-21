import { useTranslations } from 'next-intl'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Timeline } from '@/components/Timeline'
import { Code, Users, Award, Coffee } from 'lucide-react'

// Sample data - replace with your actual experience
const experienceData = [
  {
    title: 'Senior Full-Stack Developer',
    company: 'Tech Company Inc.',
    period: '2022 - Present',
    description: 'Leading development of enterprise web applications using React, Next.js, and Node.js. Mentoring junior developers and architecting scalable solutions.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
    current: true,
  },
  {
    title: 'Full-Stack Developer',
    company: 'StartupXYZ',
    period: '2020 - 2022',
    description: 'Built and maintained multiple web applications from scratch. Collaborated with design and product teams to deliver user-centric solutions.',
    technologies: ['React', 'Express.js', 'MongoDB', 'Docker', 'Google Cloud'],
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Agency',
    period: '2019 - 2020',
    description: 'Created responsive web interfaces and worked closely with UX/UI designers to implement pixel-perfect designs.',
    technologies: ['Vue.js', 'SASS', 'JavaScript', 'Figma'],
  },
  {
    title: 'Junior Developer',
    company: 'Local Software House',
    period: '2018 - 2019',
    description: 'Started my professional journey learning best practices in software development and contributing to various client projects.',
    technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL'],
  },
]

const personalStats = [
  {
    icon: Code,
    label: 'Lines of Code',
    value: '100K+',
    description: 'Written across various projects',
  },
  {
    icon: Users,
    label: 'Team Projects',
    value: '15+',
    description: 'Collaborative development experience',
  },
  {
    icon: Award,
    label: 'Certifications',
    value: '5',
    description: 'Professional certifications earned',
  },
  {
    icon: Coffee,
    label: 'Coffee Consumed',
    value: '∞',
    description: 'Fueling late-night coding sessions',
  },
]

export default function AboutPage() {
  const t = useTranslations('about')

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          {t('title')}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
      </div>

      <div className="grid gap-16 lg:gap-24">
        {/* About Me Section */}
        <section>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Who I Am</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a passionate full-stack developer with over 5 years of experience 
                  creating digital solutions that make a difference. My journey in 
                  technology started with curiosity and has evolved into a career 
                  focused on building scalable, user-centric applications.
                </p>
                <p>
                  I specialize in modern JavaScript frameworks and have extensive 
                  experience with both frontend and backend technologies. I'm 
                  particularly passionate about React ecosystem, cloud technologies, 
                  and creating seamless user experiences.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with 
                  the developer community through articles and talks.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {personalStats.map((stat) => {
                const Icon = stat.icon
                return (
                  <Card key={stat.label}>
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-2">
                        <Icon className="h-5 w-5 text-primary" />
                        <CardDescription className="text-xs uppercase tracking-wide font-medium">
                          {stat.label}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="text-2xl font-bold text-primary mb-1">
                        {stat.value}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {stat.description}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section>
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Professional Journey</h2>
            <p className="text-muted-foreground max-w-2xl">
              My career progression and the exciting projects I've worked on 
              throughout my professional journey.
            </p>
          </div>
          
          <div className="max-w-4xl">
            <Timeline items={experienceData} />
          </div>
        </section>

        {/* Skills Preview */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Technical Expertise</CardTitle>
              <CardDescription>
                Core technologies and tools I work with regularly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <h4 className="font-semibold mb-3 text-sm text-primary">Frontend</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>React / Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Vue.js</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-sm text-primary">Backend</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-sm text-primary">Cloud & DevOps</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>AWS</li>
                    <li>Docker</li>
                    <li>CI/CD</li>
                    <li>Terraform</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-sm text-primary">Tools</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Git</li>
                    <li>VS Code</li>
                    <li>Figma</li>
                    <li>Jira</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}