import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cookies from 'js-cookie';
import ProviderInfoPage from './pages/Uploaders/ProviderInfo';
import Router from './router';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  
  const handleLogin = (username: string, password: string) => {
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
      alert('Login successful!');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <Router />
      </Container>
    </>
  );
}

export default App;
