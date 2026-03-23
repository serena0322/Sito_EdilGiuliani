'use client';
import { motion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number; 
  className?: string;
}

export default function Reveal({ children, delay = 0.1, className = "" }: RevealProps) {
  return (
    <motion.div
      className={className}
      style={{ willChange: 'opacity, transform', backfaceVisibility: 'hidden' }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1],
        delay: delay 
      }}
    >
      {children}
    </motion.div>
  );
}