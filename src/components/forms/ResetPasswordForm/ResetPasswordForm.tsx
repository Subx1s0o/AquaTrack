import { yupResolver } from '@hookform/resolvers/yup';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';

import Icon from '@/components/ui/Icon';
import Input from '@/components/ui/Input';

import validationSchema from './validationSchema';
import { ResetPasswordFormValues } from './validationSchema';

export default function ResetPasswordForm() {
  const { control, handleSubmit } = useForm<ResetPasswordFormValues>({
    resolver: yupResolver(validationSchema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [searchParams] = useSearchParams();

  const token = searchParams.get('token');

  const onSubmit = (data: ResetPasswordFormValues) => {
    console.log('Reset password data:', { ...data, token });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-[436px]">
      <h2 className="mb-8 text-4xl font-bold text-darkGrey md:text-5xl">
        Set New Password
      </h2>
      <div className="mb-4 md:mb-5">
        <Input
          control={control}
          name="password"
          label="New Password"
          placeholder="Enter new password"
          type="password"
          className="text-black placeholder:text-base md:text-md md:placeholder:text-md"
        />
      </div>

      <div className="relative mb-8">
        <Input
          control={control}
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm your new password"
          type={showPassword ? 'text' : 'password'}
          className="text-black placeholder:text-base md:text-md md:placeholder:text-md"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-[16px] top-[46px] hidden md:block"
        >
          <Icon
            id={showPassword ? 'icon-eye' : 'icon-eye-off'}
            w={20}
            h={20}
            className="fill-black"
          />
        </button>
      </div>
      <button
        type="submit"
        className="h-[50px] w-full rounded-[30px] bg-green text-base font-bold text-darkGrey transition-colors hover:bg-green-selector focus-visible:bg-green-selector active:bg-grey active:text-grey-selector md:h-[60px] md:text-md"
      >
        Reset Password
      </button>
    </form>
  );
}
