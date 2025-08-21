import { notFound } from 'next/navigation'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Calendar, ExternalLink, Github, Users, CheckCircle, AlertCircle, Archive } from 'lucide-react'
import { getProjectById } from '@/lib/projects'

interface ProjectDetailPageProps {
  params: Promise<{
    locale: string
    id: string
  }>
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { locale, id } = await params
  const project = getProjectById(id)

  if (!project) {
    notFound()
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'in-progress':
        return <AlertCircle className="h-4 w-4 text-yellow-600" />
      case 'archived':
        return <Archive className="h-4 w-4 text-gray-600" />
      default:
        return null
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed'
      case 'in-progress':
        return 'In Progress'
      case 'archived':
        return 'Archived'
      default:
        return status
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Navigation */}
      <div className="mb-8">
        <Button asChild variant="ghost" size="sm">
          <Link href={`/${locale}/projects`} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>

      {/* Header */}
      <div className="mb-12">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-4xl font-bold tracking-tight">
                {project.title}
              </h1>
              {project.featured && (
                <Badge className="bg-primary text-primary-foreground">
                  Featured
                </Badge>
              )}
            </div>
            
            <p className="text-xl text-muted-foreground mb-6">
              {project.description}
            </p>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              {project.liveUrl && (
                <Button asChild size="lg">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Live Demo
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button asChild variant="outline" size="lg">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    View Source
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Project Image */}
        {project.image && (
          <div className="relative h-96 rounded-lg overflow-hidden mb-8">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </div>

      <div className="grid gap-12 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p>{project.longDescription || project.description}</p>
            </div>
          </section>

          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-6">Challenges & Solutions</h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <p className="text-muted-foreground">{challenge}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Achievements */}
          {project.achievements && project.achievements.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-6">Key Achievements</h2>
              <div className="space-y-4">
                {project.achievements.map((achievement, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <p>{achievement}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Technologies */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Project Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Project Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Status */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">Status</span>
                <div className="flex items-center gap-2">
                  {getStatusIcon(project.status)}
                  <span className="text-sm font-medium">{getStatusLabel(project.status)}</span>
                </div>
              </div>

              {/* Category */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">Category</span>
                <Badge variant="outline">{project.category}</Badge>
              </div>

              {/* Timeline */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">Timeline</span>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-3 w-3" />
                  <span>{project.startDate} - {project.endDate || 'Present'}</span>
                </div>
              </div>

              {/* Team Size */}
              {project.teamSize && (
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Team Size</span>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-3 w-3" />
                    <span>{project.teamSize} {project.teamSize === 1 ? 'person' : 'people'}</span>
                  </div>
                </div>
              )}

              {/* My Role */}
              {project.myRole && (
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">My Role</span>
                  <span className="text-sm font-medium">{project.myRole}</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Links */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Links & Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {project.liveUrl && (
                <Button asChild variant="outline" className="w-full">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button asChild variant="outline" className="w-full">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    Source Code
                  </a>
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}