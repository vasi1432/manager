import React from 'react'
import './Login.css'
import { Box, Stack, TextField, Button, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  const handleValidateLogin = () => {
    console.log('clicked')
    navigate('/dashBoard')
  }
  return (
    <Box
      id="loginContainer"
      sx={{
        width: { xs: '100%', md: '60%' },
        height: { xs: '100%', md: '50%' },
        justifyContent: { xs: 'center', md: 'flex-start' },
        flexDirection: { xs: 'column', md: 'row' }
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', md: 'fit-content' },
          height: '100%',
          // display: { xs: 'none', md: 'flex ' },
          alignItems: 'flex-start',
          justifyContent: 'flex-start'
        }}
      >
        <img
          width={'100%'}
          height={'100%'}
          src="/public/loginImage.svg"
          alt="LoginImage"
        />
      </Box>

      <Stack
        alignItems={'center'}
        justifyContent={'space-evenly'}
        sx={{ textAlign: 'center' }}
        padding={'2rem'}
        width={{ xs: '90%', md: '50%' }}
        height={'100%'}
      >
        <Stack spacing={'2rem'}>
          <Typography variant="h3" color={'#139cbb'} sx={{ fontWeight: '600' }}>
            Login Account
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: '400' }}>
            elevate your inventory management game effortlessly
          </Typography>
        </Stack>
        <Stack spacing={'2rem'} width={'100%'}>
          <TextField
            fullWidth
            id="standard-basic"
            label="Email/Mobile"
            variant="standard"
          />
          <TextField
            fullWidth
            id="standard-basic"
            label="Password"
            variant="standard"
          />
          <Button
            size="large"
            fullWidth
            variant="contained"
            sx={{ height: '3rem', background: '#139cbb' }}
            onClick={() => handleValidateLogin()}
          >
            Proceed
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}
