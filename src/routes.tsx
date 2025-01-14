import { RouteObject } from 'react-router-dom';

import PrivateRoute from './components/common/PrivateRoute';
import PublicRoute from './components/common/PublicRoute';
import SignInContent from './components/sections/Auth/SignInContent';
import SignUpContent from './components/sections/Auth/SignUpContent';
import WelcomeContent from './components/sections/Home/Welcome/WelcomeContent';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage/HomePage';

const routes: RouteObject[] = [
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
      <PublicRoute>
        <AuthPage>
          <SignInContent />
        </AuthPage>
      </PublicRoute>
    ),
  },
  {
    path: '/sign-up',
    element: (
      <PublicRoute>
        <AuthPage>
          <SignUpContent />
        </AuthPage>
      </PublicRoute>
    ),
  },
  {
    path: '/tracker',
    element: (
      <PrivateRoute redirectTo="/sign-in">
        <div>tracker</div>
      </PrivateRoute>
    ),
  },
  {
    path: '*',
    element: <div>404</div>,
  },
];

export default routes;
