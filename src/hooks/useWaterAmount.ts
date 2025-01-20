import { useState } from 'react';

function useWaterAmount(
  initialAmount: number = 50,
  setValue: (name: 'time' | 'water', value: number) => void,
) {
  const [waterAmount, setWaterAmount] = useState(initialAmount);

  const MIN_VALUE = 50;
  const MAX_VALUE = 5000;

  function handleIncrease() {
    const newAmount = Math.min(waterAmount + 50, MAX_VALUE);
    setWaterAmount(newAmount);
    setValue('water', newAmount);
  }

  function handleDecrease() {
    const newAmount = Math.max(waterAmount - 50, MIN_VALUE);
    setWaterAmount(newAmount);
    setValue('water', newAmount);
  }

  return {
    waterAmount,
    handleIncrease,
    handleDecrease,
    setWaterAmount,
    MAX_VALUE,
  };
}

export default useWaterAmount;
