import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LogoutButton from '@/components/Admin/LogOutButton';
import Cookies from 'js-cookie';

const AdminPage: React.FC = () => {
  const handleLogout = () => {
    // 로그아웃 시 쿠키 삭제
    Cookies.remove('token');
    window.location.reload();
  };

  return (
    <Container>
      <Typography component="h1" variant="h5">
        Welcome, admin!
      </Typography>
      <Box component="form" noValidate autoComplete="off" mt={2}>
        <LogoutButton text="로그아웃" onClick={handleLogout} />
      </Box>
    </Container>
  );
};

export default AdminPage;
