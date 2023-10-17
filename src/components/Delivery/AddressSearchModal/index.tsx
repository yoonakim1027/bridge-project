import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Modal,
  Backdrop,
  Fade,
  TextField,
  Button,
  List,
  ListItem,
} from '@mui/material';

interface AddressSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAddress: (address: string) => void;
}

const AddressSearchModal: React.FC<AddressSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectAddress,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [addressList, setAddressList] = useState<any[]>([]);

  const searchAddress = async () => {
    const APP_KEY = 'c4313c13eff0f80e26fa2097d3877b68';
    try {
      const response = await axios.get(
        'https://dapi.kakao.com/v2/local/search/address.json',
        {
          params: {
            query: searchTerm,
          },
          headers: {
            Authorization: `KakaoAK ${APP_KEY}`,
          },
        },
      );

      setAddressList(response.data.documents);
    } catch (error) {
      console.error('주소 검색 중 오류 발생:', error);
    }
  };

  return (
    <Modal open={isOpen} onClose={onClose} closeAfterTransition>
      <Fade in={isOpen}>
        <Box sx={{ backgroundColor: 'background.paper', p: 2, borderRadius: 2 }}>
          <TextField
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="주소를 입력하세요."
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            onClick={searchAddress}
            sx={{ mt: 1 }}
          >
            검색
          </Button>
          {addressList.length > 0 && (
            <div>
              <h3>검색 결과:</h3>
              <List>
                {addressList.map((item) => (
                  <ListItem
                    key={item.id}
                    button
                    onClick={() => {
                      onSelectAddress(item.address_name);
                      onClose();
                    }}
                  >
                    {item.address_name}
                  </ListItem>
                ))}
              </List>
            </div>
          )}
          <Button
            variant="outlined"
            color="secondary"
            onClick={onClose}
            sx={{ mt: 1 }}
          >
            닫기
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
};

export default AddressSearchModal;
