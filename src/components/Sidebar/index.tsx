import React, { useState } from 'react';
import { Drawer, List, Divider, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import SidebarItem from './SidebarItem';
import HomeIcon from '@mui/icons-material/Home';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useSidebar } from '@/contexts/SidebarContext';
import { Theme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const items = [
  { label: 'Home', IconComponent: HomeIcon, path: '/admin' },
  { label: 'Delivery', IconComponent: LocalShippingIcon, path: '/upload' },
];

interface StyledDrawerProps {
  open: boolean;
  theme: Theme;
}

const StyledDrawer = styled(Drawer)<StyledDrawerProps>(({ theme, open }) => ({
  width: theme.spacing(9),
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: theme.spacing(10),
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxShadow: '2px 0 5px rgba(0,0,0,0.2)',
    borderRight: 'none',
    overflowX: 'hidden',
    '&.MuiDrawer-paperOpen': {
      width: 240,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  },
}));

const Sidebar: React.FC = () => {
  const { open, toggleSidebar } = useSidebar();
  const navigate = useNavigate();

  return (
    <StyledDrawer
      variant="permanent"
      open={open}
      PaperProps={{ className: open ? 'MuiDrawer-paperOpen' : '' }}
      theme={undefined}
    >
      <div>
        <IconButton sx={{ marginLeft: 1 }} onClick={toggleSidebar}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        {items.map((item, index) => (
          <SidebarItem
            key={index}
            label={item.label}
            IconComponent={item.IconComponent}
            onClick={() => navigate(item.path)}
          />
        ))}
      </List>
    </StyledDrawer>
  );
};

export default Sidebar;
