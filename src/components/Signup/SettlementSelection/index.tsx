import React, { useState } from 'react';
import { RadioGroup, FormControlLabel, Radio } from '@mui/material';

const SettlementSelection: React.FC = () => {
  const [settlement, setSettlement] = useState<string>('');

  return (
    <RadioGroup value={settlement} onChange={(e) => setSettlement(e.target.value)}>
      <FormControlLabel
        value="free"
        control={<Radio />}
        label="견적 의뢰서 무료 열람 / 탁송 수익금 30% 배당"
      />
      <FormControlLabel
        value="paid"
        control={<Radio />}
        label="견적 의뢰서 열람 2500원 결제 / 탁송 수익금 100% 배당"
      />
    </RadioGroup>
  );
};

export default SettlementSelection;
