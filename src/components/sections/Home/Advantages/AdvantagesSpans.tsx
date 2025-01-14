export default function AdvantagesSpans() {
  return (
    <div className="absolute bottom-8 right-4 flex w-[168px] flex-wrap gap-1 md:right-8 md:w-[244px] md:gap-[10px] lg:bottom-16">
      <span className="flex items-center rounded-full bg-darkGrey pl-6 pr-3 text-[8px] font-bold text-white md:py-[11px] md:pl-7 md:pr-4 md:text-sm">
        <span className="absolute left-3 top-[11px] size-2 -translate-y-1 rounded-full bg-green md:left-[15px] md:top-[18px]"></span>
        Habit drive
      </span>
      <span className="rounded-full bg-green px-3 py-2 text-extrasm text-black md:px-4 md:py-[11px] md:text-sm">
        View statistics
      </span>
      <span className="rounded-full bg-white px-3 py-2 text-extrasm text-gray-900 shadow-md md:px-4 md:py-[11px] md:text-sm">
        Personal rate setting
      </span>
    </div>
  );
}
