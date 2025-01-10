const WaterForm = () => {
  return (
    <div className="font-poppins text-base">
      <p className="mb-2">Amount of water:</p>
      <div className="mb-4 flex items-center gap-x-2">
        <button
          className="flex size-[40px] items-center justify-center rounded-[30px] border-[1.5px] border-darkGrey"
          type="button"
        >
          -
        </button>
        <span className="flex items-center justify-center rounded-[30px] bg-darkGrey px-5 py-[11px] font-bold text-white">
          250 ml
        </span>
        <button
          className="flex size-[40px] items-center justify-center rounded-[30px] border-[1.5px] border-darkGrey"
          type="button"
        >
          +
        </button>
      </div>
      <form action="">
        <label className="mb-6 block">
          Recording time:
          <input
            className="mt-2 block h-[46px] w-[303px] rounded-[15px] border border-[#2F2F2F26] pl-3.5"
            type="text"
          />
        </label>

        <label className="mb-6 block text-md font-bold leading-5 text-darkGrey">
          Enter the value of the water used:
          <input
            className="mt-2 block h-[46px] w-[303px] rounded-[15px] border border-[#2F2F2F26] pl-3.5"
            type="text"
          />
        </label>

        <button
          className="h-[46px] min-w-[116px] rounded-[30px] bg-green font-bold text-darkGrey"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default WaterForm;
