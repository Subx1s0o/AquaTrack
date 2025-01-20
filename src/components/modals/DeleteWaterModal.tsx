import { toast } from 'react-toastify';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  deleteWaterData,
  fetchMonthData,
  fetchTodayWater,
} from '@/redux/water/operations';
import { selectWaterDailyCurrentDate } from '@/redux/water/selectors';

interface DeleteWaterModalProps {
  onClose: () => void;
  waterId: string;
}

export const DeleteWaterModal = ({
  onClose,
  waterId,
}: DeleteWaterModalProps) => {
  const dispatch = useAppDispatch();
  const selectedDate = useAppSelector(selectWaterDailyCurrentDate);
  const date = selectedDate.split('T')[0];
  const handleDelete = async () => {
    try {
      const result = await dispatch(deleteWaterData(waterId)).unwrap();

      if (result) {
        await dispatch(fetchMonthData(date));
      }
      const today = new Date().toISOString().split('T')[0];
      if (date === today) {
        await dispatch(fetchTodayWater());
      }

      onClose();
      toast.success('Water deleted successfully!');
    } catch (error) {
      toast.error(`${error}. Please try again.`);
    } finally {
      onClose();
    }
  };

  return (
    <div className={'text-center font-poppins text-darkGrey'}>
      <h2 className={'mb-4 text-xl font-bold md:mb-6 md:text-3xl'}>
        Delete entry
      </h2>

      <p className={'mb-7 text-base font-normal md:mb-6 md:text-lg'}>
        Are you sure you want to delete the entry?
      </p>

      <div
        className={
          'flex flex-col gap-[9px] md:flex-row md:justify-center md:gap-2.5'
        }
      >
        <button
          type="button"
          className={
            'rounded-[30px] border-none bg-green py-3.5 text-base font-bold transition-colors duration-300 ease-in-out hover:bg-[#87d28d] focus:bg-[#87d28d] focus:outline-none md:px-[59px] md:py-[18px] md:text-md'
          }
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          type="button"
          className={
            'rounded-[30px] border-none bg-grey py-3.5 text-base font-bold text-darkGrey/30 transition-colors duration-300 ease-in-out hover:text-darkGrey focus:text-darkGrey focus:outline-none md:px-[59px] md:py-[18px] md:text-md'
          }
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
