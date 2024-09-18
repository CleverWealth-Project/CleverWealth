import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isSticky, setSticky] = useState(false);

  // Handle scroll for sticky navbar
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed" // Set position to fixed for sticky effect
      sx={{
        backgroundColor: isSticky ? '#fff' : '#7ed477', // Change navbar background color based on scroll
        boxShadow: isSticky ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none', // Add shadow on scroll
        transition: 'background-color 0.3s ease-in-out', // Smooth transition effect
        zIndex: 1000, // Ensure it stays above other content
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo */}
        <Typography variant="h6" sx={{ color: isSticky ? '#000' : '#fff' }}>
          <img src={logo} alt="Brand Logo" style={{ width: '100px' }} />
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button component={Link} to="/product" sx={{ color: isSticky ? '#000' : '#fff' }}>
            Product
          </Button>
          <Button component={Link} to="/solutions" sx={{ color: isSticky ? '#000' : '#fff' }}>
            Solutions
          </Button>
          <Button component={Link} to="/usecases" sx={{ color: isSticky ? '#000' : '#fff' }}>
            UseCases
          </Button>
          <Button component={Link} to="/pricing" sx={{ color: isSticky ? '#000' : '#fff' }}>
            Pricing
          </Button>
          <Button component={Link} to="/company" sx={{ color: isSticky ? '#000' : '#fff' }}>
            Company
          </Button>
        </Box>

        {/* Signup and Login Buttons */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            component={Link} to="/signup"
            variant="outlined"
            sx={{
              color: isSticky ? '#000' : '#fff',
              borderColor: isSticky ? '#000' : '#fff',
              borderRadius: '20px',
              '&:hover': {
                backgroundColor: isSticky ? '#000' : '#fff',
                color: isSticky ? '#fff' : '#000',
              },
            }}
          >
            Sign Up
          </Button>
          <Button
            component={Link} to="/signup"
            variant="contained"
            sx={{
              borderRadius: '20px',
              backgroundColor: '#000',
              color: '#fff',
              '&:hover': { backgroundColor: '#333' },
            }}
          >
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
