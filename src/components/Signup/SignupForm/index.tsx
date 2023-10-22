import React, { useState } from 'react';
import Button from '@mui/material/Button';
import InputField from '../InputField';

const SignUpForm: React.FC = () => {
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

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Username"
        value={formData.username}
        onChange={handleChange}
        name="username"
        placeholder="Enter username"
      />
      <InputField
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        name="email"
        placeholder="Enter email"
      />
      <InputField
        label="Password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        name="password"
        placeholder="Enter password"
      />
      <Button variant="contained" color="primary" type="submit">
        Sign Up
      </Button>
    </form>
  );
};

export default SignUpForm;
