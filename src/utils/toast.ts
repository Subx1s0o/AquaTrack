import { ToastOptions, ToastPosition, toast } from 'react-toastify';

import { cn } from './cn';

type ToastType = 'success' | 'error' | 'info' | 'warning';

const getToastClassName = (type: ToastType): string => {
  return cn({
    'border-2 border-green bg-green-100 text-green text-base md:text-lg font-poppins font-bold':
      type === 'success',
    'border-2 border-error bg-red-100 text-error text-base md:text-lg font-poppins font-bold':
      type === 'error',
    'border-2 border-blue-500 bg-blue-100 text-blue-800 text-base md:text-lg font-poppins font-bold':
      type === 'info',
    'border-2 border-yellow-500 bg-yellow-100 text-yellow-800 text-base md:text-lg font-poppins font-bold':
      type === 'warning',
  });
};

export const showToast = (type: ToastType, message: string): void => {
  const options: ToastOptions = {
    position: 'top-right' as ToastPosition,
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    progress: undefined,
    className: getToastClassName(type),
  };

  toast[type](message, options);
};
