import { PropsWithChildren } from 'react';

import AdvantagesPicture from '@/components/sections/Home/Advantages/AdvantagesPicture';
import Logo from '@/components/ui/Logo';

export default function HomePage({ children }: PropsWithChildren) {
  return (
    <div className="grid h-full grid-rows-1 gap-4 lg:h-auto lg:grid-cols-2">
      <div className="relative rounded-[30px] bg-grey">
        <Logo />

        {children}
      </div>
      <AdvantagesPicture />
    </div>
  );
}
