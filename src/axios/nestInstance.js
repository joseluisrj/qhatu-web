import axios from 'axios';
import TokenService from '../core/services/TokenService';

const nestInstance = axios.create({
  baseURL: process.env.REACT_APP_NEST_API_URL,
});

nestInstance.interceptors.request.use(
  (config) => {
    if (TokenService.getUserData() !== null) {
      const token = TokenService.getAccessToken();
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

nestInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const errorConfig = error.config;
    if (errorConfig.url !== '/oauth/token' && error.response) {
      if (error.response.status === 401 && !errorConfig._retry) {
        errorConfig._retry = true;

        try {
          const responseRefreshToken = await nestInstance.post(
            process.env.REACT_APP_QHATU_API_PATH_REFRESH_TOKEN,
            {
              refresh_token: TokenService.getRefreshToken(),
            }
          );
          const { access_token } = responseRefreshToken.data;
          TokenService.updateAccessToken(access_token);
          return nestInstance(errorConfig);
        } catch (error) {
          return Promise.reject(error);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default nestInstance;
