import { MonthInfo } from '@/components/sections/TrackerPage/Calendar/MonthInfo';
import DailyInfo from '@/components/sections/TrackerPage/WaterDetailedInfo/DailyInfo';
import WaterMainInfo from '@/components/sections/TrackerPage/WaterMainInfo/WaterMainInfo';
import UserPanel from '@/components/sections/TrackerPage/user/userPanel';

export default function TrackerPage() {
  return (
    <>
      <WaterMainInfo />
      <section className="flex max-w-[375px] flex-col gap-10 rounded-[30px] bg-grey px-5 py-10 md:max-w-[704px] md:p-8">
        <UserPanel />
        <DailyInfo />
        <MonthInfo />
      </section>
    </>
  );
}
