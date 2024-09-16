import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';

export default function SolutionsPage() {
  return (
    <Container>
      <Box sx={{ mt: 10, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Solutions for Your Business
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Discover innovative solutions tailored for your financial needs.
        </Typography>

        {/* Call to Action Button */}
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
          Contact Us
        </Button>
      </Box>
    </Container>
  );
}
