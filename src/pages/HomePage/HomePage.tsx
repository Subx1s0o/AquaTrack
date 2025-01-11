import React from 'react';

import Logo from '@/components/Logo/Logo';
import AdvantagesSection from '@/components/sections/AdvantagesSection/AdvantagesSection';
import WelcomeSection from '@/components/sections/WelcomeSection/WelcomeSection';

export default function HomePage() {
  return (
    <div className="grid h-full grid-rows-2 p-4">
      <Logo />
      <WelcomeSection />
      <AdvantagesSection />
    </div>
  );
}
