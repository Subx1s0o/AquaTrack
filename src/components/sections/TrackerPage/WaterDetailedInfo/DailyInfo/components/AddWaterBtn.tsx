import React from 'react';

interface AddWaterBtnProps {
  onAddWater: () => void;
}

const AddWaterBtn: React.FC<AddWaterBtnProps> = ({ onAddWater }) => {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onAddWater}
        className="flex w-7 items-center justify-center rounded-full bg-green text-xl font-bold text-darkGrey transition-colors lg:hover:bg-darkGrey lg:hover:text-white lg:focus-visible:bg-darkGrey lg:focus-visible:text-white"
      >
        +
      </button>
      <span className="font-poppins text-md font-bold text-darkGrey">
        Add water
      </span>
    </div>
  );
};

export default AddWaterBtn;
