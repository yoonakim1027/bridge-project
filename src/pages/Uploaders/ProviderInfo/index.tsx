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
import Grid from '@mui/material/Grid';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  TextField,
  Autocomplete,
  Button,
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
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <Header title="탁송 차량 정보 입력" />
        </Grid>
        <Grid item xs={6} pl={5} pr={5}>
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
            <Grid item xs={12} mt={1} mb={1}>
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
            </Grid>
            <Grid item xs={12} mt={1}>
              <TextField
                id="date"
                label="탁송 날짜"
                type="date"
                defaultValue="2023-10-18"
                sx={{ width: '48%', marginRight: 3 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="time"
                label="탁송 픽업 시간"
                type="time"
                defaultValue="07:30"
                sx={{ width: '47%' }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Box display="flex" alignItems="center">
              <Grid item xs={10}>
                <InputField
                  label="차량 출발지 픽업 장소"
                  placeholder="출발지를 입력하세요."
                  value={pickupPlaceSelectedAddress}
                />
              </Grid>
              <Grid item xs={2} ml={2}>
                <Button
                  onClick={openPickupAddressModal}
                  sx={{ mt: 3, mb: 2, height: '55px', width: '100%', p: 0 }}
                  size="large"
                  variant="outlined"
                >
                  주소 검색
                </Button>
              </Grid>
            </Box>
            <Box display="flex" alignItems="center" mb={2} mt={-3}>
              <Grid item xs={10}>
                <InputField
                  label="탁송 도착 장소"
                  placeholder="도착 장소를 입력하세요."
                  value={arrivalSelectedAddress}
                />
              </Grid>
              <Grid item xs={2} ml={2}>
                <Button
                  onClick={openArrivalAddressModal}
                  size="large"
                  sx={{ mt: 3, mb: 2, height: '55px', width: '100%', p: 0 }}
                  variant="outlined"
                >
                  주소 검색
                </Button>
              </Grid>
            </Box>
            <Grid item xs={12}>
              <TextField
                id="arrival-time"
                label="탁송 도착 원하는 시간"
                type="datetime-local"
                defaultValue="2023-10-18T07:30"
                sx={{ width: '100%' }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <AddressSearchModal
              isOpen={isModalOpen}
              onClose={closeModal}
              onSelectAddress={handleSelectAddress}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          mt={3}
          sx={{ border: '1px solid grey', backgroundColor: '#bebebe' }}
        >
          <Box
            mt={2}
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              ml: '-2rem',
              mt: '-10px',
            }}
          >
            <ImageUploader label="사진 업로드" />
          </Box>
        </Grid>
        <Grid item xs={12} mt={2} display={'flex'} justifyContent={'center'}>
          <Box mt={2} mr={2}>
            <SubmitButton text="제출" />
          </Box>
          <Box mt={2} mr={8}>
            <CancelButton text="취소" onClick={handleCancel} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProviderInfoPage;
