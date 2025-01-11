import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import MonthInfo from './components/sections/TrackerPage/Calendar/MonthInfo';
import './index.css';
import { store } from './redux/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        Home
        <MonthInfo />
      </div>
    ),
  },
  {
    path: '/about',
    element: <div>About</div>,
  },
  {
    path: '*',
    element: <div>404</div>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <div className="mx-auto max-w-[375px] md:max-w-screen-md lg:max-w-screen-lg">
        <RouterProvider router={router} />
        <ToastContainer />
      </div>
    </Provider>
  </StrictMode>,
);
