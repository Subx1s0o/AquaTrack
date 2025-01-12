import AddWaterBtn from './AddWaterBtn';
import ChooseDate from './ChooseDate';
import WaterList from './WaterList';

export default function DailyInfo() {
  return (
    <>
      <div>
        <ChooseDate />
        <AddWaterBtn />
      </div>
      <WaterList />
    </>
  );
}
