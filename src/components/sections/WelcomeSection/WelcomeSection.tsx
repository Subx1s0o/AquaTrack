import React from 'react';
import { Link } from 'react-router-dom';

export default function WelcomeSection() {
  return (
    <div className="rounded-2xl bg-grey">
      <section className="relative">
        <div className="absolute left-1 top-1/2 -translate-y-1/2 space-x-4 bg-grey">
          <p className="mb-[16px] text-base text-darkGrey">
            Record daily water intake and track
          </p>
          <h1 className="mb-[32px] font-poppins text-5xl font-bold text-darkGrey md:text-7xl">
            Water consumption tracker
          </h1>

          <Link
            to="/signup"
            className="rounded-3xl border border-transparent bg-green px-6 py-3 font-semibold text-black hover:bg-green focus:bg-gray-100 focus:text-gray-200 md:px-9 md:py-4 lg:px-8 lg:py-3"
          >
            Try tracker
          </Link>
          <Link
            to="/sigin"
            className="rounded-3xl border border-darkGrey bg-grey px-6 py-3 font-semibold text-black hover:border-green hover:bg-grey hover:text-green focus:border-darkGrey focus:text-gray-200 md:px-9 md:py-4 lg:px-8 lg:py-3"
          >
            Sing in
          </Link>
        </div>
      </section>
    </div>
  );
}
