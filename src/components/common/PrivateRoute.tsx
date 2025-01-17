import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { selectIsAuthenticated } from '@/redux/auth/selectors';
import { useAppSelector } from '@/redux/hooks';

type PrivateRouteProps = {
  children: ReactNode;
  redirectTo?: string;
};

export default function PrivateRoute({
  children,
  redirectTo = '/sign-in',
}: PrivateRouteProps) {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}
