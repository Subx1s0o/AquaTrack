import React from 'react';

export const AddWaterBtn: React.FC = () => {
  return (
    <div className="flex items-center gap-[10px]">
      <button className="flex size-[30px] items-center justify-center rounded-[30px] bg-green text-3xl font-light text-darkGrey transition-colors lg:hover:bg-darkGrey lg:hover:text-white lg:focus-visible:bg-darkGrey lg:focus-visible:text-white">
        +
      </button>
      <span className="font-poppins text-md font-bold text-darkGrey">
        Add water
      </span>
    </div>
  );
};
