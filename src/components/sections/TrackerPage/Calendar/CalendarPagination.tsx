import React from 'react';

import Icon from '@/components/ui/Icon';

interface CalendarPaginationProps {
  date: Date;
}

const CalendarPagination: React.FC<CalendarPaginationProps> = ({ date }) => {
  const monthName = date.toLocaleString('default', { month: 'long' });
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-4">
        <button type="button" className="text-darkGrey">
          <Icon
            id="icon-chevron-down"
            className="-rotate-90 decoration-darkGrey"
            h={18}
            w={18}
          />
        </button>
        <p className="text-base font-bold">{`${monthName}, ${date.getFullYear()}`}</p>
        <button type="button" className="text-darkGrey">
          <Icon
            id="icon-chevron-down"
            className="rotate-90 decoration-darkGrey"
            h={18}
            w={18}
          />
        </button>
      </div>
      <button type="button" className="text-darkGrey">
        <Icon id="icon-pie" w={20} h={20} />
      </button>
    </div>
  );
};

export default CalendarPagination;
