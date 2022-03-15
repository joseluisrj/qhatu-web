import React, { useRef, useEffect } from 'react';

import AuthenticationService from '../../core/services/AuthenticationService';
import SettingsStl from './SettingsStl';
import { useSelector, useDispatch } from 'react-redux';
import QhatuAction from '../../core/actions/qhatuAction';

const SettingsStf = () => {
  const dispatch = useDispatch();
  const alertMessage = useSelector((state) => state.alertMessage);
  const userData = useSelector((state) => state.userData);
  const userDataUpd = {
      customerId: userData.id,
      firstName: userData.name,
      lastName: userData.last_name,
      documentNumber: userData.document_number
  };

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
  const refDocumentNumber = useRef(null);

  const handleChangeInput = (e) => {
    const nameInput = e.target.name;
    const valueInput = e.target.value;

    switch(nameInput) {
        case 'txtFirstName':
            userDataUpd.firstName = valueInput;
           break;
        case 'txtLastName':
            userDataUpd.lastName = valueInput;
           break;
        case 'txtDocumentNumber':
            userDataUpd.documentNumber = valueInput;
            break;
        default:
          // code block
    }
  };

  const updateUser = async () => {
    const firstName = refFirstName.current?.value;
    const lastName = refLastName.current?.value;
    const documentNumber = refDocumentNumber.current?.value;
    
    if (firstName && lastName && documentNumber) {
            const resultSignUp = await AuthenticationService.SignUp(userDataUpd);
            if (resultSignUp.success) {
                userData.name = userDataUpd.firstName;
                userData.last_name = userDataUpd.lastName;
                userData.document_number = userDataUpd.documentNumber;
                dispatch(QhatuAction.updateUserDataAction(userData));
                dispatch(
                QhatuAction.modalAction(
                    true,
                    () => {
                    closeModal();
                    },
                    'Gracias 😁',
                    'Tus datos se actualizaron correctamente.'
                )
                );
            } else {
                dispatch(
                QhatuAction.modalAction(
                    true,
                    () => {
                    closeModal();
                    },
                    'Lo sentiemos 😔',
                    'No pudimos actualizar tus datos, intenta en unos minutos.'
                )
                );
            }
    } else {
        dispatch(
          QhatuAction.alertMessageAction(
            true,
            'Debe ingresar nombres, apellidos y una número de DNI para actualizar sus datos.'
          )
        );
      }
  };

  return (
    <SettingsStl
      userData={userDataUpd}
      alertMessage={alertMessage}
      refFirstName={refFirstName}
      refLastName={refLastName}
      refDocumentNumber={refDocumentNumber}
      handleChangeInput={handleChangeInput}
      updateUser={updateUser}
    />
  );
};

export default SettingsStf;
