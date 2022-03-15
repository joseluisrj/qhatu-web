import instance from '../../axios/instance';

const SignIn = async (userToSignIn) => {
  let pathSignIn = process.env.REACT_APP_QHATU_API_PATH_SIGNIN;
  let username = process.env.REACT_APP_QHATU_API_USERNAME_CLIENT;
  let password = process.env.REACT_APP_QHATU_API_PASSWORD_CLIENT;
  const body = new URLSearchParams();
  body.append('grant_type', process.env.REACT_APP_QHATU_API_GRANT_TYPE_CLIENT);
  body.append('username', userToSignIn.email);
  body.append('password', userToSignIn.password);

  const response = await instance.post(pathSignIn, body, {
    auth: {
      username,
      password,
    },
  });

  return {
    success: response.status === 200,
    data: response.data,
  };
};

const SignUp = async (userToSignUp) => {
  let pathSignUp = process.env.REACT_APP_QHATU_API_PATH_SIGNUP;
  const response = await instance.post(pathSignUp, userToSignUp, {});

  return {
    success: response.status === 200,
    data: response.data,
  };
};

const ValidateUser = async (username) => {
  const pathValidateUser = process.env.REACT_APP_QHATU_API_PATH_USER_EXISTS;
  const userResponse = await instance.get(`${pathValidateUser}/${username}`);
  return {
    success: userResponse.status === 200,
    data: userResponse.status === 200 ? userResponse.data : undefined,
  };
};

const AuthenticationService = {
  SignIn,
  SignUp,
  ValidateUser,
};

export default AuthenticationService;
