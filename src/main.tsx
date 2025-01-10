import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import WaterModal from './components/modals/WaterModal/WaterModal';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Home</div>,
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
    <div className="mx-auto max-w-[375px] md:max-w-screen-md lg:max-w-screen-lg">
      <RouterProvider router={router} />
      <WaterModal />
      <ToastContainer />
    </div>
  </StrictMode>,
);
