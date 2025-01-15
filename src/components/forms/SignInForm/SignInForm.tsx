import { yupResolver } from '@hookform/resolvers/yup';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Icon from '@/components/ui/Icon';
import Input from '@/components/ui/Input';

import { useAppDispatch } from '@/redux/hooks';
import { login } from '@/redux/store/operations';

import validationSchemaSignIn from './validationSchemaSignIn';
import { SignInFormValues } from './validationSchemaSignIn';

export default function SignInForm() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFormValues>({
    resolver: yupResolver(validationSchemaSignIn),
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data: SignInFormValues) => {
    const result = await dispatch(login(data));

    if (result.meta.requestStatus === 'fulfilled') {
      navigate('/');
    } else {
      console.error('Registration failed', result.payload);
    }
  };

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4 md:mb-5">
        <Input
          control={control}
          name="email"
          label="Email"
          placeholder="Enter your email"
          className="text-black placeholder:text-base md:text-md md:placeholder:text-md"
          type="email"
        />
      </div>

      <div className="relative mb-8">
        <Input
          control={control}
          name="password"
          label="Password"
          placeholder="Enter your password"
          className="text-black placeholder:text-base md:text-md md:placeholder:text-md"
          type={showPassword ? 'text' : 'password'}
        />
        <button
          type="button"
          disabled={isSubmitting}
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
        Sign In
      </button>
    </form>
  );
}
