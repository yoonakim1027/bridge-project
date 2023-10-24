import React, { useState } from 'react';
import { Collapse, Container, Typography, Paper } from '@mui/material';
import PersonalUserAuth from '@/components/Signup/PersonalUserAuth';
import DealerAuth from '@/components/Signup/DealerAuth';
import CompanyAuth from '@/components/Signup/CompanyAuth';
import FreelancerAuth from '@/components/Signup/FreelancerAuth';
import './index.css';

import InitSignUpSelect from '@/components/Signup/InitSignUpSelect';
import ChoiceConsumer from '@/components/Signup/ChoiceConsumer';
import ChoiceProducer from '@/components/Signup/ChoiceProducer';

const SignUpMain: React.FC = () => {
  const [selected, setSelected] = useState<string>('');

  return (
    <div className="SignUpPage">
      <Collapse in={!selected}>
        <div>
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 'bold', mt: 7 }}
          >
            회원가입
          </Typography>
          <Container maxWidth="md" sx={{ p: 3 }}>
            <InitSignUpSelect setSelected={setSelected} />
          </Container>
        </div>
      </Collapse>

      <Collapse in={selected === '수요자'}>
        <ChoiceConsumer setSelected={setSelected} />
      </Collapse>

      <Collapse in={selected === '공급자'}>
        <ChoiceProducer setSelected={setSelected} />
      </Collapse>

      <Collapse in={selected === '개인유저'}>
        <div>
          <PersonalUserAuth />
        </div>
      </Collapse>
      <Collapse in={selected === '신차/중고차 딜러'}>
        <div>
          <DealerAuth />
        </div>
      </Collapse>
      <Collapse in={selected === '탁송 회사'}>
        <div>
          <CompanyAuth />
        </div>
      </Collapse>
      <Collapse in={selected === '탁송 프리랜서 기사'}>
        <div>
          <FreelancerAuth />
        </div>
      </Collapse>
    </div>
  );
};

export default SignUpMain;
