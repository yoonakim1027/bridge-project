import React from 'react';
import { Button } from '@mui/material';

interface Address {
  areaAddress: string;
  townAddress: string;
}

interface KakaoPostProps {
  setAddressObj: (address: Address) => void;
}

declare const daum: any;

function KakaoPost(props: KakaoPostProps) {
  const openDaumPostcodePopup = () => {
    new daum.Postcode({
      oncomplete: (data) => {
        let fullAddress = data.address;
        let extraAddress = ''; // 추가 주소
        let localAddress = data.sido + ' ' + data.sigungu; // 지역 주소 (시, 도 + 시, 군, 구)

        if (data.addressType === 'R') {
          // 주소 타입이 도로명주소일 경우
          if (data.bname !== '') {
            extraAddress += data.bname; // 법정동, 법정리
          }
          if (data.buildingName !== '') {
            extraAddress +=
              extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName; // 건물명
          }
        }

        // 주소 검색이 완료된 후 상위 컴포넌트로 주소 정보를 전달
        props.setAddressObj({
          areaAddress: localAddress,
          townAddress:
            fullAddress + (extraAddress !== '' ? `(${extraAddress})` : ''),
        });
      },
    }).open();
  };

  return (
    <Button
      onClick={openDaumPostcodePopup}
      sx={{ mt: 2, height: '55px', width: '90%', p: 0 }}
      size="large"
      variant="outlined"
    >
      주소 검색
    </Button>
  );
}

export default KakaoPost;
