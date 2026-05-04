import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const NetWorthChart = ({ data }: { data: { month: string; netWorth: number }[] }) => (
  <div className="w-full h-72 bg-surface-2 rounded-xl p-4 shadow-md border border-border">
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 16, right: 16, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="netWorthGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
        <XAxis dataKey="month" stroke="#9CA3AF" />
        <YAxis stroke="#9CA3AF" />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="netWorth" stroke="#3B82F6" fill="url(#netWorthGradient)" strokeWidth={3} />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default NetWorthChart;
