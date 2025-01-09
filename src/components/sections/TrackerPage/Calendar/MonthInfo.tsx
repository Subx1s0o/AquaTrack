import { WaterMonthInfo } from 'types/WaterTypes';

import { useState } from 'react';

import Calendar from './Calendar';
import CalendarPagination from './CalendarPagination';
import Statistics from './Statistics';

const MonthInfo = () => {
  //Info from Api GET water/month/2025-1
  const waterDataApi: WaterMonthInfo = {
    data: [
      {
        _id: '1',
        persentage: 100,
        date: '2025-01-01T10:00',
      },
      {
        _id: '3',
        persentage: 85,
        date: '2025-01-03T10:00',
      },
      {
        _id: '4',
        persentage: 60,
        date: '2025-01-04T10:00',
      },
      {
        _id: '5',
        persentage: 100,
        date: '2025-01-05T10:00',
      },
      {
        _id: '6',
        persentage: 35,
        date: '2025-01-06T10:00',
      },
      {
        _id: '7',
        persentage: 100,
        date: '2025-01-07T10:00',
      },
      {
        _id: '8',
        persentage: 100,
        date: '2025-01-08T10:00',
      },
      {
        _id: '9',
        persentage: 100,
        date: '2025-01-09T10:00',
      },
    ],
  };

  //Info from Api GET date

  const date = new Date();
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
            <CalendarPagination
              date={date}
              statisticsToggle={statisticsToggle}
            />
          </div>
          <Calendar date={date} waterDataApi={waterDataApi.data} />
        </>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold md:text-3xl">Statistics</h3>
            <CalendarPagination
              date={date}
              statisticsToggle={statisticsToggle}
            />
          </div>
          <Statistics date={date} waterDataApi={waterDataApi.data} />
        </>
      )}
    </div>
  );
};

export default MonthInfo;
