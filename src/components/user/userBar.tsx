import React, { useState } from 'react';

import { selectUser } from '@/redux/auth/selectors';
import { useAppSelector } from '@/redux/hooks';

import Icon from '../ui/Icon';
import UserBarPopover from './userBarPopover';

function UserBar() {
  const user = useAppSelector(selectUser);

  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

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
  const toggleRotation = () => setIsRotated(!isRotated);

  return (
    <div className="relative">
      <button
        onClick={() => {
          togglePopover();
          toggleRotation();
        }}
        className="inline-flex items-center gap-2 rounded-full bg-gray-800 px-3 py-2 text-center font-poppins text-[14px] font-bold leading-[18px] tracking-[-0.14px] text-white"
      >
        <span>{displayName}</span>
        <img
          src={user.avatarURL || '/images/default-avatar.avif'}
          alt="avatar"
          className="size-8 rounded-full sm:size-11 lg:size-11"
        />

        <Icon
          id="icon-chevron-down"
          w={12}
          h={12}
          className={`transition-transform duration-300 ${isRotated ? 'rotate-180' : ''}`}
        />
      </button>

      {isPopoverOpen && (
        <UserBarPopover
          onClose={() => {
            setPopoverOpen(false);
            setIsRotated(false);
          }}
        />
      )}
    </div>
  );
}

export default UserBar;
