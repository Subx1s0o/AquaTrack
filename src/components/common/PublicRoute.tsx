import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { selectIsAuthenticated } from '@/redux/auth/selectors';
import { useAppSelector } from '@/redux/hooks';

type PublicRouteProps = {
  children: ReactNode;
  redirectTo?: string;
};

export default function PublicRoute({
  children,
  redirectTo = '/',
}: PublicRouteProps) {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const location = useLocation();

  if (isAuthenticated && location.pathname !== redirectTo) {
    return <Navigate to={redirectTo} />;
  }

  return <>{children}</>;
}
