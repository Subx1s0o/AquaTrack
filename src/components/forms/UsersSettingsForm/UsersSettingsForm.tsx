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
  onClose?: () => void;
}

const UsersSettingsForm: React.FC<UsersSettingsFormProps> = ({ onClose }) => {
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

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
    onClose?.();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-2.5 sm:p-5 md:p-10">
        <h2 className="font-poppins text-xl font-bold md:text-3xl">Setting</h2>
        <div className="mb-10 flex flex-col items-center justify-center gap-4 p-4">
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
                className="fill-none stroke-black stroke-[4px] md:size-[20px]"
              />
              <span className="font-poppins text-base md:leading-normal">
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
          <div className="mb-6">
            <p className="mb-[14px] font-poppins text-md font-bold leading-tight text-darkGrey md:text-lg md:leading-normal">
              Your gender identity
            </p>
            <div className="flex size-5 gap-3">
              <Input
                control={control}
                name="gender"
                type="radio"
                value="woman"
                className="size-5 rounded-full border-green text-green"
              />
              <span className="text-black">Woman</span>
              <Input
                control={control}
                name="gender"
                type="radio"
                value="man"
                className="size-5 rounded-full border-green text-green"
              />
              <span className="text-black">Man</span>
            </div>
          </div>

          <div className="lg:flex lg:gap-10">
            <div className="mb-6 flex flex-col gap-6 md:mb-6 lg:w-1/2">
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
                <p className="font-poppins text-md font-bold leading-tight text-darkGrey md:text-lg md:leading-normal">
                  My daily norma
                </p>
                <div className="gap-10 md:flex">
                  <div className="mb-2 flex flex-col gap-2">
                    <p className="mb-1">For woman:</p>
                    <p className="font-bold text-green">
                      V = (M * 0.03) + (T * 0.4)
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className="mb-1">For man:</p>
                    <p className="font-bold text-green">
                      V = (M * 0.04) + (T * 0.6)
                    </p>
                  </div>
                </div>

                <p className="rounded-[15px] border border-solid border-grey-selector p-4 text-sm text-darkGrey">
                  <span className="font-bold text-green">*</span> V is the
                  volume of the water norm in liters per day, M is your body
                  weight, T is the time of active sports, or another type of
                  activity commensurate in terms of loads (in the absence of
                  these, you must set 0).
                </p>

                <p className="text-md">
                  <span className="size-[18px] font-bold text-green">!</span>{' '}
                  Active time in hours
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 lg:w-1/2">
              <p>Your weight in kilograms:</p>
              <Input name="weight" control={control} type="number" />

              <p>The time of active participation in sports:</p>
              <Input name="activityTime" control={control} type="number" />

              <div className="flex flex-col items-start justify-start gap-3.5">
                <p className="font-poppins text-ms font-normal leading-[1.29] text-black md:leading-6">
                  The required amount of water in liters per day:
                  <span className="size-[18px] font-bold text-green">
                    {' '}
                    1.8 L
                  </span>
                </p>
              </div>

              <Input
                name="waterDrink"
                control={control}
                type="number"
                label="Write down how much water you will drink:"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-[10px]">
          <button
            disabled={isSubmitting}
            type="submit"
            className={
              'mt-6 rounded-[30px] bg-green px-10 py-[14px] font-bold outline-none transition-colors hover:bg-green-selector focus-visible:bg-green-selector active:bg-grey active:text-grey-selector md:px-10 md:py-[18px] md:text-md'
            }
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default UsersSettingsForm;
