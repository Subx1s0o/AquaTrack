import { yupResolver } from '@hookform/resolvers/yup';

import * as React from 'react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Icon from '@/components/ui/Icon';
import Input from '@/components/ui/Input';

import validationSettingSchema, {
  SettingsFormValues,
} from './validationSchemaUsersSettings';

interface UsersSettingsFormProps {
  onClose: () => void;
}

const UsersSettingsForm: React.FC<UsersSettingsFormProps> = ({ onClose }) => {
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [calculateWaterNorm, setCalculateWaterNorm] = useState<string | null>(
    null,
  );

  const {
    control,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm<SettingsFormValues>({
    resolver: yupResolver(validationSettingSchema),
  });

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue('avatar', file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const onSubmit: SubmitHandler<SettingsFormValues> = (
    data: SettingsFormValues,
  ) => {
    console.log(data);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-10 flex flex-col items-center justify-center gap-2">
        {avatarPreview ? (
          <img
            className="size-[75px] rounded-full md:size-[100px]"
            src={avatarPreview}
            alt="Avatar"
          />
        ) : (
          <div className="flex size-[75px] items-center justify-center rounded-full bg-gray-300 text-xl text-white md:size-[100px]">
            N
          </div>
        )}
        <div>
          <button
            className="flex items-center justify-center gap-2 border-0 bg-transparent"
            type="button"
            onClick={() => document.getElementById('avatarInput')?.click()}
          >
            <Icon
              id="icon-upload"
              w={20}
              h={20}
              className="fill-none stroke-[#2f2f2f] stroke-[4px] md:size-[20px]"
            />
            <span className="font-poppins text-[14px] font-normal leading-[1.29] tracking-[-0.01em] text-[#2f2f2f] md:leading-[1.5]">
              Upload a photo
            </span>
          </button>
          <input
            type="file"
            id="avatarInput"
            onChange={handleAvatarChange}
            style={{ display: 'none' }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3.5">
          <p className="text-center font-poppins text-[16px] font-bold leading-[1.25] tracking-[-0.01em] text-[#323f47] md:text-[18px] md:leading-[1.5]">
            Your gender identity
          </p>
          <div className="flex gap-5">
            <Input
              control={control}
              name="gender"
              type="radio"
              value="woman"
              label="Woman"
            />
            <Input
              control={control}
              name="gender"
              type="radio"
              value="man"
              label="Man"
            />
          </div>
        </div>

        <Input
          name="name"
          control={control}
          label="Your name"
          placeholder="Enter your name"
        />

        <Input
          name="email"
          control={control}
          label="Email"
          placeholder="Enter your email"
        />

        <div className="flex flex-col gap-4">
          <p className="text-center font-poppins text-[16px] font-bold leading-[1.25] tracking-[-0.01em] text-[#323f47] md:text-[18px] md:leading-[1.5]">
            My daily norma
          </p>
          <div className="flex flex-col gap-2">
            <p>For woman:</p>
            <p className="font-bold text-[#green]">
              V = (M * 0.03) + (T * 0.4)
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p>For man:</p>
            <p className="font-bold text-[#green]">
              V = (M * 0.04) + (T * 0.6)
            </p>
          </div>
        </div>

        <p className="text-sm text-[#black]">
          <span className="text-[#green]">*</span> V is the volume of the water
          norm in liters per day, M is your body weight, T is the time of active
          sports, or another type of activity commensurate in terms of loads (in
          the absence of these, you must set 0).
        </p>

        <p className="[text-sm]">
          <span className="text-[#green]">!</span> Active time in hours
        </p>

        <Input
          name="weight"
          control={control}
          type="number"
          label="Your weight in kilograms"
        />

        <Input
          name="activityTime"
          control={control}
          type="number"
          label="The time of active participation in sports:"
        />

        <div className="flex flex-col items-start justify-start gap-3.5">
          <p className="font-poppins text-sm font-normal leading-[1.29] text-[#2f2f2f] md:leading-6">
            The required amount of water in liters per day:
          </p>
          <p className="font-poppins text-sm font-bold leading-[1.29] text-[#green] md:leading-6">
            {calculateWaterNorm} L
          </p>
        </div>

        <Input
          name="waterDrink"
          control={control}
          type="number"
          label="Write down how much water you will drink:"
        />
      </div>

      <button
        disabled={isSubmitting}
        type="submit"
        className={
          'mt-6 rounded-[30px] bg-green px-5 py-[14px] font-bold outline-none transition-colors hover:bg-green-selector focus-visible:bg-green-selector active:bg-grey active:text-grey-selector md:px-10 md:py-[18px] md:text-md'
        }
      >
        Save
      </button>
    </form>
  );
};

export default UsersSettingsForm;
