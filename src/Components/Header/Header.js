import React from 'react'
import { Container } from '@mui/system'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/system/Box'

const Header = () => {
  const theme = createTheme()
  return (
    <Box
    sx={{
      bgcolor: 'background.paper',
      pt: 8,
      pb: 6,
    }}
  >
      <Container maxWidth='sm'>
        <ThemeProvider theme={theme} >
          <Typography
          variant="h1"
          align="center"
          color="text.primary"
          fontSize='4rem'
          gutterBottom
        >
        Daily Dose of News
        </Typography>
        <Typography variant="h2" align="center" color="text.secondary" paragraph fontSize='1.5rem'>
          Get Your Fix of NY Times Top News Stories. 
        </Typography>
        </ThemeProvider>
      </Container>
    </Box>
  )
}

export default Header