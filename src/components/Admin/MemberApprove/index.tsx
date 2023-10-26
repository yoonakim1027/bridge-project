import React, { useState } from 'react';
import axios from 'axios';
import { Button, Paper, Typography, Container } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const MemberApprove: React.FC = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      name: 'User 1',
      email: 'user1@example.com',
      documentUrl: '/path/to/document1.pdf',
      documentUrl2: '/path/to/document1.pdf',
      isSubmit: false,
      action: '',
    },
    {
      id: 2,
      name: 'User 2',
      email: 'user2@example.com',
      documentUrl: '/path/to/document2.pdf',
      documentUrl2: '/path/to/document2.pdf',
      isSubmit: true,
      action: '',
    },
    {
      id: 3,
      name: 'User 3',
      email: 'user3@example.com',
      documentUrl: '/path/to/document3.pdf',
      documentUrl2: '/path/to/document3.pdf',
      isSubmit: false,
      action: '',
    },
    // Add more user data as needed
  ]);

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      flex: 1,
    },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    {
      field: 'documentUrl',
      headerName: '제출 서류',
      flex: 1,
      renderCell: (params) => (
        <div>
          <Button
            size="small"
            onClick={() => handleViewDocument(params.row.documentUrl)}
          >
            열람
          </Button>
        </div>
      ),
    },
    {
      field: 'documentUrl2',
      headerName: '통장 사본',
      flex: 1,
      renderCell: (params) => (
        <div>
          <Button
            size="small"
            onClick={() => handleViewDocument(params.row.documentUrl2)}
          >
            열람
          </Button>
        </div>
      ),
    },
    {
      field: 'isSubmit',
      headerName: '서류 제출 여부',
      flex: 1,
      renderCell: (params) => <>{params.value ? <CheckIcon /> : <CloseIcon />}</>,
    },
    {
      field: 'action',
      headerName: '승인 여부',
      flex: 1,
      renderCell: (params) => (
        <div>
          <Button size="small" onClick={() => handleApprove(params.row.id)}>
            승인
          </Button>
          <Button
            size="small"
            color="error"
            onClick={() => handleReject(params.row.id)}
          >
            거부
          </Button>
        </div>
      ),
    },
  ];

  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleUserSelection = (userId) => {
    if (selectedUsers.includes(userId)) {
      // 이미 선택된 경우, 선택 목록에서 제거
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    } else {
      // 선택되지 않은 경우, 선택 목록에 추가
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  // 가입 승인
  const handleApprove = (userId: number) => {
    // 예비용 코드입니당
    // 서버에 승인 요청 보내기
    // axios
    //   .post(`/api/approveUser/${userId}`)
    //   .then((response) => {
    //     console.log('User approved:', response.data);
    //   })
    //   .catch((error) => {
    //     console.error('Error approving user:', error);
    //   });
  };

  // 가입 거부
  const handleReject = (userId: number) => {
    // axios
    //   .post(`/api/rejectUser/${userId}`)
    //   .then((response) => {
    //     // 거부가 성공하면 적절한 조치를 취하십시오.
    //     console.log('User rejected:', response.data);
    //     // 여기서 서버 응답 데이터에 따라 UI 업데이트 또는 리다이렉션을 수행할 수 있습니다.
    //   })
    //   .catch((error) => {
    //     // 오류가 발생하면 오류 처리를 수행하십시오.
    //     console.error('Error rejecting user:', error);
    //   });
  };

  // 일괄 승인
  const handleBulkApprove = () => {
    // selectedUsers 배열에 있는 사용자 ID에 대해 승인 요청 보내기
    selectedUsers.forEach((userId) => {
      // 서버에 승인 요청 보내기
      axios
        .post(`/api/approveUser/${userId}`)
        .then((response) => {
          console.log(`User ${userId} approved:`, response.data);
        })
        .catch((error) => {
          console.error(`Error approving user ${userId}:`, error);
        });
    });

    // 승인 후, 선택된 사용자 목록 초기화
    setSelectedUsers([]);
  };

  // 제출 서류 열람
  const handleViewDocument = (documentUrl: string) => {
    window.open(documentUrl, '_blank');
  };

  return (
    <Paper sx={{ p: 3, m: 2, width: '100%' }}>
      <Container sx={{ display: 'flex', mb: 2 }}>
        <Typography component="h2" variant="h6">
          회원 승인 / 거부
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleBulkApprove}
          disabled={selectedUsers.length === 0}
          sx={{ ml: 'auto' }}
        >
          승인
        </Button>
      </Container>
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        checkboxSelection
        onRowSelectionModelChange={(newSelection) => {
          setSelectedUsers(newSelection);
        }}
      />
    </Paper>
  );
};
export default MemberApprove;
