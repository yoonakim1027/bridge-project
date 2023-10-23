import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormHelperText,
  Divider,
  Box,
} from '@mui/material';

const CheckForm: React.FC = () => {
  const [agreement, setAgreement] = useState({
    usage: false,
    privacy: false,
    age: false,
  });

  const handleFormAgreement = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgreement({
      ...agreement,
      [event.target.name]: event.target.checked,
    });
  };

  const { usage, privacy, age } = agreement;

  // 전체 동의 체크 상태
  const allAgreed = usage && privacy && age;

  // 일괄 체크
  const [checked, setChecked] = useState(allAgreed); // 전체 동의 체크 상태로 초기화

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;

    setChecked(newChecked); // 전체 동의 체크 상태 업데이트

    // 개별 동의 체크박스 업데이트
    setAgreement({
      usage: newChecked,
      privacy: newChecked,
      age: newChecked,
    });
  };

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <FormControl
        required
        error={!allAgreed}
        component="fieldset"
        variant="standard"
      >
        <FormGroup>
          <FormControlLabel
            label="(필수) 이용약관 동의"
            control={
              <Checkbox
                checked={usage}
                onChange={handleFormAgreement}
                name="usage"
              />
            }
          />
          <FormControlLabel
            label="(필수) 개인정보 수집 및 이용 동의"
            control={
              <Checkbox
                checked={privacy}
                onChange={handleFormAgreement}
                name="privacy"
              />
            }
          />
          <FormControlLabel
            label="(필수) 14세 이상입니다"
            control={
              <Checkbox checked={age} onChange={handleFormAgreement} name="age" />
            }
          />
        </FormGroup>
        <FormHelperText>You can display an error</FormHelperText>
      </FormControl>
    </Box>
  );

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <FormControlLabel
          label="전체동의"
          control={
            <Checkbox
              checked={checked}
              indeterminate={!allAgreed && (usage || privacy || age)}
              onChange={handleChange1}
            />
          }
          sx={{ mt: 2 }}
        />
      </Box>
      <Divider flexItem sx={{ alignSelf: 'center', m: 2 }} />
      {children}
    </>
  );
};

export default CheckForm;
