'use client';
import { motion } from 'framer-motion';
import { subtitles } from '@/data/content';

export default function Hero(){
  return <section className="min-h-[90vh] flex items-center"><div className="grid md:grid-cols-2 gap-8 items-center w-full"><div><p className="text-cyan-300">Lucknow, Uttar Pradesh • IIITDM Jabalpur</p><motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-5xl md:text-7xl font-black mt-2">Hello, I&apos;m <span className="gradient-text">Sunil Kumar</span></motion.h1><p className="mt-4 text-purple-300">{subtitles.join(' • ')}</p><p className="mt-4 text-slate-300">Full Stack MERN Developer | AI & Machine Learning Engineer (B.Tech CSE 2022-2026)</p><div className="flex gap-3 mt-6 flex-wrap"><button className="glass px-5 py-3">View Projects</button><button className="glass px-5 py-3">Download Resume</button><button className="glass px-5 py-3">Contact Me</button></div></div><motion.div animate={{y:[0,-12,0]}} transition={{duration:6,repeat:Infinity}} className="glass p-2 max-w-sm mx-auto"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800" alt="Sunil Kumar" className="rounded-2xl"/></motion.div></div></section>
}
