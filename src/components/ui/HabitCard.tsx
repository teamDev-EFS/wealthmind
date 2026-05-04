import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import ProgressBar from './ProgressBar';

interface HabitCardProps {
  title: string;
  description: string;
  icon: string;
  frequency: string;
  progress: number;
}

const HabitCard: React.FC<HabitCardProps> = ({ title, description, icon, frequency, progress }) => {
  const Icon = (Icons as any)[icon] || Icons.Star;
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.25)' }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      className="rounded-xl border border-border bg-surface-1 shadow-md p-5 flex flex-col gap-3 cursor-pointer"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <div className="text-base font-semibold text-text-primary">{title}</div>
          <div className="text-xs text-text-secondary mt-1">{description}</div>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <span className="text-xs bg-surface-2 px-2 py-0.5 rounded-full text-text-tertiary uppercase tracking-widest">{frequency}</span>
        <ProgressBar value={progress} className="flex-1 ml-3" />
        <span className="text-xs text-text-tertiary">{progress}%</span>
      </div>
    </motion.div>
  );
};

export default HabitCard;
