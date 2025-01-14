import { PropsWithChildren } from 'react';

import AdvantagesPicture from '@/components/sections/Home/Advantages/AdvantagesPicture';
import Logo from '@/components/ui/Logo';

export default function AuthPage({ children }: PropsWithChildren) {
  return (
    <div className="grid size-full grid-rows-1 gap-4 lg:h-auto lg:grid-cols-2">
      <div className="relative flex w-full items-center justify-center rounded-[30px] bg-grey px-4">
        <Logo />

        {children}
      </div>
      <div className="hidden lg:block">
        <AdvantagesPicture />
      </div>
    </div>
  );
}
