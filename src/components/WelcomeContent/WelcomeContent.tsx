import { PropsWithChildren } from 'react';

import HomeWelcomeContent from '../HomeWelcomeContent/HomeWelcomeContent';

export default function WelcomeContent({ children }: PropsWithChildren) {
  return (
    <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-grey md:left-[64px]">
      {children}
      <HomeWelcomeContent />
    </div>
  );
}
