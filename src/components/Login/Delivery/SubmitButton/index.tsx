import React from 'react';
import Button from '@mui/material/Button';

interface SubmitButtonProps {
  text: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ text }) => {
  return (
    <Button variant="contained" color="primary" type="submit">
      {text}
    </Button>
  );
};

export default SubmitButton;
