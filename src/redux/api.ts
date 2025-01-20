import axios, {
  AxiosError,
  AxiosHeaders,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import Cookie from 'js-cookie';

import { logout } from './auth/operations';
import { store } from './store';

const BASE_URL = 'https://node-goit-project.onrender.com';

export const privateInstance = axios.create({
  baseURL: BASE_URL,
});

export const publicInstance = axios.create({
  baseURL: BASE_URL,
});

interface RefreshTokenResponse {
  accessToken: string;
  sessionId: string;
  refreshToken: string;
}

export const fetchRefreshToken =
  async (): Promise<RefreshTokenResponse | null> => {
    const refreshToken = Cookie.get('refreshToken');
    const sessionId = Cookie.get('sessionId');

    if (!refreshToken || !sessionId) {
      clearUserData();
      return null;
    }

    try {
      const { data } = await axios.post<RefreshTokenResponse>(
        `${BASE_URL}/auth/refresh`,
        {
          refreshToken,
          sessionId,
        },
      );
      console.log(data);
      return data;
    } catch (error) {
      console.log('Error from Api Refresh: ', error);
      clearUserData();
      throw error;
    }
  };

const clearUserData = (): void => {
  store.dispatch(logout());
  Cookie.remove('accessToken');
  Cookie.remove('refreshToken');
  Cookie.remove('sessionId');
};

privateInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = Cookie.get('accessToken');

    if (!token) {
      return config;
    }

    if (config.headers instanceof AxiosHeaders) {
      config.headers.set('Authorization', `Bearer ${token}`);
    } else {
      config.headers = new AxiosHeaders({
        Authorization: `Bearer ${token}`,
      });
    }

    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

privateInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401 && Cookie.get('accessToken')) {
      store.dispatch(logout());
    }
    return Promise.reject(error);
  },
);
