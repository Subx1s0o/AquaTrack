import { PropsWithChildren } from 'react';
import { Modal as ResponsiveModal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

import Loader from '../../ui/Loader/Loader';
import css from '../Modal/mainModalStyles.module.css';

interface ModalLoaderProps extends PropsWithChildren {
  isOpen: boolean;
  isShowCloseIcon?: boolean;
}

const ModalLoader = ({ isOpen }: ModalLoaderProps) => {
  return (
    <ResponsiveModal
      open={isOpen}
      onClose={() => {}}
      focusTrapped={false}
      center
      closeIcon={null}
      showCloseIcon={false}
      classNames={{
        overlay: css.mainModalOverlay,
        modal: css.mainModalContent,
      }}
    >
      <Loader className="py-14 !text-2xl" />
    </ResponsiveModal>
  );
};

export default ModalLoader;
