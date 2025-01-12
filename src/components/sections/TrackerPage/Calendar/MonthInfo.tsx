import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectDate } from '@/redux/date/selectors';
import { fetchMonthData } from '@/redux/waterMonthInfo/operations';

import Calendar from './Calendar';
import CalendarPagination from './CalendarPagination';
import Statistics from './Statistics';

const MonthInfo = () => {
  const dispatch = useDispatch();

  const dateRequested: string = useSelector(selectDate).slice(0, 7);
  //Info from Api GET water/month/2025-1
  useEffect(() => {
    dispatch(fetchMonthData(dateRequested));
  }, [dateRequested, dispatch]);
  // console.log(waterList);

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
};

export default MonthInfo;
