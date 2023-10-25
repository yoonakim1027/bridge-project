import React, { useState } from 'react';
import { Collapse, Container, Typography, Paper } from '@mui/material';
import PersonalUserAuth from '@/components/Signup/PersonalUserAuth';
import DealerAuth from '@/components/Signup/DealerAuth';
import CompanyAuth from '@/components/Signup/CompanyAuth';
import FreelancerAuth from '@/components/Signup/FreelancerAuth';

import InitSignUpSelect from '@/components/Signup/InitSignUpSelect';
import ChoiceConsumer from '@/components/Signup/ChoiceConsumer';
import ChoiceProducer from '@/components/Signup/ChoiceProducer';

const SignUpMain: React.FC = () => {
  const [selected, setSelected] = useState<string>('');

  return (
    <>
      <div>
        <Container maxWidth="xl" sx={{ p: 5 }}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 'bold' }}
          >
            몇 가지 질문에만 답해 주시면
          </Typography>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ mb: 2, fontWeight: 'bold' }}
          >
            투유가 바로 연락드릴게요!
          </Typography>
          <Typography variant="h6" component="h3" gutterBottom color={'gray'}>
            지원서 작성 → 심사 후 투유가 일자리 매칭 → 원하는 일자리 신청
          </Typography>
        </Container>
      </div>

      <Collapse in={!selected}>
        <InitSignUpSelect setSelected={setSelected} />
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
    </>
  );
};

export default SignUpMain;
