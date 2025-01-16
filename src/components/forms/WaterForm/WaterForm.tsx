import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import Input from '@/components/ui/Input';

import useWaterAmount from '@/hooks/useWaterAmount';

import css from './WaterForm.module.css';

type WaterFormProps = {
  amount: number;
  time: string;
  type: 'add' | 'edit';
};

const WaterForm = ({ amount, time, type }: WaterFormProps) => {
  const schema = yup.object().shape({
    water: yup
      .number()
      .required('Enter the amount of water')
      .min(50, 'The minimum value is 50 ml')
      .max(5000, 'The maximum value is 5 liters'),
    time: yup.string().required('Enter the time'),
  });

  const { waterAmount, handleIncrease, handleDecrease, setWaterAmount } =
    useWaterAmount(amount);

  const { handleSubmit, setValue, control } = useForm({
    defaultValues: {
      water: waterAmount,
      time,
    },
    resolver: yupResolver(schema),
  });

  const handleInputChange = (value: number) => {
    if (isNaN(value)) {
      setWaterAmount(0);
    } else if (value > 5000) {
      setWaterAmount(5000);
    } else {
      setWaterAmount(value);
    }
  };

  const onSubmit = (data: { water: number; time: string }) => {
    try {
      console.log(data);
      toast.success('Data saved successfully!');
    } catch (error) {
      console.log(error);
      toast.error('Failed to save data');
    }
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
            className={`md:text-md ${css.time}`}
            control={control}
            name="time"
            type="time"
            defaultValue={time}
            onChange={e => setValue('time', e.target.value)}
            labelClassName="md:text-md font-normal"
            label="Recording time:"
          />
        </div>
        <div className="mb-6 w-full">
          <Input
            className="md:text-md"
            control={control}
            value={waterAmount}
            name="water"
            onChange={e => handleInputChange(parseInt(e.target.value, 10) || 0)}
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
