// RequestForm.tsx
import React, { useEffect, useState } from 'react';
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

type Requestor = {
  name: string;
  contact: string;
  address: string;
};

type Pickup = {
  address: string;
  datetime: string;
  contact: string;
};

type Delivery = {
  address: string;
  datetime: string;
  recipientName: string;
  recipientContact: string;
};

type RequestData = {
  requestor: Requestor;
  pickup: Pickup;
  delivery: Delivery;
};

const DUMMY_DATA: RequestData[] = [
  {
    requestor: {
      name: '홍길동',
      contact: '010-1234-5678',
      address: '서울시 강남구',
    },
    pickup: {
      address: '서울시 강남구',
      datetime: '2023-11-01 14:00',
      contact: '010-1234-5678',
    },
    delivery: {
      address: '서울시 서초구',
      datetime: '2023-11-01 16:00',
      recipientName: '김철수',
      recipientContact: '010-9876-5432',
    },
  },
  // ... 추가적인 데이터 항목들
];

export const RequestForm: React.FC = () => {
  const [data, setData] = useState<RequestData[]>(DUMMY_DATA);

  useEffect(() => {
    // 여기에서 API를 호출합니다.
    async function fetchData() {
      try {
        const response = await fetch('YOUR_API_ENDPOINT');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    }

    // fetchData(); // API 호출이 준비되면 이 주석을 해제
  }, []);

  return (
    <Container maxWidth="md">
      {data.map((item, index) => (
        <Box key={index} mb={4}>
          <Box my={2}>
            <RequestorInfo {...item.requestor} />
          </Box>
          <Box my={2}>
            <PickupInfo {...item.pickup} />
          </Box>
          <Box my={2}>
            <DeliveryInfo {...item.delivery} />
          </Box>
        </Box>
      ))}
    </Container>
  );
};
