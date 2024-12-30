// src/theme/ThemeContext.tsx
'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { lightTheme, darkTheme } from './theme'
import Box from '@mui/material/Box'

type ThemeContextType = {
  toggleTheme: () => void
  mode: 'light' | 'dark'
}

export const ThemeContext = createContext<ThemeContextType>({
  toggleTheme: () => {},
  mode: 'light'
})

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

// Provider Component
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Sayfa yüklendiğinde local storage'dan tema tercihi alınıyor
    const savedMode = localStorage.getItem('themeMode') as 'light' | 'dark'
    if (savedMode) {
      setMode(savedMode)
    }
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Box sx={{ visibility: 'hidden' }}>{children}</Box>
  }

  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light'
    setMode(newMode)
    localStorage.setItem('themeMode', newMode)
  }

  const value = {
    mode,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      <MUIThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  )
}
