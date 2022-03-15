import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ModalQhatu = ({ callback, title, subtitle, open }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={callback}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {subtitle}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={callback}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalQhatu;
