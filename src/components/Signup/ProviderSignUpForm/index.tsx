import React from 'react';
import { Typography, Container, TextField, Button, Box } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const ProviderSignUpForm: React.FC = () => {
  return (
    <>
      <Container maxWidth="md" sx={{ p: 7 }}>
        <Typography
          variant="h5"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 'bold' }}
        >
          몇 가지 질문에만 답해 주시면
        </Typography>
        <Typography
          variant="h5"
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
      <Container maxWidth="sm" sx={{ m: 8 }}>
        <Typography
          variant="h5"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 'bold' }}
        >
          성함을 알려주세요*
        </Typography>
        <TextField
          id="standard-basic"
          variant="standard"
          fullWidth
          margin="normal"
          sx={{ width: '90%', mb: 3 }}
        />
        <Box display={'flex'}>
          <Button
            variant="contained"
            sx={{ fontWeight: 'bold', fontSize: 15 }}
            size="large"
            endIcon={<CheckIcon />}
          >
            확인
          </Button>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ alignSelf: 'center', ml: 2 }}
          >
            Enter ↩︎를 누르십시오
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="sm" sx={{ m: 8 }}>
        <Typography
          variant="h5"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 'bold', mb: 2 }}
        >
          제공 가능하신 서비스를 모두 알려주세요*
        </Typography>
        <Typography
          variant="h6"
          component="h3"
          gutterBottom
          color={'gray'}
          sx={{ mb: 5 }}
        >
          나중에 정정하실 수 있으니 편하게 선택하세요
        </Typography>
        <Box display={'flex'}>
          <Button
            variant="contained"
            sx={{ fontWeight: 'bold', fontSize: 15 }}
            size="large"
            endIcon={<CheckIcon />}
          >
            확인
          </Button>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ alignSelf: 'center', ml: 2 }}
          >
            Enter ↩︎를 누르십시오
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default ProviderSignUpForm;
