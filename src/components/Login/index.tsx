import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import Divider from '@mui/material/Divider';

import axios from 'axios';
import Cookies from 'js-cookie';
import { Paper } from '@mui/material';
import { start } from 'repl';

type Props = {
  onLogin: (username: string, password: string) => void;
};

const Login: React.FC<Props> = ({ onLogin }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [usernameError, setUsernameError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const navigate = useNavigate();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUsername(value);

    const usernameRegex = /^[a-zA-Z0-9_-]{3,10}$/; // 3~10자, 영문자, 숫자, 하이픈, 언더스코어 허용
    if (!value) {
      setUsernameError('아이디를 입력해주세요.');
    } else if (!usernameRegex.test(value)) {
      setUsernameError('유효한 아이디 형식이 아닙니다.');
    } else {
      setUsernameError('');
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    // 비밀번호 필드 유효성 검사
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    if (!value) {
      setPasswordError('비밀번호를 입력해주세요.');
    } else if (!passwordRegex.test(value)) {
      setPasswordError('비밀번호는 최소 8자, 영문자와 숫자를 포함해야 합니다.');
    } else {
      setPasswordError('');
    }
  };

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      onLogin('admin', 'password');
      navigate('/admin', { replace: true });
    }
  }, [onLogin]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password && !usernameError && !passwordError) {
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
      //   } else {
      //     alert('아이디와 비밀번호를 확인해주세요.');
      //   }
      // } catch (error) {
      //   console.error('오류:', error);
      // }

      // -------------- Test 코드입니다 ----------------------
      try {
        if (username === 'admin' && password === 'password1') {
          Cookies.set('token', '내가 만든 쿠키~', { expires: 7 });
          onLogin(username, password);
          navigate('/admin', { replace: true });
        } else {
          alert('Invalid credentials');
        }
      } catch (error) {
        console.error('오류:', error);
      }
    } else {
      alert('아이디와 비밀번호를 확인해주세요.');
    }
  };

  // 비밀번호 찾기로 이동할 함수
  const handleForgotPasswordClick = () => {
    navigate('/');
  };

  // 회원가입으로 이동할 함수
  const handleRegisterClick = () => {
    navigate('/signUp');
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ mt: 10 }}>
      <Typography component="h1" variant="h4" sx={{ textAlign: 'center', mb: 5 }}>
        로그인
      </Typography>
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 5,
          borderRadius: 3,
        }}
      >
        <Box component="form" noValidate onSubmit={handleSubmit}>
          <Typography sx={{ mb: -1 }}>아이디</Typography>
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
            value={username}
            error={!!usernameError} // 에러가 있는 경우에만 에러 스타일을 적용
            helperText={usernameError}
            onChange={handleUsernameChange}
            // onChange={(e) => setUsername(e.target.value)}
          />
          <Typography sx={{ mt: 2, mb: -1 }}>비밀번호</Typography>
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
            error={!!passwordError}
            helperText={passwordError}
            sx={{ width: '100%' }}
            onChange={handlePasswordChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{ mt: 3, height: 45 }}
          >
            <Typography sx={{ fontWeight: 600 }}>Login</Typography>
          </Button>
          <Box sx={{ display: 'flex', mt: 1, mb: 5 }}>
            <Button
              fullWidth
              color="inherit"
              onClick={handleForgotPasswordClick}
              sx={{ color: 'gray' }}
            >
              비밀번호 찾기
            </Button>
            <Divider orientation="vertical" flexItem variant="middle" />
            <Button
              fullWidth
              color="inherit"
              onClick={handleRegisterClick}
              sx={{ color: 'gray' }}
            >
              회원가입 하기
            </Button>
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="inherit"
            disabled
            size="large"
            sx={{ mt: 1, mb: 2, height: 45 }}
          >
            <Typography sx={{ fontWeight: 600 }}>네이버로 로그인하기</Typography>
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="inherit"
            disabled
            size="large"
            sx={{ mt: 1, mb: 2, height: 45 }}
          >
            <Typography sx={{ fontWeight: 600 }}>Google로 로그인하기</Typography>
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
