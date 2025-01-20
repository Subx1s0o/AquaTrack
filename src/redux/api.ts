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

        const refreshToken = Cookie.get('refreshToken');
        const sessionId = Cookie.get('sessionId');

        if (!refreshToken || !sessionId) {
          return Promise.reject(error);
        }

        try {
          const refreshResponse = await fetchRefreshToken();
          console.log('refresh response', refreshResponse);
          if (
            !refreshResponse ||
            !refreshResponse.accessToken ||
            !refreshResponse.refreshToken
          ) {
            clearUserData();
            return Promise.reject(error);
          }

          // Оновлюємо токени лише в разі успішного рефрешу
          Cookie.remove('accessToken');
          Cookie.remove('sessionId');

          Cookie.set('accessToken', refreshResponse.accessToken);
          Cookie.set('sessionId', refreshResponse.sessionId);

          originalRequest.headers['Authorization'] =
            `Bearer ${refreshResponse.accessToken}`;

          return privateInstance(originalRequest);
        } catch (err) {
          // Якщо рефреш не вдався, очищаємо дані і виконуємо логаут
          clearUserData();
          return Promise.reject(err);
        }
      }

      // Якщо помилка 401 і спроба рефрешу вже була
      if (error.response?.status === 401 && originalRequest._retry) {
        clearUserData();
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  },
);
