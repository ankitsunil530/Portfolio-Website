'use client';

import { motion } from 'framer-motion';

import {
    Calendar,
    GraduationCap,
    MapPin,
} from 'lucide-react';

import SectionHeading from './SectionHeading';

export default function Education() {

  return (
    <section
      id="education"
      className="relative py-24"
    >

      <SectionHeading
        title="Education"
        subtitle="Academic Journey"
      />

      <div className="max-w-4xl mx-auto mt-16 px-4 md:px-8">

        <motion.div
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
            duration: 0.7,
          }}

          className="relative glass p-8 rounded-3xl overflow-hidden"
        >

          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5" />

          <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center md:items-start">

            {/* Icon */}
            <div className="p-5 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex-shrink-0">

              <GraduationCap className="w-10 h-10 text-cyan-400" />

            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">

              <h3 className="text-3xl font-bold text-white">

                PDPM IIITDM Jabalpur

              </h3>

              <p className="mt-3 text-cyan-300 text-lg font-semibold">

                B.Tech in Computer Science & Engineering

              </p>

              <div className="flex flex-wrap gap-5 mt-5 text-slate-300">

                <div className="flex items-center gap-2">

                  <Calendar className="w-5 h-5 text-cyan-400" />

                  2022 - 2026

                </div>

                <div className="flex items-center gap-2">

                  <MapPin className="w-5 h-5 text-cyan-400" />

                  Jabalpur, India

                </div>

              </div>

              <p className="mt-6 text-slate-300 leading-relaxed">

                Focused on Full Stack Development, Data Structures & Algorithms,
                Artificial Intelligence, Machine Learning, and scalable software systems.

              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}