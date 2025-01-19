import { WaterDayData } from 'types/WaterTypes';

import WaterItem from './WaterItem';
import css from './waterList.module.css';

export default function WaterList({ waters }: { waters: WaterDayData[] }) {
  return (
    <ul className={css.waterList}>
      {waters.map(water => (
        <WaterItem key={water._id} data={water} />
      ))}
    </ul>
  );
}
