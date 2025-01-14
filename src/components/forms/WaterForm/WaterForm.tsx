import { useState } from 'react';
import { useForm } from 'react-hook-form';

const WaterForm = () => {
  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const [waterAmount, setWaterAmount] = useState(50);

  const handleIncrease = () => {
    setWaterAmount(prev => (prev >= 5000 ? 5000 : prev + 50));
  };

  const handleDecrease = () => {
    setWaterAmount(prev => (prev >= 100 ? prev - 50 : 50));
  };

  const handleInputChange = e => {
    const value = parseInt(e.target.value, 10);
    if (isNaN(value)) {
      setWaterAmount(0);
    } else if (value >= 5000) {
      setWaterAmount(5000);
    } else {
      setWaterAmount(value);
    }
  };

  const { register, handleSubmit } = useForm({
    defaultValues: {
      time: getCurrentTime(),
      amount: 50,
    },
  });

  const onSubmit = () => {
    console.log('done');
  };

  return (
    <div className="font-poppins text-base md:text-md">
      <p className="mb-2">Amount of water:</p>
      <div className="mb-4 flex items-center gap-x-2">
        <button
          className="flex size-[40px] items-center justify-center rounded-[30px] border-[1.5px] border-darkGrey md:size-[43px]"
          type="button"
          onClick={handleDecrease}
        >
          -
        </button>
        <span className="flex max-h-[43px] items-center justify-center rounded-[30px] bg-darkGrey px-5 py-[11px] font-bold text-white md:min-w-[86px] md:text-ms">
          {waterAmount} ml
        </span>
        <button
          className="flex size-[40px] items-center justify-center rounded-[30px] border-[1.5px] border-darkGrey md:size-[43px]"
          type="button"
          onClick={handleIncrease}
        >
          +
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="mb-6 block">
          Recording time:
          <input
            type="time"
            className="mt-2 block h-[46px] w-[303px] appearance-none rounded-[15px] border border-[#2F2F2F26] bg-transparent pl-3.5 text-base md:h-14 md:w-[438px] md:pl-4 md:text-md"
            {...register('time')}
          />
        </label>

        <label className="mb-6 block text-md font-bold leading-5 text-darkGrey md:text-lg">
          Enter the value of the water used:
          <input
            className="mt-2 block h-[46px] w-[303px] rounded-[15px] border border-[#2F2F2F26] pl-3.5 text-base font-normal md:h-14 md:w-[438px] md:pl-4 md:text-md"
            type="text"
            {...register('amount')}
            value={waterAmount}
            onChange={handleInputChange}
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
