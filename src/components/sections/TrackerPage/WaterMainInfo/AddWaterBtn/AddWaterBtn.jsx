import Icon from '../../../../ui/Icon';

// import css from './AddWaterBtn.module.css';

const AddWaterBtn = ({ onClick }) => {
  return (
    // !перевірити іконку + кольори,розміри,ховер. прописати відкриття модалки(+хук?)
    // кнопка до 375 -завелика ( треба w120)
    <button
      type="button"
      className={
        'z-2 absolute bottom-8 right-4 flex h-[46px] w-[140px] items-center justify-center gap-2 rounded-full bg-darkGrey px-0 py-[14px] font-poppins text-base font-bold text-white transition-colors hover:text-green focus-visible:text-green md:bottom-16 md:right-8 md:h-[60px] md:w-[178px] md:py-[18px] md:text-lg'
      }
      onClick={onClick}
    >
      <Icon
        id={'icon-plus'}
        w={16}
        h={16}
        className={
          'h={16} w={24} md:h={24} md:w={24} text-white-400 lg:hover:text-green-400 lg:focus-visible:text-green-400 transition-colors'
        }
      ></Icon>
      <span>Add Water</span>
    </button>
  );
};

export default AddWaterBtn;
