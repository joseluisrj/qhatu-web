import axios from 'axios';

const updateUser = async (userData) => {
  try {
    const userResponse = await axios.post(
      process.env.REACT_APP_QHATU_API_URL +
        process.env.REACT_APP_QHATU_API_PATH_SIGNUP,
      userData
    );
    return {
      success: userResponse.status === 200,
      data: userResponse.data,
    };
  } catch (error) {}
};

const UserService = {
  updateUser: updateUser,
};

export default UserService;
