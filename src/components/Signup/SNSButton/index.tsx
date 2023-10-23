import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SNSButton: React.FC = () => {
  return (
    <>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="inherit"
        disabled
        size="large"
        sx={{ mt: 1, mb: 2, height: 45 }}
      >
        <Typography sx={{ fontWeight: 600 }}>네이버로 회원가입</Typography>
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
        <Typography sx={{ fontWeight: 600 }}>Google로 회원가입</Typography>
      </Button>
    </>
  );
};

export default SNSButton;
