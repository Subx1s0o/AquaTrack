import { yupResolver } from '@hookform/resolvers/yup';

import { useForm } from 'react-hook-form';

import Input from '@/components/ui/Input';

import validationSchema from './validationSchema';
import { ForgotPasswordFormValues } from './validationSchema';

export default function ForgotPasswordForm() {
  const { control, handleSubmit } = useForm<ForgotPasswordFormValues>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: ForgotPasswordFormValues) => {
    console.log('Request to reset password:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-[436px]">
      <h2 className="mb-8 text-4xl font-bold text-darkGrey md:text-5xl">
        Reset Password
      </h2>

      <div className="mb-8">
        <Input
          control={control}
          name="email"
          label="Email"
          placeholder="Enter your email"
          className="text-black placeholder:text-base md:text-md md:placeholder:text-md"
        />
      </div>

      <button
        type="submit"
        className="h-[50px] w-full rounded-[30px] bg-green text-base font-bold text-darkGrey transition-colors hover:bg-green-selector focus-visible:bg-green-selector active:bg-grey active:text-grey-selector md:h-[60px] md:text-md"
      >
        Send Reset Link
      </button>
    </form>
  );
}
