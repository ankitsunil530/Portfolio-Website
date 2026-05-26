'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.7,
        ease: 'easeOut',
      }}
      className="relative text-center mb-16"
    >

      {/* Subtitle */}
      {subtitle && (

        <motion.p
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.15,
            duration: 0.5,
          }}
          className="uppercase tracking-[0.3em] text-cyan-400 text-sm font-semibold mb-4"
        >

          {subtitle}

        </motion.p>

      )}

      {/* Main Heading */}
      <motion.h2
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 0.2,
          duration: 0.6,
        }}
        className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight"
      >

        <span className="gradient-text">

          {title}

        </span>

      </motion.h2>

      {/* Decorative Line */}
      <motion.div
        initial={{
          width: 0,
          opacity: 0,
        }}
        whileInView={{
          width: 120,
          opacity: 1,
        }}
        transition={{
          delay: 0.4,
          duration: 0.7,
        }}
        className="h-[4px] mx-auto mt-6 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500"
      />

      {/* Glow */}
      <div className="absolute left-1/2 top-full -translate-x-1/2 w-40 h-10 bg-cyan-500/10 blur-3xl rounded-full" />

    </motion.div>
  );
}