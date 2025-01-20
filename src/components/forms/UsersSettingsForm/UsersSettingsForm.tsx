import { yupResolver } from '@hookform/resolvers/yup';
import { User } from 'types/user';

import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import ModalLoader from '@/components/modals/ModalLoader/ModalLoader';
import Input from '@/components/ui/Input';

import { updateUserInfo } from '@/redux/auth/operations';
import { selectIsLoading, selectUser } from '@/redux/auth/selectors';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchMonthData } from '@/redux/water/operations';

import AvatarUpload from './SettingsComponents/AvatarUpload';
import WaterNormDescription from './SettingsComponents/WaterNormDescription';
import validationSettingSchema from './validationSchemaUsersSettings';
import { SettingsFormValues } from './validationSchemaUsersSettings';

interface UsersSettingsFormProps {
  onClose: () => void;
}

const UsersSettingsForm: React.FC<UsersSettingsFormProps> = ({ onClose }) => {
  const [waterNorm, setWaterNorm] = useState<number | null>(null);
  const userLoading = useAppSelector(selectIsLoading);
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<SettingsFormValues>({
    resolver: yupResolver(validationSettingSchema),
    mode: 'onSubmit',
  });

  const handleBlur =
    (fieldName: keyof SettingsFormValues) =>
    (e: React.FocusEvent<HTMLInputElement>) => {
      if (e.target.value === '') {
        setValue(fieldName, 0);
      }
    };

  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  useEffect(() => {
    if (user) {
      setValue('name', user.name || '');
      setValue('email', user.email || '');
      if (user.gender === 'female' || user.gender === 'male') {
        setValue('gender', user.gender === 'female' ? 'woman' : 'man');
      }
      setValue('weight', user.weight || 0);
      setValue('activeTime', user.activeTime || 0);
      setValue(
        'dailyNorm',
        user.dailyNorm ? parseFloat((user.dailyNorm / 1000).toFixed(1)) : 0,
      );
    }
  }, [user, setValue]);

  useEffect(() => {
    const weight = watch('weight');
    const activeTime = watch('activeTime');
    const gender = watch('gender');

    if (weight != null && activeTime != null && gender) {
      let calculatedWaterNorm = 0;

      if (gender === 'woman') {
        calculatedWaterNorm = weight * 0.03 + activeTime * 0.4;
      } else if (gender === 'man') {
        calculatedWaterNorm = weight * 0.04 + activeTime * 0.6;
      }

      setWaterNorm(calculatedWaterNorm);
    }
  }, [watch('weight'), watch('activeTime'), watch('gender')]);

  const onSubmit: SubmitHandler<SettingsFormValues> = async data => {
    const updatedData: Partial<User> = {};

    if (data.name !== user?.name) updatedData.name = data.name;
    if (data.email !== user?.email) updatedData.email = data.email;

    if (data.weight !== user?.weight)
      updatedData.weight = data.weight ?? undefined;
    if (data.activeTime !== user?.activeTime)
      updatedData.activeTime = data.activeTime ?? undefined;
    if (data.dailyNorm !== user?.dailyNorm) {
      updatedData.dailyNorm =
        data.dailyNorm !== null && data.dailyNorm !== undefined
          ? data.dailyNorm * 1000
          : undefined;
    }

    if (data.gender) {
      updatedData.gender =
        data.gender === 'man'
          ? 'male'
          : data.gender === 'woman'
            ? 'female'
            : undefined;
    }

    if (Object.keys(updatedData).length === 0) {
      onClose();
      return;
    }

    try {
      await dispatch(updateUserInfo(updatedData));
      toast.success('User info updated successfully');
    } catch {
      toast.error('Error while updating user info');
    }

    await dispatch(fetchMonthData(new Date().toISOString().split('T')[0]));

    onClose();
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div onClick={handleModalClick}>
      {userLoading && <ModalLoader isOpen={userLoading}></ModalLoader>}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto w-full max-w-[303px] md:max-w-[568px] lg:max-w-[840px]"
      >
        <div className="flex flex-col">
          <h2 className="font-poppins text-xl font-bold md:text-3xl">
            Setting
          </h2>

          <AvatarUpload />

          <div className="flex flex-col gap-6 overflow-y-auto">
            {/* Gender Section */}
            <div>
              <p className="mb-[14px] font-poppins text-md font-bold leading-tight text-darkGrey md:text-lg md:leading-normal">
                Your gender identity
              </p>
              <div className="flex items-center gap-3">
                <label className="flex items-center gap-2 rounded-full border border-green p-1">
                  <input
                    type="radio"
                    {...control.register('gender')}
                    value="woman"
                    className="peer hidden"
                  />
                  <span className="rounded-full p-2 peer-checked:bg-green"></span>
                </label>
                <span className="text-black">Woman</span>
                <label className="flex items-center gap-2 rounded-full border border-green p-1">
                  <input
                    type="radio"
                    {...control.register('gender')}
                    value="man"
                    className="peer hidden"
                  />
                  <span className="rounded-full p-2 peer-checked:bg-green"></span>
                </label>
                <span className="text-black">Man</span>
              </div>
              {errors.gender && (
                <span className="mt-2 text-sm text-red-500">
                  Please select your gender.
                </span>
              )}
            </div>

            {/* Main Input Fields */}
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

              <div className="flex flex-col gap-[14px] lg:w-1/2 lg:gap-6">
                <div className="">
                  <p className="mb-2 font-poppins text-base font-bold text-[#2f2f2f]">
                    Your weight in kilograms:
                  </p>
                  <Input
                    onBlur={handleBlur('weight')}
                    name="weight"
                    control={control}
                    min="0"
                  />
                </div>
                <div className="">
                  <p className="mb-2 font-poppins text-base font-bold text-[#2f2f2f]">
                    The time of active participation in sports:
                  </p>
                  <Input
                    onBlur={handleBlur('activeTime')}
                    name="activeTime"
                    min="0"
                    control={control}
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-3.5">
                  <p className="flex flex-col gap-[5px] font-poppins text-ms font-normal leading-[1.29] text-black md:flex-row md:leading-6">
                    The required amount of water in liters per day:
                    <span className="size-[18px] whitespace-nowrap font-bold text-green">
                      {waterNorm !== null ? waterNorm.toFixed(1) : '0'} L
                    </span>
                  </p>
                </div>
                <Input
                  min="0"
                  onBlur={handleBlur('dailyNorm')}
                  name="dailyNorm"
                  control={control}
                  label="Write down how much water you will drink:"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
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
    </div>
  );
};

export default UsersSettingsForm;
