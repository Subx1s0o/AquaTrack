import { useAppSelector } from '@/redux/hooks';
import { selectWaterDailyCurrentDate } from '@/redux/water/selectors';

export default function ChooseDate() {
  const currentDate = new Date();
  const selectedDay = useAppSelector(selectWaterDailyCurrentDate);

  const selectedDate = selectedDay ? new Date(selectedDay) : null;

  const isToday =
    selectedDate &&
    currentDate.getDate() === selectedDate.getDate() &&
    currentDate.getMonth() === selectedDate.getMonth() &&
    currentDate.getFullYear() === selectedDate.getFullYear();

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const formattedDate = selectedDate
    ? `${selectedDate.getDate()}, ${months[selectedDate.getMonth()]}`
    : '';

  return (
    <h2 className="flex flex-row items-center justify-start font-poppins text-xl font-bold text-darkGrey md:text-3xl">
      {isToday ? 'Today' : formattedDate}
    </h2>
  );
}
