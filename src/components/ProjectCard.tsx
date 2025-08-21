'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github, Calendar, Users } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  category: string
  status: 'completed' | 'in-progress' | 'archived'
  featured: boolean
  image?: string
  liveUrl?: string
  githubUrl?: string
  startDate: string
  endDate?: string
  teamSize?: number
  myRole?: string
  challenges?: string[]
  achievements?: string[]
}

interface ProjectCardProps {
  project: Project
  locale: string
}

export function ProjectCard({ project, locale }: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden group hover:shadow-lg transition-shadow">
      {/* Project Image */}
      {project.image && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {project.featured && (
            <div className="absolute top-4 left-4">
              <Badge className="bg-primary text-primary-foreground">
                Featured
              </Badge>
            </div>
          )}
        </div>
      )}
      
      {/* Card Header */}
      <CardHeader className="flex-1">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg mb-2 line-clamp-2">
              {project.title}
            </CardTitle>
            <CardDescription className="mb-3 line-clamp-3">
              {project.description}
            </CardDescription>
          </div>
          <Badge variant="secondary" className="ml-2 shrink-0">
            {project.category}
          </Badge>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>

        {/* Project Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{project.startDate}</span>
          </div>
          {project.teamSize && (
            <div className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              <span>{project.teamSize} {project.teamSize === 1 ? 'person' : 'people'}</span>
            </div>
          )}
        </div>
      </CardHeader>

      {/* Card Footer */}
      <CardFooter className="gap-2 pt-0">
        <Button asChild size="sm" className="flex-1">
          <Link href={`/${locale}/projects/${project.id}`}>
            View Details
          </Link>
        </Button>
        
        <div className="flex gap-2">
          {project.liveUrl && (
            <Button asChild variant="outline" size="sm">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1"
              >
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button asChild variant="outline" size="sm">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1"
              >
                <Github className="h-3 w-3" />
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}