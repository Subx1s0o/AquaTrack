/* eslint-disable @typescript-eslint/no-explicit-any */
export default function CustomTooltip({ isActive, payload }: any) {
  if (isActive && payload && payload.length) {
    return (
      <div
        className="relative flex h-[32px] w-[53px] items-center justify-center rounded-[13px] bg-white shadow-md md:h-[40px] md:w-[80px]"
        style={{
          transform: 'translateY(-190%)',
          marginLeft: '-46px',
        }}
      >
        <div className="absolute -bottom-1.5 left-1/2 size-[12px] -translate-x-1/2 rotate-45 bg-white"></div>
        <p className="md: text-center font-poppins text-xs font-bold md:text-sm md:leading-[22.4px]">
          {`${payload[0].value * 1000} ml`}
        </p>
      </div>
    );
  }
  return null;
}
