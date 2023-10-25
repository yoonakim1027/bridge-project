import React from 'react';
import { Button, Paper, Typography, Container } from '@mui/material';

interface ChoiceProducerProps {
  setSelected: (value: string) => void;
}

const ChoiceProducer: React.FC<ChoiceProducerProps> = ({ setSelected }) => {
  return (
    <Container maxWidth="xl" sx={{ m: 3 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ fontWeight: 'bold' }}
      >
        공급자 회원가입
      </Typography>
      <Typography variant="h5" component="h1" gutterBottom>
        어떤 서비스를 원하시나요?
      </Typography>
      <div style={{ marginTop: '2rem' }}>
        <Button
          variant="contained"
          size="large"
          onClick={() => setSelected('탁송 회사')}
          sx={{ mr: 3, width: 200 }}
        >
          탁송 회사
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={() => setSelected('탁송 프리랜서 기사')}
          sx={{ width: 200 }}
        >
          탁송 프리랜서 기사
        </Button>
      </div>
      {/* <div style={{ display: 'flex', marginTop: '2rem' }}>
    <Button variant="contained" sx={{ fontWeight: 'bold', fontSize: 15 }}>
      확인
    </Button>
    <Typography variant="body1" gutterBottom sx={{ alignSelf: 'center', ml: 2 }}>
      Enter ↩︎를 누르십시오
    </Typography>
  </div> */}
    </Container>
  );
};

export default ChoiceProducer;
