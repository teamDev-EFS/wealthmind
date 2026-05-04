import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface StatCardProps {
  label: string;
  value: React.ReactNode;
  icon: React.ReactNode;
  trend?: 'up' | 'down';
  trendValue?: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, icon, trend, trendValue, className }) => {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.25)' }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      className={clsx(
        'rounded-xl border border-border bg-surface-1 shadow-md p-6 flex flex-col gap-2 min-w-[180px] cursor-pointer',
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
          {icon}
        </div>
        <div className="flex-1 text-xs text-text-tertiary font-medium text-right">{label}</div>
      </div>
      <div className="flex items-end gap-2 mt-2">
        <div className="text-3xl font-bold text-text-primary">{value}</div>
        {trend && trendValue && (
          <span className={clsx(
            'inline-flex items-center gap-1 text-xs font-medium',
            trend === 'up' ? 'text-success' : 'text-danger'
          )}>
            {trend === 'up' ? '↑' : '↓'} {trendValue}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default StatCard;
