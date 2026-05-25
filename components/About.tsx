'use client';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section className="glass p-8" id="about">
      <SectionHeading title="About Me" subtitle="Introduction" />
      <p className="text-slate-300 mt-2">I am a Full Stack Developer specialized in MERN Stack Development and AI/ML systems. I love building scalable real-world applications and solving DSA problems. I have solved 800+ DSA questions across coding platforms.</p>
      <div className="grid md:grid-cols-4 gap-4 mt-6">
        {['800+ DSA Problems', 'Multiple Full Stack Projects', 'AI/ML Projects', 'Open Source Contributor'].map((s, i) => (
          <motion.div key={s} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="glass p-4 hover:-translate-y-1 transition-transform">
            {s}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
