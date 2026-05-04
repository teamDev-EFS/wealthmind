export interface SavingsGoal {
  id: string;
  name: string;
  current: number;
  target: number;
  deadline: string;
  icon: 'home' | 'plane' | 'shield' | 'graduation-cap';
  accent: 'blue' | 'green' | 'amber' | 'purple';
}

export const savingsGoals: SavingsGoal[] = [
  {
    id: 'g1',
    name: 'Emergency Fund',
    current: 8400,
    target: 12000,
    deadline: 'Mar 2025',
    icon: 'shield',
    accent: 'green',
  },
  {
    id: 'g2',
    name: 'House Down Payment',
    current: 18200,
    target: 60000,
    deadline: 'Dec 2026',
    icon: 'home',
    accent: 'blue',
  },
  {
    id: 'g3',
    name: 'Japan Trip',
    current: 2300,
    target: 5000,
    deadline: 'Oct 2025',
    icon: 'plane',
    accent: 'amber',
  },
  {
    id: 'g4',
    name: 'MBA Tuition',
    current: 14500,
    target: 45000,
    deadline: 'Aug 2026',
    icon: 'graduation-cap',
    accent: 'purple',
  },
];
