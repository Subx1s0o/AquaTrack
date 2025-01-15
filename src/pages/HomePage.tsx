import AdvantagesPicture from '@/components/sections/Home/Advantages/AdvantagesPicture';
import WelcomeButtons from '@/components/sections/Home/Welcome/WelcomeButtons';
import WelcomeText from '@/components/sections/Home/Welcome/WelcomeText';
import Logo from '@/components/ui/Logo';

export default function HomePage() {
  return (
    <>
      <div className="relative flex w-full items-center justify-center rounded-[30px] bg-grey px-4">
        <Logo />

        <div className="flex flex-col">
          <WelcomeText />
          <WelcomeButtons />
        </div>
      </div>
      <AdvantagesPicture />
    </>
  );
}
