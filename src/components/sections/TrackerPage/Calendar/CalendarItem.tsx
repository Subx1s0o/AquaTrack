import { DayData } from 'types/WaterTypes';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectDate } from '@/redux/date/selectors';
import { fetchDayData } from '@/redux/waterDayInfo/operations';
import { cn } from '@/utils/cn';

interface CalendarItemProps {
  dayData: DayData | undefined;
  day: number;
}

const CalendarItem = ({ dayData, day }: CalendarItemProps) => {
  const today = new Date();
  const todayDay: number = today.getDate();
  const currentYear: number = today.getFullYear();
  const currentMonth: number = today.getMonth();
  const date = useSelector(selectDate);
  const chosenDate = new Date(date);
  const chosenYear = chosenDate.getFullYear();
  const chosenMonth = chosenDate.getMonth();
  const isFutureDay =
    chosenYear > currentYear ||
    (chosenYear === currentYear && chosenMonth > currentMonth) ||
    (chosenYear === currentYear &&
      chosenMonth === currentMonth &&
      day > todayDay);
  const dispatch = useDispatch();
  const onDayClick = () => {
    if (!isFutureDay) {
      const dateRequested = date.slice(0, 10);
      console.log(dateRequested);
      dispatch(fetchDayData(dateRequested));
    }
  };
  return (
    <>
      <button
        onClick={onDayClick}
        type="button"
        disabled={isFutureDay}
        className={cn(
          'flex size-7 items-center justify-center rounded-full text-base font-bold transition-colors md:size-[38px] md:text-md',
          {
            'bg-[#323F4733] hover:bg-darkGrey hover:text-green focus:bg-darkGrey focus:text-green':
              !isFutureDay,
            'bg-gray-300 text-gray-500': isFutureDay,
            'bg-white': dayData && dayData.percentage >= 100,
          },
        )}
      >
        {day}
      </button>
      <p className="text-xs text-[#2F2F2F99] md:text-sm md:leading-[22.4px]">
        {dayData ? dayData.percentage : 0}%
      </p>
    </>
  );
};
export default CalendarItem;
