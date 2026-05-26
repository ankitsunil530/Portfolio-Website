'use client';

import { motion } from 'framer-motion';
import {
  Trophy,
  Code2,
  Flame,
} from 'lucide-react';

export default function Competitive() {

  const platforms = [
    {
      name: 'LeetCode',
      username: 'ankitsunil530',
      solved: '500+ Problems',
      color: 'from-yellow-400 to-orange-500',
      icon: <Code2 className="w-7 h-7 text-yellow-400" />,
      link: 'https://leetcode.com/ankitsunil530/',
    },
    {
      name: 'CodeChef',
      username: 'ankitsunil530',
      solved: 'Contest Participant',
      color: 'from-amber-500 to-yellow-700',
      icon: <Trophy className="w-7 h-7 text-amber-400" />,
      link: 'https://www.codechef.com/users/ankitsunil530',
    },
    {
      name: 'Codeforces',
      username: 'ankitsunil530',
      solved: 'Competitive Coder',
      color: 'from-cyan-400 to-blue-600',
      icon: <Flame className="w-7 h-7 text-cyan-400" />,
      link: 'https://codeforces.com/profile/ankitsunil530',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cyan-500/5 via-transparent to-blue-500/5 blur-3xl" />

      {/* Floating Blur */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-[120px]" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >

        <p className="uppercase tracking-[0.25em] text-cyan-400 text-sm mb-3">
          Problem Solving
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold gradient-text">
          Competitive Programming
        </h2>

        <div className="w-28 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mt-5" />

      </motion.div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {platforms.map((platform, idx) => (

          <motion.a
            href={platform.link}
            target="_blank"
            rel="noopener noreferrer"
            key={platform.name}
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: idx * 0.15,
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl transition-all duration-300 hover:border-cyan-400/30 hover:shadow-cyan-500/10"
          >

            {/* Animated Glow */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${platform.color} blur-3xl`} />

            {/* Icon */}
            <div className="relative z-10 inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-6">

              {platform.icon}

            </div>

            {/* Name */}
            <h3 className="relative z-10 text-3xl font-bold text-white mb-3">

              {platform.name}

            </h3>

            {/* Username */}
            <p className="relative z-10 text-cyan-300 font-medium mb-2">

              @{platform.username}

            </p>

            {/* Stats */}
            <p className="relative z-10 text-slate-300">

              {platform.solved}

            </p>

            {/* Hover Border */}
            <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />

          </motion.a>

        ))}

      </div>

    </section>
  );
}