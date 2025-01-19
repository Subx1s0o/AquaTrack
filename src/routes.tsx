import { RouteObject } from 'react-router-dom';

import SharedHomeLayout from './SharedHomeLayout';
import SharedTrackerLayout from './SharedTrackerLayout';
import PrivateRoute from './components/common/PrivateRoute';
import PublicRoute from './components/common/PublicRoute';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import TrackerPage from './pages/TrackerPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <SharedHomeLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      {
        path: '/signin',
        element: (
          // <PublicRoute>
          <SignInPage />
          // </PublicRoute>
        ),
      },
      {
        path: '/signup',
        element: (
          // <PublicRoute>
          <SignUpPage />
          // </PublicRoute>
        ),
      },
    ],
  },
  {
    path: '/tracker',
    element: (
      // <PrivateRoute redirectTo="/signin">
      <SharedTrackerLayout>
        <TrackerPage />
      </SharedTrackerLayout>
      // </PrivateRoute>
    ),
  },
  {
    path: '*',
    element: <div>404</div>,
  },
];

export default routes;
