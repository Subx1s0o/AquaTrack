import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import SignInContent from './components/sections/Auth/SignInContent';
import SignUpContent from './components/sections/Auth/SignUpContent';
import WelcomeContent from './components/sections/Home/Welcome/WelcomeContent';
import MonthInfo from './components/sections/TrackerPage/Calendar/MonthInfo';
import './index.css';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage/HomePage';
import { store } from './redux/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <HomePage>
        <WelcomeContent />
      </HomePage>
    ),
  },
  {
    path: '/sign-in',
    element: (
      <AuthPage>
        <SignInContent />
      </AuthPage>
    ),
  },
  {
    path: '/sign-up',
    element: (
      <AuthPage>
        <SignUpContent />
      </AuthPage>
    ),
  },
  {
    path: '*',
    element: <div>404</div>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="mx-auto flex h-screen max-w-[375px] items-center p-4 font-poppins md:max-w-screen-md md:p-8 lg:max-w-screen-lg">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  </StrictMode>,
);
