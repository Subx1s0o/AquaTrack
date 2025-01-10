import { yupResolver } from '@hookform/resolvers/yup';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Icon from '../../ui/Icon';
import Input from '../../ui/Input';
import validationSchemaSignUp from './validationSchemaSignUp';
import { SignUpFormValues } from './validationSchemaSignUp';

const SignUpForm: React.FC = () => {
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
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="mb-[32px] text-4xl font-bold text-darkGrey md:text-5xl">
          Sign Up
        </h2>

        <div className="mb-4 md:mb-5">
          <Input
            control={control}
            name="email"
            label="Email"
            placeholder="Enter your email"
            className="h-[50px] text-black placeholder:text-base md:text-md md:placeholder:text-md"
            type="email"
          />
        </div>

        <div className="relative mb-4 md:mb-5">
          <Input
            control={control}
            name="password"
            label="Password"
            placeholder="Enter your password"
            className="h-[50px] text-black placeholder:text-base md:text-md md:placeholder:text-md"
            type={showPassword ? 'text' : 'password'}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-[16px] top-[56px] hidden -translate-y-1/2 transform md:block"
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
            className="h-[50px] text-black placeholder:text-base md:text-md md:placeholder:text-md"
            type={showRepeatPassword ? 'text' : 'password'}
          />
          <button
            type="button"
            onClick={() => setShowRepeatPassword(!showRepeatPassword)}
            className="absolute right-[16px] top-[56px] hidden -translate-y-1/2 transform md:block"
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

        <div className="mt-4 text-center">
          <p className="text-base text-black/50 md:text-md">
            Already have account?{' '}
            <Link
              to="/login"
              className="font-bold text-[#2f2f2f] underline hover:no-underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
