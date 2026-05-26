'use client';

import { motion } from 'framer-motion';

import {
    Code2,
    FolderKanban,
    Github,
    Users,
} from 'lucide-react';

import {
    useEffect,
    useState,
} from 'react';

import CountUp from 'react-countup';

import SectionHeading from './SectionHeading';

export default function Stats() {

  const [githubData, setGithubData] = useState<any>(null);

  useEffect(() => {

    const fetchGitHub = async () => {

      try {

        const res = await fetch(
          'https://api.github.com/users/ankitsunil530'
        );

        const data = await res.json();

        setGithubData(data);

      } catch (err) {

        console.error(err);

      }

    };

    fetchGitHub();

  }, []);

  const stats = [
    {
      title: 'GitHub Repositories',
      value: githubData?.public_repos || 0,
      suffix: '+',
      icon: (
        <FolderKanban className="w-10 h-10 text-cyan-400" />
      ),
    },

    {
      title: 'GitHub Followers',
      value: githubData?.followers || 0,
      suffix: '+',
      icon: (
        <Users className="w-10 h-10 text-cyan-400" />
      ),
    },

    {
      title: 'DSA Problems Solved',
      value: 800,
      suffix: '+',
      icon: (
        <Code2 className="w-10 h-10 text-cyan-400" />
      ),
    },

    {
      title: 'GitHub Contributions',
      value: 500,
      suffix: '+',
      icon: (
        <Github className="w-10 h-10 text-cyan-400" />
      ),
    },
  ];

  return (

    <section
      id="stats"
      className="relative py-24 overflow-hidden"
    >

      <SectionHeading
        title="Achievements"
        subtitle="Portfolio Highlights"
      />

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20 max-w-7xl mx-auto px-4 md:px-8">

        {stats.map((stat, idx) => (

          <motion.div
            key={stat.title}

            initial={{
              opacity: 0,
              y: 40,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              delay: idx * 0.12,
              duration: 0.6,
            }}

            whileHover={{
              y: -10,
              scale: 1.03,
            }}

            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center shadow-xl hover:border-cyan-400/30 transition-all duration-500"
          >

            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-indigo-500/10" />

            <div className="relative z-10">

              {/* Icon */}
              <div className="flex justify-center mb-6">

                <div className="p-5 rounded-2xl bg-cyan-500/10 border border-cyan-400/20">

                  {stat.icon}

                </div>

              </div>

              {/* Counter */}
              <h3 className="text-5xl font-black text-white">

                <CountUp
                  end={stat.value}
                  duration={2.5}
                />

                {stat.suffix}

              </h3>

              {/* Title */}
              <p className="mt-4 text-slate-300 text-lg">

                {stat.title}

              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>

  );
}