import React from 'react';

import Icon from '@/components/ui/Icon';

interface CalendarPaginationProps {
  date: Date;
  statisticsToggle: () => void;
}

const CalendarPagination: React.FC<CalendarPaginationProps> = ({
  date,
  statisticsToggle,
}) => {
  const monthName = date.toLocaleString('default', { month: 'long' });
  return (
    <div className="flex items-center gap-4 md:gap-5">
      <div className="flex items-center gap-4 md:gap-5">
        <button type="button" className="text-darkGrey">
          <Icon
            id="icon-chevron-down"
            className="-rotate-90 decoration-darkGrey"
            h={18}
            w={18}
          />
        </button>
        <p className="text-base font-bold md:text-md">{`${monthName}, ${date.getFullYear()}`}</p>
        <button type="button" className="text-darkGrey">
          <Icon
            id="icon-chevron-down"
            className="rotate-90 decoration-darkGrey"
            h={18}
            w={18}
          />
        </button>
      </div>
      <button
        type="button"
        className="text-darkGrey"
        onClick={statisticsToggle}
      >
        <Icon
          id="icon-pie"
          className="size-[20px] text-darkGrey md:size-[24px]"
          w={20}
          h={20}
        />
      </button>
    </div>
  );
};

export default CalendarPagination;
