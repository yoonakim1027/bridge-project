import React from 'react';
import SignUpForm from '@/components/Signup/SignupForm';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const SignUpPage: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Sign Up
      </Typography>
      <SignUpForm />
    </Container>
  );
};

export default SignUpPage;
