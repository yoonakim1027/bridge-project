import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Login from './components/Login';
import ProviderInfoPage from './pages/Uploaders/ProviderInfo';

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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {/* {isLoggedIn ? (
        <Typography component="h1" variant="h5">
          Welcome, admin!
        </Typography>
      ) : (
        <Login onLogin={handleLogin} />
      )} */}
      <ProviderInfoPage />
    </Container>
  );
}

export default App;
