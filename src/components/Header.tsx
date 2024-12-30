// src/components/layout/Header.tsx
'use client'

import { AppBar, Toolbar, Typography, IconButton, Box, Avatar, Tooltip, Menu, MenuItem } from '@mui/material'
import { Menu as MenuIcon, Notifications, DarkMode, LightMode, Translate } from '@mui/icons-material'
import { useTheme } from '@/theme/ThemeContext'
import { useState } from 'react'

import { usePathname, useRouter } from '@/navigation'

export default function Header() {
  const { toggleTheme, mode } = useTheme()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const router = useRouter()
  const pathname = usePathname()

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLanguageChange = (locale: 'tr' | 'en') => {
    router.replace(pathname, { locale })
    handleClose()
  }

  return (
    <AppBar position='fixed' sx={{ zIndex: theme => theme.zIndex.drawer + 1, mb: 10 }}>
      <Toolbar>
        <IconButton color='inherit' edge='start' sx={{ mr: 2, display: { sm: 'none' } }}>
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1 }}>
          Logo
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Tooltip title='Change Language'>
            <IconButton color='inherit' onClick={handleMenuClick}>
              <Translate />
            </IconButton>
          </Tooltip>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={() => handleLanguageChange('tr')}>Türkçe</MenuItem>
            <MenuItem onClick={() => handleLanguageChange('en')}>English</MenuItem>
          </Menu>
          <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
            <IconButton color='inherit' onClick={toggleTheme}>
              {mode === 'light' ? <DarkMode /> : <LightMode />}
            </IconButton>
          </Tooltip>
          <IconButton color='inherit'>
            <Notifications />
          </IconButton>
          <Avatar sx={{ width: 32, height: 32 }}>U</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
