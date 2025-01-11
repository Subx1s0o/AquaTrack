const WaterForm = () => {
  return (
    <div className="font-poppins text-base md:text-md">
      <p className="mb-2">Amount of water:</p>
      <div className="mb-4 flex items-center gap-x-2">
        <button
          className="flex size-[40px] items-center justify-center rounded-[30px] border-[1.5px] border-darkGrey md:size-[43px]"
          type="button"
        >
          -
        </button>
        <span className="flex max-h-[43px] items-center justify-center rounded-[30px] bg-darkGrey px-5 py-[11px] font-bold text-white md:min-w-[86px] md:text-ms">
          50 ml
        </span>
        <button
          className="flex size-[40px] items-center justify-center rounded-[30px] border-[1.5px] border-darkGrey md:size-[43px]"
          type="button"
        >
          +
        </button>
      </div>
      <form action="">
        <label className="mb-6 block">
          Recording time:
          <input
            className="mt-2 block h-[46px] w-[303px] rounded-[15px] border border-[#2F2F2F26] pl-3.5 md:h-14 md:w-[438px] md:pl-4"
            type="text"
          />
        </label>

        <label className="mb-6 block text-md font-bold leading-5 text-darkGrey md:text-lg">
          Enter the value of the water used:
          <input
            className="mt-2 block h-[46px] w-[303px] rounded-[15px] border border-[#2F2F2F26] pl-3.5 md:h-14 md:w-[438px] md:pl-4"
            type="text"
          />
        </label>

        <button
          className="h-[46px] min-w-[116px] rounded-[30px] bg-green font-bold text-darkGrey md:h-[60px] md:min-w-[141px]"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default WaterForm;
