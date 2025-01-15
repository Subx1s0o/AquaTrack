import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Input from '@/components/ui/Input';

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

  const { handleSubmit, control } = useForm({
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
          className="flex size-[40px] items-center justify-center rounded-[30px] border-[1.5px] border-darkGrey outline-none transition-opacity md:size-[43px] lg:hover:opacity-70 lg:focus-visible:opacity-70"
          type="button"
          onClick={handleDecrease}
        >
          -
        </button>
        <span className="flex max-h-[43px] items-center justify-center rounded-[30px] bg-darkGrey px-5 py-[11px] font-bold text-white md:min-w-[86px] md:text-ms">
          {waterAmount} ml
        </span>
        <button
          className="flex size-[40px] items-center justify-center rounded-[30px] border-[1.5px] border-darkGrey outline-none transition-opacity md:size-[43px] lg:hover:opacity-70 lg:focus-visible:opacity-70"
          type="button"
          onClick={handleIncrease}
        >
          +
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6 w-full">
          <Input
            className="md:text-md"
            control={control}
            name="time"
            labelClassName="md:text-md font-normal"
            label="Recording time:"
          />
        </div>
        <div className="mb-6 w-full">
          <Input
            className="md:text-md"
            control={control}
            value={waterAmount}
            name="amount"
            onChange={handleInputChange}
            labelClassName="text-md md:text-lg text-darkGrey"
            label="Enter the value of the water used:"
          />
        </div>

        <button
          className="h-[46px] min-w-[116px] rounded-[30px] bg-green font-bold text-darkGrey outline-none transition-colors md:h-[60px] md:min-w-[141px] lg:hover:bg-green-selector lg:focus-visible:bg-green-selector"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default WaterForm;
