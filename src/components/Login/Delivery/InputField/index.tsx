import React from 'react';
import TextField from '@mui/material/TextField';

interface InputFieldProps {
  label: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, placeholder }) => {
  return (
    <TextField
      fullWidth
      label={label}
      placeholder={placeholder}
      variant="outlined"
      margin="normal"
    />
  );
};

export default InputField;
