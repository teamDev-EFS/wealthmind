import { useCalculator } from '../context/CalculatorContext';
import { calculateReturns } from '../utils/calculateReturns';

export function useInvestmentCalculator() {
  const { principal, rate, years, setPrincipal, setRate, setYears, setResult } = useCalculator();
  const calculate = () => {
    const result = calculateReturns(principal, rate, years);
    setResult(result);
    return result;
  };
  return { principal, rate, years, setPrincipal, setRate, setYears, calculate };
}
