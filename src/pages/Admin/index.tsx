import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import LogoutButton from '@/components/Admin/LogOutButton';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import MoveButton from '@/components/Admin/MoveButton';
import { Stack } from '@mui/material';

const AdminPage: React.FC = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // 로그아웃 시 쿠키 삭제
    Cookies.remove('token');
    navigate('*', { replace: true });
  };

  const handleUpload = () => {
    navigate('/upload');
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
        spacing={2}
        direction="row"
      >
        <LogoutButton text="로그아웃" onClick={handleLogout} />
        <MoveButton text="Provider Info Page 이동" onClick={handleUpload} />
      </Stack>
    </Container>
  );
};

export default AdminPage;
