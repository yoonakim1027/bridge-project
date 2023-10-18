import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

interface MultipleSelectPlaceholderProps {
  setSrchType: React.Dispatch<React.SetStateAction<number[]>>;
  srchType: number[];
}

const EventType = {
  // undefiend: -1,
  // None: 0,
  차량정지: 1,
  '차량 역주행': 2,
  보행자: 3,
  '신호 대기': 4,
  '영역 이동': 5,
  '도로 이탈': 6,
  이상운전: 7,
  낙하물: 8,
  차량발생: 9,
  무단횡단: 10,
  불법보행: 11,
  배회: 12,
  침입: 13,
  '좌회전 감응': 100,
  '차량번호 인식': 101,
  진입: 102,
  진출: 103,
};

const eventArray = Object.keys(EventType);

interface StylesProps {
  name: string;
  personName: string[];
  theme: any; // or the exact theme type you're using from MUI
}

function getStyles({ name, personName, theme }: StylesProps): React.CSSProperties {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const MultipleSelectPlaceholder: React.FC<MultipleSelectPlaceholderProps> = ({
  setSrchType,
  srchType,
}) => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = React.useState<string[]>([]);
  const [selectedValues, setSelectedValues] = React.useState<number[]>([]);

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const selected = event.target.value || [];
    const keys = typeof selected === 'string' ? selected.split(',') : selected;
    setSelectedKeys(keys);

    // 키 배열을 사용하여 EventType에서 값을 조회하고 그 값을 selectedValues에 저장
    const values = keys.map((key) => EventType[key as keyof typeof EventType]);
    setSrchType(values);
    setSelectedValues(values);
  };
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: (ITEM_HEIGHT + ITEM_PADDING_TOP) * eventArray.length, // 이 부분 수정
        width: 200,
      },
    },
  };
  // 선택안하면 전체로 검색되도록
  return (
    <div>
      <FormControl sx={{ m: 1, width: 310 }}>
        <Select
          multiple
          displayEmpty
          size="small"
          value={selectedKeys}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if ((selected as string[]).length === 0) {
              return <p style={{ fontSize: '14px' }}>전체</p>;
            }

            return (selected as string[]).join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>전체</em>
          </MenuItem>
          {eventArray.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles({ name, personName, theme })}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default MultipleSelectPlaceholder;
