import { Link } from 'react-router-dom';

export default function WelcomeButtons() {
  return (
    <div className="flex gap-[10px]">
      <Link
        to="/sign-up"
        className="hover:bg-green-selector active:text-grey-selector focus-visible:bg-green-selector rounded-[30px] bg-green px-5 py-[14px] font-bold outline-none transition-colors active:bg-grey md:px-10 md:py-[18px] md:text-md"
      >
        Try tracker
      </Link>
      <Link
        to="/sign-in"
        className="active:border-grey-selector active:text-grey-selector rounded-[30px] border border-darkGrey px-5 py-[14px] font-bold outline-none transition-colors hover:border-green hover:text-green focus-visible:border-green focus-visible:text-green md:px-10 md:py-[18px] md:text-md"
      >
        Sing in
      </Link>
    </div>
  );
}
