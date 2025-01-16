import { useState } from 'react';

const useWaterAmount = (initialAmount: number = 50) => {
  const [waterAmount, setWaterAmount] = useState(initialAmount);

  const handleIncrease = () => {
    setWaterAmount(prev => (prev >= 5000 ? 5000 : prev + 50));
  };

  const handleDecrease = () => {
    setWaterAmount(prev => (prev > 50 ? prev - 50 : 50));
  };

  return { waterAmount, handleIncrease, handleDecrease, setWaterAmount };
};

export default useWaterAmount;
