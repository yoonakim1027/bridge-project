import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import ProviderSignUpForm from '@/components/Signup/ProviderSignUpForm';

const ProviderSignUpPage: React.FC = () => {
  return (
    <Container maxWidth="md">
      <ProviderSignUpForm />
    </Container>
  );
};

export default ProviderSignUpPage;
