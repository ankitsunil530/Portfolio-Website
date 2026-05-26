'use client';

import { subtitles } from '@/data/content';

import { motion } from 'framer-motion';

import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Download,
} from 'lucide-react';

import {
  useEffect,
  useMemo,
  useState,
} from 'react';

const letters = "Hello, I'm Sunil Kumar";

export default function Hero() {

  const [typed, setTyped] = useState('');
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  /* ================= PARTICLES ================= */

  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        left: `${(i * 97) % 100}%`,
        delay: (i % 8) * 0.5,
      })),
    []
  );

  /* ================= TYPING EFFECT ================= */

  useEffect(() => {

    let i = 0;

    const interval = setInterval(() => {

      i++;

      setTyped(letters.slice(0, i));

      if (i >= letters.length) {
        clearInterval(interval);
      }

    }, 75);

    return () => clearInterval(interval);

  }, []);

  /* ================= SUBTITLE ROTATION ================= */

  useEffect(() => {

    const interval = setInterval(() => {

      setSubtitleIndex(
        (prev) => (prev + 1) % subtitles.length
      );

    }, 2500);

    return () => clearInterval(interval);

  }, []);

  return (

    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-cyan-500/5 via-transparent to-blue-500/5 blur-3xl" />

      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-[120px]" />

      {/* ================= FLOATING PARTICLES ================= */}

      {particles.map((p) => (

        <motion.span
          key={p.id}
          className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400/40"

          style={{
            left: p.left,
          }}

          initial={{
            y: 700,
            opacity: 0,
          }}

          animate={{
            y: -120,
            opacity: [0, 1, 0],
          }}

          transition={{
            duration: 9,
            repeat: Infinity,
            delay: p.delay,
            ease: 'linear',
          }}
        />

      ))}

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">

        {/* ================= LOCATION ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.6,
          }}

          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-300 text-sm font-medium"
        >

          📍 Lucknow, Uttar Pradesh • IIITDM Jabalpur

        </motion.div>

        {/* ================= MAIN HEADING ================= */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 35,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
          }}

          className="text-5xl md:text-7xl lg:text-8xl font-black mt-10 leading-tight min-h-[180px]"
        >

          <span className="gradient-text">

            {typed}

          </span>

          <span className="text-cyan-400 animate-pulse">
            
          </span>

        </motion.h1>

        {/* ================= SUBTITLE ================= */}

        <motion.div
          key={subtitleIndex}

          initial={{
            opacity: 0,
            y: 20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.5,
          }}

          className="mt-6"
        >

          <p className="text-2xl md:text-4xl font-bold text-cyan-300">

            {subtitles[subtitleIndex]}

          </p>

        </motion.div>

        {/* ================= DESCRIPTION ================= */}

        <motion.p
          className="mt-8 text-slate-300 leading-relaxed text-lg md:text-xl max-w-3xl mx-auto"

          initial={{
            opacity: 0,
          }}

          animate={{
            opacity: 1,
          }}

          transition={{
            delay: 0.3,
          }}
        >

          Passionate Full Stack MERN Developer and AI/ML Engineer focused on building scalable applications, modern UI experiences, and intelligent systems.

          <br />
          <br />

          Solved 800+ DSA problems and actively exploring cutting-edge technologies in AI, Machine Learning, and System Design.

        </motion.p>

        {/* ================= CTA BUTTONS ================= */}

        <motion.div
          className="flex flex-wrap justify-center gap-5 mt-12"

          initial={{
            opacity: 0,
            y: 20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.4,
          }}
        >

          {/* Projects Button */}

          <motion.a
            href="#projects"

            whileHover={{
              scale: 1.05,
              y: -4,
            }}

            whileTap={{
              scale: 0.97,
            }}

            className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:shadow-cyan-500/40"
          >

            <span className="relative z-10 flex items-center gap-2">

              View Projects

              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />

            </span>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/10" />

          </motion.a>

          {/* Resume Button */}

          <motion.a
            href="https://drive.google.com/file/d/14QJ1P1Q1WHTwCC_yFWFRHB0b1uVw1SEv/view?usp=sharing"

            target="_blank"
            rel="noopener noreferrer"

            whileHover={{
              scale: 1.05,
              y: -4,
            }}

            whileTap={{
              scale: 0.97,
            }}

            className="glass px-8 py-4 rounded-2xl text-white font-semibold border border-white/10 hover:border-cyan-400/30 hover:bg-white/5 transition-all duration-300"
          >

            <span className="flex items-center gap-2">

              <Download className="w-5 h-5" />

              Download Resume

            </span>

          </motion.a>

        </motion.div>

        {/* ================= SOCIAL LINKS ================= */}

        <motion.div
          className="flex justify-center gap-5 mt-12"

          initial={{
            opacity: 0,
          }}

          animate={{
            opacity: 1,
          }}

          transition={{
            delay: 0.5,
          }}
        >

          {[
            {
              Icon: Github,
              link: 'https://github.com/ankitsunil530',
            },

            {
              Icon: Linkedin,
              link: 'https://www.linkedin.com/in/sunil-kumar-549595225/',
            },

            {
              Icon: Mail,
              link: 'mailto:ankitsunil530@gmail.com',
            },

          ].map(({ Icon, link }, i) => (

            <motion.a
              key={i}

              href={link}

              target="_blank"
              rel="noopener noreferrer"

              whileHover={{
                y: -6,
                scale: 1.15,
              }}

              whileTap={{
                scale: 0.95,
              }}

              className="group relative p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400/30 hover:shadow-cyan-500/20 transition-all duration-300"
            >

              <Icon className="w-5 h-5 text-cyan-300 group-hover:text-white transition-colors" />

            </motion.a>

          ))}

        </motion.div>

      </div>

    </section>
  );
}