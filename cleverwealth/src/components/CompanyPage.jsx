import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';

export default function CompanyPage() {
  return (
    <Container>
      <Box sx={{ mt: 10, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          About Our Company
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Learn more about our mission and the team behind the financial solutions we provide.
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
          Learn More
        </Button>
      </Box>
    </Container>
  );
}
