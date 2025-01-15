import { Link } from 'react-router-dom';

import SignUpForm from '@/components/forms/SignUpForm/SignUpForm';
import AdvantagesPicture from '@/components/sections/Home/Advantages/AdvantagesPicture';
import Logo from '@/components/ui/Logo';

export default function SignUpPage() {
  return (
    <>
      <div className="relative flex w-full items-center justify-center rounded-[30px] bg-grey px-4">
        <Logo />
        <div className="w-full md:w-[436px]">
          <h2 className="mb-8 text-4xl font-bold text-darkGrey md:text-5xl">
            Sign Up
          </h2>
          <SignUpForm />
          <div className="mt-4 text-center">
            <p className="text-base text-black/50 md:text-md">
              Already have an account?{' '}
              <Link
                to="/signin"
                className="font-bold text-[#2f2f2f] underline hover:no-underline"
              >
                Sign In
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
