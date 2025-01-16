import React from 'react';
import { useAppSelector } from '@/redux/hooks';
import UserBar from './userBar';

interface User {
  email: string;
  name?: string;
  avatarURL?: string;
  dailyNorm: number;
}

const UserPanel: React.FC = () => {
  const user = useAppSelector((state) => state.store.user) as User | undefined;

  if (!user) {
    return (
      <div className="p-4 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">No user data</h1>
      </div>
    );
  }

  let displayName = user.name;

  if (user.name === "User") {
    displayName = user.email.split('@')[0];
  }

  return (
    <div className="flex flex-col gap-[20px] md:flex-row md:justify-between lg:flex-row md:justify-between">
      <h2 className="text-[#323F47] text-[32px] font-normal leading-[32px] tracking-[-0.32px] sm:text-[36px] sm:leading-[38px] sm:tracking-[-0.36px] lg:leading-[38px] lg:tracking-[-0.36px]">
        Hello<span className="font-bold text-gray-700">, {displayName}!</span>
      </h2>
      <UserBar />
    </div>
  );
};

export default UserPanel;
