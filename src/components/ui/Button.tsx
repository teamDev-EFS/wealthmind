import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', children, icon, className, ...props }, ref) => {
    const base =
      'flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-[0.98]';
    const variants = {
      primary: 'bg-primary text-white hover:bg-primary-hover shadow-md',
      secondary: 'bg-surface-2 text-primary border border-primary hover:bg-primary-subtle',
      ghost: 'bg-transparent text-primary hover:bg-primary-subtle',
    };
    return (
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: '0 0 0 6px rgba(59,130,246,0.15), 0 12px 24px -8px rgba(59,130,246,0.4)' }}
        whileTap={{ scale: 0.95 }}
        ref={ref}
        className={clsx(base, variants[variant], className)}
        {...props}
      >
        {icon}
        {children}
      </motion.button>
    );
  }
);
Button.displayName = 'Button';
export default Button;
