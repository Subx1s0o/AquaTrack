import { PropsWithChildren } from 'react';

export default function SharedLayout({ children }: PropsWithChildren) {
  return (
    <div className="grid size-full grid-rows-1 gap-4 lg:h-auto lg:grid-cols-2">
      {children}
    </div>
  );
}
