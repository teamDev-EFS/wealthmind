export interface Holding {
  symbol: string;
  name: string;
  category: 'Stocks' | 'Bonds' | 'Crypto' | 'Real Estate' | 'Cash';
  value: number;
  allocation: number;
  change24h: number;
  color: string;
}

export const holdings: Holding[] = [
  {
    symbol: 'VTI',
    name: 'Total Stock Market',
    category: 'Stocks',
    value: 28400,
    allocation: 43.8,
    change24h: 1.24,
    color: '#3B82F6',
  },
  {
    symbol: 'BND',
    name: 'Total Bond Market',
    category: 'Bonds',
    value: 12100,
    allocation: 18.7,
    change24h: -0.18,
    color: '#10B981',
  },
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    category: 'Crypto',
    value: 9800,
    allocation: 15.1,
    change24h: 4.62,
    color: '#F59E0B',
  },
  {
    symbol: 'REIT',
    name: 'Real Estate Trust',
    category: 'Real Estate',
    value: 7600,
    allocation: 11.7,
    change24h: 0.41,
    color: '#8B5CF6',
  },
  {
    symbol: 'CASH',
    name: 'High-Yield Savings',
    category: 'Cash',
    value: 6920,
    allocation: 10.7,
    change24h: 0.0,
    color: '#6B7280',
  },
];
