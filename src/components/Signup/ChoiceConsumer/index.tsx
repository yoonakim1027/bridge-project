import React from 'react';
import { Button, Paper, Typography, Container } from '@mui/material';

interface ChoiceConsumerProps {
  setSelected: (value: string) => void;
}

const ChoiceConsumer: React.FC<ChoiceConsumerProps> = ({ setSelected }) => {
  return (
    <Container maxWidth="xl" sx={{ m: 3 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ fontWeight: 'bold' }}
      >
        수요자 회원가입
      </Typography>
      <Typography variant="h5" component="h1" gutterBottom>
        어떤 서비스를 원하시나요?
      </Typography>
      <div style={{ marginTop: '2rem' }}>
        <Button
          variant="contained"
          size="large"
          onClick={() => setSelected('개인유저')}
          sx={{ mr: 3, width: 200 }}
        >
          개인유저
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={() => setSelected('신차/중고차 딜러')}
          sx={{ width: 200 }}
        >
          신차/중고차 딜러
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

export default ChoiceConsumer;
