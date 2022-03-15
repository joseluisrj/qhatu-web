import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import AuthenticationService from '../../core/services/AuthenticationService';
import RegexValidations from '../../core/pipes/RegexValidations';
import RegisterStl from './RegisterStl';
import { useSelector, useDispatch } from 'react-redux';
import QhatuAction from '../../core/actions/qhatuAction';

const RegisterStf = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const alertMessage = useSelector((state) => state.alertMessage);

  useEffect(() => {
    return () => {
      dispatch(QhatuAction.alertMessageAction(false));
      closeModal();
    };
  }, []);

  const closeModal = () => {
    dispatch(QhatuAction.modalAction(false));
  };

  const refFirstName = useRef(null);
  const refLastName = useRef(null);
  const refEmail = useRef(null);
  const refDocumentNumber = useRef(null);
  const refPhoneNumber = useRef(null);
  const refAddress = useRef(null);
  const refPassword = useRef(null);

  const handleClickSignUp = async () => {
    const firstName = refFirstName.current?.value;
    const lastName = refLastName.current?.value;
    const email = refEmail.current?.value;
    const documentNumber = refDocumentNumber.current?.value;
    const phoneNumber = refPhoneNumber.current?.value;
    const address = refAddress.current?.value;
    const password = refPassword.current?.value;

    if (
      firstName &&
      lastName &&
      email &&
      documentNumber &&
      phoneNumber &&
      address &&
      password
    ) {
      //const currentUser = await AuthenticationService.ValidateUser(email);
      // if (currentUser) {
      //   dispatch(
      //     QhatuAction.modalAction(
      //       true,
      //       () => {
      //         closeModal();
      //       },
      //       'Lo sentimos 😔',
      //       'El usuario ya se encuentra registrado.'
      //     )
      //   );
      // } else {
      const userToSignUp = {
        firstName,
        lastName,
        email,
        documentNumber,
        phoneNumber,
        address,
        password,
      };
      dispatch(QhatuAction.backdropAction(true));
      const resultSignUp = await AuthenticationService.SignUp(userToSignUp);
      dispatch(QhatuAction.backdropAction(false));
      if (resultSignUp.success) {
        dispatch(
          QhatuAction.modalAction(
            true,
            () => {
              history.push('/login');
            },
            'Bienvenido 😁',
            'El usuario se registró correctamente.'
          )
        );
      }
      //}
    } else {
      dispatch(
        QhatuAction.alertMessageAction(
          true,
          'Debe ingresar nombres, apellidos, correo y una contraseña para poderse registrar.'
        )
      );
    }
  };

  const handleChangeInput = (e) => {
    const nameInput = e.target.name;
    const valueInput = e.target.value;

    const isValid =
      nameInput === 'txtEmail'
        ? RegexValidations.ValidateEmail(valueInput)
        : RegexValidations.ValidatePassword(valueInput);
    let messageValidation =
      nameInput === 'txtEmail'
        ? 'Debe ingresar un correo válido.'
        : 'Debe ingresar mas de 6 caracteres.';

    dispatch(QhatuAction.alertMessageAction(!isValid, messageValidation));
  };

  return (
    <RegisterStl
      alertMessage={alertMessage}
      refFirstName={refFirstName}
      refLastName={refLastName}
      refEmail={refEmail}
      refDocumentNumber={refDocumentNumber}
      refPhoneNumber={refPhoneNumber}
      refAddress={refAddress}
      refPassword={refPassword}
      handleChangeInput={handleChangeInput}
      handleClickSignUp={handleClickSignUp}
    />
  );
};

export default RegisterStf;
