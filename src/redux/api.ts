import axios, {
  AxiosError,
  AxiosHeaders,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import Cookie from 'js-cookie';

const BASE_URL = 'https://node-goit-project.onrender.com';
// const BASE_URL = 'http://localhost:4000';
export const privateInstance = axios.create({
  baseURL: BASE_URL,
  // withCredentials: true,
});

export const publicInstance = axios.create({
  baseURL: BASE_URL,
  // withCredentials: true,
});

export const fetchRefreshToken = async (): Promise<void> => {
  return await axios.post(`${BASE_URL}/auth/refresh`);
};

const clearUserData = (): void => {
  Cookie.remove('accessToken');
  Cookie.remove('refreshToken');
  Cookie.remove('sessionId');
  window.location.href = '/login';
};

privateInstance.interceptors.request.use(
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
privateInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: unknown): Promise<AxiosResponse | void> => {
    console.log(error);
    if (error instanceof AxiosError) {
      const originalRequest = error.config as CustomAxiosRequestConfig;

      if (error.response?.status === 401 && !originalRequest?._retry) {
        originalRequest._retry = true;
        try {
          await fetchRefreshToken();

          return privateInstance(originalRequest);
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
