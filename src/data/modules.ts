export interface LearningModule {
  id: string;
  title: string;
  description: string;
  duration: string;
  lessons: number;
  progress: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: 'Cash Flow' | 'Investing' | 'Saving' | 'Mindset';
  icon: 'banknote' | 'line-chart' | 'piggy-bank' | 'brain';
}

export const learningModules: LearningModule[] = [
  {
    id: 'm1',
    title: 'Master Your Cash Flow',
    description: 'Track every dollar in and out — the foundation rich people never skip.',
    duration: '45 min',
    lessons: 6,
    progress: 67,
    level: 'Beginner',
    category: 'Cash Flow',
    icon: 'banknote',
  },
  {
    id: 'm2',
    title: 'Index Fund Investing 101',
    description: 'How Buffett tells everyday investors to build wealth on autopilot.',
    duration: '1h 20min',
    lessons: 9,
    progress: 33,
    level: 'Beginner',
    category: 'Investing',
    icon: 'line-chart',
  },
  {
    id: 'm3',
    title: 'The 50/30/20 Saving Rule',
    description: 'A simple framework to save aggressively without feeling deprived.',
    duration: '30 min',
    lessons: 4,
    progress: 100,
    level: 'Beginner',
    category: 'Saving',
    icon: 'piggy-bank',
  },
  {
    id: 'm4',
    title: 'Millionaire Mindset Habits',
    description: 'Daily routines and mental models from self-made millionaires.',
    duration: '55 min',
    lessons: 7,
    progress: 0,
    level: 'Intermediate',
    category: 'Mindset',
    icon: 'brain',
  },
];
