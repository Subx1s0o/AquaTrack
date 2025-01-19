import { useEffect, useState } from 'react';

import { Modal } from '@/components/modals/Modal/Modal';
import WaterModal from '@/components/modals/WaterModal/WaterModal';
import Logo from '@/components/ui/Logo';

import { selectUser } from '@/redux/auth/selectors';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchTodayWater } from '@/redux/water/operations';
import { selectTodayWaterPercentage } from '@/redux/water/selectors';

import AddWaterBtn from './AddWaterBtn/AddWaterBtn';
import WaterDailyNorma from './WaterDailyNorma/WaterDailyNorma';
import WaterProgressBar from './WaterProgressBar/WaterProgressBar';

export default function WaterMainInfo() {
  const dailyNorma = useAppSelector(selectUser)?.dailyNorm;
  const todayPercentage = useAppSelector(selectTodayWaterPercentage);
  const dispatch = useAppDispatch();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal: () => void = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal: () => void = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(fetchTodayWater());
  }, [todayPercentage, dispatch]);

  return (
    <section
      className={
        'relative min-h-[415px] rounded-[30px] bg-green md:min-h-[578px] md:w-[704px] lg:w-[672px]'
      }
    >
      <Logo />
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
            'absolute left-1/2 top-1/2 z-10 h-[335px] w-[262px] -translate-x-1/2 -translate-y-1/2 md:h-[477px] md:w-[374px] lg:h-[604px] lg:w-[472px]'
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
            currentWater={todayPercentage}
          />
        </>
      )}
      <AddWaterBtn onClick={handleOpenModal} />
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <WaterModal type="add" onClose={handleCloseModal} />
        </Modal>
      )}
    </section>
  );
}
