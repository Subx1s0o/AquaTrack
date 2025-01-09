import { yupResolver } from '@hookform/resolvers/yup';

import React from 'react';
import { useForm } from 'react-hook-form';

import Input from '../../ui/Input';
import validationSchemaSignIn from './validationSchemaSignIn';
import { SignInFormValues } from './validationSchemaSignIn';

const SignInForm: React.FC = () => {
  const { control, handleSubmit, reset } = useForm<SignInFormValues>({
    resolver: yupResolver(validationSchemaSignIn),
  });

  const onSubmit = (data: SignInFormValues) => {
    console.log('Form submitted:', data);
    reset();
  };

  return (
    <div className="">
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="">Sign In</h2>

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

        <button type="submit" className="">
          Sign In
        </button>
        <div className="">
          <p>
            {' '}
            Don`t have an account?{' '}
            <a href="#" className="">
              Sign In
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
