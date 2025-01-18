import Icon from '@/components/ui/Icon';

export default function AddWaterBtn() {
  return (
    <div className="flex items-center gap-[10px]">
      <button className="flex size-[30px] items-center justify-center rounded-[30px] bg-green text-3xl text-darkGrey transition-colors lg:hover:bg-darkGrey lg:hover:text-white lg:focus-visible:bg-darkGrey lg:focus-visible:text-white">
        <Icon className="text-inherit" id="icon-plus" w={20} h={20} />
      </button>
      <span className="font-poppins text-md font-bold text-darkGrey">
        Add water
      </span>
    </div>
  );
}
