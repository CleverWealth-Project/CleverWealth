import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';

export default function UseCasesPage() {
  return (
    <Container>
      <Box sx={{ mt: 10, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Use Cases
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          See how our financial tools and products can be applied to real-world use cases.
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
          View Use Cases
        </Button>
      </Box>
    </Container>
  );
}
