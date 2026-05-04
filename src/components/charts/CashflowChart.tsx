import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { CashflowData } from '../../types';

const CashflowChart = ({ data }: { data: CashflowData[] }) => (
  <div className="w-full h-72 bg-surface-2 rounded-xl p-4 shadow-md border border-border">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 16, right: 16, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
        <XAxis dataKey="month" stroke="#9CA3AF" />
        <YAxis stroke="#9CA3AF" />
        <Tooltip />
        <Legend />
        <Bar dataKey="income" fill="#3B82F6" radius={[6, 6, 0, 0]} />
        <Bar dataKey="expenses" fill="#EF4444" radius={[6, 6, 0, 0]} />
        <Bar dataKey="savings" fill="#10B981" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default CashflowChart;
