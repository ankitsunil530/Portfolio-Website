'use client';

import { skills } from '@/data/content';
import { motion } from 'framer-motion';

import {
  Code2,
  Database,
  Globe,
  Brain,
  Wrench,
} from 'lucide-react';

import SectionHeading from './SectionHeading';

export default function Skills() {

  const icons: Record<string, JSX.Element> = {
    Languages: <Code2 className="w-7 h-7 text-cyan-400" />,
    Frontend: <Globe className="w-7 h-7 text-cyan-400" />,
    Backend: <Database className="w-7 h-7 text-cyan-400" />,
    'AI/ML': <Brain className="w-7 h-7 text-cyan-400" />,
    Tools: <Wrench className="w-7 h-7 text-cyan-400" />,
  };

  return (
    <section
      id="skills"
      className="relative py-24 overflow-hidden"
    >

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cyan-500/5 via-transparent to-blue-500/5 blur-3xl" />

      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-[120px]" />

      {/* ================= HEADING ================= */}

      <SectionHeading
        title="Skills & Technologies"
        subtitle="Technical Expertise"
      />

      {/* ================= GRID ================= */}

      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mt-20">

        {Object.entries(skills).map(([category, items], idx) => (

          <motion.div
            key={category}
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              delay: idx * 0.12,
            }}
            whileHover={{
              y: -8,
            }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl transition-all duration-500 hover:border-cyan-400/30 hover:shadow-cyan-500/10"
          >

            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-indigo-500/10" />

            {/* Card Content */}
            <div className="relative z-10 p-8">

              {/* Header */}
              <div className="flex items-center gap-4 mb-8">

                <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-400/20">

                  {icons[category]}

                </div>

                <div>

                  <h3 className="text-2xl font-bold text-white">

                    {category}

                  </h3>

                  <p className="text-slate-400 text-sm mt-1">

                    Technologies & Tools

                  </p>

                </div>

              </div>

              {/* Skills */}
              <div className="space-y-6">

                {items.map((skill: any, i: number) => {

                  const progress =
                    75 + ((i * 7 + idx * 5) % 20);

                  return (

                    <motion.div
                      key={skill}
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: i * 0.08,
                        duration: 0.45,
                      }}
                    >

                      {/* Top Row */}
                      <div className="flex items-center justify-between mb-2">

                        <span className="text-slate-200 font-medium">

                          {skill}

                        </span>

                        <span className="text-cyan-300 text-sm font-semibold">

                          {progress}%

                        </span>

                      </div>

                      {/* Progress Bar */}
                      <div className="relative h-3 rounded-full overflow-hidden bg-[#0f172a]/80 border border-white/5">

                        {/* Animated Glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5" />

                        {/* Progress */}
                        <motion.div
                          initial={{
                            width: 0,
                          }}
                          whileInView={{
                            width: `${progress}%`,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            duration: 1,
                            delay: i * 0.08 + 0.2,
                          }}
                          className="relative h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 shadow-[0_0_20px_rgba(34,211,238,0.35)]"
                        >

                          {/* Shimmer */}
                          <div className="absolute inset-0 animate-pulse bg-white/10" />

                        </motion.div>

                      </div>

                    </motion.div>

                  );
                })}

              </div>

            </div>

            {/* Bottom Border */}
            <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />

          </motion.div>

        ))}

      </div>

    </section>
  );
}