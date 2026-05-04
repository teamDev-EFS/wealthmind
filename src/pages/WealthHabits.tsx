import { motion } from 'framer-motion';
import habits from '../data/habits';
import HabitCard from '../components/ui/HabitCard';
import wealthTips from '../data/wealthTips';
import BadgeCard from '../components/ui/BadgeCard';
import * as Icons from 'lucide-react';

const WealthHabits = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-8"
    >
      <h1 className="text-4xl font-bold tracking-tight mb-4">Wealth Habits</h1>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Daily & Weekly Habits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {habits.map((h) => (
            <HabitCard key={h.id} {...h} />
          ))}
        </div>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Wealth Tips</h2>
        <div className="flex flex-wrap gap-4">
          {wealthTips.map((tip) => {
            const Icon = (Icons as any)[tip.icon] || Icons.Star;
            return <BadgeCard key={tip.id} label={tip.title} icon={<Icon className="w-4 h-4" />} />;
          })}
        </div>
      </section>
    </motion.div>
  );
};

export default WealthHabits;
