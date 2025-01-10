import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../Logo/Logo';

const WelcomeSection: React.FC = () => {
  return (
    <div className="container ms-auto p-4">
      <section className="h-[411px] w-[320px] flex-col space-y-11 rounded-2xl bg-gray-100 p-4 md:h-[498px] md:w-[704px] md:space-y-14 lg:h-[736px] lg:w-[672px] lg:space-y-12">
        <Logo />
        <div className="md:ml-[64px]">
          <p className="mt-[74px] text-base text-gray-700 lg:mt-[188px]">
            Record daily water intake and track
          </p>
          <h1 className="break-words text-4xl font-bold text-gray-700 md:w-[547px] md:text-7xl">
            Water consumption tracker
          </h1>
        </div>
        <div className="mb-4 space-x-4 md:ml-[64px]">
          <Link
            to="/signup"
            className="bg-green hover:bg-green rounded-3xl border border-transparent px-6 py-3 text-sm font-semibold text-black focus:bg-gray-100 focus:text-gray-200 md:px-9 md:py-4 lg:px-8 lg:py-3"
          >
            Try tracker
          </Link>
          <Link
            to="/sigin"
            className="hover:border-green hover:text-green rounded-3xl border border-gray-900 bg-gray-100 px-6 py-3 font-semibold text-black hover:bg-gray-100 focus:border-gray-200 focus:text-gray-200 md:px-9 md:py-4 lg:px-8 lg:py-3"
          >
            Sing in
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WelcomeSection;
