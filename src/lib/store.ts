import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Theme = 'light' | 'dark' | 'system'
export type Language = 'en' | 'zh'

interface AppState {
  theme: Theme
  language: Language
  isMenuOpen: boolean
  setTheme: (theme: Theme) => void
  setLanguage: (language: Language) => void
  setIsMenuOpen: (isOpen: boolean) => void
  toggleMenu: () => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      theme: 'system',
      language: 'en',
      isMenuOpen: false,
      
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
      
      setLanguage: (language: Language) => {
        set({ language })
      },
      
      setIsMenuOpen: (isOpen: boolean) => {
        set({ isMenuOpen: isOpen })
      },
      
      toggleMenu: () => {
        set({ isMenuOpen: !get().isMenuOpen })
      }
    }),
    {
      name: 'portfolio-storage',
      partialize: (state) => ({
        theme: state.theme,
        language: state.language,
      }),
    }
  )
)

// Theme initialization hook
export const useThemeInit = () => {
  const theme = useAppStore((state) => state.theme)
  
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
          if (useAppStore.getState().theme === 'system') {
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