import React from 'react';

interface WaterDailyNormaProps {
  dailyNorma: number;
}

const WaterDailyNorma: React.FC<WaterDailyNormaProps> = ({
  dailyNorma = 1500,
}) => {
  const dailyNormaConverted = dailyNorma / 1000;

  return (
    <div className="absolute left-4 top-[122px] z-20 h-[54px] w-[102px] rounded-[15px] bg-white p-3 shadow-[0_4px_50px_rgba(0,0,0,0.1)] md:left-8 md:top-[157px] md:h-[78px] md:w-[129px] md:px-[18px] md:py-[14px] lg:left-16">
      <h3
        className={
          'mb-[6px] font-poppins text-base font-bold leading-none md:mb-1 md:text-ms'
        }
      >
        {dailyNormaConverted} L
      </h3>
      <p
        className={
          'font-poppins text-xs text-black/60 md:text-sm md:leading-[22px]'
        }
      >
        My daily norma
      </p>
    </div>
  );
};

export default WaterDailyNorma;
