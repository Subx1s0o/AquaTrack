import React from 'react';

import { WaterItem } from './WaterItem';
import css from './waterList.module.css';

export const WaterList: React.FC = () => {
  const mockEntries = [
    { id: 1, volume: 250, time: '7:00' },
    { id: 2, volume: 250, time: '11:00' },
    { id: 3, volume: 250, time: '14:00' },
  ];

  return (
    <div className="relative">
      <ul
        className={`${css.waterList} w-[303px] md:h-[86px] md:w-[640px] md:gap-8 lg:w-[608px] lg:gap-4`}
      >
        {mockEntries.map(entry => (
          <WaterItem key={entry.id} entry={entry} />
        ))}
      </ul>
    </div>
  );
};
