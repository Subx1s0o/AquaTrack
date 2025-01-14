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
        <label className="mb-2 font-poppins text-base font-bold text-[#2f2f2f]">
          {label}
        </label>
      )}
      <input
        {...control.register(name)}
        {...inputProps}
        className={cn(
          `h-[46px] w-full rounded-[15px] border border-gray-300 bg-transparent px-4 text-base outline-none transition-colors placeholder:text-black/60 focus-visible:border-darkGrey md:h-[56px] ${className}`,
          {
            '!border-error': errors?.[name],
          },
        )}
      />
      {errors[name] && (
        <p className="mt-[10px] text-sm text-red-500">
          {errors[name].message?.toString()}
        </p>
      )}
    </div>
  );
}
