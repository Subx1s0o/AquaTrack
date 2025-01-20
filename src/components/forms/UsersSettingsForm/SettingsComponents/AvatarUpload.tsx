import React, { useState } from 'react';

import Icon from '../../../ui/Icon';
import { SettingsFormValues } from '../validationSchemaUsersSettings';

interface AvatarUploadProps {
  setValue: (name: keyof SettingsFormValues, value: File | null) => void;
}

const AvatarUpload: React.FC<AvatarUploadProps> = ({ setValue }) => {
  const [avatarPreview, setAvatarPreview] = useState<string>('');

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue('avatar', file);
      const preview = URL.createObjectURL(file);
      setAvatarPreview(preview);
    }
  };

  return (
    <div className="mb-10 flex flex-col items-center justify-center gap-4 p-4">
      <div className="flex size-[75px] items-center justify-center rounded-full bg-gray-300 text-xl text-white md:size-[100px]">
        {avatarPreview ? (
          <img className="rounded-full" src={avatarPreview} alt="Avatar" />
        ) : (
          <span>N</span>
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
        <span>Upload a photo</span>
      </button>
      <input
        type="file"
        id="AvatarURL"
        onChange={handleAvatarChange}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default AvatarUpload;
