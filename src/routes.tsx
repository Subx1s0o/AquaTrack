import { RouteObject } from 'react-router-dom';

import PrivateRoute from './components/common/PrivateRoute';
import PublicRoute from './components/common/PublicRoute';
import DailyInfo from './components/sections/TrackerPage/WaterDetailedInfo/DailyInfo/components/DailyInfo';
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
      <PrivateRoute redirectTo="/sign-in">
        <div>tracker</div>
      </PrivateRoute>
    ),
  },
  {
    path: '/dailyinfo',
    element: (
      <PublicRoute>
        <DailyInfo />
      </PublicRoute>
    ),
  },
  {
    path: '*',
    element: <div>404</div>,
  },
];

export default routes;
