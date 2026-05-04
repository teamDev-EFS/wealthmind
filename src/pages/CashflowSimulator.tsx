import React, { useState } from 'react';
import { motion } from 'framer-motion';
import cashflowData from '../data/cashflowData';
import CashflowChart from '../components/charts/CashflowChart';
import { formatCurrency } from '../utils/formatCurrency';
import Button from '../components/ui/Button';

const CashflowSimulator = () => {
  const [data, setData] = useState(cashflowData);
  const [editing, setEditing] = useState<string | null>(null);
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [savings, setSavings] = useState(0);

  const handleEdit = (month: string) => {
    const d = data.find((d) => d.month === month);
    if (d) {
      setEditing(month);
      setIncome(d.income);
      setExpenses(d.expenses);
      setSavings(d.savings);
    }
  };

  const handleSave = () => {
    setData((prev) =>
      prev.map((d) =>
        d.month === editing ? { ...d, income, expenses, savings } : d
      )
    );
    setEditing(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-8"
    >
      <h1 className="text-4xl font-bold tracking-tight mb-4">Cashflow Simulator</h1>
      <CashflowChart data={data} />
      <div className="overflow-x-auto mt-8">
        <table className="min-w-full rounded-xl overflow-hidden border border-border bg-surface-2">
          <thead className="bg-surface-1 text-xs uppercase tracking-widest text-text-tertiary">
            <tr>
              <th className="px-6 py-3 text-left">Month</th>
              <th className="px-6 py-3 text-left">Income</th>
              <th className="px-6 py-3 text-left">Expenses</th>
              <th className="px-6 py-3 text-left">Savings</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.month} className="even:bg-surface-1/50 hover:bg-primary-subtle transition-colors">
                <td className="px-6 py-4 font-medium">{d.month}</td>
                <td className="px-6 py-4">{formatCurrency(d.income)}</td>
                <td className="px-6 py-4">{formatCurrency(d.expenses)}</td>
                <td className="px-6 py-4">{formatCurrency(d.savings)}</td>
                <td className="px-6 py-4">
                  <Button
                    variant="secondary"
                    onClick={() => handleEdit(d.month)}
                    className="text-xs px-3 py-1"
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/70 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-8 max-w-md w-full"
          >
            <h2 className="text-xl font-bold mb-4">Edit {editing} Cashflow</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Income</label>
                <input
                  type="number"
                  className="w-full border border-border rounded-lg px-3 py-2 bg-surface-1 text-text-primary focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  value={income}
                  onChange={e => setIncome(Number(e.target.value))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Expenses</label>
                <input
                  type="number"
                  className="w-full border border-border rounded-lg px-3 py-2 bg-surface-1 text-text-primary focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  value={expenses}
                  onChange={e => setExpenses(Number(e.target.value))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Savings</label>
                <input
                  type="number"
                  className="w-full border border-border rounded-lg px-3 py-2 bg-surface-1 text-text-primary focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  value={savings}
                  onChange={e => setSavings(Number(e.target.value))}
                />
              </div>
              <div className="flex gap-3 mt-4">
                <Button variant="primary" onClick={handleSave}>Save</Button>
                <Button variant="ghost" onClick={() => setEditing(null)}>Cancel</Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default CashflowSimulator;
