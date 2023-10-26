// PickupInfo.tsx
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
    <Divider sx={{ m: 1, borderBottomWidth: 2, borderBottomColor: 'currentcolor' }} variant="fullWidth" />
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
            <TableCell>연락처</TableCell>
            <TableCell>{contact}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
);
