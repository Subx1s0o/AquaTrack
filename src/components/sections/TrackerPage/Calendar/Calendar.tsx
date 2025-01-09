import { WaterData } from 'types/WaterTypes';

import React from 'react';

import CalendarItem from './CalendarItem';

interface CalendarProps {
  date: Date;
  waterDataApi: WaterData[];
}

const Calendar: React.FC<CalendarProps> = ({ date, waterDataApi }) => {
  const getDaysInMonth = (date: Date): number => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const daysArray = Array.from(
    { length: getDaysInMonth(date) },
    (_, i) => i + 1,
  );

  const formatDateString = (
    year: number,
    month: number,
    day: number,
  ): string => {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(
      day,
    ).padStart(2, '0')}`;
  };

  // Function to find data for a specific date
  const findDayData = (day: number): WaterData | undefined => {
    const dateString: string = formatDateString(
      date.getFullYear(),
      date.getMonth(),
      day,
    );
    return waterDataApi.find(item => item.date.slice(0, 10) === dateString);
  };
  return (
    <ul className="flex flex-wrap gap-x-[17.5px] gap-y-[20px]">
      {daysArray.map(day => {
        const dayData: WaterData | undefined = findDayData(day);
        return (
          <li
            key={day}
            className="flex w-[28px] flex-col items-center gap-[6px]"
          >
            <CalendarItem dayData={dayData} day={day} />
          </li>
        );
      })}
    </ul>
  );
};

export default Calendar;
