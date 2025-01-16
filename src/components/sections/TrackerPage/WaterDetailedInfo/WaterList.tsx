import React from 'react';

import { WaterItem } from './WaterItem';

export const WaterList: React.FC = () => {
  const mockEntries = [
    { id: 1, volume: 250, time: '8:00 AM' },
    { id: 2, volume: 300, time: '10:00 AM' },
    { id: 3, volume: 200, time: '12:00 PM' },
  ];

  return (
    <div className="flex gap-2 overflow-x-auto whitespace-nowrap md:gap-8 lg:gap-4">
      {mockEntries.map(entry => (
        <WaterItem key={entry.id} entry={entry} />
      ))}
    </div>
  );
};

// import React from 'react';

// import { WaterItem } from './WaterItem';

// interface WaterEntry {
//   id: number;
//   date: string;
//   volume: number;
//   time: string;
// }

// interface WaterListProps {
//   waterEntries: WaterEntry[];
//   selectedDate: string;
// }

// export const WaterList: React.FC<WaterListProps> = ({
//   waterEntries,
//   selectedDate,
// }) => {
//   const filteredEntries = waterEntries.filter(
//     entry => entry.date === selectedDate,
//   );

//   return (
//     <div className="flex gap-2 overflow-x-auto whitespace-nowrap md:gap-8 lg:gap-4">
//       {filteredEntries.map(entry => (
//         <WaterItem key={entry.id} entry={entry} />
//       ))}
//     </div>
//   );
// };
