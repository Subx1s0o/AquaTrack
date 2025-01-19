import { WaterDayData } from 'types/WaterTypes';

import WaterItem from './WaterItem';
import css from './waterList.module.css';

export default function WaterList({ waters }: { waters: WaterDayData[] }) {
  if (waters.length === 0) {
    return (
      <p className="flex h-[118px] items-center justify-center text-xl text-grey-selector">
        Water has not been added yet
      </p>
    );
  }
  return (
    <ul className={css.waterList}>
      {waters.map(water => (
        <WaterItem key={water._id} data={water} />
      ))}
    </ul>
  );
}
