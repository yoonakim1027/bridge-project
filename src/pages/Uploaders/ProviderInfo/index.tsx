import React from 'react';
import Header from '@/components/Delivery/Header';
import InputField from '@/components/Delivery/InputField';
import ImageUploader from '@/components/Delivery/ImageUploader';
import SubmitButton from '@/components/Delivery/SubmitButton';
import CancelButton from '@/components/Delivery/CancelButton';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const ProviderInfoPage: React.FC = () => {
  const handleCancel = () => {
    console.log('Cancelled');
  };

  return (
    <Container>
      <Header title="탁송 공급자 정보 입력" />

      <Box component="form" noValidate autoComplete="off" mt={2}>
        <InputField label="이름" placeholder="이름을 입력하세요." />
        <InputField label="연락처" placeholder="연락처를 입력하세요." />
        <InputField label="주소" placeholder="주소를 입력하세요." />

        <Box mt={2}>
          <ImageUploader label="사진 업로드" />
        </Box>

        <Box mt={2}>
          <SubmitButton text="제출" />
          <CancelButton text="취소" onClick={handleCancel} />
        </Box>
      </Box>
    </Container>
  );
};

export default ProviderInfoPage;
