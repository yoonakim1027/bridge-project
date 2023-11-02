import React from 'react';
import Button from '@mui/material/Button';

interface SubmitButtonProps {
  text: string;
  onClick: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ text, onClick }) => {
  return (
    <Button variant="contained" color="primary" type="submit" onClick={onClick}>
      {text}
    </Button>
  );
};

export default SubmitButton;
