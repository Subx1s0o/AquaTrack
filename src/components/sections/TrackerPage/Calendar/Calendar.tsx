import { DayData, WaterMonthData } from 'types/WaterTypes';

import { selectDate } from '@/redux/date/selectors';
import { useAppSelector } from '@/redux/hooks';
import { selectMonthWater } from '@/redux/waterMonthInfo/selectors';
import { dateHelpers } from '@/utils/dateHelpers';

import CalendarItem from './CalendarItem';

export function Calendar() {
  const date: string = useAppSelector(selectDate);
  const waterDataApi: WaterMonthData[] = useAppSelector(selectMonthWater);

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
}

export default Calendar;
