import { Bell } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <header className="h-16 flex items-center justify-between px-2 sm:px-6 bg-surface-1 border-b border-border sticky top-0 z-20 backdrop-blur-xl">
      <div className="flex items-center gap-2">
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          className="text-lg font-bold text-primary hidden md:block"
        >
          Welcome to WealthMind
        </motion.div>
      </div>
      <div className="flex items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.95 }}
          className="relative p-2 rounded-full bg-surface-2 hover:bg-surface-3 transition-all focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5 text-primary" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-success rounded-full animate-pulse" />
        </motion.button>
      </div>
    </header>
  );
};

export default Navbar;
