import { useState } from 'react';
import cashflowData from '../data/cashflowData';

export function useCashflow() {
  const [data, setData] = useState(cashflowData);
  const updateMonth = (month: string, income: number, expenses: number, savings: number) => {
    setData((prev) => prev.map((d) => d.month === month ? { ...d, income, expenses, savings } : d));
  };
  return { data, updateMonth };
}
