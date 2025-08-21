'use client'

import { cn } from '@/lib/utils'
import { CheckCircle, Circle } from 'lucide-react'

interface TimelineItem {
  title: string
  company: string
  period: string
  description: string
  technologies?: string[]
  current?: boolean
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
      
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative flex items-start space-x-4">
            {/* Timeline dot */}
            <div className="relative z-10 flex-shrink-0">
              {item.current ? (
                <CheckCircle className="h-8 w-8 text-primary bg-background" fill="currentColor" />
              ) : (
                <Circle className="h-8 w-8 text-muted-foreground bg-background" fill="currentColor" />
              )}
            </div>
            
            {/* Content */}
            <div className={cn(
              "flex-1 min-w-0 pb-8",
              index === items.length - 1 && "pb-0"
            )}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <span className="text-sm text-muted-foreground font-medium">
                  {item.period}
                </span>
              </div>
              
              <p className="text-base text-primary font-medium mb-2">
                {item.company}
              </p>
              
              <p className="text-muted-foreground mb-4">
                {item.description}
              </p>
              
              {item.technologies && (
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}