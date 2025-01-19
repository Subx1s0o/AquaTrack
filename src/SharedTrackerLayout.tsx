import { ReactNode } from 'react';

export default function SharedTrackerLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="grid size-full min-h-[736px] gap-4 lg:h-auto lg:grid-cols-2">
      {children}
    </div>
  );
}
