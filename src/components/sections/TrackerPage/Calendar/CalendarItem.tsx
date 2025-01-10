import { DayData } from 'types/WaterTypes';

import React from 'react';

import { cn } from '@/utils/cn';

interface CalendarItemProps {
  dayData: DayData | undefined;
  day: number;
}

const CalendarItem: React.FC<CalendarItemProps> = ({ dayData, day }) => {
  const todayDay: number = new Date().getDate();

  const onDayClick = () => {
    console.log(dayData || { day, date: null, percentage: 0 });
  };

  return (
    <>
      {todayDay === day ? (
        <button
          onClick={onDayClick}
          type="button"
          className={cn(
            'flex size-7 items-center justify-center rounded-full border border-black bg-[#323F4733] text-base font-bold transition-colors hover:bg-darkGrey hover:text-green focus:bg-darkGrey focus:text-green md:size-[38px] md:text-md',
            {
              'bg-white': dayData && dayData.percentage >= 100,
            },
          )}
        >
          {day}
        </button>
      ) : (
        <button
          onClick={onDayClick}
          type="button"
          className={cn(
            'flex size-7 items-center justify-center rounded-full bg-[#323F4733] text-base font-bold transition-colors hover:bg-darkGrey hover:text-green focus:bg-darkGrey focus:text-green md:size-[38px] md:text-md',
            {
              'bg-white': dayData && dayData.percentage >= 100,
              'border-red border': todayDay === day,
            },
          )}
        >
          {day}
        </button>
      )}
      {dayData ? (
        <p className="text-xs text-[#2F2F2F99] md:text-sm md:leading-[22.4px]">{`${dayData.percentage}%`}</p>
      ) : (
        <p className="text-xs text-[#2F2F2F99] md:text-sm md:leading-[22.4px]">
          0%
        </p>
      )}
    </>
  );
};

export default CalendarItem;
