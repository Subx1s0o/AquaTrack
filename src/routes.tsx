import { RouteObject } from 'react-router-dom';

import PrivateRoute from './components/common/PrivateRoute';
import PublicRoute from './components/common/PublicRoute';
import MonthInfo from './components/sections/TrackerPage/Calendar/MonthInfo';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/signin',
    element: (
      <PublicRoute>
        <SignInPage />
      </PublicRoute>
    ),
  },
  {
    path: '/signup',
    element: (
      <PublicRoute>
        <SignUpPage />
      </PublicRoute>
    ),
  },
  {
    path: '/tracker',
    element: (
      <PrivateRoute redirectTo="/signin">
        <div>
          tracker
          <MonthInfo />
        </div>
      </PrivateRoute>
    ),
  },
  {
    path: '*',
    element: <div>404</div>,
  },
];

export default routes;
