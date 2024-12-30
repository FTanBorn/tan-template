// app/[locale]/not-found.tsx
'use client'

import { Typography, Button, Container, Box } from '@mui/material'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
    <Container maxWidth='sm'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80vh',
          textAlign: 'center',
          gap: 2
        }}
      >
        <Typography variant='h1' component='h1' sx={{ fontSize: '6rem', fontWeight: 'bold' }}>
          404
        </Typography>
        <Typography variant='h5' component='h2' gutterBottom>
          Sayfa Bulunamadı
        </Typography>
        <Typography variant='body1' color='text.secondary' paragraph>
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </Typography>
        <Button variant='contained' color='primary' onClick={() => router.push('/dashboard')}>
          Ana Sayfaya Dön
        </Button>
      </Box>
    </Container>
  )
}
