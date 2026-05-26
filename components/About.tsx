'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Brain,
  Trophy,
  Sparkles,
} from 'lucide-react';

import SectionHeading from './SectionHeading';

export default function About() {

  const achievements = [
    {
      title: '800+ DSA Problems',
      icon: <Code2 className="w-7 h-7 text-cyan-400" />,
    },
    {
      title: 'Full Stack Projects',
      icon: <Trophy className="w-7 h-7 text-cyan-400" />,
    },
    {
      title: 'AI/ML Projects',
      icon: <Brain className="w-7 h-7 text-cyan-400" />,
    },
    {
      title: 'Open Source Contributor',
      icon: <Sparkles className="w-7 h-7 text-cyan-400" />,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cyan-500/5 via-transparent to-blue-500/5 blur-3xl" />

      {/* Floating Blur */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-[120px]" />

      {/* Heading */}
      <SectionHeading
        title="About Me"
        subtitle="Introduction"
      />

      {/* Content */}
      <div className="max-w-6xl mx-auto mt-16 grid lg:grid-cols-2 gap-14 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <motion.div
            whileHover={{
              scale: 1.01,
            }}
            className="glass rounded-3xl p-8 border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
          >

            <p className="text-slate-300 text-lg leading-relaxed">

              I am a passionate{' '}
              <span className="text-cyan-400 font-semibold">
                Full Stack MERN Developer
              </span>{' '}
              and{' '}
              <span className="text-cyan-400 font-semibold">
                AI/ML Engineer
              </span>{' '}
              focused on building scalable real-world applications and intelligent systems.

              <br />
              <br />

              I love creating modern web experiences with beautiful UI, smooth animations, and optimized backend architectures.

              <br />
              <br />

              Alongside development, I actively solve DSA problems and explore cutting-edge technologies in AI, Machine Learning, and System Design.

            </p>

          </motion.div>

        </motion.div>

        {/* Right Side Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-6"
        >

          {achievements.map((item) => (

            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 shadow-xl transition-all duration-300 hover:border-cyan-400/30 hover:shadow-cyan-500/10"
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-indigo-500/10" />

              {/* Icon */}
              <div className="relative z-10 inline-flex p-4 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 mb-5">

                {item.icon}

              </div>

              {/* Title */}
              <h3 className="relative z-10 text-xl font-bold text-white leading-snug">

                {item.title}

              </h3>

              {/* Bottom Animated Border */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}