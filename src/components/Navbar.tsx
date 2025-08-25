'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, Sun, Moon, Monitor, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAppStore, useThemeStore, type Theme, type Language } from '@/lib/stores'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'home', href: '/' },
  { name: 'about', href: '/about' },
  { name: 'skills', href: '/skills' },
  { name: 'projects', href: '/projects' },
  { name: 'contact', href: '/contact' },
]

const themes: { value: Theme; icon: typeof Sun; label: string }[] = [
  { value: 'light', icon: Sun, label: 'Light' },
  { value: 'dark', icon: Moon, label: 'Dark' },
  { value: 'system', icon: Monitor, label: 'System' },
]

const languages: { value: Language; label: string; flag: string }[] = [
  { value: 'en', label: 'English', flag: '🇺🇸' },
  { value: 'zh-HK', label: '繁體中文', flag: '🇭🇰' },
  { value: 'zh-CN', label: '简体中文', flag: '🇨🇳' },
]

export function Navbar() {
  const t = useTranslations('header')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  
  const { language, setLanguage } = useAppStore()
  const { theme, setTheme } = useThemeStore()

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
    const segments = pathname.split('/')
    segments[1] = newLanguage
    const newPath = segments.join('/')
    router.push(newPath)
    setIsLangMenuOpen(false)
  }

  const isActivePath = (href: string) => {
    if (href === '/') {
      return pathname === `/${locale}` || pathname === `/${locale}/`
    }
    return pathname === `/${locale}${href}`
  }

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href={`/${locale}`}
            className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"
          >
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={`/${locale}${item.href}`}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActivePath(item.href)
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {t(item.name as any)}
              </Link>
            ))}
          </div>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Theme Selector */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                className="w-9 px-0"
              >
                {theme === 'light' && <Sun className="h-4 w-4" />}
                {theme === 'dark' && <Moon className="h-4 w-4" />}
                {theme === 'system' && <Monitor className="h-4 w-4" />}
              </Button>
              
              {isThemeMenuOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-popover border rounded-md shadow-md py-1">
                  {themes.map((themeOption) => {
                    const Icon = themeOption.icon
                    return (
                      <button
                        key={themeOption.value}
                        className={cn(
                          "flex items-center w-full px-3 py-2 text-sm hover:bg-accent",
                          theme === themeOption.value && "bg-accent"
                        )}
                        onClick={() => {
                          setTheme(themeOption.value)
                          setIsThemeMenuOpen(false)
                        }}
                      >
                        <Icon className="mr-2 h-4 w-4" />
                        {themeOption.label}
                      </button>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Language Selector */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="w-9 px-0"
              >
                <Globe className="h-4 w-4" />
              </Button>
              
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-popover border rounded-md shadow-md py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.value}
                      className={cn(
                        "flex items-center w-full px-3 py-2 text-sm hover:bg-accent",
                        language === lang.value && "bg-accent"
                      )}
                      onClick={() => handleLanguageChange(lang.value)}
                    >
                      <span className="mr-2">{lang.flag}</span>
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-9 px-0"
            >
              {isMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={`/${locale}${item.href}`}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                    isActivePath(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-accent"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.name as any)}
                </Link>
              ))}
              
              {/* Mobile Theme Controls */}
              <div className="px-3 py-2 space-y-2 border-t">
                <div className="text-sm font-medium text-muted-foreground">Theme</div>
                <div className="flex space-x-2">
                  {themes.map((themeOption) => {
                    const Icon = themeOption.icon
                    return (
                      <Button
                        key={themeOption.value}
                        variant={theme === themeOption.value ? "default" : "outline"}
                        size="sm"
                        onClick={() => setTheme(themeOption.value)}
                      >
                        <Icon className="h-4 w-4" />
                      </Button>
                    )
                  })}
                </div>
              </div>
              
              {/* Mobile Language Controls */}
              <div className="px-3 py-2 space-y-2 border-t">
                <div className="text-sm font-medium text-muted-foreground">Language</div>
                <div className="flex space-x-2">
                  {languages.map((lang) => (
                    <Button
                      key={lang.value}
                      variant={language === lang.value ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleLanguageChange(lang.value)}
                    >
                      <span className="mr-1">{lang.flag}</span>
                      {lang.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}