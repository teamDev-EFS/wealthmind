import { Habit } from '../types';

const habits: Habit[] = [
  {
    id: 'h1',
    title: 'Track Expenses Daily',
    description: 'Record every rupee spent to stay aware of your cashflow.',
    frequency: 'Daily',
    icon: 'ClipboardList',
    progress: 80,
  },
  {
    id: 'h2',
    title: 'Automate Savings',
    description: 'Set up automatic transfers to your savings account.',
    frequency: 'Monthly',
    icon: 'ArrowDownCircle',
    progress: 60,
  },
  {
    id: 'h3',
    title: 'Review Investments',
    description: 'Check your portfolio performance and rebalance if needed.',
    frequency: 'Monthly',
    icon: 'BarChart2',
    progress: 40,
  },
  {
    id: 'h4',
    title: 'Read Finance Books',
    description: 'Learn new strategies from top financial experts.',
    frequency: 'Weekly',
    icon: 'BookOpen',
    progress: 70,
  },
  {
    id: 'h5',
    title: 'Set Financial Goals',
    description: 'Define clear, actionable goals for your money.',
    frequency: 'Quarterly',
    icon: 'Target',
    progress: 50,
  },
];

export default habits;
