import { DayData, WaterMonthData } from 'types/WaterTypes';

import { useEffect, useMemo, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchDayData } from '@/redux/water/operations';
import {
  selectCurrentMonthDate,
  selectWaterMonthlyData,
} from '@/redux/water/selectors';
import { dateHelpers } from '@/utils/dateHelpers';

import CalendarItem from './CalendarItem';

export default function Calendar() {
  const date: string = useAppSelector(selectCurrentMonthDate);
  const waterDataApi: WaterMonthData[] = useAppSelector(selectWaterMonthlyData);
  const dispatch = useAppDispatch();

  const today = useMemo(() => new Date(), []);
  const [selectedItem, setSelectedItem] = useState<number | null>(() => {
    const chosenDate = new Date(date);

    if (
      chosenDate.getFullYear() === today.getFullYear() &&
      chosenDate.getMonth() === today.getMonth()
    ) {
      return today.getDate();
    }
    return null;
  });

  useEffect(() => {
    const chosenDate = new Date(date);
    const isCurrentMonth =
      chosenDate.getFullYear() === today.getFullYear() &&
      chosenDate.getMonth() === today.getMonth();

    if (!isCurrentMonth) {
      setSelectedItem(null);
    }
  }, [date, today]);

  const daysArray = Array.from(
    { length: dateHelpers.getMonthDays(date) },
    (_, i) => i + 1,
  );

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

  useEffect(() => {
    if (selectedItem !== null) {
      const defaultDayData = findDayData(selectedItem);
      if (defaultDayData) {
        const clickedDate = defaultDayData.date;
        dispatch(fetchDayData(clickedDate));
      }
    }
  }, [selectedItem, waterDataApi, dispatch]);

  return (
    <ul className="grid grid-cols-[repeat(7,28px)] gap-x-[calc((100%-196px)/6)] gap-y-5 md:grid-cols-[repeat(8,calc((100%-301px)/8))] md:gap-x-[43px] md:gap-y-[15px]">
      {daysArray.map(day => {
        const dayData: DayData | undefined = findDayData(day);
        return (
          <CalendarItem
            key={day}
            dayData={dayData}
            day={day}
            setSelectedItem={setSelectedItem}
            selectedItem={selectedItem}
          />
        );
      })}
    </ul>
  );
}
