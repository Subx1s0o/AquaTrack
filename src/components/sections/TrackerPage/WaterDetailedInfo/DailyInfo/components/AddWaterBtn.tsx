import React from 'react';

interface AddWaterBtnProps {
  onAddWater: () => void;
}

const AddWaterBtn: React.FC<AddWaterBtnProps> = ({ onAddWater }) => {
  return (
    <button onClick={onAddWater}>
      <span>+</span> Add water
    </button>
  );
};

export default AddWaterBtn;
