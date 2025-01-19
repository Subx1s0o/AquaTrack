import { ReactNode, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { getUser } from '@/redux/auth/operations';
import { selectIsAuthenticated, selectIsLoading } from '@/redux/auth/selectors';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

import Loader from '../ui/Loader/Loader';

type PublicRouteProps = {
  children: ReactNode;
  redirectTo?: string;
};

export default function PublicRoute({
  children,
  redirectTo = '/',
}: PublicRouteProps) {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const loading = useAppSelector(selectIsLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isAuthenticated && !loading) {
      dispatch(getUser());
    }
  }, [dispatch, isAuthenticated, loading]);

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (isAuthenticated) {
    return <Navigate to={redirectTo} />;
  }

  return <>{children}</>;
}
