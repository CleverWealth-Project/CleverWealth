// WhyCleverWealth.js
import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { AiOutlineDollarCircle, AiOutlineLineChart, AiOutlinePieChart } from 'react-icons/ai';
import { styled } from '@mui/system';

const CustomCard = styled(Card)({
  backgroundColor: 'white',
  boxShadow: 'none',
  textAlign: 'center',
  border: '1px solid #ddd',
  borderRadius: '10px',
});

const WhyCleverWealthSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 2),
  textAlign: 'center',
}));


const WhyCleverWealth = () => {
  return (
    <WhyCleverWealthSection sx={{ mt: 9, mb: 9 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 700 }}>Why CleverWealth?</Typography>

      <Typography variant="body1" sx={{ mb: 5, fontSize: '20px', textAlign: 'center', width: '40%', ml: 'auto', mr: 'auto' }}>
        At CleverWealth, we believe that managing your finances should be simple, smart, and efficient.
        Our goal is to provide you with tools that help you take control of your financial future.
      </Typography>

      <Grid container spacing={4} sx={{ pl: '13%', pr: '13%' }}>
        <Grid item size={{ md: 4, xs: 12 }}>
          <CustomCard>
            <CardContent>
              <AiOutlineDollarCircle size={50} style={{ marginBottom: '16px', color: '#7ed477' }} />
              <Typography variant="h6">Smart Investments</Typography>
              <Typography variant="body2" color="textSecondary">
                CleverWealth offers data-driven advice and insights to assist you in making financial decisions.
              </Typography>
            </CardContent>
          </CustomCard>
        </Grid>

        <Grid item size={{ md: 4, xs: 12 }}>
          <CustomCard>
            <CardContent>
              <AiOutlineLineChart size={50} style={{ marginBottom: '16px', color: '#7ed477' }} />
              <Typography variant="h6">Data Analysis</Typography>
              <Typography variant="body2" color="textSecondary">
                We analyze market trends to give you real-time updates on your investments and their performance.
              </Typography>
            </CardContent>
          </CustomCard>
        </Grid>

        <Grid item size={{ md: 4, xs: 12 }}>
          <CustomCard>
            <CardContent>
              <AiOutlinePieChart size={50} style={{ marginBottom: '16px', color: '#7ed477' }} />
              <Typography variant="h6">Portfolio Management</Typography>
              <Typography variant="body2" color="textSecondary">
                Easily manage your portfolio with comprehensive analytics and detailed breakdowns of your assets.
              </Typography>
            </CardContent>
          </CustomCard>
        </Grid>
      </Grid>
    </WhyCleverWealthSection>
  );
};

export default WhyCleverWealth;
