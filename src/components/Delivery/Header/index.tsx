import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

interface HeaderProps {
  title: string;
}

const CustomAppBar = styled(AppBar)({
  background:
    'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
  boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.2)',
});

const StyledTypography = styled(Typography)({
  flexGrow: 1, // Takes the rest of the available space
  color: '#fff',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  marginLeft: '10px',
});

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <CustomAppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <StyledTypography variant="h6">{title}</StyledTypography>
        {/* You can add more icons or buttons here */}
      </Toolbar>
    </CustomAppBar>
  );
};

export default Header;
