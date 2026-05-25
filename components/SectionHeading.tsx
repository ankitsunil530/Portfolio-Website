'use client';
import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="mb-8"
    >
      {subtitle ? <p className="text-cyan-300 tracking-wider uppercase text-xs mb-2">{subtitle}</p> : null}
      <h2 className="text-3xl md:text-4xl font-bold gradient-text">{title}</h2>
    </motion.div>
  );
}
