/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentProps } from 'react';
import { Control, useController } from 'react-hook-form';

import { cn } from '@/utils/cn';

type FormInputProps = ComponentProps<'input'> & {
  control: Control<any>;
  label?: string;
  name: string;
};
export default function Input({
  control,
  name,
  label,
  className,
  ...inputProps
}: FormInputProps) {
  const {
    formState: { errors },
  } = useController({ control, name });

  return (
    <div className="flex flex-col">
      {label && (
        <label className="font-poppins mb-2 text-base font-bold">{label}</label>
      )}
      <input
        {...control.register(name)}
        {...inputProps}
        className={cn(
          `focus-visible:border-green h-[46px] w-full rounded-[15px] border border-gray-300 bg-transparent px-4 text-base outline-none transition-colors placeholder:text-gray-500 md:h-[56px] ${className}`,
          {
            'border-error': errors?.[name],
          },
        )}
      />
      {errors[name] && (
        <p className="text-sm text-red-500">
          {errors[name].message?.toString()}
        </p>
      )}
    </div>
  );
}
