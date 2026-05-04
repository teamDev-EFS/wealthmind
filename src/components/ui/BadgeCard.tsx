import React from 'react';
import { motion } from 'framer-motion';

interface BadgeCardProps {
  label: string;
  icon: React.ReactNode;
  color?: string;
}

const BadgeCard: React.FC<BadgeCardProps> = ({ label, icon, color = 'bg-primary/10 text-primary' }) => (
  <motion.div
    whileHover={{ y: -2, scale: 1.01 }}
    whileTap={{ scale: 0.98 }}
    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full font-medium text-xs ${color} shadow`}
  >
    {icon}
    {label}
  </motion.div>
);

export default BadgeCard;
