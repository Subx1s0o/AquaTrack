import MonthInfo from '@/components/sections/TrackerPage/Calendar/MonthInfo';
import DailyInfo from '@/components/sections/TrackerPage/WaterDetailedInfo/DailyInfo';
import WaterMainInfo from '@/components/sections/TrackerPage/WaterMainInfo/WaterMainInfo';
import UserPanel from '@/components/user/userPanel';

export default function TrackerPage() {
  return (
    <>
      <WaterMainInfo />
      <div className="">
        {/* <UserPanel />
        <DailyInfo />
        <MonthInfo /> */}
      </div>
    </>
  );
}
