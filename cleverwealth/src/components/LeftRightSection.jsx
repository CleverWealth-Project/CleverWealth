// LeftRightSection.js
import React from 'react';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { FaAppStoreIos } from 'react-icons/fa';
import { BiLogoPlayStore } from 'react-icons/bi';
import piggy from '../assets/piggy.png';

const LeftRightSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: { xs: 'column', md: 'row' },
        mt: '10%',
        mb: '10%',
        px: '5%',
      }}
    >
      {/* Left Part */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid container spacing={4} sx={{ width: '80%' }}>

            <Grid item xs={6}>
              <Card sx={{ width: '200px', height:'175px', borderRadius: '10px', border: '1px solid #ddd', textAlign: 'center' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Buy a House
                  </Typography>
                  <ul style={{ textAlign: 'left', paddingInlineStart: '20px' }}>
                    <li>
                      <Typography variant="body2">In 5 Years</Typography>
                    </li>
                    <li>
                      <Typography variant="body2">Family Savings </Typography>
                    </li>
                    
                  </ul>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card sx={{ width: '200px',
                height:'175px', borderRadius: '10px', border: '1px solid #ddd', textAlign: 'center' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    New Car
                  </Typography>
                  <ul style={{ textAlign: 'left', paddingInlineStart: '20px' }}>
                    <li>
                      <Typography variant="body2">In 2 Years</Typography>
                    </li>
                    <li>
                      <Typography variant="body2">Personal Savings </Typography>
                    </li>
                    
                  </ul>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card sx={{ width: '200px',
                height:'175px', borderRadius: '10px', border: '1px solid #ddd', textAlign: 'center' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Vacation
                  </Typography>
                  <ul style={{ textAlign: 'left', paddingInlineStart: '20px' }}>
                    <li>
                      <Typography variant="body2">In 1 Year</Typography>
                    </li>
                    <li>
                      <Typography variant="body2">Family  </Typography>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          

          {/* Fourth card with image */}
          <Grid item xs={6}>
            <Card sx={{ width: '200px', borderRadius: '10px', border: '1px solid #ddd', textAlign: 'center' }}>
              <CardContent>
                <img src={piggy} alt="Sample" style={{ width: '130px', borderRadius: '10px' }} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Right Part */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          display: 'flex',
          flexDirection: 'column',
          mt: { xs: 4, md: 0 },
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: '700', mb: 2 }}>
          Explore Our Features
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Learn more about the different features that make CleverWealth the best financial management tool for you.
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          {/* Button 1: Learn More */}
          <Button
            variant="contained"
            sx={{
              borderRadius: '30px',
              backgroundColor: '#7ed477',
              px: 4,
              py: 1.5,
              color: 'white',
              '&:hover': { backgroundColor: '#6bc86a' },
            }}
          >
            Learn More
          </Button>

          {/* Button 2: App Store Icon */}
          <Button
            sx={{
              borderRadius: '30px',
              border: '2px solid black',
              backgroundColor: 'transparent',
              color: 'black',
              padding: '10px 20px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <FaAppStoreIos size="20px" />
          </Button>

          {/* Button 3: Play Store Icon */}
          <Button
            sx={{
              borderRadius: '30px',
              border: '2px solid black',
              backgroundColor: 'transparent',
              color: 'black',
              padding: '10px 20px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <BiLogoPlayStore size="20px" />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LeftRightSection;
