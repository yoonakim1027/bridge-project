import React from 'react';
import { Button, TextField } from '@mui/material';

const PersonalUserAuth: React.FC = () => {
  return (
    <div>
      <TextField label="휴대폰 번호" variant="outlined" />
      <Button variant="contained" color="primary">
        인증하기
      </Button>
    </div>
  );
};

export default PersonalUserAuth;
