// src/theme/theme.ts
import { createTheme, ThemeOptions } from '@mui/material/styles'

const themeCommon: ThemeOptions = {
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none'
        }
      }
    }
  },
  shape: {
    borderRadius: 8
  }
}

export const lightTheme = createTheme({
  ...themeCommon,
  palette: {
    mode: 'light',
    primary: {
      main: '#6366F1', 
      light: '#818CF8',
      dark: '#4F46E5',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#EC4899', // Pembe
      light: '#F472B6',
      dark: '#DB2777',
      contrastText: '#ffffff'
    },
    background: {
      default: '#F9FAFB',
      paper: '#ffffff'
    },
    text: {
      primary: '#111827',
      secondary: '#4B5563'
    },
    divider: '#E5E7EB'
  }
})

export const darkTheme = createTheme({
  ...themeCommon,
  palette: {
    mode: 'dark',
    primary: {
      main: '#818CF8', 
      light: '#A5B4FC',
      dark: '#6366F1',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#F472B6', 
      light: '#F9A8D4',
      dark: '#EC4899',
      contrastText: '#ffffff'
    },
    background: {
      default: '#111827',
      paper: '#1F2937'
    },
    text: {
      primary: '#F9FAFB',
      secondary: '#D1D5DB'
    },
    divider: '#374151'
  }
})
