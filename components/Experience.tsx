'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {

  const experiences = [
    {
      role: 'Frontend Developer',
      company: 'Fusion ERP Portal',
      duration: 'Jan 2024 - Dec 2025',
      desc: 'Built responsive UI components, integrated REST APIs, and improved frontend performance with reusable React architecture.',
    },
    {
      role: 'Freelance Web Developer',
      company: 'Faith & Fast',
      duration: 'Mar 2024 - Present',
      desc: 'Developed scalable MERN stack applications with authentication, payment integration, and optimized backend systems.',
    },
  ];

  return (
    <section className="relative py-20">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-500/5 via-transparent to-cyan-500/5 blur-3xl" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-cyan-400 uppercase tracking-[0.25em] text-sm mb-3">
          Career Journey
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold gradient-text">
          Experience
        </h2>

        <div className="w-28 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mt-5" />
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">

        {/* Vertical Line */}
        <div className="absolute left-5 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-500" />

        <div className="space-y-10">

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.2,
              }}
              viewport={{ once: true }}
              className="relative pl-16"
            >

              {/* Timeline Dot */}
              <div className="absolute left-[7px] top-3 w-6 h-6 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)] border-4 border-[#020617]" />

              {/* Card */}
              <motion.div
                whileHover={{
                  y: -6,
                  scale: 1.01,
                }}
                className="glass p-7 rounded-3xl border border-white/10 backdrop-blur-xl bg-white/5 shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
              >

                {/* Top Row */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

                  <div className="flex items-center gap-3">

                    <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-400/20">
                      <Briefcase className="text-cyan-400 w-6 h-6" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {exp.role}
                      </h3>

                      <p className="text-cyan-300 text-sm mt-1">
                        {exp.company}
                      </p>
                    </div>

                  </div>

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-slate-400 text-sm">

                    <Calendar className="w-4 h-4" />

                    <span>{exp.duration}</span>

                  </div>

                </div>

                {/* Description */}
                <p className="mt-5 text-slate-300 leading-relaxed">
                  {exp.desc}
                </p>

              </motion.div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}