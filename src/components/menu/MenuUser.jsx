import React from 'react';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import TokenService from '../../core/services/TokenService';
import { useDispatch } from 'react-redux';
import QhatuAction from '../../core/actions/qhatuAction';

const MenuUser = ({ anchorEl, openMyProfile, handleClose }) => {
  const dispatch = useDispatch();
  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={openMyProfile}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem>
        <Avatar /> Mi Perfil
      </MenuItem>
      <MenuItem>
        <Avatar /> Mi Cuenta
      </MenuItem>
      <Divider />
      <MenuItem
        onClick={() => {
          TokenService.removeUserData();
          dispatch(QhatuAction.userDataAction());
        }}
      >
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Cerrar Sesión
      </MenuItem>
    </Menu>
  );
};

export default MenuUser;
