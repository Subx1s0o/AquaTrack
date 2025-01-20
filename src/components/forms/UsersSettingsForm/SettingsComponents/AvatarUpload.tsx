import React, { useState } from 'react';
import { toast } from 'react-toastify';

import Icon from '@/components/ui/Icon';

import { updateUserAvatar } from '@/redux/auth/operations';
import { selectUser } from '@/redux/auth/selectors';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const AvatarUpload = () => {
  const [avatarPreview, setAvatarPreview] = useState<string>('');
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setAvatarPreview(preview);
      try {
        await dispatch(updateUserAvatar({ file })).unwrap();
        toast.success(`Avatar updated successfully`);
      } catch {
        toast.error(`Error while updating avatar`);
      }
    }
  };

  return (
    <div className="mb-10 flex flex-col items-center justify-center gap-4 p-4">
      <div className="flex size-[75px] items-center justify-center rounded-full bg-gray-300 text-xl text-white md:size-[100px]">
        {avatarPreview || user?.avatarURL ? (
          <img
            className="rounded-full"
            src={avatarPreview || user?.avatarURL}
            alt="Avatar"
          />
        ) : (
          <img src="/images/default-avatar.png" alt="default avatar" />
        )}
      </div>
      <button
        type="button"
        onClick={() => document.getElementById('avatarInput')?.click()}
        className="flex items-center justify-center gap-2 border-0 bg-transparent"
      >
        <Icon
          id="icon-upload"
          w={20}
          h={20}
          className="stroke-black stroke-[4px]"
        />
        <span className="font-poppins text-base">Upload a photo</span>
      </button>
      <input
        type="file"
        id="avatarInput"
        onChange={handleAvatarChange}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default AvatarUpload;
