import React from 'react';

interface ChooseDateProps {
  selectedDate: string;
}

const ChooseDate: React.FC<ChooseDateProps> = ({ selectedDate }) => {
  return <h2>{selectedDate || 'Today'}</h2>;
};

export default ChooseDate;
