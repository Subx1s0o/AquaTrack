import { useState } from 'react';

import { LogOutModal } from '@/components/modals/LogOutModal';
import Modal from '@/components/modals/Modal/Modal';
import Icon from '@/components/ui/Icon';

function UserBarPopover() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  return (
    <>
      <div className="absolute right-0 top-full mt-2 flex w-full flex-col items-center justify-center rounded-2xl bg-white px-5 py-3.5 shadow-[0px_4px_50px_0px_rgba(0,0,0,0.10)]">
        <div className="flex flex-col gap-2">
          <button
            className="flex items-center gap-2 font-poppins text-base font-bold text-darkGrey hover:text-darkGrey/40 md:text-ms"
            onClick={() => {
              setIsSettingsOpen(true);
            }}
          >
            <Icon id="icon-settings" w={16} h={16} className="text-inherit" />
            Settings
          </button>

          <button
            className="flex items-center gap-2 font-poppins text-base font-bold text-darkGrey hover:text-darkGrey/40 md:text-ms"
            onClick={() => {
              setIsLogoutOpen(true);
            }}
          >
            <Icon id="icon-log-out" w={16} h={16} className="text-inherit" />
            Log out
          </button>
        </div>
      </div>
      {isLogoutOpen && (
        <Modal isOpen={isLogoutOpen} onClose={() => setIsLogoutOpen(false)}>
          <LogOutModal onClose={() => setIsLogoutOpen(false)} />
        </Modal>
      )}
    </>
  );
}

export default UserBarPopover;
