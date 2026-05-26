'use client';

import { motion } from 'framer-motion';

export default function Loader() {

  return (

    <motion.div
      initial={{
        opacity: 1,
      }}

      animate={{
        opacity: 0,
      }}

      transition={{
        delay: 2.2,
        duration: 0.8,
      }}

      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#020617]"
    >

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative text-center">

        {/* Animated Name */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
          }}

          className="text-5xl md:text-7xl font-black gradient-text"
        >

          Sunil Kumar

        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{
            opacity: 0,
          }}

          animate={{
            opacity: 1,
          }}

          transition={{
            delay: 0.5,
          }}

          className="mt-5 text-cyan-300 tracking-[0.3em] uppercase text-sm"
        >

          Initializing Portfolio...

        </motion.p>

        {/* Loader Line */}
        <div className="mt-10 w-64 h-[3px] bg-white/10 rounded-full overflow-hidden mx-auto">

          <motion.div
            initial={{
              x: '-100%',
            }}

            animate={{
              x: '100%',
            }}

            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'linear',
            }}

            className="w-40 h-full bg-gradient-to-r from-cyan-400 to-blue-500"
          />

        </div>

      </div>

    </motion.div>

  );
}