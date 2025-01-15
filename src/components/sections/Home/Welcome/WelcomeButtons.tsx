import { Link } from 'react-router-dom';

import { useAppSelector } from '@/redux/hooks';
import { selectIsAuthenticated } from '@/redux/store/selectors';

export default function WelcomeButtons() {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  return (
    <div className="flex gap-[10px]">
      <Link
        to="/tracker"
        className="rounded-[30px] bg-green px-5 py-[14px] font-bold outline-none transition-colors hover:bg-green-selector focus-visible:bg-green-selector active:bg-grey active:text-grey-selector md:px-10 md:py-[18px] md:text-md"
      >
        Try tracker
      </Link>
      {!isAuthenticated && (
        <Link
          to="/signin"
          className="rounded-[30px] border border-darkGrey px-5 py-[14px] font-bold outline-none transition-colors hover:border-green hover:text-green focus-visible:border-green focus-visible:text-green active:border-grey-selector active:text-grey-selector md:px-10 md:py-[18px] md:text-md"
        >
          Sing in
        </Link>
      )}
    </div>
  );
}
