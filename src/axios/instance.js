import axios from 'axios';
import TokenService from '../core/services/TokenService';

const instance = axios.create({
  baseURL: process.env.REACT_APP_QHATU_API_URL,
});

instance.interceptors.request.use(
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

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const errorConfig = error.config;
    if (errorConfig.url !== '/oauth/token' && error.response) {
      if (error.response.status === 401 && !errorConfig._retry) {
        errorConfig._retry = true;

        try {
          const responseRefreshToken = await instance.post(
            process.env.REACT_APP_QHATU_API_PATH_REFRESH_TOKEN,
            {
              refresh_token: TokenService.getRefreshToken(),
            }
          );
          const { access_token } = responseRefreshToken.data;
          TokenService.updateAccessToken(access_token);
          return instance(errorConfig);
        } catch (error) {
          return Promise.reject(error);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
