import WelcomeButtons from './WelcomeButtons';
import WelcomeText from './WelcomeText';

export default function WelcomeContent() {
  return (
    <div className="absolute left-4 top-1/2 -translate-y-1/2 md:left-[64px]">
      <WelcomeText />
      <WelcomeButtons />
    </div>
  );
}
