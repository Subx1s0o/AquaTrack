import React, { useState } from 'react';

// import Modal from '../../../modals/Modal/Modal';
// import Loader from '../../../ui/Loader/Loader';
import AddWaterBtn from './AddWaterBtn/AddWaterBtn';
import WaterDailyNorma from './WaterDailyNorma/WaterDailyNorma';
import WaterProgressBar from './WaterProgressBar/WaterProgressBar';

// import WaterModal from '../../../modals/WaterModal/WaterModal';

const WaterMainInfo: React.FC = () => {
  const dailyNorma: number = 1500; // Значення з Redux
  const currentWater: number = 750; //Значення з Redux
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal: () => void = () => {
    setIsModalOpen(true);
  };

  // const handleCloseModal: () => void = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <div
      className={
        'relative h-[415px] w-full rounded-[30px] bg-green md:h-[578px] md:w-[704px] lg:h-[736px] lg:w-[672px]'
      }
    >
      {/* <Logo/> */}
      <picture>
        <source
          srcSet="/public/images/Bottle/bottle-desktop.avif, /public/images/Bottle/bottle-desktop@2x.avif 2x"
          media="(min-width: 1440px)"
        />
        <source
          srcSet="/public/images/Bottle/bottle-tablet.avif, /public/images/Bottle/bottle-tablet@2x.avif 2x "
          media="(min-width: 768px)"
        />
        <source
          srcSet="/public/images/Bottle/bottle-mobile.avif, /public/images/Bottle/bottle-mobile@2x.avif 2x"
          media="(max-width: 767px)"
        />
        <img
          className={
            'absolute left-1/2 top-[50px] z-10 h-[335px] w-[262px] -translate-x-1/2 md:top-[69px] md:h-[477px] md:w-[374px] lg:top-[92px] lg:h-[604px] lg:w-[472px]'
          }
          src="/images/Bottle/bottle-desktop.avif"
          alt="bootle for water"
          width="472"
          height="604"
        />
      </picture>
      <WaterDailyNorma dailyNorma={dailyNorma} />
      <WaterProgressBar dailyNorma={dailyNorma} currentWater={currentWater} />
      <AddWaterBtn onClick={handleOpenModal} />
      {/* {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <WaterModal onClose={handleCloseModal} />
        </Modal>
      )} */}
      {/* тимчасова заглушка: */}
      {isModalOpen && <p>Модалку відкрито</p>}
    </div>
  );
};

export default WaterMainInfo;
