import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '@/types';

// Note: This is a mock auth context. 
// Once you add your Firebase config, replace with actual Firebase Auth implementation.

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    // TODO: Replace with Firebase Auth
    // import { signInWithEmailAndPassword } from 'firebase/auth';
    // import { auth } from '@/lib/firebase';
    // await signInWithEmailAndPassword(auth, email, password);
    
    // Mock login for demo
    await new Promise(resolve => setTimeout(resolve, 1000));
    const mockUser: User = {
      id: '1',
      email,
      name: email.split('@')[0],
    };
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    setIsLoading(false);
  };

  const signup = async (email: string, password: string, name: string) => {
    setIsLoading(true);
    // TODO: Replace with Firebase Auth
    // import { createUserWithEmailAndPassword } from 'firebase/auth';
    // import { auth } from '@/lib/firebase';
    // await createUserWithEmailAndPassword(auth, email, password);
    
    // Mock signup for demo
    await new Promise(resolve => setTimeout(resolve, 1000));
    const mockUser: User = {
      id: '1',
      email,
      name,
    };
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    setIsLoading(false);
  };

  const logout = () => {
    // TODO: Replace with Firebase Auth
    // import { signOut } from 'firebase/auth';
    // import { auth } from '@/lib/firebase';
    // await signOut(auth);
    
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
