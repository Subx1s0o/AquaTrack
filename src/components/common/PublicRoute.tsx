import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

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

  if (isAuthenticated) {
    return <Navigate to={redirectTo} />;
  }

  return <>{children}</>;
}
