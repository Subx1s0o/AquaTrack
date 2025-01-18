import { useState } from 'react';

import { selectUser } from '@/redux/auth/selectors';
import { useAppSelector } from '@/redux/hooks';
import { selectDayTotalPercentage } from '@/redux/waterDayInfo/selectors';

import AddWaterBtn from './AddWaterBtn/AddWaterBtn';
import WaterDailyNorma from './WaterDailyNorma/WaterDailyNorma';
import WaterProgressBar from './WaterProgressBar/WaterProgressBar';

export default function WaterMainInfo() {
  const dailyNorma = useAppSelector(selectUser)?.dailyNorm;
  const currentWater = useAppSelector(selectDayTotalPercentage);
  console.log(currentWater);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal: () => void = () => {
    setIsModalOpen(true);
  };

  // const handleCloseModal: () => void = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <section
      className={
        'relative h-[415px] w-full rounded-[30px] bg-green md:h-[578px] md:w-[704px] lg:h-[736px] lg:w-[672px]'
      }
    >
      {/* <Logo/> */}
      <picture>
        <source
          srcSet="/images/Bottle/bottle-desktop.avif, /images/Bottle/bottle-desktop@2x.avif 2x"
          media="(min-width: 1440px)"
        />
        <source
          srcSet="/images/Bottle/bottle-tablet.avif, /images/Bottle/bottle-tablet@2x.avif 2x "
          media="(min-width: 768px)"
        />
        <source
          srcSet="/images/Bottle/bottle-mobile.avif, /images/Bottle/bottle-mobile@2x.avif 2x"
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
      {dailyNorma && (
        <>
          <WaterDailyNorma dailyNorma={dailyNorma} />
          <WaterProgressBar
            dailyNorma={dailyNorma}
            currentWater={currentWater}
          />
        </>
      )}
      <AddWaterBtn onClick={handleOpenModal} />
      {/* {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <WaterModal onClose={handleCloseModal} />
        </Modal>
      )} */}
      {/* тимчасова заглушка: */}
      {isModalOpen && <p>Модалку відкрито</p>}
    </section>
  );
}
