import React from 'react';
import Button from '@mui/material/Button';

interface LogoutButtonProps {
  text: string;
  onClick: () => void;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ text, onClick }) => {
  return (
    <Button variant="outlined" color="primary" onClick={onClick}>
      {text}
    </Button>
  );
};

export default LogoutButton;
