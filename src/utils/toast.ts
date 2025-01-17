import { ToastOptions, ToastPosition, toast } from 'react-toastify';

type ToastType = 'success' | 'error' | 'info' | 'warning';

/**
 * Универсальная функция для отображения уведомлений
 * @param type
 * @param message
 */
export const showToast = (type: ToastType, message: string): void => {
  const options: ToastOptions = {
    position: 'top-right' as ToastPosition,
    autoClose: 3000,
  };

  toast[type](message, options);
};
