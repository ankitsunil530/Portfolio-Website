'use client';

import { motion } from 'framer-motion';
import {
  Trophy,
  Code2,
  Brain,
  Sparkles,
} from 'lucide-react';

export default function Achievements() {

  const achievements = [
    {
      title: '800+ DSA Problems Solved',
      desc: 'Solved problems across LeetCode, CodeChef & Codeforces with strong problem-solving skills.',
      icon: <Code2 className="w-7 h-7 text-cyan-400" />,
    },
    {
      title: 'GSSOC Open Source Contributor',
      desc: 'Contributed to open-source projects and collaborated with developers during GirlScript Summer of Code.',
      icon: <Sparkles className="w-7 h-7 text-cyan-400" />,
    },
    {
      title: 'Built MERN Stack Applications',
      desc: 'Developed scalable full-stack applications with authentication, APIs, dashboards & deployment.',
      icon: <Trophy className="w-7 h-7 text-cyan-400" />,
    },
    {
      title: 'AI/ML Healthcare Systems',
      desc: 'Worked on AI-powered healthcare systems using CNN, TensorFlow & Machine Learning.',
      icon: <Brain className="w-7 h-7 text-cyan-400" />,
    },
  ];

  return (
    <section className="relative py-20">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cyan-500/5 via-transparent to-blue-500/5 blur-3xl" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >

        <p className="uppercase tracking-[0.25em] text-cyan-400 text-sm mb-3">
          Milestones
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold gradient-text">
          Achievements
        </h2>

        <div className="w-28 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mt-5" />

      </motion.div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {achievements.map((achievement, idx) => (

          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: idx * 0.15,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 shadow-xl transition-all duration-300 hover:border-cyan-400/30 hover:shadow-cyan-500/10"
          >

            {/* Animated Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-indigo-500/10" />

            {/* Icon */}
            <div className="relative z-10 mb-5 inline-flex p-4 rounded-2xl bg-cyan-500/10 border border-cyan-400/20">

              {achievement.icon}

            </div>

            {/* Title */}
            <h3 className="relative z-10 text-2xl font-bold text-white mb-3">

              {achievement.title}

            </h3>

            {/* Description */}
            <p className="relative z-10 text-slate-300 leading-relaxed">

              {achievement.desc}

            </p>

            {/* Hover Border Animation */}
            <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />

          </motion.div>

        ))}

      </div>

    </section>
  );
}