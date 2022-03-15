import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

export const MenuQhatu = (
  <React.Fragment>
    <ListItemButton component={Link} to={'/home'}>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Principal" />
    </ListItemButton>
    <ListItemButton component={Link} to={'/purchases'}>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Compras" />
    </ListItemButton>
    <ListItemButton component={Link} to={'/settings'}>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Configuración" />
    </ListItemButton>
  </React.Fragment>
);
