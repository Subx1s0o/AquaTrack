import Loader from '@/components/ui/Loader/Loader';

import { useAppSelector } from '@/redux/hooks';
import {
  selectWaterDailyData,
  selectWaterDailyLoading,
} from '@/redux/water/selectors';

import AddWaterBtn from './AddWaterBtn';
import ChooseDate from './ChooseDate';
import WaterList from './WaterList';

export default function DailyInfo() {
  const selectedWater = useAppSelector(selectWaterDailyData);
  const isLoading = useAppSelector(selectWaterDailyLoading);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <ChooseDate />
        <AddWaterBtn />
      </div>

      {isLoading ? (
        <div className="flex h-[118px] items-center justify-center">
          <Loader className="!text-5xl" />
        </div>
      ) : (
        <WaterList waters={selectedWater} />
      )}
    </div>
  );
}
