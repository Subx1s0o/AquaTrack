import React, { useEffect, useRef, useState } from 'react';

import { WaterItem } from './WaterItem';

export const WaterList: React.FC = () => {
  const mockEntries = [
    { id: 1, volume: 250, time: '7:00' },
    { id: 2, volume: 250, time: '11:00' },
    { id: 3, volume: 250, time: '14:00' },
  ];

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      setIsScrollable(container.scrollWidth > container.clientWidth);

      const progress =
        (container.scrollLeft /
          (container.scrollWidth - container.clientWidth)) *
        100;
      setScrollProgress(progress);
    }
  }, [mockEntries]);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const progress =
        (container.scrollLeft /
          (container.scrollWidth - container.clientWidth)) *
        100;
      setScrollProgress(progress);
    }
  };

  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="box-content flex h-[74px] w-[303px] gap-2 overflow-x-auto scroll-smooth whitespace-nowrap pb-[24px] md:h-[86px] md:w-[640px] md:gap-8 lg:w-[608px] lg:gap-4"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {mockEntries.map(entry => (
          <WaterItem key={entry.id} entry={entry} />
        ))}
      </div>
      {isScrollable && (
        <div className="absolute h-[8px] w-[303px] rounded-[9px] bg-white md:w-[640px] lg:w-[608px]">
          <div
            className="h-2 rounded-[9px] bg-darkGrey transition-all duration-300"
            style={{
              width: `${scrollProgress}%`,
            }}
          ></div>
        </div>
      )}
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
