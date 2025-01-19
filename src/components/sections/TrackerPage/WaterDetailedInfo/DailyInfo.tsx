import { useAppSelector } from '@/redux/hooks';
import {
  selectCurrentDate,
  selectDayLoading,
  selectDayWater,
} from '@/redux/waterDayInfo/selectors';

import AddWaterBtn from './AddWaterBtn';
import ChooseDate from './ChooseDate';
import WaterList from './WaterList';

export default function DailyInfo() {
  const selectedDay = useAppSelector(selectCurrentDate);
  const selectedWater = useAppSelector(selectDayWater);
  const isLoading = useAppSelector(selectDayLoading);
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <ChooseDate date={selectedDay || ''} />
        <AddWaterBtn />
      </div>

      {isLoading ? <p>loading</p> : <WaterList waters={selectedWater} />}
    </div>
  );
}
