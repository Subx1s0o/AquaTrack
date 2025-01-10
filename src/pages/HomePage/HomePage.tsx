import React from 'react';

import AdvantagesSection from '../../components/sections/AdvantagesSection/AdvantagesSection';
import WelcomeSection from '../../components/sections/WelcomeSection/WelcomeSection';

const HomePage: React.FC = () => {
  return (
    <div className="">
      <WelcomeSection />
      <AdvantagesSection />
    </div>
  );
};

export default HomePage;
