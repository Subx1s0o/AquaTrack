interface WaterProgressBarProps {
  dailyNorma: number;
  currentWater: number;
}

export default function WaterProgressBar({
  dailyNorma,
  currentWater,
}: WaterProgressBarProps) {
  return (
    <div
      className={
        'absolute bottom-[118px] left-1/2 z-20 h-[70px] w-[198px] -translate-x-1/2 rounded-[15px] bg-white p-3 shadow-[0_4px_50px_rgba(0,0,0,0.1)] md:bottom-[150px] md:h-[106px] md:w-[295px] md:p-5 lg:bottom-[180px]'
      }
    >
      <h3
        className={
          'mb-2 font-poppins text-base font-bold leading-none md:mb-[6px] md:text-ms'
        }
      >
        Today
      </h3>
      <div className={'relative h-[6px] w-full rounded-[9px] bg-grey md:h-2'}>
        <div
          className={
            'h-full rounded-[9px] bg-green transition-[width] duration-300'
          }
          style={{ width: `${Math.min(currentWater, 100)}%` }}
        ></div>
        <div
          className={
            'absolute top-1/2 z-30 size-[12px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-green bg-white transition-[left] duration-300'
          }
          style={{ left: `${Math.min(currentWater, 100)}%` }}
        ></div>
      </div>
      <div
        className={
          'relative mt-2 flex justify-between font-poppins text-xs text-black/60 md:mt-[6px] md:text-sm md:leading-[22px]'
        }
      >
        <span>0%</span>
        <span className="absolute left-1/2 -translate-x-1/2">50%</span>
        {dailyNorma < currentWater ? <span>&#62;100%</span> : <span>100%</span>}
      </div>
    </div>
  );
}
