import React, { useState } from 'react';

import WaterModal from './WaterModal';

interface AddWaterBtnProps {
  onAddWater: (volume: number) => void;
}

const AddWaterBtn: React.FC<AddWaterBtnProps> = ({ onAddWater }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={toggleModal}
        className="flex w-7 items-center justify-center rounded-full bg-green text-xl font-bold text-darkGrey transition-colors lg:hover:bg-darkGrey lg:hover:text-white lg:focus-visible:bg-darkGrey lg:focus-visible:text-white"
      >
        +
      </button>
      <span className="font-poppins text-md font-bold text-darkGrey">
        Add water
      </span>
      {isModalOpen && (
        <WaterModal onClose={toggleModal} onAddWater={onAddWater} />
      )}
    </div>
  );
};

export default AddWaterBtn;
