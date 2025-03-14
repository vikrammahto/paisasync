import { useState, useEffect } from 'react';
import { auth } from '@/lib/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set persistence to LOCAL when the hook is first used
    setPersistence(auth, browserLocalPersistence).catch((error) => {
      console.error('Error setting auth persistence:', error);
    });

    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is signed in
        setUser(authUser);

        // Set an auth cookie for server-side authentication
        // This is a simple approach - for production, use a secure HTTP-only cookie
        document.cookie = `auth_token=true; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Strict`;
      } else {
        // User is signed out
        setUser(null);

        // Clear the auth cookie
        document.cookie = 'auth_token=; path=/; max-age=0';
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signup = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    return signOut(auth);
  };

  return { user, loading, signup, login, logout };
};
