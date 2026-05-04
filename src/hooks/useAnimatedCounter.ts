import { useEffect } from 'react';
import { useMotionValue, useTransform, animate } from 'framer-motion';

export function useAnimatedCounter(to: number) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString());
  useEffect(() => {
    const controls = animate(count, to, { duration: 1.6, ease: [0.22, 1, 0.36, 1] });
    return controls.stop;
  }, [to]);
  return rounded;
}
