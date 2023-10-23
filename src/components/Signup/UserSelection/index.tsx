import React from 'react';
import { Button } from '@mui/material';

const UserSelection: React.FC = () => {
  return (
    <div>
      <Button variant="contained" color="primary">
        개인유저
      </Button>
      <Button variant="contained" color="secondary">
        신차/중고차 딜러
      </Button>
    </div>
  );
};

export default UserSelection;
