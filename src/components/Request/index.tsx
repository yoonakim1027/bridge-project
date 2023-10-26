// RequestForm.tsx
import React from 'react';
import {
  Container,
  Box,
  Paper,
  Typography,
  Grid,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import { RequestorInfo } from './RequestInfo';
import { PickupInfo } from './PickupInfo';
import { DeliveryInfo } from './DeliveryInfo';

export const RequestForm: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Paper sx={{ p: 3, m: 4 }}>
        <Typography sx={{ textAlign: 'center' }} component="h1" variant="h4">
          주문서 상세 페이지
        </Typography>
        <Box my={2}>
          <RequestorInfo
            name="홍길동"
            contact="010-1234-5678"
            address="서울시 강남구"
          />
        </Box>
        <Box my={2} sx={{ mt: 4 }}>
          <PickupInfo
            address="서울시 강남구"
            datetime="2023-11-01 14:00"
            contact="010-1234-5678"
          />
        </Box>
        <Box my={2} sx={{ mt: 4 }}>
          <DeliveryInfo
            address="서울시 서초구"
            datetime="2023-11-01 16:00"
            recipientName="김철수"
            recipientContact="010-9876-5432"
          />
        </Box>
      </Paper>
    </Container>
  );
};
