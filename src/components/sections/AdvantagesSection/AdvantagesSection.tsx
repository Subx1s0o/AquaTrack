export default function AdvantagesSection() {
  return (
    <section className="relative size-full rounded-2xl">
      <picture className="size-full">
        <source
          srcSet="/images/Welcome/welcome-mobile.avif 1x, /images/Welcome/welcome-mobile@2x.avif 2x"
          media="(max-width: 767px)"
          type="image/avif"
        />
        <source
          srcSet="/images/Welcome/welcome-tablet.avif 1x, /images/Welcome/welcome-tablet@2x.avif 2x"
          media="(min-width: 768px) and (max-width: 1439px)"
          type="image/avif"
        />
        <source
          srcSet="/images/Welcome/welcome-desktop.avif 1x, /images/Welcome/welcome-desktop@2x.avif 2x"
          media="(min-width: 1440px)"
          type="image/avif"
        />
        <img src="/images/Welcome/welcome-mobile.avif" alt="Welcome section" />
      </picture>
      <div className="ml-1 mt-[190px] flex h-[40px] w-[160px] items-center justify-center space-x-2 rounded-full bg-white px-2 py-1 shadow-md">
        <div className="flex -space-x-3">
          <picture>
            <source
              srcSet="/images/Customers/customer-1.avif 1x, /images/Customers/customer-1@2x.avif 2x"
              type="image/avif"
            />
            <img
              src="/images/Customers/customer-1.avif"
              alt="customer-1"
              className="size-8 rounded-full border-2 border-white"
            />
          </picture>
          <picture>
            <source
              srcSet="/images/Customers/customer-2.avif 1x, /images/Customers/customer-2@2x.avif 2x"
              type="image/avif"
            />
            <img
              src="/images/Customers/customer-2.avif"
              alt="customer-2"
              className="size-8 rounded-full border-2 border-white"
            />
          </picture>
          <picture>
            <source
              srcSet="/images/Customers/customer-3.avif 1x, /images/Customers/customer-3@2x.avif 2x"
              type="image/avif"
            />
            <img
              src="/images/Customers/customer-3.avif"
              alt="customer-3"
              className="size-8 rounded-full border-2 border-white"
            />
          </picture>
        </div>
        ;
        <span className="mb-[10px] h-[28px] w-[66.5px] break-words font-poppins text-[12px] font-bold text-darkGrey">
          Our<span className="text-green">happy</span>
          costomers
        </span>
      </div>
      <div className="flex w-[168px] flex-wrap items-center space-x-1 space-y-1 md:flex-row md:space-x-4 md:space-y-0">
        <button className="h-[26px] w-[81px] items-center rounded-full bg-darkGrey px-3 py-2 text-[8px] font-medium text-white hover:bg-grey">
          <span className="absolute left-2 top-4 size-2 -translate-y-1 rounded-full bg-green"></span>
          Habit drive
        </button>
        <button className="flex h-[26px] w-[83px] items-center justify-center rounded-full bg-green px-3 py-2 text-[8px] font-medium text-black hover:bg-green">
          View statistics
        </button>
        <button className="h-[26px] w-[108px] justify-center rounded-full bg-white px-3 py-2 text-[8px] font-medium text-gray-900 shadow-md hover:bg-gray-100">
          Personal rate setting
        </button>
      </div>
    </section>
  );
}
