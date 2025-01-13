import AddWaterBtn from './AddWaterBtn';
import ChooseDate from './ChooseDate';
import WaterList from './WaterList';

export default function DailyInfo() {
  return (
    <>
      <div className="flex justify-between">
        <ChooseDate />
        <AddWaterBtn />
      </div>
      <WaterList />
    </>
  );
}
