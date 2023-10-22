import React, { useState } from 'react';
import Header from '@/components/Delivery/Header';
import InputField from '@/components/Delivery/InputField';
import ImageUploader from '@/components/Delivery/ImageUploader';
import SubmitButton from '@/components/Delivery/SubmitButton';
import CancelButton from '@/components/Delivery/CancelButton';
import AddressSearchModal from '@/components/Delivery/AddressSearchModal';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  TextField,
  Autocomplete,
  Button,
  Typography,
  Container,
  Grid,
  Fade,
  Box,
  Collapse,
} from '@mui/material';
import brands from '@/data/brand.json';
import { styled } from '@mui/system';

const InputRow: React.FC<{
  label: string;
  component: JSX.Element;
  visible: boolean;
}> = ({ label, component, visible }) => {
  return (
    <Collapse in={visible}>
      <div>
        <Grid container>
          <Grid item xs={3} mt={1} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography>{label}</Typography>
          </Grid>
          <Grid item xs={9} mt={1}>
            {component}
          </Grid>
        </Grid>
      </div>
    </Collapse>
  );
};

const FadeIn = styled('div')({
  opacity: 0,
  animation: 'fadeInAnimation 0.5s forwards',
  '@keyframes fadeInAnimation': {
    to: {
      opacity: 1,
    },
  },
});
interface FadeProps {
  fadein: boolean;
}

const FadeEffect = styled('div')<FadeProps>(({ fadein }) => ({
  transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  opacity: fadein ? 1 : 0,
}));
const ProviderInfoPage: React.FC = () => {
  const handleCancel = () => {
    console.log('Cancelled');
  };
  const [brand, setBrand] = useState<string | null>(null);
  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pickupPlaceSelectedAddress, setPickupPlaceSelectedAddress] = useState('');
  const [arrivalSelectedAddress, setArrivalSelectedAddress] = useState('');
  const [currentAddressType, setCurrentAddressType] = useState<
    'pickup' | 'arrival' | null
  >(null);

  const [insuranceRegistered, setInsuranceRegistered] = useState('');

  // 각 항목 선택/기입 시 다음 컴포넌트 렌더링
  const [showCarNumberInput, setShowCarNumberInput] = useState(false);
  const [showInsuranceInput, setShowInsuranceInput] = useState(false);
  const [showDateInput, setShowDateInput] = useState(false);
  const [showTimeInput, setShowTimeInput] = useState(false);
  const [showPickupLocationInput, setShowPickupLocationInput] = useState(false);
  const [showArrivalLocationInput, setShowArrivalLocationInput] = useState(false);
  const [showImageUpload, setImageUpload] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectAddress = (address: string) => {
    if (currentAddressType === 'pickup') {
      setPickupPlaceSelectedAddress(address);
      setShowArrivalLocationInput(true);
    } else if (currentAddressType === 'arrival') {
      setArrivalSelectedAddress(address);
      setShowTimeInput(true);
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
  // Input Field UI 로직을 위한 배열
  const inputFields = [
    {
      label: '차량 번호',
      component: (
        <TextField
          placeholder="차량 번호를 입력하세요."
          fullWidth
          onChange={() => setShowInsuranceInput(true)}
        />
      ),
      visible: showCarNumberInput,
    },
    {
      label: '운전자 보험 등록 여부',
      component: (
        <FormControl
          sx={{ flexDirection: 'row', display: 'flex' }}
          component="fieldset"
        >
          <RadioGroup
            row
            value={insuranceRegistered}
            onChange={(e) => {
              setInsuranceRegistered(e.target.value);
              setShowDateInput(true);
            }}
          >
            <FormControlLabel
              value="yes"
              control={<Radio />}
              label="예"
              sx={{ mr: '50px' }}
            />
            <FormControlLabel value="no" control={<Radio />} label="아니오" />
          </RadioGroup>
        </FormControl>
      ),
      visible: showInsuranceInput,
    },
    {
      label: '탁송 날짜',
      component: (
        <TextField
          id="date"
          label="탁송 날짜"
          type="date"
          defaultValue={formattedDate}
          sx={{ width: '100%', marginRight: 3 }}
          InputLabelProps={{ shrink: true }}
          onChange={() => {
            setShowPickupLocationInput(true);
          }}
        />
      ),
      visible: showDateInput,
    },
    {
      label: '탁송 픽업 시간',
      component: (
        <TextField
          id="time"
          label="탁송 픽업 시간"
          type="time"
          defaultValue="07:30"
          sx={{ width: '100%' }}
          InputLabelProps={{ shrink: true }}
          onChange={() => {
            setShowPickupLocationInput(true);
          }}
        />
      ),
      visible: showDateInput,
    },
    {
      label: '차량 출발지 픽업 장소',
      component: (
        <Grid container alignItems="center">
          <Grid item xs={7} mt={2}>
            <InputField
              label="차량 출발지 픽업 장소"
              placeholder="출발지를 입력하세요."
              value={pickupPlaceSelectedAddress}
              onChange={() => {
                setShowArrivalLocationInput(true);
              }}
            />
          </Grid>
          <Grid item xs={2} mt={3}>
            <Button
              onClick={openPickupAddressModal}
              sx={{ height: '55px', width: '100%', p: 0 }}
              size="large"
              variant="outlined"
            >
              주소 검색
            </Button>
          </Grid>
        </Grid>
      ),
      visible: showPickupLocationInput,
    },
    {
      label: '탁송 도착 장소',
      component: (
        <>
          <Grid container alignItems="center">
            <Grid item xs={7}>
              <InputField
                label="탁송 도착 장소"
                placeholder="도착 장소를 입력하세요."
                value={arrivalSelectedAddress}
                onChange={() => {
                  setShowTimeInput(true);
                }}
              />
            </Grid>
            <Grid item xs={2} mb={1}>
              <Button
                onClick={openArrivalAddressModal}
                sx={{ mt: 2, height: '55px', width: '100%', p: 0 }}
                size="large"
                variant="outlined"
              >
                주소 검색
              </Button>
            </Grid>
          </Grid>
        </>
      ),
      visible: showArrivalLocationInput,
    },
    {
      label: '탁송 도착 원하는 시간',
      component: (
        <TextField
          id="arrival-time"
          label="탁송 도착 원하는 시간"
          type="datetime-local"
          defaultValue="2023-10-18T07:30"
          sx={{ width: '100%' }}
          InputLabelProps={{ shrink: true }}
          onChange={() => {
            setImageUpload(true);
          }}
        />
      ),
      visible: showTimeInput,
    },
  ];

  return (
    <FadeEffect fadein={true}>
      <Container>
        <Grid container rowSpacing={1} spacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            <Header title="탁송 차량 정보 입력" />
          </Grid>
          <Grid item xs={8} pl={5} pr={5}>
            <Box component="form" noValidate autoComplete="off" mt={2}>
              <Grid container rowSpacing={1} spacing={{ xs: 1, sm: 2, md: 3 }}>
                {/* 차량 브랜드 */}
                <Grid
                  item
                  xs={3}
                  mt={1}
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  <Collapse in={true}>
                    <Typography>차량 브랜드</Typography>
                  </Collapse>
                </Grid>
                <Grid item xs={9} mt={1}>
                  <Collapse in={true}>
                    <Autocomplete
                      value={brand}
                      onChange={(_event, newValue) => {
                        setBrand(newValue);
                        setShowCarNumberInput(true);
                      }}
                      options={brands}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="차량 브랜드"
                          placeholder="브랜드를 입력하세요."
                          fullWidth
                        />
                      )}
                    />
                  </Collapse>
                </Grid>

                {inputFields.map((field, index) =>
                  field.visible ? (
                    <>
                      <Grid
                        item
                        xs={3}
                        mt={1}
                        sx={{ display: 'flex', alignItems: 'center' }}
                      >
                        <Collapse in={field.visible}>
                          <Typography>{field.label}</Typography>
                        </Collapse>
                      </Grid>
                      <Grid item xs={9} mt={1}>
                        <Collapse in={field.visible}>{field.component}</Collapse>
                      </Grid>
                    </>
                  ) : null,
                )}
              </Grid>

              <AddressSearchModal
                isOpen={isModalOpen}
                onClose={closeModal}
                onSelectAddress={handleSelectAddress}
              />
            </Box>
          </Grid>

          {showImageUpload && (
            <Collapse in={true}>
              <Grid
                item
                xs={4}
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
            </Collapse>
          )}

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
    </FadeEffect>
  );
};
export default ProviderInfoPage;
