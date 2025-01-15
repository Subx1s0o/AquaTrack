import React from 'react';
import { useAppSelector } from '@/redux/hooks';

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
    <button>
        <p>{displayName}</p>
        <img src="" alt="avatar" />
    </button>
  );
};

export default UserPanel;
