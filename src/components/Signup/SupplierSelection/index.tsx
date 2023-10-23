import React from 'react';
import { Button } from '@mui/material';

const SupplierSelection: React.FC = () => {
  return (
    <div>
      <Button variant="contained" color="primary">
        탁송 회사
      </Button>
      <Button variant="contained" color="secondary">
        탁송 프리랜서 기사
      </Button>
    </div>
  );
};

export default SupplierSelection;
