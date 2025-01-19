import { DayData } from 'types/WaterTypes';

import React from 'react';

import { selectDate } from '@/redux/date/selectors';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchDayData } from '@/redux/waterDayInfo/operations';
import { cn } from '@/utils/cn';
import { currentMonth, currentYear, todayDay } from '@/utils/dateHelpers';

interface CalendarItemProps {
  dayData: DayData | undefined;
  day: number;
  setSelectedItem: React.Dispatch<React.SetStateAction<number | null>>;
  selectedItem: number | null;
}

export default function CalendarItem({
  dayData,
  day,
  setSelectedItem,
  selectedItem,
}: CalendarItemProps) {
  const date = useAppSelector(selectDate);
  const dispatch = useAppDispatch();
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

  const handleClick = () => {
    setSelectedItem(day);
    if (dayData) {
      onDayClick(dayData.date);
    }
  };

  return (
    <li className="flex w-[28px] flex-col items-center gap-[6px] md:w-[38px] md:gap-1">
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
            'bg-darkGrey text-green': selectedItem === day,
          },
        )}
      >
        {day}
      </button>
      <p className="text-xs text-[#2F2F2F99] md:text-sm md:leading-[22.4px]">
        {dayData ? Math.round(dayData.percentage) : 0}%
      </p>
    </li>
  );
}
