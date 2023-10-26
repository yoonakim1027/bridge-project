import * as React from 'react';
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Container,
  TextField,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import BlockIcon from '@mui/icons-material/Block';

function sampleData(
  name: string,
  type: string,
  phoneNumber: string,
  companyName: string,
  insuranceCert: string,
  bankStatement: string,
) {
  return {
    name,
    type,
    phoneNumber,
    companyName,
    insuranceCert,
    bankStatement,
    orderList: [
      {
        orderNumber: '202310260001',
        date: '2020-01-05',
        customerId: '11091700',
        startPicture: 'imageUrl',
        arrivalPicture: 'imageUrl',
        isPayment: true,
      },
      {
        orderNumber: '202310260002',
        date: '2020-01-02',
        customerId: 'Anonymous',
        startPicture: 'imageUrl',
        arrivalPicture: 'imageUrl',
        isPayment: false,
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof sampleData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const columns = [
    { key: 'name', name: '이름' },
    { key: 'type', name: '수요자/공급자 여부' },
    { key: 'phoneNumber', name: '연락처' },
    { key: 'companyName', name: '회사 이름' },
    { key: 'insuranceCert', name: '보험증' },
    { key: 'bankStatement', name: '통장 사본' },
  ];

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          {row.name}
        </TableCell>
        <TableCell align="center">{row.type}</TableCell>
        <TableCell align="center">{row.phoneNumber}</TableCell>

        <TableCell align="center">{row.companyName}</TableCell>
        <TableCell align="center">{row.insuranceCert}</TableCell>
        <TableCell align="center">{row.bankStatement}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                주문 목록
              </Typography>
              <Table
                size="small"
                aria-label="purchases"
                sx={{ textAlignLast: 'center' }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell>주문 번호</TableCell>
                    <TableCell>주문 일자</TableCell>
                    <TableCell>고객 아이디</TableCell>
                    <TableCell>탁송 전 사진</TableCell>
                    <TableCell>탁송 후 사진</TableCell>
                    <TableCell>정산 내역</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.orderList.map((orderRow) => (
                    <TableRow key={orderRow.orderNumber}>
                      <TableCell component="th" scope="row">
                        {orderRow.orderNumber}
                      </TableCell>
                      <TableCell>{orderRow.date}</TableCell>
                      <TableCell>{orderRow.customerId}</TableCell>
                      <TableCell>{orderRow.startPicture}</TableCell>
                      <TableCell>{orderRow.arrivalPicture}</TableCell>
                      <TableCell>
                        {orderRow.isPayment ? (
                          <CheckCircleOutlineIcon color="primary" />
                        ) : (
                          <BlockIcon color="warning" />
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  sampleData('John Doe', '수요자', '123-456-7890', 'ABC Inc.', 'Yes', 'No'),
  sampleData('Jane Smith', '공급자', '987-654-3210', 'XYZ Corp.', 'No', 'Yes'),
  sampleData('Bob Johnson', '수요자', '555-123-4567', 'LMN Ltd.', 'Yes', 'Yes'),
  sampleData('Alice Brown', '공급자', '111-222-3333', 'PQR Co.', 'No', 'No'),
  sampleData('Ella Davis', '수요자', '777-888-9999', 'STU Enterprises', 'Yes', 'No'),
  sampleData('James White', '공급자', '444-555-6666', 'VWX Ltd.', 'No', 'Yes'),
  sampleData('Grace Wilson', '수요자', '999-888-7777', 'YZA Corp.', 'Yes', 'Yes'),
  sampleData('Robert Lee', '공급자', '123-987-6543', 'BCD Inc.', 'No', 'No'),
  sampleData('Olivia Clark', '수요자', '555-444-3333', 'DEF Ltd.', 'Yes', 'No'),
  sampleData(
    'William Turner',
    '공급자',
    '111-222-3333',
    'GHI Enterprises',
    'No',
    'Yes',
  ),
];

export default function MemberList() {
  const [searchTerm, setSearchTerm] = React.useState(''); // 검색어 상태 추가

  // 검색어를 사용하여 필터링된 행을 반환하는 함수
  const filteredRows = rows.filter((row) => {
    return (
      row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.phoneNumber.includes(searchTerm) ||
      row.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.insuranceCert.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.bankStatement.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <Paper sx={{ p: 3, m: 2, width: '100%' }}>
      <Container sx={{ mb: 2 }}>
        <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
          회원 목록
        </Typography>
        <TextField
          label="검색"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell size="small" />
                <TableCell align="center">이름</TableCell>
                <TableCell align="center">수요자/공급자 여부</TableCell>
                <TableCell align="center">연락처</TableCell>
                <TableCell align="center">회사 이름</TableCell>
                <TableCell align="center">보험증</TableCell>
                <TableCell align="center">통장 사본</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows.map((row) => (
                <Row key={row.name} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Paper>
  );
}
