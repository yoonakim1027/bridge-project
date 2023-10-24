import React from 'react';
import { Button, Paper, Typography } from '@mui/material';

interface ChoiceProducerProps {
  setSelected: (value: string) => void;
}

const ChoiceProducer: React.FC<ChoiceProducerProps> = ({ setSelected }) => {
  return (
    <Paper sx={{ p: 5, borderRadius: 2 }}>
      <Typography
        variant="h6"
        component="h3"
        gutterBottom
        color={'gray'}
        sx={{ mb: 5 }}
      >
        어떤 서비스를 원하시나요?
      </Typography>
      <div>
        <Button
          variant="outlined"
          onClick={() => setSelected('탁송 회사')}
          // startIcon={<LocalShippingIcon sx={{ width: 100, height: 100 }} />}
          sx={{ width: 200, height: 150, fontSize: 20, mr: 5 }}
        >
          탁송 회사
        </Button>
        <Button
          variant="outlined"
          onClick={() => setSelected('탁송 프리랜서 기사')}
          // startIcon={<LocalShippingIcon sx={{ width: 100, height: 100 }} />}
          sx={{ width: 200, height: 150, fontSize: 20 }}
        >
          탁송 프리랜서 기사
        </Button>
      </div>
    </Paper>
  );
};

export default ChoiceProducer;
