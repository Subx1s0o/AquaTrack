import React from 'react';

import WaterItem from './WaterItem';

interface WaterEntry {
  id: number;
  date: string;
  volume: number;
  time: string;
}

interface WaterListProps {
  waterEntries: WaterEntry[];
  selectedDate: string;
}

const WaterList: React.FC<WaterListProps> = ({
  waterEntries,
  selectedDate,
}) => {
  const filteredEntries = waterEntries.filter(
    entry => entry.date === selectedDate,
  );

  return (
    <div className="overflow-x-auto whitespace-nowrap">
      {filteredEntries.map(entry => (
        <WaterItem key={entry.id} entry={entry} />
      ))}
    </div>
  );
};

export default WaterList;
