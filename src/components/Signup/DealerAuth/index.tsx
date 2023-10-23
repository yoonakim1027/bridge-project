import React, { useState } from 'react';
import {
  Button,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';

const DealerAuth: React.FC = () => {
  const [authType, setAuthType] = useState<string>('');

  return (
    <div>
      <TextField label="휴대폰 번호" variant="outlined" />
      <Button variant="contained" color="primary">
        인증하기
      </Button>

      {authType && (
        <RadioGroup value={authType} onChange={(e) => setAuthType(e.target.value)}>
          <FormControlLabel value="skip" control={<Radio />} label="건너뛰기" />
          <FormControlLabel
            value="upload"
            control={<Radio />}
            label="추가 인증 업로드"
          />
        </RadioGroup>
      )}

      {authType === 'upload' && (
        <div>
          <TextField type="file" label="딜러 명함" variant="outlined" />
          <TextField type="file" label="영수증" variant="outlined" />
        </div>
      )}
    </div>
  );
};

export default DealerAuth;
