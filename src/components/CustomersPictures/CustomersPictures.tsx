export default function CustomersPictures() {
  return (
    <div className="absolute bottom-28 left-4 flex h-11 w-40 justify-center gap-1 rounded-[30px] bg-white px-4 py-[8px] shadow-sm md:bottom-24 md:left-8 md:h-[67px] md:w-60 lg:bottom-[132px]">
      <div className="relative flex space-x-4 md:space-x-7">
        <picture>
          <source
            srcSet="/images/Customers/customer-1.avif 1x, /images/Customers/customer-1@2x.avif 2x"
            type="image/avif"
          />
          <img
            src="/images/Customers/customer-1.avif"
            alt="customer-1"
            className="absolute z-[3] h-[28px] w-[26px] rounded-full md:size-[47px]"
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
            className="absolute z-[2] h-[28px] w-[26px] rounded-full md:size-[47px]"
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
            className="absolute z-[1] h-[28px] w-[26px] rounded-full md:size-[47px]"
          />
        </picture>
      </div>
      <span className="ml-6 w-[67px] break-words font-poppins text-sm font-bold text-darkGrey md:ml-12 md:w-[90px] md:text-ms">
        Our<span className="text-green"> happy </span>
        customers
      </span>
    </div>
  );
}
