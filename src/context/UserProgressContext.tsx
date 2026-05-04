import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../types';
import leaderboard from '../data/leaderboard';

interface UserProgressContextProps {
  user: User;
  completeLesson: (lessonId: string) => void;
  addXP: (amount: number) => void;
  incrementStreak: () => void;
}

const defaultUser = leaderboard[0];

const UserProgressContext = createContext<UserProgressContextProps | undefined>(undefined);

export const UserProgressProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({ ...defaultUser });

  const completeLesson = (lessonId: string) => {
    if (!user.completedLessons.includes(lessonId)) {
      setUser((prev) => ({
        ...prev,
        completedLessons: [...prev.completedLessons, lessonId],
        xp: prev.xp + 50,
      }));
    }
  };

  const addXP = (amount: number) => {
    setUser((prev) => ({ ...prev, xp: prev.xp + amount }));
  };

  const incrementStreak = () => {
    setUser((prev) => ({ ...prev, streak: prev.streak + 1 }));
  };

  return (
    <UserProgressContext.Provider value={{ user, completeLesson, addXP, incrementStreak }}>
      {children}
    </UserProgressContext.Provider>
  );
};

export const useUserProgress = () => {
  const ctx = useContext(UserProgressContext);
  if (!ctx) throw new Error('useUserProgress must be used within UserProgressProvider');
  return ctx;
};
