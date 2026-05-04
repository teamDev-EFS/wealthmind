export interface NetWorthPoint {
  date: string;
  value: number;
}

export interface CashFlowPoint {
  month: string;
  income: number;
  expenses: number;
}

export interface StatCardData {
  id: string;
  label: string;
  value: string;
  rawValue: number;
  change: number;
  changeLabel: string;
  trend: 'up' | 'down';
  icon: 'wallet' | 'trending-up' | 'trending-down' | 'piggy-bank';
  accent: 'blue' | 'green' | 'red' | 'amber';
}

export const netWorthHistory: NetWorthPoint[] = [
  { date: 'Jan', value: 42500 },
  { date: 'Feb', value: 44120 },
  { date: 'Mar', value: 43800 },
  { date: 'Apr', value: 46200 },
  { date: 'May', value: 48900 },
  { date: 'Jun', value: 51400 },
  { date: 'Jul', value: 53200 },
  { date: 'Aug', value: 55800 },
  { date: 'Sep', value: 57300 },
  { date: 'Oct', value: 60100 },
  { date: 'Nov', value: 62450 },
  { date: 'Dec', value: 64820 },
];

export const cashFlowData: CashFlowPoint[] = [
  { month: 'Jul', income: 6800, expenses: 4200 },
  { month: 'Aug', income: 7100, expenses: 4450 },
  { month: 'Sep', income: 6950, expenses: 4180 },
  { month: 'Oct', income: 7300, expenses: 4620 },
  { month: 'Nov', income: 7200, expenses: 4350 },
  { month: 'Dec', income: 7850, expenses: 4710 },
];

export const statCards: StatCardData[] = [
  {
    id: 'net-worth',
    label: 'Net Worth',
    value: '$64,820',
    rawValue: 64820,
    change: 3.79,
    changeLabel: '+$2,370 this month',
    trend: 'up',
    icon: 'wallet',
    accent: 'blue',
  },
  {
    id: 'income',
    label: 'Monthly Income',
    value: '$7,850',
    rawValue: 7850,
    change: 9.03,
    changeLabel: '+$650 vs last month',
    trend: 'up',
    icon: 'trending-up',
    accent: 'green',
  },
  {
    id: 'expenses',
    label: 'Monthly Expenses',
    value: '$4,710',
    rawValue: 4710,
    change: 8.28,
    changeLabel: '+$360 vs last month',
    trend: 'down',
    icon: 'trending-down',
    accent: 'red',
  },
  {
    id: 'savings-rate',
    label: 'Savings Rate',
    value: '40.0%',
    rawValue: 40,
    change: 2.4,
    changeLabel: 'Target: 35%',
    trend: 'up',
    icon: 'piggy-bank',
    accent: 'amber',
  },
];
