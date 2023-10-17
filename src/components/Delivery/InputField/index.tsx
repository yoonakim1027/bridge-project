import React from 'react';
import TextField from '@mui/material/TextField';

interface InputFieldProps {
  label: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <TextField
      fullWidth
      label={label}
      placeholder={placeholder}
      variant="outlined"
      margin="normal"
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;
