import axios, {
  AxiosError,
  AxiosHeaders,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import Cookie from 'js-cookie';

const BASE_URL = 'https://node-goit-project.onrender.com';

export const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const fetchRefreshToken = async (): Promise<void> => {
  return await axios.post(
    `${BASE_URL}/auth/refresh`,
    {},
    { withCredentials: true },
  );
};

const clearUserData = (): void => {
  Cookie.remove('accessToken');
  Cookie.remove('refreshToken');
  Cookie.remove('sessionId');

  window.location.href = '/login';
};

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = Cookie.get('accessToken');
    if (token) {
      if (token) {
        if (config.headers instanceof AxiosHeaders) {
          config.headers.set('Authorization', `Bearer ${token}`);
        } else {
          config.headers = new AxiosHeaders({
            Authorization: `Bearer ${token}`,
          });
        }
      }
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}
instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: unknown): Promise<AxiosResponse | void> => {
    if (error instanceof AxiosError) {
      const originalRequest = error.config as CustomAxiosRequestConfig;

      if (error.response?.status === 401 && !originalRequest?._retry) {
        originalRequest._retry = true;
        try {
          await fetchRefreshToken();

          return instance(originalRequest);
        } catch (refreshError: unknown) {
          if (
            refreshError instanceof AxiosError &&
            refreshError.response?.status === 401
          ) {
            clearUserData();
          }
          return Promise.reject(refreshError);
        }
      }
    }

    return Promise.reject(error);
  },
);
