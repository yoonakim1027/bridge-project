import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import Cookies from 'js-cookie';
import { Paper } from '@mui/material';

type Props = {
  onLogin: (username: string, password: string) => void;
};

const Login: React.FC<Props> = ({ onLogin }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000', {
        memberId: username,
        pwd: password,
      });
      if (response.data) {
        // 로그인 성공 시 쿠키에 토큰 저장
        Cookies.set('token', response.data.data, { expires: 7 }); // 7일 동안 유효
        onLogin(username, password);
        navigate('/', { replace: true });
      }
    } catch (error) {
      console.error('오류:', error);
    }
  };

  return (
    <Container component="main" maxWidth="lg">
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 5,
          marginTop: 20,
        }}
      >
        <Typography component="h1" variant="h6">
          로그인
        </Typography>
        <Box my={2} border={1} borderColor="divider" width="100%" />{' '}
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="ID"
            name="username"
            autoComplete="username"
            autoFocus
            size="small"
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
            size="small"
            autoComplete="current-password"
            value={password}
            sx={{ width: '100%' }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="inherit"
            sx={{ mt: 3, mb: 2 }}
          >
            <Typography sx={{ fontWeight: 600 }}>Login</Typography>
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="inherit"
            disabled
            sx={{ mt: 1, mb: 2 }}
          >
            <Typography sx={{ fontWeight: 600 }}>네이버로 로그인하기</Typography>
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="inherit"
            disabled
            sx={{ mt: 1, mb: 2 }}
          >
            <Typography sx={{ fontWeight: 600 }}>Google로 로그인하기</Typography>
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
