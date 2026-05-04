import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInvestmentCalculator } from '../hooks/useCalculator';
import { formatCurrency } from '../utils/formatCurrency';
import Button from '../components/ui/Button';
import investmentPlans from '../data/investmentPlans';
import InvestmentPieChart from '../components/charts/InvestmentPieChart';

const InvestmentCalculator = () => {
  const { principal, rate, years, setPrincipal, setRate, setYears, calculate } = useInvestmentCalculator();
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (principal <= 0 || rate <= 0 || years <= 0) {
      setError('All values must be positive.');
      return;
    }
    setError('');
    const res = calculate();
    setResult(res);
  };

  const pieData = investmentPlans.map((plan) => ({ name: plan.name, value: plan.expectedReturn }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-8"
    >
      <h1 className="text-4xl font-bold tracking-tight mb-4">Investment Calculator</h1>
      <form onSubmit={handleSubmit} className="bg-surface-2 rounded-xl p-6 shadow-md border border-border max-w-xl mx-auto space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Principal Amount (₹)</label>
          <input
            type="number"
            className="w-full border border-border rounded-lg px-3 py-2 bg-surface-1 text-text-primary focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            value={principal}
            onChange={e => setPrincipal(Number(e.target.value))}
            min={1}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Annual Interest Rate (%)</label>
          <input
            type="number"
            className="w-full border border-border rounded-lg px-3 py-2 bg-surface-1 text-text-primary focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            value={rate}
            onChange={e => setRate(Number(e.target.value))}
            min={1}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Years</label>
          <input
            type="number"
            className="w-full border border-border rounded-lg px-3 py-2 bg-surface-1 text-text-primary focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            value={years}
            onChange={e => setYears(Number(e.target.value))}
            min={1}
            required
          />
        </div>
        {error && <div className="text-danger text-sm mt-1">{error}</div>}
        <Button type="submit" variant="primary" className="mt-2">Calculate</Button>
      </form>
      {result !== null && (
        <div className="text-center mt-6">
          <div className="text-lg font-semibold text-success">Future Value: {formatCurrency(result)}</div>
        </div>
      )}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Investment Plan Returns</h2>
        <InvestmentPieChart data={pieData} />
      </section>
    </motion.div>
  );
};

export default InvestmentCalculator;
