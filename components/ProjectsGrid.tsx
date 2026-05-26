'use client';

import { projects } from '@/data/content';

import { motion } from 'framer-motion';

import {
    ExternalLink,
    Github,
    Sparkles
} from 'lucide-react';

import SectionHeading from './SectionHeading';

export default function ProjectsGrid() {

  const sections = [
    ['Freelancing Projects', projects.freelancing],
    ['AI/ML Projects', projects.aiml],
    ['Full Stack Projects', projects.fullstack],
  ] as const;

  return (

    <section
      id="projects"
      className="relative py-24 overflow-hidden"
    >

      {/* ================= BACKGROUND GLOW ================= */}

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cyan-500/5 via-transparent to-blue-500/5 blur-3xl" />

      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-[120px]" />

      {/* ================= HEADING ================= */}

      <SectionHeading
        title="Featured Projects"
        subtitle="Portfolio Work"
      />

      {/* ================= PROJECT SECTIONS ================= */}

      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-24 mt-20">

        {sections.map(
          ([title, list], sectionIdx) => (

            <motion.div
              key={title}

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
                amount: 0.1,
              }}

              transition={{
                duration: 0.7,
                delay: sectionIdx * 0.15,
              }}
            >

              {/* SECTION TITLE */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -25,
                }}

                whileInView={{
                  opacity: 1,
                  x: 0,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  duration: 0.6,
                }}

                className="flex flex-col md:flex-row items-center md:items-center gap-4 mb-10 md:justify-start"
              >

                <div className="h-[2px] w-14 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />

                <h3 className="text-3xl md:text-4xl font-bold text-white text-center md:text-left">

                  {title}

                </h3>

              </motion.div>

              {/* ================= GRID ================= */}

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                {list.map(
                  (
                    project: any,
                    idx: number
                  ) => (

                    <motion.article
                      key={
                        project.title || idx
                      }

                      initial={{
                        opacity: 0,
                        y: 30,
                        scale: 0.95,
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
                        duration: 0.55,
                        delay: idx * 0.08,
                      }}

                      whileHover={{
                        y: -12,
                        scale: 1.02,
                      }}

                      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl transition-all duration-500 hover:border-cyan-400/30 hover:shadow-cyan-500/10"
                    >

                      {/* HOVER GLOW */}

                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-indigo-500/10" />

                      {/* ================= TOP DESIGN ================= */}

                      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617]">

                        {/* Animated Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />

                        {/* Floating Glow */}
                        <motion.div
                          animate={{
                            x: [0, 30, 0],
                            y: [0, -20, 0],
                          }}

                          transition={{
                            duration: 6,
                            repeat: Infinity,
                          }}

                          className="absolute top-10 left-10 w-28 h-28 rounded-full bg-cyan-500/20 blur-3xl"
                        />

                        <motion.div
                          animate={{
                            x: [0, -20, 0],
                            y: [0, 20, 0],
                          }}

                          transition={{
                            duration: 7,
                            repeat: Infinity,
                          }}

                          className="absolute bottom-5 right-5 w-24 h-24 rounded-full bg-blue-500/20 blur-3xl"
                        />

                        {/* CENTER ICON */}

                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

                          <motion.div
                            whileHover={{
                              rotate: 10,
                              scale: 1.1,
                            }}

                            className="w-20 h-20 rounded-3xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center shadow-lg shadow-cyan-500/10"
                          >

                            <Sparkles className="w-10 h-10 text-cyan-300" />

                          </motion.div>

                          <h4 className="mt-5 text-2xl font-bold text-white leading-snug">

                            {project.title ||
                              project}

                          </h4>

                        </div>

                        {/* TAG */}

                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-500/10 text-cyan-300 text-xs font-medium backdrop-blur-xl">

                          Featured Project

                        </div>

                      </div>

                      {/* ================= CONTENT ================= */}

                      <div className="relative z-10 p-7">

                        {/* DESCRIPTION */}

                        <p className="text-slate-300 leading-relaxed text-sm">

                          {project.description ||

                            'Modern production-grade implementation with scalable architecture, optimized performance, and premium UI experience.'}

                        </p>

                        {/* ================= TECH STACK ================= */}

                        <div className="flex flex-wrap gap-2 mt-5">

                          {(project.tech || [
                            'React',
                            'Next.js',
                            'Tailwind',
                          ]).map(
                            (tech: string) => (

                              <span
                                key={tech}

                                className="px-3 py-1 rounded-full text-xs font-medium border border-cyan-400/10 bg-cyan-500/5 text-cyan-300"
                              >

                                {tech}

                              </span>

                            )
                          )}

                        </div>

                        {/* ================= BUTTONS ================= */}

                        <div className="flex gap-4 mt-7">

                          {/* GITHUB */}

                          <motion.a
                            href={
                              project.github ||
                              '#'
                            }

                            target="_blank"

                            rel="noopener noreferrer"

                            whileHover={{
                              scale: 1.05,
                            }}

                            whileTap={{
                              scale: 0.96,
                            }}

                            className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-500/10"
                          >

                            <Github className="w-4 h-4" />

                            GitHub

                          </motion.a>

                          {/* LIVE DEMO */}

                          <motion.a
                            href={
                              project.live || '#'
                            }

                            target="_blank"

                            rel="noopener noreferrer"

                            whileHover={{
                              scale: 1.05,
                            }}

                            whileTap={{
                              scale: 0.96,
                            }}

                            className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:shadow-cyan-500/40"
                          >

                            <ExternalLink className="w-4 h-4" />

                            Live Demo

                          </motion.a>

                        </div>

                      </div>

                      {/* ================= BOTTOM BORDER ================= */}

                      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />

                    </motion.article>

                  )
                )}

              </div>

            </motion.div>

          )
        )}

      </div>

    </section>
  );
}