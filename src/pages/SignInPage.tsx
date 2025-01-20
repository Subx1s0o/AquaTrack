import { Link } from 'react-router-dom';

import SignInForm from '@/components/forms/SignInForm/SignInForm';
import AdvantagesPicture from '@/components/sections/Home/Advantages/AdvantagesPicture';
import Logo from '@/components/ui/Logo';

export default function SignInPage() {
  return (
    <>
      <div className="relative flex min-h-[780px] w-full items-center justify-center rounded-[30px] bg-grey px-4 md:min-h-[960px] lg:min-h-[736px]">
        <Logo />
        <div className="w-full md:w-[436px]">
          <h2 className="mb-8 text-4xl font-bold text-darkGrey md:text-5xl">
            Sign In
          </h2>
          <SignInForm />
          <div className="mt-4 text-center">
            <p className="text-base text-black/50 md:text-md">
              Don&apos;t have an account?{' '}
              <Link
                to="/signup"
                className="font-bold text-[#2f2f2f] underline hover:no-underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <AdvantagesPicture />
      </div>
    </>
  );
}
