import Cookies from 'js-cookie';

import { ReactNode, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { getUser } from '@/redux/auth/operations';
import { selectIsAuthenticated, selectIsLoading } from '@/redux/auth/selectors';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

interface PrivateRouteProps {
  children: ReactNode;
  redirectTo: string;
}

export default function PrivateRoute({
  children,
  redirectTo,
}: PrivateRouteProps) {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const loading = useAppSelector(selectIsLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isAuthenticated && !loading) {
      const token = Cookies.get('accessToken');
      if (token) {
        dispatch(getUser());
      }
    }
  }, [dispatch, isAuthenticated, loading]);

  return isAuthenticated ? <>{children}</> : <Navigate to={redirectTo} />;
}
