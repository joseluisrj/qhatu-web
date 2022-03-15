import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import AlertQhatu from '../../components/alert/AlertQhatu';

const RegisterStl = ({
  alertMessage,
  refFirstName,
  refLastName,
  refEmail,
  refDocumentNumber,
  refPhoneNumber,
  refAddress,
  refPassword,
  handleChangeInput,
  handleClickSignUp,
}) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            name="txtFirstName"
            required
            fullWidth
            id="txtFirstName"
            label="Nombres"
            autoFocus
            inputRef={refFirstName}
            onChange={handleChangeInput}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="txtLastName"
            label="Apellidos"
            name="txtLastName"
            inputRef={refLastName}
            onChange={handleChangeInput}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="txtEmail"
            label="Correo Electronico"
            name="txtEmail"
            inputRef={refEmail}
            onChange={handleChangeInput}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="txtPassword"
            label="Contraseña"
            type="password"
            id="txtPassword"
            inputRef={refPassword}
            onChange={handleChangeInput}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            name="txtDocumentNumber"
            required
            fullWidth
            id="txtDocumentNumber"
            label="DNI"
            autoFocus
            inputRef={refDocumentNumber}
            onChange={handleChangeInput}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="txtPhoneNumber"
            label="Telefono Movil"
            name="txtPhoneNumber"
            inputRef={refPhoneNumber}
            onChange={handleChangeInput}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="txtAddress"
            label="Dirección"
            type="text"
            id="txtAddress"
            inputRef={refAddress}
            onChange={handleChangeInput}
          />
        </Grid>
      </Grid>
      <Button
        type="button"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={handleClickSignUp}
      >
        Registrar
      </Button>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link to="/login" variant="body2">
            ¿Tienes una cuenta? Inicia Sesión
          </Link>
        </Grid>
      </Grid>
      <br />
      {alertMessage.visibility ? (
        <AlertQhatu message={alertMessage.message} />
      ) : null}
    </>
  );
};

export default RegisterStl;
