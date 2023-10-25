// RequestForm.tsx
import React from 'react';
import { Container, Box } from '@mui/material';
import { RequestorInfo } from './RequestInfo';
import { PickupInfo } from './PickupInfo';
import { DeliveryInfo } from './DeliveryInfo';

export const RequestForm: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box my={2}>
        <RequestorInfo
          name="홍길동"
          contact="010-1234-5678"
          address="서울시 강남구"
        />
      </Box>
      <Box my={2}>
        <PickupInfo
          address="서울시 강남구"
          datetime="2023-11-01 14:00"
          contact="010-1234-5678"
        />
      </Box>
      <Box my={2}>
        <DeliveryInfo
          address="서울시 서초구"
          datetime="2023-11-01 16:00"
          recipientName="김철수"
          recipientContact="010-9876-5432"
        />
      </Box>
    </Container>
  );
};
