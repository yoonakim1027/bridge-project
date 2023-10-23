import React from 'react';
import SignUpForm from '@/components/Signup/SignupForm';
import { Container, Typography, Paper } from '@mui/material';
import CheckForm from '@/components/Signup/CheckForm';

const SignUpPage: React.FC = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ textAlign: 'center', mb: 5 }}
      >
        회원가입
      </Typography>
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 5,
          borderRadius: 3,
          width: '100%',
        }}
      >
        <SignUpForm />
      </Paper>
    </Container>
  );
};

export default SignUpPage;
