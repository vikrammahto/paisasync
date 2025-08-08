import Login from '@/components/auth/Login';
import React from 'react';

const page = () => {
  return (
    <div className="flex h-dvh items-center justify-center">
      <div>
        <h1 className="text-4xl">Hi! there.</h1>
        <p className="mb-4">Log in and start managing your finances.</p>
        <Login />
      </div>
    </div>
  );
};

export default page;
    