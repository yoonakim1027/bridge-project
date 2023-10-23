import React, { useState } from 'react';
import { Button, Fade } from '@mui/material';
import PersonalUserAuth from '@/components/Signup/PersonalUserAuth';
import DealerAuth from '@/components/Signup/DealerAuth';
import CompanyAuth from '@/components/Signup/CompanyAuth';
import FreelancerAuth from '@/components/Signup/FreelancerAuth';

const SignUpMain: React.FC = () => {
  const [selected, setSelected] = useState<string>('');

  return (
    <div>
      <Fade in={!selected}>
        <div>
          <Button onClick={() => setSelected('수요자')}>수요자</Button>
          <Button onClick={() => setSelected('공급자')}>공급자</Button>
        </div>
      </Fade>

      <Fade in={selected === '수요자'}>
        <div>
          <Button onClick={() => setSelected('개인유저')}>개인유저</Button>
          <Button onClick={() => setSelected('신차/중고차 딜러')}>
            신차/중고차 딜러
          </Button>
        </div>
      </Fade>

      <Fade in={selected === '공급자'}>
        <div>
          <Button onClick={() => setSelected('탁송 회사')}>탁송 회사</Button>
          <Button onClick={() => setSelected('탁송 프리랜서 기사')}>
            탁송 프리랜서 기사
          </Button>
        </div>
      </Fade>

      <Fade in={selected === '개인유저'}>
        <div>
          <PersonalUserAuth />
        </div>
      </Fade>
      <Fade in={selected === '신차/중고차 딜러'}>
        <div>
          <DealerAuth />
        </div>
      </Fade>
      <Fade in={selected === '탁송 회사'}>
        <div>
          <CompanyAuth />
        </div>
      </Fade>
      <Fade in={selected === '탁송 프리랜서 기사'}>
        <div>
          <FreelancerAuth />
        </div>
      </Fade>
    </div>
  );
};

export default SignUpMain;
