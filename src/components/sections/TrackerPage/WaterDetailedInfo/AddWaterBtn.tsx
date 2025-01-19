import { useState } from 'react';

import Modal from '@/components/modals/Modal/Modal';
import WaterModal from '@/components/modals/WaterModal/WaterModal';
import Icon from '@/components/ui/Icon';

export default function AddWaterBtn() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal: () => void = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal: () => void = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="flex items-center gap-[10px]">
        <button
          onClick={handleOpenModal}
          className="flex size-[30px] items-center justify-center rounded-[30px] bg-green text-3xl text-darkGrey transition-colors lg:hover:bg-darkGrey lg:hover:text-white lg:focus-visible:bg-darkGrey lg:focus-visible:text-white"
        >
          <Icon className="text-inherit" id="icon-plus" w={20} h={20} />
        </button>
        <span className="font-poppins text-md font-bold text-darkGrey">
          Add water
        </span>
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <WaterModal type="add" onClose={handleCloseModal} />
        </Modal>
      )}
    </>
  );
}
