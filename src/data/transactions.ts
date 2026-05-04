export interface Transaction {
  id: string;
  date: string;
  merchant: string;
  category: string;
  amount: number;
  type: 'income' | 'expense';
  icon: string;
}

export const recentTransactions: Transaction[] = [
  {
    id: 't1',
    date: 'Today',
    merchant: 'Salary — Acme Corp',
    category: 'Income',
    amount: 4250,
    type: 'income',
    icon: 'briefcase',
  },
  {
    id: 't2',
    date: 'Today',
    merchant: 'Whole Foods Market',
    category: 'Groceries',
    amount: 87.42,
    type: 'expense',
    icon: 'shopping-cart',
  },
  {
    id: 't3',
    date: 'Yesterday',
    merchant: 'Vanguard Auto-Invest',
    category: 'Investment',
    amount: 800,
    type: 'expense',
    icon: 'trending-up',
  },
  {
    id: 't4',
    date: 'Yesterday',
    merchant: 'Spotify Premium',
    category: 'Subscription',
    amount: 11.99,
    type: 'expense',
    icon: 'music',
  },
  {
    id: 't5',
    date: '2 days ago',
    merchant: 'Dividend — VTI',
    category: 'Income',
    amount: 142.18,
    type: 'income',
    icon: 'dollar-sign',
  },
  {
    id: 't6',
    date: '3 days ago',
    merchant: 'Shell Gas Station',
    category: 'Transport',
    amount: 54.30,
    type: 'expense',
    icon: 'car',
  },
];
