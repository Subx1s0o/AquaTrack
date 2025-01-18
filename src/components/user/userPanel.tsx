import React from 'react';
import { useAppSelector } from '@/redux/hooks';
import UserBar from './userBar';
import { selectUser } from '@/redux/auth/selectors';

function UserPanel() {
  const user = useAppSelector(selectUser);

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
    <div className="flex flex-col items-center gap-[20px] md:flex-row md:justify-between lg:flex-row md:justify-between">
      <h2 className="text-darkGrey text-2xl font-normal leading-8 tracking-tight 
md:text-3xl md:leading-9 md:tracking-tighter 
lg:leading-9 lg:tracking-tighter">
        Hello<span className="font-bold text-gray-700">, {displayName}!</span>
      </h2>
      <UserBar />
    </div>
  );
}

export default UserPanel;
