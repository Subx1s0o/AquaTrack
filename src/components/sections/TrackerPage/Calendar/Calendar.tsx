import { DayData, WaterMonthData } from 'types/WaterTypes';

import React from 'react';
import { useSelector } from 'react-redux';

import { selectDate } from '@/redux/date/selectors';
import { selectMonthWater } from '@/redux/waterMonthInfo/selectors';
import { dateHelpers } from '@/utils/dateHelpers';

import CalendarItem from './CalendarItem';

const Calendar = () => {
  const date: string = useSelector(selectDate);
  const waterDataApi: WaterMonthData[] = useSelector(selectMonthWater);

  const daysArray = Array.from(
    { length: dateHelpers.getMonthDays(date) },
    (_, i) => i + 1,
  );
  // Function to find data for a specific date
  const findDayData = (day: number): DayData | undefined => {
    const dateString = dateHelpers.formatDateString(date, day);

    const waterData = waterDataApi.find(item => item.date === dateString);

    if (waterData) {
      return {
        day,
        date: waterData.date,
        percentage: waterData.totalPercentage,
      };
    }

    return undefined;
  };

  return (
    <ul className="flex flex-wrap gap-x-[17.5px] gap-y-[20px] md:gap-x-[48px] md:gap-y-[15px] lg:gap-x-[43px] lg:gap-y-[42px]">
      {daysArray.map(day => {
        const dayData: DayData | undefined = findDayData(day);
        return (
          <li
            key={day}
            className="flex w-[28px] flex-col items-center gap-[6px] md:w-[38px] md:gap-1"
          >
            <CalendarItem dayData={dayData} day={day} />
          </li>
        );
      })}
    </ul>
  );
};

export default Calendar;
