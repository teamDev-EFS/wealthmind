export interface User {
  id: string;
  name: string;
  avatar: string;
  xp: number;
  streak: number;
  completedLessons: string[];
  netWorth: number;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: number;
  icon: string;
  content: string;
  tips: string[];
}

export interface Habit {
  id: string;
  title: string;
  description: string;
  frequency: string;
  icon: string;
  progress: number;
}

export interface WealthTip {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface InvestmentPlan {
  id: string;
  name: string;
  description: string;
  expectedReturn: number;
  riskLevel: 'Low' | 'Medium' | 'High';
  duration: number;
}

export interface CashflowData {
  month: string;
  income: number;
  expenses: number;
  savings: number;
}

export interface LeaderboardUser {
  id: string;
  name: string;
  avatar: string;
  xp: number;
  netWorth: number;
  rank: number;
}

export interface Quote {
  id: string;
  text: string;
  author: string;
  avatar: string;
}
