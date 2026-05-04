import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CalculatorState {
  principal: number;
  rate: number;
  years: number;
  result: number;
  setPrincipal: (v: number) => void;
  setRate: (v: number) => void;
  setYears: (v: number) => void;
  setResult: (v: number) => void;
}

const CalculatorContext = createContext<CalculatorState | undefined>(undefined);

export const CalculatorProvider = ({ children }: { children: ReactNode }) => {
  const [principal, setPrincipal] = useState(10000);
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(10);
  const [result, setResult] = useState(0);

  return (
    <CalculatorContext.Provider value={{ principal, rate, years, result, setPrincipal, setRate, setYears, setResult }}>
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculator = () => {
  const ctx = useContext(CalculatorContext);
  if (!ctx) throw new Error('useCalculator must be used within CalculatorProvider');
  return ctx;
};
