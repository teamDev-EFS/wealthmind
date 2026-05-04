import React from 'react';
import { motion } from 'framer-motion';

interface QuoteCardProps {
  text: string;
  author: string;
  avatar: string;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ text, author, avatar }) => (
  <motion.div
    whileHover={{ y: -2, scale: 1.01 }}
    whileTap={{ scale: 0.98 }}
    className="rounded-xl border border-border bg-surface-2 shadow p-5 flex flex-col gap-3"
  >
    <div className="flex items-center gap-3">
      <img src={avatar} alt={author} className="w-10 h-10 rounded-full object-cover border-2 border-primary" />
      <div className="text-sm font-semibold text-text-primary">{author}</div>
    </div>
    <div className="text-base text-text-secondary italic mt-2">“{text}”</div>
  </motion.div>
);

export default QuoteCard;
