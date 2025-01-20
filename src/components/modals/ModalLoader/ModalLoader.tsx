import { PropsWithChildren } from 'react';
import { Modal as ResponsiveModal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

import Icon from '../../ui/Icon';
import Loader from '../../ui/Loader/Loader';
import css from '../Modal/mainModalStyles.module.css';

interface ModalLoaderProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
  isLoading: boolean;
  isShowCloseIcon?: boolean;
}

const ModalLoader = ({
  isOpen,
  onClose,
  isLoading,
  isShowCloseIcon = true,
  children,
}: ModalLoaderProps) => {
  return (
    <ResponsiveModal
      open={isOpen}
      onClose={isShowCloseIcon ? onClose : () => {}}
      focusTrapped={false}
      center
      closeIcon={
        isShowCloseIcon ? (
          <Icon id="icon-x" w={24} h={24} className={css.closeModalIcon} />
        ) : null
      }
      classNames={{
        overlay: css.mainModalOverlay,
        modal: css.mainModalContent,
        closeButton: css.closeMainModalButton,
      }}
    >
      {isLoading ? <Loader /> : children}
    </ResponsiveModal>
  );
};

export default ModalLoader;
