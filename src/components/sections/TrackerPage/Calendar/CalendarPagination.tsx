import { useDispatch, useSelector } from 'react-redux';

import Icon from '@/components/ui/Icon';

import { selectDate } from '@/redux/date/selectors';
import { nextMonth, previousMonth } from '@/redux/date/slice';
import { currentMonth, currentYear, dateHelpers } from '@/utils/dateHelpers';

interface CalendarPaginationProps {
  statisticsToggle: () => void;
}

const CalendarPagination = ({ statisticsToggle }: CalendarPaginationProps) => {
  const dispatch = useDispatch();
  const date: string = useSelector(selectDate);
  const monthName: string = dateHelpers.getMonthName(date);
  const chosenDate = new Date(date);
  const chosenYear = chosenDate.getFullYear();
  const chosenMonth = chosenDate.getMonth();
  const isFutureMonth =
    chosenYear > currentYear ||
    (chosenYear === currentYear && chosenMonth >= currentMonth);

  return (
    <div className="flex items-center gap-4 md:gap-5">
      <div className="flex items-center gap-4 md:gap-5">
        <button
          type="button"
          className="text-darkGrey"
          onClick={() => {
            dispatch(previousMonth());
          }}
        >
          <Icon
            id="icon-chevron-down"
            className="-rotate-90 decoration-darkGrey"
            h={18}
            w={18}
          />
        </button>
        <p className="text-base font-bold md:text-md">{`${monthName}, ${date.slice(0, 4)}`}</p>
        <button
          disabled={isFutureMonth}
          type="button"
          className="text-darkGrey"
          onClick={() => {
            dispatch(nextMonth());
          }}
        >
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
