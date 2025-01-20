import { Outlet } from 'react-router-dom';

export default function SharedHomeLayout() {
  return (
    <div className="mx-auto flex h-screen min-h-[812px] max-w-[375px] items-center p-4 font-poppins md:min-h-[1024px] md:max-w-screen-md md:p-8 lg:max-w-screen-lg">
      <div className="grid w-full grid-rows-1 gap-4 lg:h-auto lg:grid-cols-2">
        <Outlet />
      </div>
    </div>
  );
}
