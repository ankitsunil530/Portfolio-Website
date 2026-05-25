'use client';
import { motion } from 'framer-motion';
import { projects } from '@/data/content';
import SectionHeading from './SectionHeading';

export default function ProjectsGrid() {
  const sections = [
    ['Freelancing Projects', projects.freelancing],
    ['AI/ML Projects', projects.aiml],
    ['Full Stack Projects', projects.fullstack]
  ] as const;

  return (
    <section className="space-y-8" id="projects">
      <SectionHeading title="Featured Projects" subtitle="Portfolio Work" />
      {sections.map(([title, list]) => (
        <div key={title}>
          <h3 className="text-2xl mb-3 text-cyan-200">{title}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {list.map((p, idx) => (
              <motion.article
                key={p}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ rotateX: 4, rotateY: -4, scale: 1.02 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="glass p-5 transition will-change-transform"
              >
                <div className="h-36 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 mb-3" />
                <h4 className="font-semibold">{p}</h4>
                <p className="text-sm text-slate-300 mt-2">Modern production-grade implementation with optimized performance and beautiful UX.</p>
                <div className="flex gap-3 mt-4">
                  <button className="px-3 py-2 glass hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">GitHub</button>
                  <button className="px-3 py-2 glass hover:shadow-[0_0_20px_rgba(94,235,255,0.3)]">Live Demo</button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
