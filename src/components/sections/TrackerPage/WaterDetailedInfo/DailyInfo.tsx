import AddWaterBtn from './AddWaterBtn';
import ChooseDate from './ChooseDate';
import WaterList from './WaterList';

export default function DailyInfo() {
  return (
    <div className="flex w-full flex-col gap-6 bg-gray-200 p-5 md:px-8">
      <div className="flex items-center justify-between">
        <ChooseDate date="2025-01-17" />
        <AddWaterBtn />
      </div>

      <WaterList />
    </div>
  );
}
