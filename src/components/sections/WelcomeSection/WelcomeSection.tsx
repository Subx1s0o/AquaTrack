import { PropsWithChildren } from 'react';

import WelcomeContent from '@/components/WelcomeContent/WelcomeContent';

export default function WelcomeSection({ children }: PropsWithChildren) {
  return (
    <section className="relative flex h-full rounded-[30px] bg-grey p-4">
      {children}
      <WelcomeContent />
    </section>
  );
}
