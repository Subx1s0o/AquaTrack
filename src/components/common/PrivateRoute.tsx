import { ReactNode, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import Loader from '@/components/ui/Loader/Loader';

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
      dispatch(getUser());
    }
  }, [dispatch, isAuthenticated, loading]);

  if (loading) {
    return (
      <div className="flex size-full items-center justify-center">
        <Loader />
      </div>
    );
  }

  return isAuthenticated ? <>{children}</> : <Navigate to={redirectTo} />;
}
