import React from 'react';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import MuiAppBar from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { MenuQhatu } from '../menu/MenuQhatu';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'openMenu',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const AppBarQuatu = ({
  openMenu,
  toggleDrawerMenu,
  handleClickMyProfile,
  openMyProfile,
}) => {
  const countShoppingCart = useSelector((state) => state.countShoppingCart);
  return (
    <>
      <AppBar position="absolute" open={openMenu}>
        <Toolbar
          sx={{
            pr: '24px',
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawerMenu}
            sx={{
              marginRight: '36px',
              ...(openMenu && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Avatar
            sx={{ m: 1, bgcolor: 'default.main' }}
            src="https://cdn-icons-png.flaticon.com/128/6769/6769119.png"
          />
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Qhatu
          </Typography>
          <IconButton color="inherit" component={Link} to={'/shoppingcart'}>
            <Badge badgeContent={countShoppingCart} color="warning">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <Tooltip title="Mi cuenta">
            <IconButton
              onClick={handleClickMyProfile}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={openMyProfile ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openMyProfile ? 'true' : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={openMenu}>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawerMenu}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">{MenuQhatu}</List>
      </Drawer>
    </>
  );
};

export default AppBarQuatu;
