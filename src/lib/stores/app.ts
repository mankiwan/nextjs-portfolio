import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Language = 'en' | 'zh-HK' | 'zh-CN'

interface AppState {
  language: Language
  isMenuOpen: boolean
  setLanguage: (language: Language) => void
  setIsMenuOpen: (isOpen: boolean) => void
  toggleMenu: () => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // initial state
      language: 'en',
      isMenuOpen: false,
      
      // actions
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
      name: 'app-storage',
      partialize: (state) => ({
        language: state.language,
      }),
    }
  )
)