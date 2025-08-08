'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { signOut } from '@/utils/supabase/auth';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      const { error } = await signOut();
      if (error) {
        console.error('Error signing out:', error.message);
        return;
      }
      router.push('/');
    } catch (err) {
      console.error('Unexpected error during logout:', err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex h-dvh flex-col">
      <div className="flex items-center justify-between border-b p-4">
        <h2 className="text-xl font-semibold">PaisaSync</h2>
        <Button variant="outline" onClick={handleLogout} disabled={isLoading}>
          {isLoading ? 'Signing out...' : 'Logout'}
        </Button>
      </div>
      <div className="flex grow items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">
            Welcome to PaisaSync Dashboard!
          </h1>
          <p className="text-muted-foreground text-lg">
            You have successfully logged in.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
