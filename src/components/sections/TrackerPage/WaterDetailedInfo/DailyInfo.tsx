import { AddWaterBtn } from './AddWaterBtn';
import { ChooseDate } from './ChooseDate';
import { WaterList } from './WaterList';

export default function DailyInfo() {
  return (
    <div className="box-content flex h-40 w-[343px] flex-col bg-gray-200 p-5 md:h-[174px] md:w-[640px] md:px-8 lg:w-[608px]">
      <div className="flex items-center justify-between pb-6">
        <ChooseDate date="2025-01-16" />
        <AddWaterBtn />
      </div>

      <WaterList />
    </div>
  );
}

// import React, { useState } from 'react';

// import {AddWaterBtn} from './AddWaterBtn';
// import {ChooseDate} from './ChooseDate';
// import {WaterList} from './WaterList';

// interface WaterEntry {
//   id: number;
//   date: string;
//   volume: number;
//   time: string;
// }
// export const DailyInfo: React.FC = () => {
//   const [selectedDate, setSelectedDate] = useState<string>('');
//   const [waterEntries, setWaterEntries] = useState<WaterEntry[]>([]);

//   const handleDateChange = (date: string) => {
//     setSelectedDate(date);
//   };

//   const handleAddWater = (volume: number) => {
//     const newEntry: WaterEntry = {
//       id: Date.now(),
//       date: selectedDate || 'Today',
//       volume,
//       time: new Date().toLocaleTimeString(),
//     };
//     setWaterEntries(prev => [...prev, newEntry]);
//   };
//   return (
//     <>
//       <div className="flex justify-between">
//         <ChooseDate
//           selectedDate={selectedDate}
//           onDateChange={handleDateChange}
//         />
//         <AddWaterBtn onAddWater={handleAddWater} />
//       </div>
//       <WaterList waterEntries={waterEntries} selectedDate={selectedDate} />
//     </>
//   );
// };
