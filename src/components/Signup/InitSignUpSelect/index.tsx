import React from 'react';
import { Button, Typography, Container } from '@mui/material';

interface InitSignUpSelectProps {
  setSelected: (value: string) => void;
}

const InitSignUpSelect: React.FC<InitSignUpSelectProps> = ({ setSelected }) => {
  return (
    <Container maxWidth="xl" sx={{ m: 3 }}>
      <Typography
        variant="h5"
        component="h1"
        gutterBottom
        sx={{ fontWeight: 'bold' }}
      >
        수요자로서 서비스를 받으실 건가요,
      </Typography>
      <Typography
        variant="h5"
        component="h1"
        gutterBottom
        sx={{ fontWeight: 'bold' }}
      >
        아니면 공급자로서 서비스를 제공하실 건가요? *
      </Typography>
      <div style={{ marginTop: '2rem' }}>
        <Button
          variant="contained"
          size="large"
          onClick={() => setSelected('수요자')}
          sx={{ mr: 3, width: 200 }}
        >
          수요자
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={() => setSelected('공급자')}
          sx={{ width: 200 }}
        >
          공급자
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

export default InitSignUpSelect;
