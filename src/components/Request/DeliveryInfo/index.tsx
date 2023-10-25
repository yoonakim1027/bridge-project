// DeliveryInfo.tsx
import React from 'react';
import { Typography, Box } from '@mui/material';

interface DeliveryInfoProps {
  address: string;
  datetime: string;
  recipientName: string;
  recipientContact: string;
}

export const DeliveryInfo: React.FC<DeliveryInfoProps> = ({
  address,
  datetime,
  recipientName,
  recipientContact,
}) => (
  <Box>
    <Typography variant="h5">배송 정보</Typography>
    <Typography>주소: {address}</Typography>
    <Typography>날짜 및 시간: {datetime}</Typography>
    <Typography>수취인 이름: {recipientName}</Typography>
    <Typography>수취인 연락처: {recipientContact}</Typography>
  </Box>
);
