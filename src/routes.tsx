import { RouteObject } from 'react-router-dom';

import SharedLayout from './SharedLayout';
import PrivateRoute from './components/common/PrivateRoute';
import PublicRoute from './components/common/PublicRoute';
import { MonthInfo } from './components/sections/TrackerPage/Calendar/MonthInfo';
import WaterMainInfo from './components/sections/TrackerPage/WaterMainInfo/WaterMainInfo';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <SharedLayout />,
    children: [
      { path: '/', element: <HomePage /> },
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
            <WaterMainInfo />
            <div>
              <MonthInfo />
            </div>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;
