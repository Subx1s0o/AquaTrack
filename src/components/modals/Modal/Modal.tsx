import { PropsWithChildren } from 'react';
import { Modal as ResponsiveModal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

import Icon from '../../ui/Icon';
import css from './mainModalStyles.module.css';

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <ResponsiveModal
      open={isOpen}
      onClose={onClose}
      focusTrapped={false}
      center
      closeIcon={
        <Icon id="icon-x" w={24} h={24} className={css.closeModalIcon} />
      }
      classNames={{
        overlay: css.mainModalOverlay,
        modal: css.mainModalContent,
        closeButton: css.closeMainModalButton,
      }}
    >
      {children}
    </ResponsiveModal>
  );
};

export default Modal;
