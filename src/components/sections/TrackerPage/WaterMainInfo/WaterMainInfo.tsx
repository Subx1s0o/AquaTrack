import React, { useState } from 'react';

// import Loader from '../../../ui/Loader/Loader.tsx';
import AddWaterBtn from './AddWaterBtn/AddWaterBtn';
import WaterDailyNorma from './WaterDailyNorma/WaterDailyNorma';
import WaterProgressBar from './WaterProgressBar/WaterProgressBar';

// import WaterModal from '../../../modals/WaterModal';

const WaterMainInfo: React.FC = () => {
  const dailyNorma = 1500; // useSelector
  const currentWater = 750; //  тимчасово
  // const [currentWater, setCurrentWater] = useState(0); //   redux
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = () => {
    setIsModalOpen(true);
  };
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
      <AddWaterBtn onClick={handleClick} />
      {isModalOpen && <p>Модалку відкрито</p>}
      {/* {isModalOpen && <WaterModal onClose={() => setIsModalOpen(false)} />} */}
    </div>
  );
};

export default WaterMainInfo;
