import { useEffect } from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import UsersSettingsForm from '../../forms/UsersSettingsForm/UsersSettingsForm';
import css from './UserSettingsModal.module.css';

// Оголошуємо тип пропсів для компонента UserSettingsModal
interface UserSettingsModalProps {
  onClose: () => void; // Тип для onClose - функція без параметрів та повертає void
}

const UserSettingsModal: React.FC<UserSettingsModalProps> = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div className={css.usersSettingModalOverlay} onClick={handleOverlayClick}>
      <div className={css.usersSettingModal} onClick={e => e.stopPropagation()}>
        <div className={css.usersSettingModalHeader}>
          <h2 className={css.usersSettingModalTitle}>Setting</h2>
          <button className={css.usersSettingModalButton} onClick={onClose}>
            <svg width="24" height="24" className={css.usersSettingModalIcon}>
              <use href="/icons/sprite.svg#close"></use>
            </svg>
          </button>
        </div>

        <div className={css.usersSettingModalContent}>
          <UsersSettingsForm onClose={onClose} />
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default UserSettingsModal;
