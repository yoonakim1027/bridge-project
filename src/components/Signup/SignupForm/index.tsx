import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import InputField from '../InputField';
import CheckForm from '../CheckForm';
import { useNavigate } from 'react-router-dom';
import SNSButton from '../SNSButton';

const SignUpForm: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    // 다른 필드 추가 예정
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // API 호출 및 폼 데이터 처리 로직 추가
    console.log(formData);
  };

  // 공급자 회원가입으로 이동할 함수
  const handleProviderClick = () => {
    navigate('/providersignUp');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography sx={{ mb: -1 }}>아이디</Typography>
      <InputField
        label="Username"
        value={formData.username}
        onChange={handleChange}
        name="username"
        placeholder="Enter username"
      />
      <Typography sx={{ mt: 2, mb: -1 }}>이메일</Typography>
      <InputField
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        name="email"
        placeholder="Enter email"
      />
      <Typography sx={{ mt: 2, mb: -1 }}>비밀번호</Typography>
      <InputField
        label="Password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        name="password"
        placeholder="Enter password"
      />
      <CheckForm />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        type="submit"
        size="large"
        sx={{ mt: 3, height: 45, mb: 5 }}
      >
        <Typography sx={{ fontWeight: 600 }}>Sign Up</Typography>
      </Button>
      <SNSButton />
      <Button
        type="submit"
        fullWidth
        variant="text"
        color="inherit"
        size="large"
        sx={{ mt: 2, mb: 2, height: 45 }}
        onClick={handleProviderClick}
      >
        <Typography sx={{ fontWeight: 600, color: 'inherit' }}>
          공급자로 가입하시나요?
        </Typography>
      </Button>
    </form>
  );
};

export default SignUpForm;
