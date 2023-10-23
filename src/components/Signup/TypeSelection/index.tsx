import React from 'react';
import { Button } from '@mui/material';

interface Props {
  onSelect: (type: 'consumer' | 'supplier') => void;
}

const TypeSelection: React.FC<Props> = ({ onSelect }) => {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => onSelect('consumer')}
      >
        수요자
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => onSelect('supplier')}
      >
        공급자
      </Button>
    </div>
  );
};

export default TypeSelection;
