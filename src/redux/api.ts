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
      return data;
    } catch (error) {
      clearUserData();
      throw error;
    }
  };

const clearUserData = (): void => {
  store.dispatch(logout());

  window.location.href = '/signin';
};

privateInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = Cookie.get('accessToken');
    if (token) {
      if (config.headers instanceof AxiosHeaders) {
        config.headers.set('Authorization', `Bearer ${token}`);
      } else {
        config.headers = new AxiosHeaders({
          Authorization: `Bearer ${token}`,
        });
      }
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

privateInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: unknown): Promise<AxiosResponse | void> => {
    if (error instanceof AxiosError) {
      const originalRequest = error.config as CustomAxiosRequestConfig;

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const refreshResponse = await fetchRefreshToken();

          if (refreshResponse) {
            const { accessToken, sessionId, refreshToken } = refreshResponse;

            Cookie.set('accessToken', accessToken);
            Cookie.set('sessionId', sessionId);
            Cookie.set('refreshToken', refreshToken);

            originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;

            return privateInstance(originalRequest);
          } else {
            clearUserData();
            return Promise.reject(new Error('Failed to refresh token'));
          }
        } catch (refreshError) {
          clearUserData();
          return Promise.reject(refreshError);
        }
      }
    }
    return Promise.reject(error);
  },
);
