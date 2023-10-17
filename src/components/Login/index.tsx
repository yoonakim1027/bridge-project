import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import Cookies from 'js-cookie';

type Props = {
  onLogin: (username: string, password: string) => void;
};

const Login: React.FC<Props> = ({ onLogin }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      onLogin('admin', 'password');
      navigate('/', { replace: true });
    }
  }, [onLogin]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // try {
    //   const response = await axios.post('http://localhost:3000', {
    //     memberId: username,
    //     pwd: password,
    //   });
    //   if (response.data) {
    //     // 로그인 성공 시 쿠키에 토큰 저장
    //     Cookies.set('token', response.data.data, { expires: 7 }); // 7일 동안 유효
    //     onLogin(username, password);
    //     navigate('/', { replace: true });
    //   }
    // } catch (error) {
    //   console.error('오류:', error);
    // }

    // -------------- Test 코드입니다 ----------------------
    try {
      if (username === 'admin' && password === 'password') {
        Cookies.set('token', '내가 만든 쿠키~', { expires: 7 });
        onLogin(username, password);
        navigate('/', { replace: true });
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('오류:', error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 8,
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
