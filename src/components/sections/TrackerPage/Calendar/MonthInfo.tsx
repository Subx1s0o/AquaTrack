import { useEffect, useState } from 'react';

import { selectDate } from '@/redux/date/selectors';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchMonthData } from '@/redux/waterMonthInfo/operations';

import Calendar from './Calendar';
import CalendarPagination from './CalendarPagination';
import Statistics from './Statistics';

export function MonthInfo() {
  const dispatch = useAppDispatch();

  const dateRequested: string = useAppSelector(selectDate).slice(0, 7);

  useEffect(() => {
    dispatch(fetchMonthData(dateRequested));
  }, [dispatch, dateRequested]);

  const [statisticsIsOpen, setStatisticsIsOpen] = useState(false);

  const statisticsToggle = (): void => {
    setStatisticsIsOpen(!statisticsIsOpen);
  };
  return (
    <div className="mx-auto flex w-[303px] flex-col gap-[26px] bg-grey font-poppins md:w-[640px] md:gap-[24px] lg:w-[608px]">
      {!statisticsIsOpen ? (
        <>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold md:text-3xl">Month</h3>
            <CalendarPagination statisticsToggle={statisticsToggle} />
          </div>
          <Calendar />
        </>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold md:text-3xl">Statistics</h3>
            <CalendarPagination statisticsToggle={statisticsToggle} />
          </div>
          <Statistics />
        </>
      )}
    </div>
  );
}
