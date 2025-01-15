import React, { useState } from 'react';

import AddWaterBtn from './AddWaterBtn';
import ChooseDate from './ChooseDate';
import WaterList from './WaterList';

interface WaterEntry {
  id: number;
  date: string;
  volume: number;
  time: string;
}
const DailyInfo: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [waterEntries, setWaterEntries] = useState<WaterEntry[]>([]);

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
  };

  const handleAddWater = (volume: number) => {
    const newEntry: WaterEntry = {
      id: Date.now(),
      date: selectedDate || 'Today',
      volume,
      time: new Date().toLocaleTimeString(),
    };
    setWaterEntries(prev => [...prev, newEntry]);
  };
  return (
    <>
      <div className="flex justify-between">
        <ChooseDate
          selectedDate={selectedDate}
          onDateChange={handleDateChange}
        />
        <AddWaterBtn onAddWater={handleAddWater} />
      </div>
      <WaterList waterEntries={waterEntries} selectedDate={selectedDate} />
    </>
  );
};
export default DailyInfo;
