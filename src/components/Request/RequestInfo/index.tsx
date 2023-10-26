// RequestorInfo.tsx
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
    <Divider
      sx={{ m: 1, borderBottomWidth: 2, borderBottomColor: 'currentcolor' }}
      variant="fullWidth"
    />
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>이름</TableCell>
            <TableCell>{name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>연락처</TableCell>
            <TableCell>{contact}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>주소</TableCell>
            <TableCell>{address}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
);
