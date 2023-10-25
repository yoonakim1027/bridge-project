// PickupInfo.tsx
import React from 'react';
import { Typography, Box } from '@mui/material';

interface PickupInfoProps {
  address: string;
  datetime: string;
  contact: string;
}

export const PickupInfo: React.FC<PickupInfoProps> = ({
  address,
  datetime,
  contact,
}) => (
  <Box>
    <Typography variant="h5">픽업 정보</Typography>
    <Typography>주소: {address}</Typography>
    <Typography>날짜 및 시간: {datetime}</Typography>
    <Typography>연락처: {contact}</Typography>
  </Box>
);
