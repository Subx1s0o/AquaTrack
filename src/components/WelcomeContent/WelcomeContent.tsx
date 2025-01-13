import { Link } from 'react-router-dom';

export default function WelcomeContent() {
  return (
    <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-grey md:left-[64px]">
      <p className="mb-8 text-base text-darkGrey md:text-md">
        Record daily water intake and track
      </p>
      <h1 className="mb-8 font-poppins text-5xl font-bold text-darkGrey md:mb-8 md:w-[547px] md:break-words md:text-7xl lg:text-8xl">
        Water consumption tracker
      </h1>
      <div className="flex gap-[10px]">
        <Link
          to="/signup"
          className="flex h-[46px] w-[116px] items-center justify-center rounded-[30px] border border-transparent bg-green font-bold text-black hover:bg-green focus:bg-gray-100 focus:text-gray-200 md:h-[60px] md:w-[169px] md:text-md lg:px-8 lg:py-3"
        >
          Try tracker
        </Link>
        <Link
          to="/sigin"
          className="flex h-[46px] w-[104px] items-center justify-center rounded-[30px] border border-darkGrey bg-grey font-bold text-black hover:border-green hover:bg-grey hover:text-green focus:border-darkGrey focus:text-gray-200 md:h-[60px] md:w-[135px] md:text-md lg:px-8 lg:py-3"
        >
          Sing in
        </Link>
      </div>
    </div>
  );
}
