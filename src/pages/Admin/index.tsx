import React, { useState } from 'react';
import { Container, Typography, Button, Paper } from '@mui/material';
import LogoutButton from '@/components/Admin/LogOutButton';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';
import MemberApprove from '@/components/Admin/MemberApprove';

const AdminPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 로그아웃 시 쿠키 삭제
    Cookies.remove('token');
    navigate('*', { replace: true });
  };

  return (
    <Container>
      <Typography component="h1" variant="h5">
        Welcome, admin!
      </Typography>
      <Stack
        component="form"
        noValidate
        autoComplete="off"
        mt={2}
        mb={2}
        spacing={2}
        direction="row"
      >
        <LogoutButton text="로그아웃" onClick={handleLogout} />
      </Stack>
      <MemberApprove />
    </Container>
  );
};
export default AdminPage;
