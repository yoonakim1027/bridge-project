import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import {
  MainHeaderContainer,
  MainHeaderContainerTitle,
} from '@/components/MuiStyled/Div';
import { H3 } from '@/components/MuiStyled/Title';
import { MainLine } from '@/components/MuiStyled/Br';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div>
      <MainHeaderContainerTitle>
        <H3>{title}</H3>
      </MainHeaderContainerTitle>

      <MainHeaderContainer>
        <MainLine />
      </MainHeaderContainer>
    </div>
  );
};

const CustomAppBar = styled(AppBar)`
  padding: 15px 0;
  /* background-color: #f5f5f5; // Default color for MUI AppBar */
  box-shadow: none; // Removes default shadow
`;

export default Header;
