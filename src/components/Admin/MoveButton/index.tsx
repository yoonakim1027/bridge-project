import React from 'react';
import Button from '@mui/material/Button';

interface MoveButtonProps {
  text: string;
  onClick: () => void;
}

const MoveButton: React.FC<MoveButtonProps> = ({ text, onClick }) => {
  return (
    <Button variant="outlined" color="primary" onClick={onClick}>
      {text}
    </Button>
  );
};

export default MoveButton;
