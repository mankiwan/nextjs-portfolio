'use client'

import { Progress } from '@/components/ui/progress'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface SkillItemProps {
  name: string
  level: number
  category: string
  description?: string
  years?: number
}

interface SkillCardProps {
  skill: SkillItemProps
  showProgress?: boolean
  className?: string
}

export function SkillCard({ skill, showProgress = true, className }: SkillCardProps) {
  const getSkillLevelText = (level: number) => {
    if (level >= 90) return 'Expert'
    if (level >= 75) return 'Advanced' 
    if (level >= 60) return 'Intermediate'
    if (level >= 40) return 'Basic'
    return 'Learning'
  }

  const getSkillLevelColor = (level: number) => {
    if (level >= 90) return 'text-green-600 dark:text-green-400'
    if (level >= 75) return 'text-blue-600 dark:text-blue-400'
    if (level >= 60) return 'text-yellow-600 dark:text-yellow-400'
    if (level >= 40) return 'text-orange-600 dark:text-orange-400'
    return 'text-gray-600 dark:text-gray-400'
  }

  return (
    <Card className={cn("h-full", className)}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{skill.name}</CardTitle>
          <Badge variant="secondary" className="text-xs">
            {skill.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4">
          {showProgress && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className={cn("font-medium", getSkillLevelColor(skill.level))}>
                  {getSkillLevelText(skill.level)}
                </span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          )}
          
          {skill.description && (
            <p className="text-sm text-muted-foreground">
              {skill.description}
            </p>
          )}
          
          {skill.years && (
            <p className="text-xs text-muted-foreground">
              {skill.years} years of experience
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}