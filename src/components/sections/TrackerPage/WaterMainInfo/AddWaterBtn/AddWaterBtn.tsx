import React from 'react';

import Icon from '../../../../ui/Icon';

// import css from './AddWaterBtn.module.css';

interface AddWaterBtnProps {
  onClick: () => void;
}

const AddWaterBtn: React.FC<AddWaterBtnProps> = ({ onClick }) => {
  return (
    // !перевірити іконку + кольори,розміри,ховер. прописати відкриття модалки)
    // кнопка до 375 -завелика ( треба w120)
    <button
      type="button"
      className={
        'group absolute bottom-8 right-4 z-20 flex h-[46px] w-[140px] items-center justify-center gap-2 rounded-full bg-darkGrey px-0 py-[14px] font-poppins text-base font-bold text-white transition-colors hover:text-green focus-visible:text-green md:bottom-16 md:right-8 md:h-[60px] md:w-[178px] md:py-[18px] md:text-lg lg:hover:stroke-green'
      }
      onClick={onClick}
    >
      <Icon
        id={'icon-plus'}
        w={24}
        h={24}
        className={
          'flex size-4 items-center justify-center stroke-white transition-colors group-hover:stroke-green group-focus-visible:stroke-green md:size-6'
        }
      ></Icon>
      <span>Add Water</span>
    </button>
  );
};

export default AddWaterBtn;
