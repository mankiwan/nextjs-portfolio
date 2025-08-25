'use client'

import { useEffect } from 'react'
import { useThemeInit, useThemeStore } from '@/lib/stores'
// import { AnimatedBackground } from './AnimatedBackground' // Removed all animations
// import { AnimatedCursor } from './AnimatedCursor' // Disabled due to performance issues

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const initTheme = useThemeInit()
  const { theme } = useThemeStore()
  
  useEffect(() => {
    if (initTheme) {
      return initTheme()
    }
  }, [initTheme])
  
  // 根據主題應用特定的 CSS 類
  useEffect(() => {
    if (typeof window === 'undefined') return

    const root = document.documentElement
    
    // 清除舊的主題類
    root.classList.remove('summer-theme', 'night-theme')
    
    // 根據當前主題應用新的主題類
    if (theme === 'light') {
      root.classList.add('summer-theme')
    } else if (theme === 'dark') {
      root.classList.add('night-theme')
    } else if (theme === 'system') {
      // 檢測系統主題
      const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      root.classList.add(isSystemDark ? 'night-theme' : 'summer-theme')
      
      // 監聽系統主題變化
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleChange = (e: MediaQueryListEvent) => {
        root.classList.remove('summer-theme', 'night-theme')
        root.classList.add(e.matches ? 'night-theme' : 'summer-theme')
      }
      
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [theme])
  
  return (
    <>
      {/* <AnimatedBackground /> - Removed all animations */}
      {/* <AnimatedCursor /> - Disabled due to performance issues */}
      {children}
    </>
  )
}