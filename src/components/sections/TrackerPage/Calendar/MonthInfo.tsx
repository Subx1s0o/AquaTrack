import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectDate } from '@/redux/date/selectors';
import { fetchDayData } from '@/redux/waterDayInfo/operations';
import { selectDayWater } from '@/redux/waterDayInfo/selectors';
import { fetchMonthData } from '@/redux/waterMonthInfo/operations';

import Calendar from './Calendar';
import CalendarPagination from './CalendarPagination';
import Statistics from './Statistics';

const MonthInfo = () => {
  const dispatch = useDispatch();

  const dateRequested: string = useSelector(selectDate).slice(0, 7);

  useEffect(() => {
    dispatch(fetchMonthData(dateRequested));
  }, [dispatch, dateRequested]);

  // useEffect(() => {
  //   const today = new Date().toISOString().slice(0, 10);
  //   dispatch(fetchDayData(today));
  // }, [dispatch]);

  // const dayDataDetails = useSelector(selectDayWater);
  // console.log(dayDataDetails);
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
      {/* <ul>
        {dayDataDetails.map(data => {
          return (
            <li key={data._id}>
              <p>
                {data.time} - {data.amount} ml
              </p>
            </li>
          );
        })}
      </ul> */}
    </div>
  );
};

export default MonthInfo;
