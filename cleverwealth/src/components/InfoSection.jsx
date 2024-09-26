import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStoreIos } from "react-icons/fa";
import mockup from '../assets/logo.png'; // Replace with your mockup image path

// Styled components
const ParentContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '50px 10%',
  marginTop: '8%',
  marginBottom: '8%',
  borderRadius: '20px'
});

const ContentContainer = styled(Box)({
  width: '50%',
  padding: '20px',
});

const ImageContainer = styled(Box)({
  width: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

// Button styling
const CustomButton = styled(Button)({
  borderRadius: '30px',
  border: '2px solid black',
  backgroundColor: 'transparent',
  color: 'black',
  padding: '10px 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '14px',
  '&:hover': {
    backgroundColor: '#f5f5f5',
  },
});

const InfoSection = () => {
  return (
    <ParentContainer>
      {/* First Container */}
      <ContentContainer>
        <Typography variant="h4" sx={{ fontWeight: '700', mb: 2 }}>
          Discover More Features
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Our platform offers a variety of features to help you manage your finances better. Explore the options that suit your needs and start your journey to financial success today.
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          {/* Button 1: Learn More */}
          <Button
            variant="contained"
            sx={{
              borderRadius: '30px',
              px: 4,
              py: 1.5,
              backgroundColor: '#7ed477',
              color: 'white',
              '&:hover': { backgroundColor: '#000000' },
            }}
          >
            Learn More
          </Button>

          {/* Button 2: App Store Icon */}
          <CustomButton>
            <FaAppStoreIos size="20px" />
          </CustomButton>

          {/* Button 3: Play Store Icon */}
          <CustomButton>
            <BiLogoPlayStore size="20px" />
          </CustomButton>
        </Box>
      </ContentContainer>

      {/* Second Container: Mockup Image */}
      <ImageContainer>
        <Box component="img" src={mockup} alt="Mockup" sx={{ maxWidth: '100%', borderRadius: '20px' }} />
      </ImageContainer>
    </ParentContainer>
  );
};

export default InfoSection;
