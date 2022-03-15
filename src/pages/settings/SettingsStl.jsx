import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AlertQhatu from '../../components/alert/AlertQhatu';

const SettingsStl = ({
  userData,
  alertMessage,
  refFirstName,
  refLastName,
  refDocumentNumber,
  handleChangeInput,
  updateUser,
}) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom align="CENTER">
            DATOS PERSONALES
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            autoComplete="given-name"
            name="txtFirstName"
            required
            fullWidth
            id="txtFirstName"
            label="Nombres"
            autoFocus
            defaultValue={userData.firstName}
            inputRef={refFirstName}
            onChange={handleChangeInput}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="txtLastName"
            label="Apellidos"
            name="txtLastName"
            defaultValue={userData.lastName}
            inputRef={refLastName}
            onChange={handleChangeInput}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            autoComplete="given-name"
            name="txtDocumentNumber"
            required
            fullWidth
            id="txtDocumentNumber"
            label="DNI"
            defaultValue={userData.documentNumber}
            inputRef={refDocumentNumber}
            onChange={handleChangeInput}
          />
        </Grid>
      </Grid>
      <Button
        type="button"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={updateUser}
      >
        Actualizar
      </Button>
      <br />
      {alertMessage.visibility ? (
        <AlertQhatu message={alertMessage.message} />
      ) : null}
    </>
  );
};

export default SettingsStl;
