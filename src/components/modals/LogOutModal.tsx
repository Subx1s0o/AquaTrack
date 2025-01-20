import React from 'react';
import { useNavigate } from 'react-router-dom';

import { logout } from '@/redux/auth/operations';
import { useAppDispatch } from '@/redux/hooks';

interface LogoutModalProps {
  onClose: () => void;
}

export const LogOutModal = ({ onClose }: LogoutModalProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    await dispatch(logout());
    onClose();
    navigate('/');
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className={'text-center font-poppins text-darkGrey'}
      onClick={handleModalClick}
    >
      <h2 className={'mb-4 text-xl font-bold md:mb-6 md:text-3xl'}>Log out</h2>

      <p className={'mb-7 text-base font-normal md:mb-6 md:text-lg'}>
        Do you really want to leave?
      </p>

      <div
        className={
          'flex flex-col gap-[9px] md:flex-row md:justify-center md:gap-2.5'
        }
      >
        <button
          type="button"
          className={
            'rounded-[30px] border-none bg-green py-3.5 text-base font-bold transition-colors duration-300 ease-in-out hover:bg-[#87d28d] focus:bg-[#87d28d] focus:outline-none md:px-[59px] md:py-[18px] md:text-md'
          }
          onClick={handleLogout}
        >
          Logout
        </button>
        <button
          type="button"
          className={
            'rounded-[30px] border-none bg-grey py-3.5 text-base font-bold text-darkGrey/30 transition-colors duration-300 ease-in-out hover:text-darkGrey focus:text-darkGrey focus:outline-none md:px-[59px] md:py-[18px] md:text-md'
          }
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
