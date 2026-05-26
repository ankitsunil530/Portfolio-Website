'use client';

import { motion } from 'framer-motion';

import {
    Briefcase,
    Calendar,
} from 'lucide-react';

import SectionHeading from './SectionHeading';

export default function Experience() {

  const experiences = [
    {
      role: 'Freelance Full Stack Developer',
      company: 'Faith & Fast',
      duration: '2024 - Present',
      description:
        'Developed scalable MERN stack applications, responsive UI systems, authentication flows, and deployment-ready production applications.',
    },

    {
      role: 'ERP Portal Developer',
      company: 'IIITDM Jabalpur',
      duration: '2023',
      description:
        'Worked on Fusion ERP Portal with role-based dashboards, API integrations, and optimized frontend workflows.',
    },

    {
      role: 'MERN Stack Developer',
      company: 'Academic Projects',
      duration: '2023 - Present',
      description:
        'Built multiple full-stack applications including task management systems, banking systems, and real-time web applications.',
    },
  ];

  return (

    <section
      id="experience"
      className="relative py-24"
    >

      <SectionHeading
        title="Experience"
        subtitle="Professional Journey"
      />

      <div className="relative max-w-5xl mx-auto mt-20 px-4 md:px-8">

        {/* Timeline Line */}

        <div className="absolute left-6 md:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-500" />

        {/* Timeline Items */}

        <div className="space-y-16">

          {experiences.map((exp, idx) => {

            const isLeft = idx % 2 === 0;

            return (

              <motion.div
                key={exp.role}

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
                  duration: 0.6,
                  delay: idx * 0.1,
                }}

                className={`relative flex flex-col md:flex-row ${
                  isLeft
                    ? 'md:flex-row'
                    : 'md:flex-row-reverse'
                } items-center md:items-stretch justify-center`}
              >

                {/* Timeline Dot */}

                <div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 z-20">

                  <div className="w-7 h-7 rounded-full border-4 border-cyan-400 bg-[#020617] shadow-[0_0_25px_rgba(34,211,238,0.7)]" />

                </div>

                {/* Card */}

                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}

                  className="ml-14 md:ml-0 md:w-[45%] group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl hover:border-cyan-400/30 transition-all duration-500"
                >

                  {/* Glow */}

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-indigo-500/10" />

                  <div className="relative z-10">

                    {/* Header */}

                    <div className="flex items-center gap-4 mb-5">

                      <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-400/20">

                        <Briefcase className="w-7 h-7 text-cyan-400" />

                      </div>

                      <div>

                        <h3 className="text-2xl font-bold text-white">

                          {exp.role}

                        </h3>

                        <p className="text-cyan-300 font-semibold mt-1">

                          {exp.company}

                        </p>

                      </div>

                    </div>

                    {/* Duration */}

                    <div className="flex items-center gap-2 text-slate-400 mb-5">

                      <Calendar className="w-5 h-5 text-cyan-400" />

                      {exp.duration}

                    </div>

                    {/* Description */}

                    <p className="text-slate-300 leading-relaxed">

                      {exp.description}

                    </p>

                  </div>

                </motion.div>

              </motion.div>

            );
          })}

        </div>

      </div>

    </section>
  );
}