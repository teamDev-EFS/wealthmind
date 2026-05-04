import { motion } from 'framer-motion';
import leaderboard from '../data/leaderboard';
import Avatar from '../components/ui/Avatar';
import { Trophy } from 'lucide-react';

const Leaderboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-8"
    >
      <h1 className="text-4xl font-bold tracking-tight mb-4 flex items-center gap-2">
        <Trophy className="w-8 h-8 text-warning" /> Leaderboard
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full rounded-xl overflow-hidden border border-border bg-surface-2">
          <thead className="bg-surface-1 text-xs uppercase tracking-widest text-text-tertiary">
            <tr>
              <th className="px-6 py-3 text-left">Rank</th>
              <th className="px-6 py-3 text-left">User</th>
              <th className="px-6 py-3 text-left">XP</th>
              <th className="px-6 py-3 text-left">Net Worth</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((u) => (
              <tr key={u.id} className="even:bg-surface-1/50 hover:bg-primary-subtle transition-colors">
                <td className="px-6 py-4 font-bold text-lg">{u.rank}</td>
                <td className="px-6 py-4 flex items-center gap-3">
                  <Avatar src={u.avatar} alt={u.name} size={10} />
                  <span className="font-medium">{u.name}</span>
                </td>
                <td className="px-6 py-4">{u.xp}</td>
                <td className="px-6 py-4">₹{u.netWorth.toLocaleString('en-IN')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default Leaderboard;
