import { Outlet } from 'react-router-dom';

export default function SharedHomeLayout() {
  return (
    <div className="grid w-full grid-rows-1 gap-4 lg:h-auto lg:grid-cols-2">
      <Outlet />
    </div>
  );
}
