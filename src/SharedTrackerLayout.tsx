import { ReactNode } from 'react';

export default function SharedTrackerLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="grid min-h-[736px] w-full gap-4 lg:h-auto lg:grid-cols-2">
      {children}
    </div>
  );
}
