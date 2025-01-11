export default function AdvantagesSection() {
  return (
    <div>
      <section
        className="h-full rounded-2xl bg-cover bg-center p-4"
        style={{
          backgroundImage:
            "url('/public/images/Welcome/welcome-desktop@2x.avif')",
        }}
      >
        <div className="ml-1 mt-[190px] flex h-[40px] w-[160px] items-center justify-center space-x-2 rounded-full bg-white px-2 py-1 shadow-md">
          <div className="flex -space-x-3">
            <img
              src="/public/images/Customers/customer-1@2x.avif"
              alt="customer-1"
              className="size-8 rounded-full border-2 border-white"
            />
            <img
              src="public/images/Customers/customer-2@2x.avif"
              alt="customer-2"
              className="size-8 rounded-full border-2 border-white"
            />
            <img
              src="public/images/Customers/customer-3@2x.avif"
              alt="customer-3"
              className="size-8 rounded-full border-2 border-white"
            />
          </div>
          <span className="mb-[10px] h-[28px] w-[66.5px] break-words font-poppins text-[12px] font-bold text-darkGrey">
            Our<span className="text-green">happy</span>
            costomers
          </span>
        </div>
        <div className="absolute left-[195px] top-[720px] flex w-[168px] flex-wrap items-center space-x-1 space-y-1 md:flex-row md:space-x-4 md:space-y-0">
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
    </div>
  );
}
