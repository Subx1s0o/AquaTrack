import { yupResolver } from '@hookform/resolvers/yup';

import { useForm } from 'react-hook-form';

import Icon from '@/components/ui/Icon';
import Input from '@/components/ui/Input';

import useWaterAmount from '@/hooks/useWaterAmount';

import { selectUser } from '@/redux/auth/selectors';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  addWaterData,
  fetchMonthData,
  fetchTodayWater,
  updateWaterData,
} from '@/redux/water/operations';
import { selectWaterDailyCurrentDate } from '@/redux/water/selectors';
import { showToast } from '@/utils/toast';

import css from './WaterForm.module.css';
import { WaterFormValues, waterFormSchema } from './waterFormSchema';

type WaterFormProps = {
  waterId?: string;
  amount: number;
  time: string;
  isToday?: boolean;
  type: 'add' | 'edit';
  onClose: () => void;
};

export default function WaterForm({
  waterId,
  amount,
  time,
  type,
  onClose,
  isToday,
}: WaterFormProps) {
  const {
    waterAmount,
    handleIncrease,
    handleDecrease,
    setWaterAmount,
    MAX_VALUE,
  } = useWaterAmount(amount, (name: 'water' | 'time', value: number) =>
    setValue(name, value),
  );

  const dispatch = useAppDispatch();

  const selectedDate = useAppSelector(selectWaterDailyCurrentDate);
  const date = selectedDate.split('T')[0];
  const dailyNorm = useAppSelector(selectUser)?.dailyNorm;
  const { handleSubmit, setValue, control } = useForm<WaterFormValues>({
    resolver: yupResolver(waterFormSchema),
  });
  const todayDate = new Date();
  const formattedDate = todayDate.toISOString().split('T')[0];

  function handleInputChange(value: number) {
    if (value > MAX_VALUE) {
      setWaterAmount(MAX_VALUE);
      setValue('water', MAX_VALUE);
    } else {
      setWaterAmount(value);
      setValue('water', value);
    }
  }

  async function onSubmit(data: WaterFormValues) {
    try {
      const operation = type === 'add' ? addWaterData : updateWaterData;

      const actionPayload =
        type === 'add'
          ? {
              amount: data.water,
              time: data.time,
              date: isToday ? formattedDate : date,
              dailyNorm: dailyNorm,
            }
          : { waterId: waterId!, amount: data.water, time: data.time };

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const result = await dispatch(operation(actionPayload)).unwrap();

      if (result) {
        await dispatch(fetchMonthData(date));
      }
      const today = new Date().toISOString().split('T')[0];
      if (date === today) {
        await dispatch(fetchTodayWater());
      }

      onClose();
      showToast('success', 'Water saved successfully!');
    } catch {
      showToast('error', 'Error while saving water.');
    }
  }

  return (
    <div className="font-poppins text-base md:text-md">
      <p className="mb-2">Amount of water:</p>
      <div className="mb-4 flex items-center gap-x-2">
        <button
          className="flex size-10 items-center justify-center rounded-[30px] border-[1.5px] border-darkGrey outline-none transition-opacity md:size-[43px] lg:hover:opacity-70 lg:focus-visible:opacity-70"
          type="button"
          onClick={handleDecrease}
        >
          <Icon id="icon-minus" className="stroke-darkGrey" w={18} h={2} />
        </button>
        <span className="flex max-h-[43px] items-center justify-center rounded-[30px] bg-darkGrey px-5 py-[11px] font-bold text-white md:min-w-[86px] md:text-ms">
          {waterAmount} ml
        </span>
        <button
          className="flex size-10 items-center justify-center rounded-[30px] border-[1.5px] border-darkGrey outline-none transition-opacity md:size-[43px] lg:hover:opacity-70 lg:focus-visible:opacity-70"
          type="button"
          onClick={handleIncrease}
        >
          <Icon id="icon-plus" className="stroke-darkGrey" w={18} h={18} />
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
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
        <div className="mb-6">
          <Input
            className="md:text-md"
            control={control}
            value={waterAmount}
            name="water"
            onChange={e => {
              const value = parseInt(e.target.value, 10) || 0;
              handleInputChange(value);
            }}
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
}
