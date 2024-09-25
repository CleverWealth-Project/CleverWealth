import React from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { signInWithGoogle } from './config';
import './SignUpForm.css';
import signupImage from '../assets/signupImage.png';

const SignUpForm = ({ onSignUp }) => {
    return (
        <Grid container className="form-container">
            {/* Left side for the image */}
            <Grid item xs={12} md={6} className="form-image">
                <img src={signupImage} alt="Signup" className="signup-image" />
            </Grid>

            {/* Right side for the sign-up form */}
            <Grid item xs={12} md={6} className="form-box">
                <Box sx={{ p: 4, borderRadius: 2 }}>
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
                            onClick={onSignUp}
                        >
                            Sign Up
                        </Button>

                        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                            OR
                        </Typography>

                        {/* Google Sign-In Button */}
                        <Button
                            fullWidth
                            variant="outlined"
                            color="primary"
                            onClick={signInWithGoogle}
                            sx={{ mt: 2, p: 1.5 }}
                        >
                            Sign in with Google
                        </Button>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
};

export default SignUpForm;