import Cookies from 'js-cookie';

import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectIsAuthenticated } from '@/redux/store/selectors';

import { store } from './redux/store';
import { getUser } from './redux/store/operations';
import routes from './routes';

const AppContent = () => {
  const dispatch = useAppDispatch();
  const accessToken = Cookies.get('accessToken');
  const refreshToken = Cookies.get('refreshToken');
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  useEffect(() => {
    if (accessToken && refreshToken && !isAuthenticated) {
      dispatch(getUser());
    }
  }, [accessToken, refreshToken, isAuthenticated, dispatch]);

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}
