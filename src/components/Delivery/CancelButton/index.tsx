import React from 'react';
import Button from '@mui/material/Button';

interface CancelButtonProps {
  text: string;
  onClick: () => void;
}

const CancelButton: React.FC<CancelButtonProps> = ({ text, onClick }) => {
  return (
    <Button variant="outlined" color="secondary" onClick={onClick}>
      {text}
    </Button>
  );
};

export default CancelButton;
