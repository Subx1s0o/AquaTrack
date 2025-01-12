import { useState } from 'react';

import Loader from '../../../ui/Loader/Loader.tsx';
import AddWaterBtn from './AddWaterBtn/AddWaterBtn.jsx';
import WaterDailyNorma from './WaterDailyNorma/WaterDailyNorma.jsx';
// import css from './WaterMainInfo.module.css';
import WaterProgressBar from './WaterProgressBar/WaterProgressBar.jsx';

// import WaterModal from '../../../modals/WaterModal';

const WaterMainInfo = () => {
  const dailyNorma = 1500; // useSelector
  const [currentWater, setCurrentWater] = useState(0); //   redux
  const [isModalOpen, setIsModalOpen] = useState(false); //хук

  const onAddWater = () => {
    setIsModalOpen(true);
  };
  return (
    <div
      className={
        'relative h-[415px] w-full rounded-[30px] bg-green md:h-[704px] md:w-[578px] lg:h-[672px] lg:w-[736px]'
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
            'z-1 transform-translate-x-1/2 left-1/2 top-[50px] h-[335px] w-[262px] md:top-[69px] md:h-[477px] md:w-[374px] lg:top-[92px] lg:h-[604px] lg:w-[472px]'
          }
          src="/public/images/Bottle/bottle-desktop.avif"
          alt="bootle for water"
          width="472"
          height="604"
        />
      </picture>
      <WaterDailyNorma dailyNorma={dailyNorma} />
      <WaterProgressBar dailyNorma={dailyNorma} currentWater={currentWater} />
      <AddWaterBtn onClick={onAddWater} />
      {/* {isModalOpen && <WaterModal onClose={() => setIsModalOpen(false)} />} */}
    </div>
  );
};

export default WaterMainInfo;
