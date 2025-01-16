import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateUserInfo } from '@/redux/auth/operations';
import { selectUser } from '@/redux/auth/selectors';
import {
  addWaterData,
  deleteWaterData,
  fetchDayData,
  updateWaterData,
} from '@/redux/waterDayInfo/operations';
import { selectDayWater } from '@/redux/waterDayInfo/selectors';

const TestComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    dispatch(fetchDayData(today));
  }, [dispatch]);

  const dayDataDetails = useSelector(selectDayWater);
  console.log(dayDataDetails);

  const handleAddClick = () => {
    const data = {
      time: '14:00',
      amount: 500,
      date: '2025-01-16',
      dailyNorm: 1500,
    };
    dispatch(addWaterData(data));
  };

  const handleDelClick = (_id: string) => {
    dispatch(deleteWaterData(_id));
  };

  const handleUpdateClick = (_id: string) => {
    // const water: { time: string, date: string, amount?: number} = {
    //   time: '06:00',
    //   date: '2025-01-16',
    // };
    dispatch(
      updateUserInfo({
        name: 'Lopatiy',
      }),
    );
  };

  const userInfo = useSelector(selectUser);
  console.log(userInfo);

  return (
    <div className="flex flex-col">
      <button
        className="w-[200px] border border-black"
        type="button"
        onClick={handleAddClick}
      >
        Add Water
      </button>
      <ul className="flex flex-col">
        {dayDataDetails.map(data => {
          return (
            <li key={data._id} className="flex flex-col">
              <p>
                {data.time} - {data.amount} ml - {data._id}
              </p>
              <button
                className="w-[50px] border border-black"
                type="button"
                onClick={() => handleDelClick(data._id)}
              >
                Delete
              </button>
              <button
                className="w-[50px] border border-black"
                type="button"
                onClick={() => handleUpdateClick(data._id)}
              >
                Update
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TestComponent;
