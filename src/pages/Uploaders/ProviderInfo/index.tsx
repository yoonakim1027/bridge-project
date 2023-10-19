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
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  TextField,
  Autocomplete,
} from '@mui/material';
import brands from '@/data/brand.json';

const ProviderInfoPage: React.FC = () => {
  const handleCancel = () => {
    console.log('Cancelled');
  };
  const [brand, setBrand] = useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pickupPlaceSelectedAddress, setPickupPlaceSelectedAddress] = useState('');
  const [arrivalSelectedAddress, setArrivalSelectedAddress] = useState('');
  const [currentAddressType, setCurrentAddressType] = useState<
    'pickup' | 'arrival' | null
  >(null);

  const [insuranceRegistered, setInsuranceRegistered] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectAddress = (address: string) => {
    if (currentAddressType === 'pickup') {
      setPickupPlaceSelectedAddress(address);
    } else if (currentAddressType === 'arrival') {
      setArrivalSelectedAddress(address);
    }
    setCurrentAddressType(null);
    closeModal();
  };

  const openPickupAddressModal = () => {
    setCurrentAddressType('pickup');
    openModal();
  };

  const openArrivalAddressModal = () => {
    setCurrentAddressType('arrival');
    openModal();
  };
  return (
    <Container>
      <Header title="탁송 차량 정보 입력" />
      <Box component="form" noValidate autoComplete="off" mt={2}>
        <Autocomplete
          value={brand}
          onChange={(event, newValue) => {
            setBrand(newValue);
          }}
          options={brands} // 서버에서 받아올 것임
          renderInput={(params) => (
            <TextField
              {...params}
              label="차량 브랜드"
              placeholder="브랜드를 입력하세요."
            />
          )}
        />
        <InputField label="차량 번호" placeholder="차량 번호를 입력하세요." />
        <FormControl
          sx={{ flexDirection: 'row', display: 'flex' }}
          component="fieldset"
        >
          <FormLabel component="legend">운전자 보험 등록 여부</FormLabel>
          <RadioGroup
            row
            value={insuranceRegistered}
            onChange={(e) => setInsuranceRegistered(e.target.value)}
          >
            <FormControlLabel value="yes" control={<Radio />} label="예" />
            <FormControlLabel value="no" control={<Radio />} label="아니오" />
          </RadioGroup>
        </FormControl>
        <TextField
          id="date"
          label="탁송 날짜"
          type="date"
          defaultValue="2023-10-18"
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="time"
          label="탁송 픽업 시간"
          type="time"
          defaultValue="07:30"
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Box display="flex" alignItems="center">
          <InputField
            label="차량 출발지 픽업 장소"
            placeholder="출발지를 입력하세요."
            value={pickupPlaceSelectedAddress}
          />
          <button type="button" onClick={openPickupAddressModal}>
            주소 검색
          </button>
        </Box>
        <Box display="flex" alignItems="center">
          <InputField
            label="탁송 도착 장소"
            placeholder="도착 장소를 입력하세요."
            value={arrivalSelectedAddress}
          />
          <button type="button" onClick={openArrivalAddressModal}>
            주소 검색
          </button>
        </Box>
        <TextField
          id="arrival-time"
          label="탁송 도착 원하는 시간"
          type="datetime-local"
          defaultValue="2023-10-18T07:30"
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
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
