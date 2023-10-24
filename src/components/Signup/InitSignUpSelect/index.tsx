import React from 'react';
import { Button, Paper, Typography } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PersonIcon from '@mui/icons-material/Person';

interface InitSignUpSelectProps {
  setSelected: (value: string) => void;
}

const InitSignUpSelect: React.FC<InitSignUpSelectProps> = ({ setSelected }) => {
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
      <Button
        variant="outlined"
        onClick={() => setSelected('수요자')}
        startIcon={<PersonIcon sx={{ width: 100, height: 100 }} />}
        sx={{ width: 200, height: 150, fontSize: 20, mr: 5 }}
      >
        수요자
      </Button>
      <Button
        variant="outlined"
        onClick={() => setSelected('공급자')}
        startIcon={<LocalShippingIcon sx={{ width: 100, height: 100 }} />}
        sx={{ width: 200, height: 150, fontSize: 20 }}
      >
        공급자
      </Button>
    </Paper>
  );
};

export default InitSignUpSelect;
