import { RouteObject } from 'react-router-dom';

import SharedHomeLayout from './SharedHomeLayout';
import SharedTrackerLayout from './SharedTrackerLayout';
import PrivateRoute from './components/common/PrivateRoute';
import PublicRoute from './components/common/PublicRoute';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
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
    ],
  },
  {
    path: '/tracker',
    element: (
      <PrivateRoute redirectTo="/signup">
        <SharedTrackerLayout>
          <TrackerPage />
        </SharedTrackerLayout>
      </PrivateRoute>
    ),
  },
  {
    path: '*',
    element: (
      <div className="mx-auto flex h-screen max-w-[375px] items-center p-4 font-poppins md:max-w-screen-md md:p-8 lg:max-w-screen-lg">
        <NotFoundPage />
      </div>
    ),
  },
];

export default routes;
