import React, { useEffect, useRef } from 'react';
import AuthenticationService from '../../core/services/AuthenticationService';
import RegexValidations from '../../core/pipes/RegexValidations';
import TokenService from '../../core/services/TokenService';
import LoginStl from './LoginStl';
import { useSelector, useDispatch } from 'react-redux';
import QhatuAction from '../../core/actions/qhatuAction';

const LoginStf = () => {
  const dispatch = useDispatch();
  const alertMessage = useSelector((state) => state.alertMessage);
  const refEmail = useRef(null);
  const refPassword = useRef(null);

  useEffect(() => {
    return () => {
      dispatch(QhatuAction.alertMessageAction(false, ''));
    };
  }, []);

  const handleClickSignIn = async () => {
    const email = refEmail.current?.value;
    const password = refPassword.current?.value;

    if (email && password) {
      const userToSignIn = {
        email,
        password,
      };

      try {
        dispatch(QhatuAction.backdropAction(true));
        const resultSignIn = await AuthenticationService.SignIn(userToSignIn);
        dispatch(QhatuAction.backdropAction(false));
        if (resultSignIn.success) {
          TokenService.setUserData(resultSignIn.data);
          dispatch(QhatuAction.userDataAction());
        }
      } catch (error) {
        dispatch(
          QhatuAction.userDataAction(true, 'Usuario y/o contraseña incorrecta.')
        );
      }
    } else {
      dispatch(
        QhatuAction.alertMessageAction(
          true,
          'Debe ingresar un usuario y contraseña para entrar a la aplicación'
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
        ? 'El correo no es válido'
        : 'La contraseña debe tener un minimo de 6 caracteres.';

    dispatch(QhatuAction.alertMessageAction(!isValid, messageValidation));
  };

  return (
    <LoginStl
      refEmail={refEmail}
      refPassword={refPassword}
      handleChangeInput={handleChangeInput}
      handleClickSignIn={handleClickSignIn}
      alertMessage={alertMessage}
    />
  );
};

export default LoginStf;
