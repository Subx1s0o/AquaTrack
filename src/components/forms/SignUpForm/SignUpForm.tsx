import { yupResolver } from '@hookform/resolvers/yup';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import FormNavigationLink from '../../ui/FormNavigationLink';
import Icon from '../../ui/Icon';
import Input from '../../ui/Input';
import validationSchemaSignUp from './validationSchemaSignUp';
import { SignUpFormValues } from './validationSchemaSignUp';

export default function SignUpForm() {
  const { control, handleSubmit } = useForm<SignUpFormValues>({
    resolver: yupResolver(validationSchemaSignUp),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const onSubmit = (data: SignUpFormValues) => {
    console.log('Form submitted:', data);
  };

  return (
    <div className="">
      <h2 className="mb-8 text-4xl font-bold text-darkGrey md:text-5xl">
        Sign Up
      </h2>

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

        <div className="relative mb-4 md:mb-5">
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

        <div className="relative mb-8">
          <Input
            control={control}
            name="repeatPassword"
            label="Repeat password"
            placeholder="Repeat password"
            className="text-black placeholder:text-base md:text-md md:placeholder:text-md"
            type={showRepeatPassword ? 'text' : 'password'}
          />
          <button
            type="button"
            onClick={() => setShowRepeatPassword(!showRepeatPassword)}
            className="absolute right-[16px] top-[46px] hidden md:block"
          >
            <Icon
              id={showRepeatPassword ? 'icon-eye' : 'icon-eye-off'}
              w={20}
              h={20}
              className="fill-black"
            />
          </button>
        </div>

        <button
          type="submit"
          className="h-[50px] w-full rounded-[30px] bg-green text-base font-bold text-darkGrey md:h-[60px] md:text-md lg:hover:bg-[#87d28d] lg:focus-visible:bg-[#87d28d]"
        >
          Sign Up
        </button>
      </form>
      <FormNavigationLink
        text="Already have an account?"
        linkText="Sign In"
        to="/login"
      />
    </div>
  );
}
