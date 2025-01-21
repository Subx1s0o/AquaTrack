import { useEffect, useRef, useState } from 'react';

import UsersSettingsForm from '@/components/forms/UsersSettingsForm/UsersSettingsForm';
import { LogOutModal } from '@/components/modals/LogOutModal';
import Modal from '@/components/modals/Modal/Modal';
import Icon from '@/components/ui/Icon';

import { selectUser } from '@/redux/auth/selectors';
import { useAppSelector } from '@/redux/hooks';

import UserBarPopover from './UserBarPopover';

function UserBar() {
  const user = useAppSelector(selectUser);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setPopoverOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  if (!user) {
    return (
      <div className="rounded-lg bg-gray-100 p-4 shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">
          User data not available
        </h1>
      </div>
    );
  }

  let displayName = user.name || 'Guest';

  if (user.name === 'User') {
    displayName = user.email.split('@')[0];
  }

  const togglePopover = () => setPopoverOpen(!isPopoverOpen);

  return (
    <div className="relative">
      <button
        onClick={e => {
          e.stopPropagation();
          togglePopover();
        }}
        className="inline-flex items-center gap-2 rounded-full bg-gray-800 px-3 py-2 text-center font-poppins text-[14px] font-bold leading-[18px] tracking-[-0.14px] text-white"
      >
        <span>{displayName}</span>
        <img
          src={user.avatarURL || '/images/default-avatar.avif'}
          alt="avatar"
          className="size-[38px] rounded-full md:size-11 lg:size-[48px]"
        />

        <Icon
          id="icon-chevron-down"
          w={12}
          h={12}
          className={`transition-transform duration-300 ${
            isPopoverOpen ? '' : 'rotate-180'
          }`}
        />
      </button>

      {isPopoverOpen && (
        <div ref={popoverRef}>
          <UserBarPopover
            onClose={() => setPopoverOpen(false)}
            setIsLogoutOpen={setIsLogoutOpen}
            setIsSettingsOpen={setIsSettingsOpen}
          />
        </div>
      )}
      {isLogoutOpen && (
        <Modal isOpen={isLogoutOpen} onClose={() => setIsLogoutOpen(false)}>
          <LogOutModal onClose={() => setIsLogoutOpen(false)} />
        </Modal>
      )}
      {isSettingsOpen && (
        <Modal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)}>
          <UsersSettingsForm onClose={() => setIsSettingsOpen(false)} />
        </Modal>
      )}
    </div>
  );
}

export default UserBar;
