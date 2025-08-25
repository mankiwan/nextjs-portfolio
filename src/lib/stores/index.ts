// Re-export all stores and types
export { useAppStore } from './app'
export type { Language } from './app'

export { useThemeStore, useThemeInit } from './theme'
export type { Theme } from './theme'

// Legacy compatibility - keeping useAppStore that combines both
import { useAppStore as useAppStoreInternal } from './app'
import { useThemeStore } from './theme'

// Combined store for backward compatibility (if needed)
export const useLegacyAppStore = () => {
  const appStore = useAppStoreInternal()
  const themeStore = useThemeStore()
  
  return {
    // From app store
    language: appStore.language,
    isMenuOpen: appStore.isMenuOpen,
    setLanguage: appStore.setLanguage,
    setIsMenuOpen: appStore.setIsMenuOpen,
    toggleMenu: appStore.toggleMenu,
    
    // From theme store
    theme: themeStore.theme,
    setTheme: themeStore.setTheme,
  }
}