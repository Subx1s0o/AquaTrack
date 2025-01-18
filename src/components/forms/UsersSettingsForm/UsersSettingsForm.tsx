import { yupResolver } from '@hookform/resolvers/yup';

import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Input from '@/components/ui/Input';

import AvatarUpload from './SettingsComponents/AvatarUpload';
import WaterNormDescription from './SettingsComponents/WaterNormDescription';
import validationSettingSchema, {
  SettingsFormValues,
} from './validationSchemaUsersSettings';

interface UsersSettingsFormProps {
  onClose?: () => void;
}

const UsersSettingsForm: React.FC<UsersSettingsFormProps> = ({ onClose }) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm<SettingsFormValues>({
    resolver: yupResolver(validationSettingSchema),
  });

  const height = window.innerHeight;
  const maxHeight = height * 0.8;

  const onSubmit: SubmitHandler<SettingsFormValues> = data => {
    console.log(data);
    onClose?.();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-full max-w-4xl lg:max-w-6xl"
    >
      <div
        className="mt-40 flex min-h-screen flex-col justify-between overflow-y-auto p-2.5 sm:p-5 md:p-10"
        style={{ maxHeight: maxHeight }}
      >
        <h2 className="font-poppins text-xl font-bold md:text-3xl">Setting</h2>

        <AvatarUpload setValue={setValue} />

        <div className="flex flex-col gap-6">
          <div>
            <p className="mb-[14px] font-poppins text-md font-bold leading-tight text-darkGrey md:text-lg md:leading-normal">
              Your gender identity
            </p>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 rounded-full border border-green p-1">
                <input
                  type="radio"
                  name="gender"
                  value="woman"
                  className="peer hidden"
                />
                <span className="rounded-full p-2 peer-checked:bg-green"></span>
              </label>
              <span className="text-black">Woman</span>
              <label className="flex items-center gap-2 rounded-full border border-green p-1">
                <input
                  type="radio"
                  name="gender"
                  value="man"
                  className="peer hidden"
                />
                <span className="rounded-full p-2 peer-checked:bg-green"></span>
              </label>
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

                <WaterNormDescription />

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

            <div className="flex flex-col gap-2 lg:w-1/2">
              <div className="mb-4">
                <p className="mb-2 font-poppins text-base font-bold text-[#2f2f2f]">
                  Your weight in kilograms:
                </p>
                <Input name="weight" control={control} type="number" />
              </div>
              <div className="lg:mb-6">
                <p className="mb-2 font-poppins text-base font-bold text-[#2f2f2f]">
                  The time of active participation in sports:
                </p>
                <Input name="activityTime" control={control} type="number" />
              </div>
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
            className="mt-6 rounded-[30px] bg-green px-10 py-[14px] font-bold outline-none transition-colors hover:bg-green-selector focus-visible:bg-green-selector active:bg-grey active:text-grey-selector md:px-10 md:py-[18px] md:text-md"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default UsersSettingsForm;
