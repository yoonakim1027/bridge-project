import React, { useState } from 'react';
import axios from 'axios';
import Header from '@/components/Delivery/Header';
import InputField from '@/components/Delivery/InputField';
import ImageUploader from '@/components/Delivery/ImageUploader';
import SubmitButton from '@/components/Delivery/SubmitButton';
import CancelButton from '@/components/Delivery/CancelButton';
import AddressSearchModal from '@/components/Delivery/AddressSearchModal';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const ProviderInfoPage: React.FC = () => {
  const handleCancel = () => {
    console.log('Cancelled');
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectAddress = (address: string) => {
    setSelectedAddress(address);
    closeModal();
  };

  return (
    <Container>
      <Header title="탁송 공급자 정보 입력" />
      <Box component="form" noValidate autoComplete="off" mt={2}>
        <InputField label="이름" placeholder="이름을 입력하세요." />
        <InputField label="연락처" placeholder="연락처를 입력하세요." />

        <Box display="flex" alignItems="center">
          <InputField
            label="주소 검색"
            placeholder="주소를 입력하세요."
            value={selectedAddress}
            // readOnly prop을 지원하는지 확인
          />
          <button type="button" onClick={openModal}>
            주소 검색
          </button>
        </Box>

        <AddressSearchModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSelectAddress={handleSelectAddress}
        />

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
