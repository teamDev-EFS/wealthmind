import { useAnimatedCounter } from '../../hooks/useAnimatedCounter';
import { motion } from 'framer-motion';

const AnimatedCounter = ({ to, className }: { to: number; className?: string }) => {
  const rounded = useAnimatedCounter(to);
  return (
    <motion.span className={className}>{rounded}</motion.span>
  );
};

export default AnimatedCounter;
