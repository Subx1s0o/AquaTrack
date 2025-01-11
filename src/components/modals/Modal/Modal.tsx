import { PropsWithChildren } from "react";
import { Modal as ResponsiveModal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Icon from "../../ui/Icon";
import css from "./mainModalStyles.module.css";

interface ModalProps extends PropsWithChildren {
	isOpen: boolean;
	onClose: () => void;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
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

//* Компонент приймає два пропси (isOpen - для стану модального вікна, onClose - для зміни стану модального вікна) та дочірній компонент (children). Стан для модалки локальний та прописується в батьківському компоненті. Якщо у ролі дочірнього компонента є компонент з формою - то тому компоненту теж через пропс передаємо функцію onClose (та викликаємо ії у функції Submit форми), яка сховає модалку при сабміті форми.
