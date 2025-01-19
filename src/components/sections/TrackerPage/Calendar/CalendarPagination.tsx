import Icon from '@/components/ui/Icon';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectCurrentMonthDate } from '@/redux/water/selectors';
import { nextMonth, previousMonth } from '@/redux/water/slice';
import { currentMonth, currentYear, dateHelpers } from '@/utils/dateHelpers';

interface CalendarPaginationProps {
  statisticsToggle: () => void;
}

export function CalendarPagination({
  statisticsToggle,
}: CalendarPaginationProps) {
  const dispatch = useAppDispatch();
  const date: string = useAppSelector(selectCurrentMonthDate);
  const monthName: string = dateHelpers.getMonthName(date);
  const chosenDate = new Date(date);
  const chosenYear = chosenDate.getFullYear();
  const chosenMonth = chosenDate.getMonth();
  const isFutureMonth =
    chosenYear > currentYear ||
    (chosenYear === currentYear && chosenMonth >= currentMonth);

  return (
    <div className="flex items-center gap-4 md:gap-5">
      <div className="flex items-center gap-1 md:gap-2">
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
        <p className="w-[120px] text-center text-base font-bold md:w-[138px] md:text-md">{`${monthName}, ${date.slice(0, 4)}`}</p>
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
}

export default CalendarPagination;
