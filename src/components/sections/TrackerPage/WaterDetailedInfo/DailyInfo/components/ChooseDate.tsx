import React from 'react';

interface ChooseDateProps {
  selectedDate: string;
}

const ChooseDate: React.FC<ChooseDateProps> = ({ selectedDate }) => {
  return (
    <h2 className="font-poppins text-darkGrey flex flex-row items-center justify-start text-xl font-bold md:text-3xl">
      {selectedDate || 'Today'}
    </h2>
  );
};

export default ChooseDate;
