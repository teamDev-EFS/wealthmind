import { InvestmentPlan } from '../types';

const investmentPlans: InvestmentPlan[] = [
  {
    id: 'ip1',
    name: 'Index Funds',
    description: 'Low-cost, diversified funds tracking the market.',
    expectedReturn: 12,
    riskLevel: 'Low',
    duration: 10,
  },
  {
    id: 'ip2',
    name: 'Real Estate',
    description: 'Invest in property for rental income and appreciation.',
    expectedReturn: 10,
    riskLevel: 'Medium',
    duration: 15,
  },
  {
    id: 'ip3',
    name: 'Stocks',
    description: 'Direct equity investments for higher returns.',
    expectedReturn: 15,
    riskLevel: 'High',
    duration: 7,
  },
  {
    id: 'ip4',
    name: 'Gold',
    description: 'A safe haven asset for portfolio stability.',
    expectedReturn: 8,
    riskLevel: 'Low',
    duration: 5,
  },
  {
    id: 'ip5',
    name: 'Mutual Funds',
    description: 'Professionally managed funds for all risk appetites.',
    expectedReturn: 11,
    riskLevel: 'Medium',
    duration: 8,
  },
];

export default investmentPlans;
