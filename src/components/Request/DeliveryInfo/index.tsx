// DeliveryInfo.tsx
import React from 'react';
import {
  Typography,
  Box,
  Divider,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';

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
    <Divider
      sx={{ m: 1, borderBottomWidth: 2, borderBottomColor: 'currentcolor' }}
      variant="fullWidth"
    />
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>주소</TableCell>
            <TableCell>{address}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>날짜 및 시간</TableCell>
            <TableCell>{datetime}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>수취인 이름</TableCell>
            <TableCell>{recipientName}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>수취인 연락처</TableCell>
            <TableCell>{recipientContact}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
);
