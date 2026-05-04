import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SavingsChart from '../components/charts/SavingsChart';
import cashflowData from '../data/cashflowData';
import Button from '../components/ui/Button';

const SavingsPlanner = () => {
  const [goal, setGoal] = useState(200000);
  const [monthly, setMonthly] = useState(15000);
  const [months, setMonths] = useState(12);
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (goal <= 0 || monthly <= 0 || months <= 0) {
      setError('All values must be positive.');
      return;
    }
    setError('');
    setResult(monthly * months >= goal ? monthly * months : null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-8"
    >
      <h1 className="text-4xl font-bold tracking-tight mb-4">Savings Planner</h1>
      <form onSubmit={handleSubmit} className="bg-surface-2 rounded-xl p-6 shadow-md border border-border max-w-xl mx-auto space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Savings Goal (₹)</label>
          <input
            type="number"
            className="w-full border border-border rounded-lg px-3 py-2 bg-surface-1 text-text-primary focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            value={goal}
            onChange={e => setGoal(Number(e.target.value))}
            min={1}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Monthly Savings (₹)</label>
          <input
            type="number"
            className="w-full border border-border rounded-lg px-3 py-2 bg-surface-1 text-text-primary focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            value={monthly}
            onChange={e => setMonthly(Number(e.target.value))}
            min={1}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Months</label>
          <input
            type="number"
            className="w-full border border-border rounded-lg px-3 py-2 bg-surface-1 text-text-primary focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            value={months}
            onChange={e => setMonths(Number(e.target.value))}
            min={1}
            required
          />
        </div>
        {error && <div className="text-danger text-sm mt-1">{error}</div>}
        <Button type="submit" variant="primary" className="mt-2">Calculate</Button>
      </form>
      {result !== null && (
        <div className="text-center mt-6">
          <div className="text-lg font-semibold text-success">Total Savings: ₹{result.toLocaleString('en-IN')}</div>
        </div>
      )}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Savings Growth</h2>
        <SavingsChart data={cashflowData.map(d => ({ month: d.month, savings: d.savings }))} />
      </section>
    </motion.div>
  );
};

export default SavingsPlanner;
