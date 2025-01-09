import { WaterMonthInfo } from 'types/WaterTypes';

import Calendar from './Calendar';
import CalendarPagination from './CalendarPagination';

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

  return (
    <div className="flex w-[303px] flex-col gap-[26px] bg-grey font-poppins">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Month</h3>
        <CalendarPagination date={date} />
      </div>
      <Calendar date={date} waterDataApi={waterDataApi.data} />
    </div>
  );
};

export default MonthInfo;
