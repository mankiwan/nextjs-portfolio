import { useTranslations } from 'next-intl'
import { SkillCard } from '@/components/SkillCard'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Code, Server, Cloud, Wrench } from 'lucide-react'

// Sample skills data - replace with your actual skills
const skillsData = {
  frontend: [
    {
      name: 'React',
      level: 95,
      category: 'Framework',
      description: 'Expert in building complex UIs with React hooks, context, and modern patterns',
      years: 5
    },
    {
      name: 'Next.js',
      level: 90,
      category: 'Framework',
      description: 'Full-stack React framework with SSR, SSG, and API routes',
      years: 3
    },
    {
      name: 'TypeScript',
      level: 88,
      category: 'Language',
      description: 'Strong typing for scalable JavaScript applications',
      years: 4
    },
    {
      name: 'Tailwind CSS',
      level: 85,
      category: 'Styling',
      description: 'Utility-first CSS framework for rapid UI development',
      years: 3
    },
    {
      name: 'Vue.js',
      level: 75,
      category: 'Framework',
      description: 'Progressive framework for building user interfaces',
      years: 2
    },
    {
      name: 'SASS/SCSS',
      level: 80,
      category: 'Styling',
      description: 'CSS preprocessor with variables, nesting, and mixins',
      years: 4
    }
  ],
  backend: [
    {
      name: 'Node.js',
      level: 90,
      category: 'Runtime',
      description: 'JavaScript runtime for server-side applications',
      years: 4
    },
    {
      name: 'Python',
      level: 85,
      category: 'Language',
      description: 'Versatile language for web development and data science',
      years: 3
    },
    {
      name: 'PostgreSQL',
      level: 80,
      category: 'Database',
      description: 'Advanced relational database management',
      years: 4
    },
    {
      name: 'MongoDB',
      level: 75,
      category: 'Database',
      description: 'NoSQL document database for flexible data storage',
      years: 3
    },
    {
      name: 'Express.js',
      level: 88,
      category: 'Framework',
      description: 'Fast, minimalist web framework for Node.js',
      years: 4
    },
    {
      name: 'GraphQL',
      level: 70,
      category: 'API',
      description: 'Query language for APIs with strong type system',
      years: 2
    }
  ],
  devops: [
    {
      name: 'AWS',
      level: 80,
      category: 'Cloud',
      description: 'Amazon Web Services for scalable cloud infrastructure',
      years: 3
    },
    {
      name: 'Docker',
      level: 85,
      category: 'Container',
      description: 'Containerization platform for application deployment',
      years: 3
    },
    {
      name: 'GitHub Actions',
      level: 75,
      category: 'CI/CD',
      description: 'Automated workflows for continuous integration',
      years: 2
    },
    {
      name: 'Terraform',
      level: 65,
      category: 'IaC',
      description: 'Infrastructure as Code for cloud resource management',
      years: 2
    },
    {
      name: 'Nginx',
      level: 70,
      category: 'Server',
      description: 'High-performance web server and reverse proxy',
      years: 3
    }
  ],
  tools: [
    {
      name: 'Git',
      level: 95,
      category: 'Version Control',
      description: 'Distributed version control system',
      years: 5
    },
    {
      name: 'VS Code',
      level: 90,
      category: 'Editor',
      description: 'Powerful code editor with extensive extension ecosystem',
      years: 4
    },
    {
      name: 'Figma',
      level: 75,
      category: 'Design',
      description: 'Collaborative interface design tool',
      years: 3
    },
    {
      name: 'Postman',
      level: 85,
      category: 'API Testing',
      description: 'API development and testing platform',
      years: 4
    },
    {
      name: 'Jira',
      level: 80,
      category: 'Project Management',
      description: 'Issue tracking and project management',
      years: 3
    }
  ]
}

const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: Code,
    description: 'User interface and experience development'
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: Server,
    description: 'Server-side development and databases'
  },
  {
    id: 'devops',
    label: 'DevOps',
    icon: Cloud,
    description: 'Cloud infrastructure and deployment'
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: Wrench,
    description: 'Development tools and utilities'
  }
]

export default function SkillsPage() {
  const t = useTranslations('skills')

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

      {/* Skills Overview */}
      <div className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {skillCategories.map((category) => {
          const Icon = category.icon
          const skillCount = skillsData[category.id as keyof typeof skillsData].length
          
          return (
            <Card key={category.id}>
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-2">
                  <Icon className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base">{category.label}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-2xl font-bold text-primary mb-1">
                  {skillCount}
                </div>
                <CardDescription className="text-xs">
                  {category.description}
                </CardDescription>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Skills Tabs */}
      <Tabs defaultValue="frontend" className="space-y-8">
        <TabsList className="grid grid-cols-4 w-full max-w-2xl mx-auto">
          {skillCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="text-sm">
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {skillCategories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">{t(category.id as any)}</h2>
              <p className="text-muted-foreground">{category.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillsData[category.id as keyof typeof skillsData].map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Additional Info */}
      <Card className="mt-16">
        <CardHeader>
          <CardTitle>Continuous Learning</CardTitle>
          <CardDescription>
            Always expanding my skillset and staying current with industry trends
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Currently Learning</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Rust programming language</li>
                <li>• Machine Learning with Python</li>
                <li>• Advanced Kubernetes</li>
                <li>• WebAssembly (WASM)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Next Goals</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• AWS Solutions Architect certification</li>
                <li>• Contribute to major open-source project</li>
                <li>• Master microservices architecture</li>
                <li>• Explore Web3 technologies</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}