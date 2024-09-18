import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import './SignUpForm.css';

const SignUpForm = () => {
    return (
        <div className="form-container">
            <Box className="form-box" sx={{ p: 4, borderRadius: 2 }}>
                <Typography variant="h4" gutterBottom>Create an Account</Typography>
                <form noValidate autoComplete="off">
                    <TextField
                        fullWidth
                        label="Full Name"
                        variant="outlined"
                        margin="normal"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Email Address"
                        variant="outlined"
                        margin="normal"
                        required
                        type="email"
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        variant="outlined"
                        margin="normal"
                        required
                        type="password"
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2, p: 1.5 }}
                    >
                        Sign Up
                    </Button>
                </form>
            </Box>
        </div>
    );
};

export default SignUpForm;
