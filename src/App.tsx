import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cookies from 'js-cookie';
import ProviderInfoPage from './pages/Uploaders/ProviderInfo';
import Router from './router';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  typography: {
    fontFamily: 'Noto Sans KR, sans-serif',
  },
});
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

  const handleLogout = () => {
    // 로그아웃 시 쿠키 삭제
    Cookies.remove('token');
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container component="main" maxWidth="lg">
          <Router isLoggedIn={isLoggedIn} />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
