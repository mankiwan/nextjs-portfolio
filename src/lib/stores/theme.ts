import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Theme = 'light' | 'dark' | 'system'

interface ThemeState {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      // initial state
      theme: 'system',
      
      // actions
      setTheme: (theme: Theme) => {
        set({ theme })
        // Update document theme
        if (typeof window !== 'undefined') {
          const root = window.document.documentElement
          root.classList.remove('light', 'dark')
          
          if (theme === 'system') {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
            root.classList.add(systemTheme)
          } else {
            root.classList.add(theme)
          }
        }
      },
    }),
    {
      name: 'theme-storage',
      partialize: (state) => ({
        theme: state.theme,
      }),
    }
  )
)

// Theme initialization hook
export const useThemeInit = () => {
  const theme = useThemeStore((state) => state.theme)
  
  // Return initialization function to be called in useEffect
  return () => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement
      root.classList.remove('light', 'dark')
      
      if (theme === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        root.classList.add(systemTheme)
        
        // Listen for system theme changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        const handleChange = (e: MediaQueryListEvent) => {
          // Getting state outside component
          if (useThemeStore.getState().theme === 'system') {
            root.classList.remove('light', 'dark')
            root.classList.add(e.matches ? 'dark' : 'light')
          }
        }
        
        mediaQuery.addEventListener('change', handleChange)
        return () => mediaQuery.removeEventListener('change', handleChange)
      } else {
        root.classList.add(theme)
      }
    }
  }
}