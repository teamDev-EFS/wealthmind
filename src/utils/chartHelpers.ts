import { CashflowData } from '../types';

export function getNetSavings(data: CashflowData[]) {
  return data.reduce((sum, d) => sum + d.savings, 0);
}

export function getMonthlyLabels(data: CashflowData[]) {
  return data.map((d) => d.month);
}
