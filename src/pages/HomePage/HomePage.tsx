import Logo from '@/components/Logo/Logo';
import AdvantagesSection from '@/components/sections/AdvantagesSection/AdvantagesSection';
import WelcomeSection from '@/components/sections/WelcomeSection/WelcomeSection';

export default function HomePage() {
  return (
    <div className="grid h-full grid-rows-1 gap-4 lg:h-auto lg:grid-cols-2">
      <div className="relative">
        <Logo />

        <WelcomeSection />
      </div>
      <AdvantagesSection />
    </div>
  );
}
