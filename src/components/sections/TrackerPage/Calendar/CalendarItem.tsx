import { DayData } from 'types/WaterTypes';

import { useDispatch, useSelector } from 'react-redux';

import { selectDate } from '@/redux/date/selectors';
import { fetchDayData } from '@/redux/waterDayInfo/operations';
import { cn } from '@/utils/cn';
import { currentMonth, currentYear, todayDay } from '@/utils/dateHelpers';

interface CalendarItemProps {
  dayData: DayData | undefined;
  day: number;
}

const CalendarItem = ({ dayData, day }: CalendarItemProps) => {
  const date = useSelector(selectDate);
  const dispatch = useDispatch();

  const chosenDate = new Date(date);
  const chosenYear = chosenDate.getFullYear();
  const chosenMonth = chosenDate.getMonth();
  const isFutureDay =
    chosenYear > currentYear ||
    (chosenYear === currentYear && chosenMonth > currentMonth) ||
    (chosenYear === currentYear &&
      chosenMonth === currentMonth &&
      day > todayDay);

  const onDayClick = (clickedDate: string | undefined) => {
    if (!isFutureDay && clickedDate) {
      dispatch(fetchDayData(clickedDate));
    }
  };

  // Add null check for dayData
  const handleClick = () => {
    if (dayData) {
      onDayClick(dayData.date);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        type="button"
        disabled={isFutureDay}
        className={cn(
          'flex size-7 items-center justify-center rounded-full text-base font-bold transition-colors md:size-[38px] md:text-md',
          {
            'bg-[#323F4733] hover:bg-darkGrey hover:text-green focus:bg-darkGrey focus:text-green':
              !isFutureDay,
            'bg-gray-300 text-gray-500': isFutureDay,
            'bg-white': dayData && Math.round(dayData.percentage) >= 100,
          },
        )}
      >
        {day}
      </button>
      <p className="text-xs text-[#2F2F2F99] md:text-sm md:leading-[22.4px]">
        {dayData ? Math.round(dayData.percentage) : 0}%
      </p>
    </>
  );
};
export default CalendarItem;
