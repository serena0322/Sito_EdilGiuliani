'use client';
import { motion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number; // Aggiungiamo questa riga
}

export default function Reveal({ children, delay = 0.1 }: RevealProps) { // Impostiamo un default
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1],
        delay: delay // Usiamo il delay passato come prop
      }}
    >
      {children}
    </motion.div>
  );
}