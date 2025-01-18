import React from 'react';

interface ChooseDateProps {
  date: string;
}

export const ChooseDate: React.FC<ChooseDateProps> = ({ date }) => {
  const currentDate = new Date();
  const selectedDate = new Date(date);

  const isToday =
    currentDate.getDate() === selectedDate.getDate() &&
    currentDate.getMonth() === selectedDate.getMonth();

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

  const formattedDate = `${selectedDate.getDate()}, ${months[selectedDate.getMonth()]}`;

  return (
    <h2 className="flex flex-row items-center justify-start font-poppins text-xl font-bold text-darkGrey md:text-3xl">
      {isToday ? 'Today' : formattedDate}
    </h2>
  );
};
