import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchMonthData } from '@/redux/water/operations';
import { selectCurrentMonthDate } from '@/redux/water/selectors';

import Calendar from './Calendar';
import CalendarPagination from './CalendarPagination';
import Statistics from './Statistics';

export function MonthInfo() {
  const dispatch = useAppDispatch();

  const dateRequested: string = useAppSelector(selectCurrentMonthDate).slice(
    0,
    7,
  );

  useEffect(() => {
    dispatch(fetchMonthData(dateRequested));
  }, [dispatch, dateRequested]);

  const [statisticsIsOpen, setStatisticsIsOpen] = useState(false);

  const statisticsToggle = (): void => {
    setStatisticsIsOpen(!statisticsIsOpen);
  };
  return (
    <div className="flex w-full flex-col gap-[26px] font-poppins md:gap-[24px]">
      {!statisticsIsOpen ? (
        <>
          <div className="flex flex-wrap items-center justify-between gap-5">
            <h3 className="text-xl font-bold md:text-3xl">Month</h3>
            <CalendarPagination statisticsToggle={statisticsToggle} />
          </div>
          <Calendar />
        </>
      ) : (
        <>
          <div className="flex flex-wrap items-center justify-between gap-5">
            <h3 className="text-xl font-bold md:text-3xl">Statistics</h3>
            <CalendarPagination statisticsToggle={statisticsToggle} />
          </div>
          <Statistics />
        </>
      )}
    </div>
  );
}
