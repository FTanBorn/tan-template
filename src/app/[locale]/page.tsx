// app/[locale]/page.tsx
import { Container, Box, Typography, Paper, Grid } from '@mui/material'
import { getTranslations } from 'next-intl/server'

export default async function HomePage() {
  const t = await getTranslations('Index')

  return (
    <Container maxWidth='lg'>
      <Box
        sx={{
          py: { xs: 4, sm: 6, md: 10 },
          px: { xs: 2, sm: 4 }
        }}
        justifyContent={'center'}
        alignItems={'center'}
      >
        {/* Hero Section */}
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 6, md: 10 },
            maxWidth: '800px',
            mx: 'auto'
          }}
        >
          <Typography
            variant='h1'
            component='h1'
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
              fontWeight: 800,
              mb: 3,
              background: 'linear-gradient(45deg, #1976d2, #82b1ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            {t('title')}
          </Typography>
          <Typography
            variant='h5'
            color='text.secondary'
            sx={{
              mb: 4,
              fontSize: { xs: '1.1rem', sm: '1.3rem' },
              lineHeight: 1.6
            }}
          >
            {t('subtitle')}
          </Typography>
        </Box>

        {/* Features Grid */}
        <Grid container spacing={{ xs: 3, md: 4 }} alignItems='stretch'>
          {/* Language Feature */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 4 },
                height: '100%',
                borderRadius: 4,
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.1)'
                }
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant='h4'
                  component='h2'
                  gutterBottom
                  sx={{
                    fontSize: { xs: '1.75rem', sm: '2rem' },
                    fontWeight: 700
                  }}
                >
                  {t('language.title')}
                </Typography>
                <Typography
                  variant='body1'
                  sx={{
                    color: 'text.secondary',
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    lineHeight: 1.7
                  }}
                >
                  {t('language.description')}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  p: { xs: 2, sm: 3 },
                  bgcolor: 'background.default',
                  borderRadius: 3,
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)'
                }}
              >
                <Box
                  sx={{
                    flex: 1,
                    textAlign: 'center',
                    p: 2,
                    borderRadius: 2,
                    bgcolor: 'rgba(25, 118, 210, 0.05)'
                  }}
                >
                  <Typography variant='h6' sx={{ fontWeight: 600 }}>
                    TR
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Türkçe
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'primary.main',
                    fontSize: '1.5rem'
                  }}
                >
                  ↔
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    textAlign: 'center',
                    p: 2,
                    borderRadius: 2,
                    bgcolor: 'rgba(25, 118, 210, 0.05)'
                  }}
                >
                  <Typography variant='h6' sx={{ fontWeight: 600 }}>
                    EN
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    English
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* Theme Feature */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 4 },
                height: '100%',
                borderRadius: 4,
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.1)'
                }
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant='h4'
                  component='h2'
                  gutterBottom
                  sx={{
                    fontSize: { xs: '1.75rem', sm: '2rem' },
                    fontWeight: 700
                  }}
                >
                  {t('theme.title')}
                </Typography>
                <Typography
                  variant='body1'
                  sx={{
                    color: 'text.secondary',
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    lineHeight: 1.7
                  }}
                >
                  {t('theme.description')}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  p: { xs: 2, sm: 3 },
                  bgcolor: 'background.default',
                  borderRadius: 3,
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)'
                }}
              >
                <Box
                  sx={{
                    flex: 1,
                    textAlign: 'center',
                    p: 2,
                    borderRadius: 2,
                    bgcolor: 'rgba(25, 118, 210, 0.05)'
                  }}
                >
                  <Typography variant='h6' sx={{ fontSize: '1.5rem' }}>
                    ☀
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {t('theme.light')}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'primary.main',
                    fontSize: '1.5rem'
                  }}
                >
                  ↔
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    textAlign: 'center',
                    p: 2,
                    borderRadius: 2,
                    bgcolor: 'rgba(25, 118, 210, 0.05)'
                  }}
                >
                  <Typography variant='h6' sx={{ fontSize: '1.5rem' }}>
                    🌙
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {t('theme.dark')}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
