import AdvantagesPicture from '@/components/sections/Home/Advantages/AdvantagesPicture';
import WelcomeButtons from '@/components/sections/Home/Welcome/WelcomeButtons';
import WelcomeText from '@/components/sections/Home/Welcome/WelcomeText';
import Logo from '@/components/ui/Logo';

export default function HomePage() {
  return (
    <>
      <div className="relative flex min-h-[411px] w-full items-end justify-center rounded-[30px] bg-grey px-4 pb-[67px] md:min-h-[498px] md:px-8 md:pb-[50px] lg:min-h-full lg:items-center lg:pb-0">
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
