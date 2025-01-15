import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import ForgotPasswordForm from './components/forms/ForgotPasswordForm/ForgotPasswordForm';
import ResetPasswordForm from './components/forms/ResetPasswordForm/ResetPasswordForm';
import SignInContent from './components/sections/Auth/SignInContent';
import SignUpContent from './components/sections/Auth/SignUpContent';
import WelcomeContent from './components/sections/Home/Welcome/WelcomeContent';
import './index.css';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

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
    path: '/forgot-password',
    element: <ForgotPasswordForm />,
  },
  {
    path: '/reset-password',
    element: <ResetPasswordForm />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
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
