import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';

export default function PricingPage() {
  return (
    <Container>
      <Box sx={{ mt: 10, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Pricing Plans
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Choose from a range of pricing plans that best suit your financial needs.
        </Typography>

        <Button
          variant="contained"
          sx={{
            mt: 4,
            borderRadius: '50px',
            px: 4,
            py: 1.5,
            backgroundColor: '#7ed477',
            color: 'white',
            '&:hover': { backgroundColor: '#6bc86a' },
          }}
        >
          View Pricing
        </Button>
      </Box>
    </Container>
  );
}
