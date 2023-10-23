import React from 'react';
import { Button, TextField } from '@mui/material';

const FreelancerAuth: React.FC = () => {
  return (
    <div>
      <TextField label="문자/pass 인증" variant="outlined" />
      <TextField label="이름" variant="outlined" />
      <TextField label="닉네임" variant="outlined" />
      <TextField type="password" label="비밀번호" variant="outlined" />
      <TextField label="이메일" variant="outlined" />
      <TextField type="file" label="탁송 보험 등록증" variant="outlined" />
      <TextField type="file" label="개인 통장 사본" variant="outlined" />
      <Button variant="contained" color="primary">
        가입하기
      </Button>
    </div>
  );
};

export default FreelancerAuth;
