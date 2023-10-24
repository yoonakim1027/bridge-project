import React from 'react';
import { Button, Paper, Typography, Container } from '@mui/material';

interface ChoiceConsumerProps {
  setSelected: (value: string) => void;
}

const ChoiceConsumer: React.FC<ChoiceConsumerProps> = ({ setSelected }) => {
  return (
    <Container maxWidth="md" sx={{ p: 3 }}>
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
            onClick={() => setSelected('개인유저')}
            // startIcon={<LocalShippingIcon sx={{ width: 100, height: 100 }} />}
            sx={{ width: 200, height: 150, fontSize: 20, mr: 5 }}
          >
            개인유저
          </Button>
          <Button
            variant="outlined"
            onClick={() => setSelected('신차/중고차 딜러')}
            // startIcon={<LocalShippingIcon sx={{ width: 100, height: 100 }} />}
            sx={{ width: 200, height: 150, fontSize: 20 }}
          >
            신차/중고차 딜러
          </Button>
        </div>
      </Paper>
    </Container>
  );
};

export default ChoiceConsumer;
