import { NavLink } from 'react-router-dom';
import { Home, BookOpen, TrendingUp, BarChart3, PiggyBank, Layers, Users, Settings } from 'lucide-react';
import { useUserProgress } from '../../context/UserProgressContext';
import clsx from 'clsx';

const navItems = [
  { to: '/', label: 'LayoutDashboard', icon: Home },
  { to: '/learning-paths', label: 'Learning Paths', icon: BookOpen },
  { to: '/cashflow-simulator', label: 'Cashflow Simulator', icon: BarChart3 },
  { to: '/investment-calculator', label: 'Investment Calculator', icon: TrendingUp },
  { to: '/savings-planner', label: 'Savings Planner', icon: PiggyBank },
  { to: '/wealth-habits', label: 'Wealth Habits', icon: Layers },
  { to: '/leaderboard', label: 'Leaderboard', icon: Users },
];

const Sidebar = () => {
  const { user } = useUserProgress();
  return (
    <aside className="hidden lg:flex flex-col w-60 h-screen fixed left-0 top-0 bg-surface-1 border-r border-border z-30">
      <div className="h-16 px-6 flex items-center gap-3 text-xl font-bold tracking-tight text-primary">
        <BarChart3 className="w-7 h-7" />
        WealthMind
      </div>
      <nav className="flex-1 flex flex-col gap-1 px-3 mt-4">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              clsx(
                'flex items-center gap-3 h-10 px-3 rounded-lg text-sm font-medium transition-colors duration-150',
                isActive
                  ? 'bg-primary-subtle text-primary'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface-2'
              )
            }
            end={to === '/'}
          >
            <Icon className="w-5 h-5" />
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="mt-auto p-4 border-t border-border flex items-center gap-3">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-10 h-10 rounded-full object-cover border-2 border-primary"
        />
        <div>
          <div className="text-sm font-semibold text-text-primary">{user.name}</div>
          <div className="text-xs text-text-secondary">XP: {user.xp}</div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
