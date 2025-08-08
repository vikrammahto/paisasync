import SignUp from '@/components/auth/SignUp';
import React from 'react';

const page = () => {
  return (
    <div className="flex h-dvh items-center justify-center">
      <div>
        <h1 className="text-4xl">Hi! there.</h1>
        <p className="mb-4">Sign up and start managing your finances.</p>
        <SignUp />
      </div>
    </div>
  );
};

export default page;
