import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import App from './App';
import SharedLayout from './SharedLayout';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="mx-auto flex h-screen max-w-[375px] items-center p-4 font-poppins md:max-w-screen-md md:p-8 lg:max-w-screen-lg">
      <SharedLayout>
        <App />
      </SharedLayout>
      <ToastContainer />
    </div>
  </StrictMode>,
);
