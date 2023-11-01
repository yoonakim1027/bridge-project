import React, { useRef, useState } from 'react';
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
import KakaoPost from '@/components/Delivery/KakaoPost';

const InputRow: React.FC<{
  label: string;
  component: JSX.Element;
  visible: boolean;
}> = ({ label, component, visible }) => {
  return (
    <Collapse in={visible}>
      <div>
        <Grid container>
          <Grid item xs={4} mt={1} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography>{label}</Typography>
          </Grid>
          <Grid item xs={8} mt={1}>
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
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  const [carNumberPart1, setCarNumberPart1] = useState(''); // 2 or 3자리 숫자
  const [carNumberPart2, setCarNumberPart2] = useState(''); // 한글 한 글자
  const [carNumberPart3, setCarNumberPart3] = useState(''); // 4자리 숫자

  // 카카오 주소 api 연동 관련 코드입니다
  const [address, setAddress] = useState({ areaAddress: '', townAddress: '' });
  const setAddressObj = (newAddress) => {
    setPickupPlaceSelectedAddress(newAddress.townAddress); // townAddress는 주소의 전체 주소입니다. 필요에 따라 수정하세요.
    setShowPickupLocationInput(true);
    setShowArrivalLocationInput(true);
  };

  // 차량 번호 유효성 검사
  function isValidCarNumber(value) {
    const regex = /^\d{2,3}[가-힣]{1}\s\d{4}$/;
    return regex.test(value);
  }
  const [isValid, setIsValid] = useState({
    carNumber: true,
    carNumberPart1: true,
    carNumberPart2: true,
    carNumberPart3: true,
    // ... 다른 유효성 검사 결과를 위한 상태 추가 예정
  });

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
  // 두 필드의 값을 하나로 합치는 함수
  const getFullCarNumber = () => {
    return `${carNumberPart1}${carNumberPart2} ${carNumberPart3}`;
  };

  const carNumber = getFullCarNumber();
  const secondInputRef = useRef(null);
  const thirdInputRef = useRef(null);

  // Input Field UI 로직을 위한 배열
  const inputFields = [
    {
      label: '차량 번호',
      component: (
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={3}>
            <TextField
              placeholder="123"
              fullWidth
              variant="standard"
              inputProps={{ maxLength: 3 }}
              onChange={(e) => {
                const value = e.target.value;
                const isValidNumberPart1 = /^[0-9]{2,3}$/;

                setCarNumberPart1(value);
                isValid.carNumberPart1 = isValidNumberPart1.test(value);

                if (value.length === 3) {
                  secondInputRef.current?.focus();
                }
              }}
              error={!isValid.carNumberPart1}
              helperText={
                !isValid.carNumberPart1 ? '2~3자리 숫자를 입력하세요.' : ''
              }
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              variant="standard"
              placeholder="가"
              fullWidth
              inputProps={{ maxLength: 1 }}
              inputRef={secondInputRef}
              onChange={(e) => {
                const value = e.target.value;
                const isValidKorean = /^[가-힣]$/;

                if (isValidKorean.test(value)) {
                  setCarNumberPart2(value);
                  setIsValid((prevState) => ({
                    ...prevState,
                    carNumberPart2: true,
                  }));
                  if (value.length === 1) {
                    thirdInputRef.current?.focus();
                  }
                } else {
                  setIsValid((prevState) => ({
                    ...prevState,
                    carNumberPart2: false,
                  }));
                }
              }}
              error={!isValid.carNumberPart2}
              helperText={!isValid.carNumberPart2 ? '한글을 입력하세요.' : ''}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              variant="standard"
              placeholder="1234"
              fullWidth
              inputProps={{ maxLength: 4 }}
              inputRef={thirdInputRef}
              onChange={(e) => {
                const value = e.target.value;
                const isValidNumber = /^[0-9]{4}$/;

                setCarNumberPart3(value);
                isValid.carNumberPart3 = isValidNumber.test(value);

                if (isValidNumber.test(value)) {
                  setShowInsuranceInput(true);
                }
              }}
              error={!isValid.carNumberPart3}
              helperText={!isValid.carNumberPart3 ? '4자리 숫자를 입력하세요.' : ''}
            />
          </Grid>
        </Grid>
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
          <Grid item xs={9}>
            <InputField
              label="차량 출발지 픽업 장소"
              placeholder="출발지를 입력하세요."
              value={pickupPlaceSelectedAddress}
              onChange={() => {
                setShowArrivalLocationInput(true);
              }}
            />
          </Grid>
          <Grid item xs={3} mt={1}>
            <KakaoPost setAddressObj={setAddressObj} />
          </Grid>
          <Grid container alignContent="center">
            <InputField
              label="차량 출발지 상세 주소"
              placeholder="상세 주소를 입력하세요."
              // value={pickupPlaceSelectedAddress}
              onChange={() => {
                setShowArrivalLocationInput(true);
              }}
            />
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
            <Grid item xs={9}>
              <InputField
                label="탁송 도착 장소"
                placeholder="도착 장소를 입력하세요."
                value={arrivalSelectedAddress}
                onChange={() => {
                  setShowTimeInput(true);
                }}
              />
            </Grid>
            <Grid item xs={3} mb={1}>
              <KakaoPost setAddressObj={setAddressObj} />
            </Grid>
            <Grid container alignItems="center">
              <InputField
                label="탁송 도착 상세 주소"
                placeholder="도착 상세 주소를 입력하세요."
                // value={arrivalSelectedAddress}
                onChange={() => {
                  setShowTimeInput(true);
                }}
              />
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
            setShowSubmitButton(true);
          }}
        />
      ),
      visible: showTimeInput,
    },
  ];

  return (
    <FadeEffect fadein={true}>
      <Container sx={{ justifyContent: 'center', display: 'flex' }}>
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

          {showSubmitButton && (
            <Grid item xs={12} mt={2} display={'flex'} justifyContent={'center'}>
              <Box mt={2} mr={2}>
                <SubmitButton text="제출" />
              </Box>
              <Box mt={2} mr={8}>
                <CancelButton text="취소" onClick={handleCancel} />
              </Box>
            </Grid>
          )}

          {/* 주석 처리된 이미지 업로드 부분 (필요한 경우 주석 해제) */}
          {/* 
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
        */}
        </Grid>
      </Container>
    </FadeEffect>
  );
};
export default ProviderInfoPage;
