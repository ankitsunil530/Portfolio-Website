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

import { useEffect, useMemo, useState } from 'react';

const letters = "Hello, I'm Sunil Kumar";

export default function Hero() {

  const [typed, setTyped] = useState('');
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        left: `${(i * 97) % 100}%`,
        delay: (i % 8) * 0.5,
      })),
    []
  );

  /* Typing Animation */
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

  /* Subtitle Rotation */
  useEffect(() => {

    const interval = setInterval(() => {

      setSubtitleIndex((prev) => (prev + 1) % subtitles.length);

    }, 2500);

    return () => clearInterval(interval);

  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">

      {/* ================= BACKGROUND GLOW ================= */}

      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-cyan-500/5 via-transparent to-blue-500/5 blur-3xl" />

      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-[120px]" />

      {/* ================= PARTICLES ================= */}

      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400/40"
          style={{ left: p.left }}
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

      {/* ================= CONTENT ================= */}

      <div className="grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">

        {/* ================= LEFT SIDE ================= */}

        <div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-300 text-sm font-medium"
          >

            📍 Lucknow, Uttar Pradesh • IIITDM Jabalpur

          </motion.div>

          {/* Main Heading */}
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
            className="text-5xl md:text-7xl font-black mt-8 leading-tight min-h-[180px]"
          >

            <span className="gradient-text">

              {typed}

            </span>

            <span className="text-cyan-400 animate-pulse">
              |
            </span>

          </motion.h1>

          {/* Subtitle */}
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

            <p className="text-2xl md:text-3xl font-bold text-cyan-300">

              {subtitles[subtitleIndex]}

            </p>

          </motion.div>

          {/* Description */}
          <motion.p
            className="mt-6 text-slate-300 leading-relaxed text-lg max-w-2xl"
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

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-5 mt-10"
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
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:shadow-cyan-500/40"
            >

              <span className="relative z-10 flex items-center gap-2">

                View Projects

                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />

              </span>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/10" />

            </motion.a>

            {/* Resume Button */}
            <motion.a
              href="/resume.pdf"
              whileHover={{
                scale: 1.05,
                y: -4,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="glass px-7 py-4 rounded-2xl text-white font-semibold border border-white/10 hover:border-cyan-400/30 hover:bg-white/5 transition-all duration-300"
            >

              <span className="flex items-center gap-2">

                <Download className="w-5 h-5" />

                Download Resume

              </span>

            </motion.a>

          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-5 mt-10"
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

        {/* ================= RIGHT SIDE ================= */}

        <motion.div
          animate={{
            y: [0, -18, 0],
            rotate: [0, 1.5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
          className="relative max-w-md mx-auto"
        >

          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl rounded-full" />

          {/* Image Card */}
          <div className="relative glass rounded-[2rem] p-3 border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900"
              alt="Sunil Kumar"
              className="rounded-[1.5rem] object-cover"
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}