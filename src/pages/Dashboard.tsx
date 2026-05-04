import { useState, useMemo } from 'react';
import {
  Wallet,
  TrendingUp,
  TrendingDown,
  PiggyBank,
  ArrowUpRight,
  ArrowDownRight,
  Briefcase,
  ShoppingCart,
  Music,
  DollarSign,
  Car,
  Home,
  Plane,
  Shield,
  GraduationCap,
  Banknote,
  LineChart as LineChart,
  Brain,
  ChevronRight,
  Sparkles,
  Target,
  BookOpen,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { netWorthHistory, cashFlowData, statCards } from '../data/dashboard';
import { holdings } from '../data/portfolio';
import { recentTransactions } from '../data/transactions';
import { savingsGoals } from '../data/goals';
import { learningModules } from '../data/modules';

const statIconMap = {
  wallet: Wallet,
  'trending-up': TrendingUp,
  'trending-down': TrendingDown,
  'piggy-bank': PiggyBank,
} as const;

const goalIconMap = {
  home: Home,
  plane: Plane,
  shield: Shield,
  'graduation-cap': GraduationCap,
} as const;

const moduleIconMap = {
  banknote: Banknote,
  'line-chart': LineChart,
  'piggy-bank': PiggyBank,
  brain: Brain,
} as const;

const txIconMap: Record<string, typeof Briefcase> = {
  briefcase: Briefcase,
  'shopping-cart': ShoppingCart,
  'trending-up': TrendingUp,
  music: Music,
  'dollar-sign': DollarSign,
  car: Car,
};

const accentBg: Record<string, string> = {
  blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  green: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  red: 'bg-red-500/10 text-red-400 border-red-500/20',
  amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  purple: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
};

type Period = '1W' | '1M' | '3M' | '1Y';

export default function LayoutDashboard() {
  const [period, setPeriod] = useState<Period>('1Y');

  const filteredNetWorth = useMemo(() => {
    switch (period) {
      case '1W':
        return netWorthHistory.slice(-2);
      case '1M':
        return netWorthHistory.slice(-3);
      case '3M':
        return netWorthHistory.slice(-4);
      default:
        return netWorthHistory;
    }
  }, [period]);

  const portfolioTotal = holdings.reduce((sum, h) => sum + h.value, 0);

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-gray-50">
      <div className="mx-auto max-w-[1440px] px-6 py-8 lg:px-10">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-sm text-blue-400">
              <Sparkles className="h-4 w-4" />
              <span>Good evening, Aarav</span>
            </div>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-50">
              Financial LayoutDashboard
            </h1>
            <p className="mt-1 text-sm text-gray-400">
              Where your money is, where it's going, and how to grow it like the wealthy do.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500">
            <Target className="h-4 w-4" />
            Set new goal
          </button>
        </div>

        {/* Stat Cards */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {statCards.map((stat) => {
            const Icon = statIconMap[stat.icon];
            const isUp = stat.trend === 'up';
            return (
              <div
                key={stat.id}
                className="group rounded-xl border border-gray-800 bg-gray-900/50 p-5 transition-all hover:border-gray-700 hover:bg-gray-900"
              >
                <div className="flex items-start justify-between">
                  <div className={`rounded-lg border p-2.5 ${accentBg[stat.accent]}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div
                    className={`inline-flex items-center gap-0.5 rounded-md px-2 py-1 text-xs font-semibold ${
                      isUp ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'
                    }`}
                  >
                    {isUp ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                    {stat.change}%
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-sm text-gray-400">{stat.label}</div>
                  <div className="mt-1 text-2xl font-bold tracking-tight text-gray-50">{stat.value}</div>
                  <div className="mt-1 text-xs text-gray-500">{stat.changeLabel}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Charts Row */}
        <div className="mb-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* Net Worth Trend */}
          <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-50">Net Worth Trend</h2>
                <p className="mt-0.5 text-sm text-gray-400">Compounding wealth, one month at a time</p>
              </div>
              <div className="flex rounded-lg border border-gray-800 bg-gray-950 p-1">
                {(['1W', '1M', '3M', '1Y'] as Period[]).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPeriod(p)}
                    className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
                      period === p
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={filteredNetWorth} margin={{ top: 5, right: 5, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="netWorthGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.4} />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="#1F2937" strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="date" stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis
                    stroke="#6B7280"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#111827',
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#F9FAFB',
                    }}
                    formatter={(value: number) => [`$${value.toLocaleString()}`, 'Net Worth']}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#3B82F6"
                    strokeWidth={2}
                    fill="url(#netWorthGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Portfolio Donut */}
          <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-50">Portfolio</h2>
              <p className="mt-0.5 text-sm text-gray-400">${portfolioTotal.toLocaleString()} invested</p>
            </div>
            <div className="relative h-44 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={holdings}
                    dataKey="value"
                    nameKey="category"
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={75}
                    paddingAngle={2}
                    stroke="none"
                  >
                    {holdings.map((h) => (
                      <Cell key={h.symbol} fill={h.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#111827',
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#F9FAFB',
                    }}
                    formatter={(v: number) => [`$${v.toLocaleString()}`, '']}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-xs text-gray-400">Total</div>
                <div className="text-lg font-bold text-gray-50">${(portfolioTotal / 1000).toFixed(1)}k</div>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              {holdings.map((h) => (
                <div key={h.symbol} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: h.color }} />
                    <span className="text-gray-300">{h.category}</span>
                  </div>
                  <span className="font-medium text-gray-400">{h.allocation}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cash Flow + Transactions */}
        <div className="mb-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-50">Cash Flow</h2>
                <p className="mt-0.5 text-sm text-gray-400">Income vs expenses, last 6 months</p>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-gray-400">Income</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  <span className="text-gray-400">Expenses</span>
                </div>
              </div>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={cashFlowData} margin={{ top: 5, right: 5, left: 0, bottom: 0 }}>
                  <CartesianGrid stroke="#1F2937" strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis
                    stroke="#6B7280"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#111827',
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#F9FAFB',
                    }}
                    cursor={{ fill: '#1F2937', opacity: 0.4 }}
                    formatter={(v: number) => `$${v.toLocaleString()}`}
                  />
                  <Bar dataKey="income" fill="#10B981" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="expenses" fill="#EF4444" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-50">Recent Activity</h2>
              <button className="text-xs font-medium text-blue-400 hover:text-blue-300">View all</button>
            </div>
            <div className="space-y-3">
              {recentTransactions.slice(0, 6).map((tx) => {
                const Icon = txIconMap[tx.icon] || DollarSign;
                const isIncome = tx.type === 'income';
                return (
                  <div
                    key={tx.id}
                    className="flex items-center justify-between gap-3 rounded-lg p-2 transition-colors hover:bg-gray-800/50"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                          isIncome ? 'bg-emerald-500/10 text-emerald-400' : 'bg-gray-800 text-gray-300'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="truncate text-sm font-medium text-gray-100">{tx.merchant}</div>
                        <div className="text-xs text-gray-500">{tx.date} · {tx.category}</div>
                      </div>
                    </div>
                    <div
                      className={`shrink-0 text-sm font-semibold ${
                        isIncome ? 'text-emerald-400' : 'text-gray-200'
                      }`}
                    >
                      {isIncome ? '+' : '−'}${tx.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Savings Goals */}
        <div className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-50">Savings Goals</h2>
              <p className="mt-0.5 text-sm text-gray-400">Pay yourself first — every wealthy person's secret</p>
            </div>
            <button className="text-xs font-medium text-blue-400 hover:text-blue-300">Manage goals</button>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {savingsGoals.map((goal) => {
              const Icon = goalIconMap[goal.icon];
              const pct = Math.round((goal.current / goal.target) * 100);
              return (
                <div
                  key={goal.id}
                  className="group rounded-xl border border-gray-800 bg-gray-900/50 p-5 transition-all hover:border-gray-700 hover:bg-gray-900"
                >
                  <div className="flex items-start justify-between">
                    <div className={`rounded-lg border p-2.5 ${accentBg[goal.accent]}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-xs text-gray-500">{goal.deadline}</span>
                  </div>
                  <div className="mt-4">
                    <div className="text-sm font-semibold text-gray-100">{goal.name}</div>
                    <div className="mt-1 text-xs text-gray-500">
                      ${goal.current.toLocaleString()} of ${goal.target.toLocaleString()}
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-800">
                      <div
                        className="h-full rounded-full bg-blue-500 transition-all"
                        style={{ width: `${Math.min(pct, 100)}%` }}
                      />
                    </div>
                    <div className="mt-2 flex items-center justify-between text-xs">
                      <span className="text-gray-400">{pct}% saved</span>
                      <span className="font-medium text-gray-300">${(goal.target - goal.current).toLocaleString()} to go</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Learning Modules */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-50">Continue Learning</h2>
              <p className="mt-0.5 text-sm text-gray-400">The habits that turn earners into investors</p>
            </div>
            <button className="inline-flex items-center gap-1 text-xs font-medium text-blue-400 hover:text-blue-300">
              Browse library <ChevronRight className="h-3 w-3" />
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {learningModules.map((m) => {
              const Icon = moduleIconMap[m.icon];
              return (
                <div
                  key={m.id}
                  className="group flex cursor-pointer flex-col rounded-xl border border-gray-800 bg-gray-900/50 p-5 transition-all hover:-translate-y-0.5 hover:border-blue-500/40 hover:bg-gray-900"
                >
                  <div className="flex items-start justify-between">
                    <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-2.5 text-blue-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-md border border-gray-700 bg-gray-800/60 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-gray-400">
                      {m.level}
                    </span>
                  </div>
                  <div className="mt-4 flex-1">
                    <div className="text-sm font-semibold text-gray-100">{m.title}</div>
                    <p className="mt-1 text-xs leading-relaxed text-gray-400">{m.description}</p>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="inline-flex items-center gap-1">
                        <BookOpen className="h-3 w-3" />
                        {m.lessons} lessons · {m.duration}
                      </span>
                      <span className="font-medium text-gray-300">{m.progress}%</span>
                    </div>
                    <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-gray-800">
                      <div
                        className={`h-full rounded-full transition-all ${
                          m.progress === 100 ? 'bg-emerald-500' : 'bg-blue-500'
                        }`}
                        style={{ width: `${m.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
