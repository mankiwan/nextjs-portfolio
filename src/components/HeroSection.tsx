'use client'

import { useTranslations } from 'next-intl'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { useLocale } from 'next-intl'

const stats = [
  { key: 'experience', value: '3+', suffix: '' },
  { key: 'projects', value: '20+', suffix: '' },
  { key: 'technologies', value: '15+', suffix: '' },
]

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: Linkedin,
  },
  {
    name: 'Email',
    href: 'mailto:contact@example.com',
    icon: Mail,
  },
]

export function HeroSection() {
  const t = useTranslations('home')
  const tAbout = useTranslations('about')
  const locale = useLocale()

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
        <div className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-primary/40 dark:to-secondary/40 dark:opacity-20" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                <span className="hero-gradient">
                  {t('title')}
                </span>
              </h1>
              <p className="text-xl text-muted-foreground sm:text-2xl">
                {t('subtitle')}
              </p>
              <p className="text-lg text-muted-foreground max-w-lg">
                {t('description')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base">
                <Link href={`/${locale}/projects`}>
                  {t('cta')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link href={`/${locale}/contact`}>
                  {t('contact')}
                </Link>
              </Button>
              <Button variant="ghost" size="lg" className="text-base">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="rounded-full"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </Button>
                )
              })}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            <div className="space-y-4 sm:col-span-2 md:col-span-1 lg:col-span-2">
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <Card key={stat.key} className="text-center">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold text-primary">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {tAbout(stat.key)}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Quick Skills Preview */}
            <Card className="sm:col-span-2 md:col-span-1 lg:col-span-2">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Core Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS'].map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick About */}
            <Card className="sm:col-span-2 md:col-span-1 lg:col-span-2">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Quick Intro</h3>
                <p className="text-sm text-muted-foreground">
                  {tAbout('description')}
                </p>
                <Button asChild variant="link" className="mt-2 p-0 h-auto text-sm">
                  <Link href={`/${locale}/about`}>
                    Learn more about me →
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}