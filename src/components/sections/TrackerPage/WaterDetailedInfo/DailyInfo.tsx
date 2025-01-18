import { AddWaterBtn } from './AddWaterBtn';
import { ChooseDate } from './ChooseDate';
import { WaterList } from './WaterList';

export default function DailyInfo() {
  return (
    <div className="box-content flex h-40 w-[343px] flex-col bg-gray-200 p-5 md:h-[174px] md:w-[640px] md:px-8 lg:w-[608px]">
      <div className="flex items-center justify-between pb-6">
        <ChooseDate date="2025-01-17" />
        <AddWaterBtn />
      </div>

      <WaterList />
    </div>
  );
}
