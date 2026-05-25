'use client';
import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { subtitles } from '@/data/content';

const letters = "Hello, I'm Sunil Kumar";

export default function Hero() {
  const [typed, setTyped] = useState('');
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const particles = useMemo(
    () => Array.from({ length: 22 }, (_, i) => ({ id: i, left: `${(i * 97) % 100}%`, delay: (i % 7) * 0.5 })),
    []
  );

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setTyped(letters.slice(0, i));
      if (i >= letters.length) clearInterval(interval);
    }, 65);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((p) => (p + 1) % subtitles.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute w-1.5 h-1.5 rounded-full bg-cyan-300/50"
          style={{ left: p.left }}
          initial={{ y: 550, opacity: 0 }}
          animate={{ y: -120, opacity: [0, 0.9, 0] }}
          transition={{ duration: 9, repeat: Infinity, delay: p.delay, ease: 'linear' }}
        />
      ))}

      <div className="grid md:grid-cols-2 gap-8 items-center w-full relative z-10">
        <div>
          <p className="text-cyan-300">Lucknow, Uttar Pradesh • IIITDM Jabalpur</p>
          <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-7xl font-black mt-2 min-h-[170px] md:min-h-[220px]">
            <span className="gradient-text">{typed}</span>
            <span className="text-cyan-300 animate-pulse">|</span>
          </motion.h1>
          <motion.p key={subtitleIndex} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-4 text-purple-300 text-lg">
            {subtitles[subtitleIndex]}
          </motion.p>
          <p className="mt-4 text-slate-300">Full Stack MERN Developer | AI & Machine Learning Engineer (B.Tech CSE 2022-2026)</p>
          <div className="flex gap-3 mt-6 flex-wrap">
            {['View Projects', 'Download Resume', 'Contact Me'].map((cta) => (
              <motion.button whileHover={{ scale: 1.06, y: -3 }} whileTap={{ scale: 0.97 }} key={cta} className="glass px-5 py-3 hover:shadow-[0_0_25px_rgba(94,235,255,0.35)] transition-shadow">
                {cta}
              </motion.button>
            ))}
          </div>
          <div className="flex gap-4 mt-6 text-slate-200">
            {[Github, Linkedin, Mail].map((Icon, i) => (
              <motion.a key={i} href="#" whileHover={{ y: -5, scale: 1.15 }} className="glass p-3">
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div animate={{ y: [0, -16, 0], rotate: [0, 1.5, 0] }} transition={{ duration: 7, repeat: Infinity }} className="glass p-2 max-w-sm mx-auto">
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800" alt="Sunil Kumar" className="rounded-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
