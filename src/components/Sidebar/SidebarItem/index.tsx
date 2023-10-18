import React from 'react';
import { ListItem, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import { styled } from '@mui/system';

interface SidebarItemProps {
  label: string;
  IconComponent: React.ElementType;
  onClick: () => void;
}

const CustomListItem = styled(ListItem)({
  '&:hover': {
    backgroundColor: 'rgba(0,0,0,0.08)',
  },
  '&.Mui-selected': {
    backgroundColor: 'rgba(0,0,0,0.12)',
  },
});

const CustomListItemIcon = styled(ListItemIcon)({
  color: 'rgba(0,0,0,0.54)', // Default color
  '&.Mui-selected': {
    color: '#3f51b5', // Selected color (You can adjust this)
  },
});

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  IconComponent,
  onClick,
}) => {
  return (
    <ListItem>
      <ListItemButton onClick={onClick}>
        <CustomListItemIcon>
          <IconComponent />
        </CustomListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarItem;
