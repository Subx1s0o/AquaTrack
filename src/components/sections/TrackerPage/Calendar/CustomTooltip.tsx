/* eslint-disable @typescript-eslint/no-explicit-any */
export default function CustomTooltip({ active, payload }: any) {
  if (active && payload && payload.length > 0 && payload[0]?.payload) {
    return (
      <div
        className="relative flex h-[32px] w-[53px] items-center justify-center rounded-[13px] bg-white shadow-md md:h-[40px] md:w-[80px]"
        style={{
          transform: 'translateY(-190%)',
          marginLeft: '-46px',
          zIndex: 10,
        }}
      >
        <div className="absolute -bottom-1.5 left-1/2 size-[12px] -translate-x-1/2 rotate-45 bg-white"></div>
        <p className="font-poppins text-xs font-bold md:text-center md:text-sm md:leading-[22.4px]">
          {payload[0]?.payload?.litr
            ? `${(payload[0].payload.litr * 1000).toFixed()} ml`
            : 'N/A'}
        </p>
      </div>
    );
  }
  return null;
}
