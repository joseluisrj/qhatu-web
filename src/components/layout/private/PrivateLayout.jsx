import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import AppBarQuatu from '../../appBar/AppBarQuatu';
import MenuUser from '../../menu/MenuUser';
import BackdropLoader from '../../loader/BackdropLoader';
import { useSelector } from 'react-redux';
import ModalQhatu from '../../modal/ModalQhatu';

const PrivateLayout = ({ children }) => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const backdrop = useSelector((state) => state.backdrop);
  const modal = useSelector((state) => state.modal);
  const toggleDrawerMenu = () => {
    setOpenMenu(!openMenu);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMyProfile = Boolean(anchorEl);
  const handleClickMyProfile = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBarQuatu
          openMenu={openMenu}
          toggleDrawerMenu={toggleDrawerMenu}
          handleClickMyProfile={handleClickMyProfile}
          openMyProfile={openMyProfile}
        />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {children}
            </Paper>
          </Container>
        </Box>
      </Box>
      <MenuUser
        anchorEl={anchorEl}
        openMyProfile={openMyProfile}
        handleClose={handleClose}
      />
      <BackdropLoader open={backdrop.open} />
      {modal.open ? (
        <ModalQhatu
          open={modal.open}
          callback={modal.callback}
          title={modal.title}
          subtitle={modal.subtitle}
        />
      ) : null}
    </>
  );
};

export default PrivateLayout;
