import { Link } from 'react-router-dom';

import SignInForm from '@/components/forms/SignInForm/SignInForm';

export default function SignInContent() {
  return (
    <div className="w-full md:w-[436px]">
      <h2 className="mb-8 text-4xl font-bold text-darkGrey md:text-5xl">
        Sign In
      </h2>
      <SignInForm />
      <div className="mt-4 text-center">
        <p className="text-base text-black/50 md:text-md">
          Don&apos;t have an account?{' '}
          <Link
            to="/sign-up"
            className="font-bold text-[#2f2f2f] underline hover:no-underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
