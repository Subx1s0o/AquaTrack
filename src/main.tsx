import { PersistGate } from 'redux-persist/integration/react';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import SharedLayout from './SharedLayout';
import './index.css';
import { persistor, store } from './redux/store';
import routes from './routes';
import UserPanel from './components/user/userPanel';

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="mx-auto flex h-screen max-w-[375px] items-center p-4 font-poppins md:max-w-screen-md md:p-8 lg:max-w-screen-lg">
          <SharedLayout>
            <RouterProvider router={router} />;
          </SharedLayout>
          <ToastContainer />
        </div>
      </PersistGate>
      <UserPanel/>
    </Provider>
  </StrictMode>,
);
