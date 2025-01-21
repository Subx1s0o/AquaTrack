import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Loader from '@/components/ui/Loader/Loader';

import { google } from '@/redux/auth/operations';
import { selectIsAuthenticated, selectIsLoading } from '@/redux/auth/selectors';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

export default function GooglePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const query = new URLSearchParams(location.search);
  const code = query.get('code');
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    const authenticateUser = async () => {
      try {
        if (isAuthenticated) {
          navigate('/tracker');
        } else if (!code) {
          navigate('/signup');
        } else {
          await dispatch(google({ code }));

          navigate('/tracker');
        }
      } catch {
        navigate('/signup');
      }
    };

    authenticateUser();
  }, [code, isAuthenticated, navigate, dispatch]);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader className="!text-6xl lg:!text-7xl" />
      </div>
    );
  }

  return <div>GooglePage</div>;
}
