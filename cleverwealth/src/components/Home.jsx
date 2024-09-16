import { Box, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/system';
import React from 'react';
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStoreIos } from "react-icons/fa";
import WhyCleverWealth from './WhyCleverWealth';
import LeftRightSection from './LeftRightSection';
import mockimg from '../assets/final.png';
import qr from '../assets/qr.png';


const HeroSection = styled(Box)({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#7ed477',
  position: 'relative', // To position QR code and buttons at the bottom
  padding: '0 20px', // Ensure proper padding on smaller screens
});

const QRCodeBox = styled(Box)({
  position: 'absolute',
  bottom: 20,
  left: 20,
  borderRadius: '20px',
  overflow: 'hidden',
});

const AppStoreButton = styled(Button)({
  borderRadius: '30px', // Rounded corners
  border: '2px solid black', // Border color
  backgroundColor: 'transparent', // Transparent background
  color: 'black', // Text color
  textTransform: 'none', // Keep button text case as is
  padding: '10px 20px', // Padding for better look
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '14px',
  '&:hover': {
    backgroundColor: '#f5f5f5', // Slight background on hover
  },
});


export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection>
        <Typography variant="h3" component="h1" align="center" sx={{ color: 'black', mb: 2, mt: 10 , fontWeight: '800' }}>
          Explore New Financial Solutions
        </Typography>

        {/* Get Started Button */}
        <Button
          variant="contained"
          sx={{
            borderRadius: '50px',
            px: 4,
            py: 1.5,
            mt: 2,
            backgroundColor: 'black',
            color:'white',
            
            '&:hover': { backgroundColor: 'white', color: 'black' },
          }}
        >
          Get Started
        </Button>

        {/* iPhone Mockup */}
        <Box component="img" src={mockimg} alt="iPhone Mockup" sx={{ mt: 4, maxWidth: '35%', height: 'auto' }} />

        {/* QR Code */}
        <QRCodeBox>
          <img src={qr} alt="QR Code" width="100" />
        </QRCodeBox>

        {/* Google Play and App Store Buttons */}
        <Grid container spacing={2} sx={{ position: 'absolute', bottom: 20, right: 20 }}>
          <Grid item xs={12} sm={6}>
            <AppStoreButton fullWidth>
              <BiLogoPlayStore size="20px" style={{ marginRight: '8px' }} />
              <Typography>Get it on Google Play</Typography>
            </AppStoreButton>
          </Grid>
          <Grid item xs={12} sm={6}>
            <AppStoreButton fullWidth>
              <FaAppStoreIos size="20px" style={{ marginRight: '8px' }} />
              <Typography>Get it on App Store</Typography>
            </AppStoreButton>
          </Grid>
        </Grid>
      </HeroSection>
      <WhyCleverWealth/>
      <LeftRightSection/>
    </div>
  );
}
