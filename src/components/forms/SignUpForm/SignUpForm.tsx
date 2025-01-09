import { yupResolver } from '@hookform/resolvers/yup';

import React from 'react';
import { useForm } from 'react-hook-form';

import Input from '../../ui/Input';
import validationSchemaSignUp from './validationSchemaSignUp';
import { SignUpFormValues } from './validationSchemaSignUp';

const SignUpForm: React.FC = () => {
  const { control, handleSubmit, reset } = useForm<SignUpFormValues>({
    resolver: yupResolver(validationSchemaSignUp),
  });

  const onSubmit = (data: SignUpFormValues) => {
    console.log('Form submitted:', data);
    reset();
  };

  return (
    <div className="">
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="">Sign Up</h2>

        <Input
          control={control}
          name="email"
          label="Email"
          placeholder="Enter your email"
          type="email"
        />

        <Input
          control={control}
          name="password"
          label="Password"
          placeholder="Enter your password"
          type="password"
        />

        <Input
          control={control}
          name="repeatPassword"
          label="Repeat password"
          placeholder="Repeat password"
          type="password"
        />

        <button type="submit" className="">
          Sign Up
        </button>

        <div className="">
          <p>
            Already have account?{' '}
            <a href="#" className="">
              Sign In
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
