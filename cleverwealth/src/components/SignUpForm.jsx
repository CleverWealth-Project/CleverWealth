import { Box, Button, TextField, Typography, Divider } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import { signInWithGoogle } from './config';
import { FaGoogle } from 'react-icons/fa';
import signupImage from '../assets/signupImage.png';
import logo from '../assets/logo.png' 
import { Link } from 'react-router-dom';
// Replace with your image path

// Styled Components
const ParentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '100vh',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

const LeftContainer = styled(Box)(({ theme }) => ({
  width: '50%',
  padding: theme.spacing(6),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    padding: theme.spacing(4),
  },
}));

const BrandNameContainer = styled(Box)({
  marginBottom: '50px',
});

const FormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const RightContainer = styled(Box)(({ theme }) => ({
  width: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  backgroundImage: `url(${signupImage})`, // Background Image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  [theme.breakpoints.down('sm')]: {
    display: 'none', // Hide on mobile devices
  },
}));

const OverlayText = styled(Typography)({
  position: 'absolute',
  bottom: '5%',
  color: 'white',
  textAlign: 'center',
  width: '90%',
  padding: '5%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  borderRadius: '10px',
});

const SignUpPage = ({ onSignUp }) => {
  return (
    <ParentContainer>
      {/* First Container */}
      <LeftContainer>
        {/* Brand Name Container */}
        <BrandNameContainer>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <img src={logo} alt="Clever Wealth" style={{ width: '150px', marginBottom: '20px' }} /> {/* Replace with your brand image path */}
            </Link>
        </BrandNameContainer>


        {/* Form Container */}
        <FormContainer>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Create Your Account
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, textAlign: 'center' }}>
            Sign up to get started and manage your finances effortlessly.
          </Typography>

          {/* Sign Up Form */}
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            sx={{ mb: 3 }}
          />
          <Button
            onClick={onSignUp}
            variant="contained"
            fullWidth
            sx={{
              mb: 2,
              py: 1.5,
              backgroundColor: '#7ed477',
              '&:hover': { backgroundColor: '#6bc86a' },
            }}
          >
            Sign Up
          </Button>

          {/* Divider with OR Text */}
          <Box sx={{ display: 'flex', alignItems: 'center', my: 3, width: '100%' }}>
            <Divider sx={{ flex: 1 }} />
            <Typography variant="body2" sx={{ mx: 2, color: 'text.secondary' }}>
              OR
            </Typography>
            <Divider sx={{ flex: 1 }} />
          </Box>

          {/* Login with Google Button */}
          <Button
              onClick={signInWithGoogle}
            variant="outlined"
            fullWidth
            startIcon={<FaGoogle />}
            sx={{
              mb: 2,
              py: 1.5,
              borderColor: '#7ed477',
              color: '#7ed477',
              '&:hover': {
                borderColor: '#6bc86a',
                backgroundColor: '#f5f5f5',
              },
            }}
          >
            Login with Google
          </Button>
        </FormContainer>
      </LeftContainer>

      {/* Second Container */}
      <RightContainer>
        <OverlayText variant="h5">
          "Take control of your financial future with ease."
        </OverlayText>
      </RightContainer>
    </ParentContainer>
  );
};

export default SignUpPage;
