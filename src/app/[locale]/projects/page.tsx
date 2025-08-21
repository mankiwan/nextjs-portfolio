'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { ProjectCard } from '@/components/ProjectCard'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { projects, projectCategories } from '@/lib/projects'
import { Search } from 'lucide-react'

export default function ProjectsPage() {
  const t = useTranslations('projects')
  const locale = useLocale()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  // Filter projects based on category and search query
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
    
    return matchesCategory && matchesSearch
  })

  // Get project count by category
  const getProjectCount = (category: string) => {
    if (category === 'All') return projects.length
    return projects.filter(p => p.category === category).length
  }

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

      {/* Search and Filters */}
      <div className="mb-12 space-y-6">
        {/* Search */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2">
          {projectCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="text-sm"
            >
              {category}
              <span className="ml-2 text-xs opacity-70">
                ({getProjectCount(category)})
              </span>
            </Button>
          ))}
        </div>
      </div>

      {/* Results Summary */}
      <div className="mb-8">
        <p className="text-muted-foreground text-center">
          {filteredProjects.length === 0 ? (
            'No projects found matching your criteria.'
          ) : (
            `Showing ${filteredProjects.length} of ${projects.length} projects`
          )}
        </p>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              locale={locale}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-lg font-semibold mb-2">No projects found</h3>
          <p className="text-muted-foreground mb-6">
            Try adjusting your search criteria or category filter.
          </p>
          <Button 
            onClick={() => {
              setSelectedCategory('All')
              setSearchQuery('')
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}

      {/* Stats Section */}
      <div className="mt-20 pt-16 border-t">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Project Statistics</h2>
          <p className="text-muted-foreground">
            Overview of my development journey and project portfolio
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {projects.length}
            </div>
            <div className="text-sm text-muted-foreground">
              Total Projects
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {projects.filter(p => p.status === 'completed').length}
            </div>
            <div className="text-sm text-muted-foreground">
              Completed
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {projects.filter(p => p.featured).length}
            </div>
            <div className="text-sm text-muted-foreground">
              Featured
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {Array.from(new Set(projects.flatMap(p => p.technologies))).length}
            </div>
            <div className="text-sm text-muted-foreground">
              Technologies Used
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}