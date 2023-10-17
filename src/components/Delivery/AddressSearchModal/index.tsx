import React, { useState } from 'react';
import axios from 'axios';
import {
  Card,
  CardContent,
  TextField,
  Button,
  List,
  ListItem,
  Typography,
  Divider,
  IconButton,
  Modal,
  Fade,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

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
    const APP_KEY = process.env.REACT_APP_KAKAO_API_KEY;
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
        <Card sx={{ maxWidth: 400, p: 3, mx: 'auto', mt: 8 }}>
          <IconButton
            sx={{ position: 'absolute', right: 10, top: 10 }}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" mb={2}>
            주소 검색
          </Typography>
          <CardContent>
            <TextField
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="주소를 입력하세요."
              fullWidth
              variant="outlined"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={searchAddress}
              sx={{ mt: 2, mb: 2, width: '100%' }}
            >
              검색
            </Button>
            {addressList.length > 0 && (
              <div>
                <Divider sx={{ my: 2 }} />
                <Typography variant="subtitle1" gutterBottom>
                  검색 결과:
                </Typography>
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
          </CardContent>
        </Card>
      </Fade>
    </Modal>
  );
};

export default AddressSearchModal;
