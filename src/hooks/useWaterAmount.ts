import { useState } from 'react';

const useWaterAmount = (initialAmount: number = 50) => {
  const [waterAmount, setWaterAmount] = useState(initialAmount);

  const MIN_VALUE = 50;
  const MAX_VALUE = 5000;

  const handleIncrease = () => {
    setWaterAmount(prev => (prev <= MAX_VALUE ? prev + 50 : MAX_VALUE));
  };

  const handleDecrease = () => {
    setWaterAmount(prev => (prev > MIN_VALUE ? prev - 50 : MIN_VALUE));
  };

  return {
    waterAmount,
    handleIncrease,
    handleDecrease,
    setWaterAmount,
    MAX_VALUE,
  };
};

export default useWaterAmount;
