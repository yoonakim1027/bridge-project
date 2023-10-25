// RequestorInfo.tsx
import React from 'react';
import { Typography, Box } from '@mui/material';

interface RequestorInfoProps {
  name: string;
  contact: string;
  address: string;
}

export const RequestorInfo: React.FC<RequestorInfoProps> = ({
  name,
  contact,
  address,
}) => (
  <Box>
    <Typography variant="h5">의뢰자 정보</Typography>
    <Typography>이름: {name}</Typography>
    <Typography>연락처: {contact}</Typography>
    <Typography>주소: {address}</Typography>
  </Box>
);
