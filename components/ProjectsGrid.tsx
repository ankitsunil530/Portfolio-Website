import { projects } from '@/data/content';

export default function ProjectsGrid(){
  const sections = [['Freelancing Projects',projects.freelancing],['AI/ML Projects',projects.aiml],['Full Stack Projects',projects.fullstack]] as const;
  return <section className="space-y-8"><h2 className="text-3xl font-bold gradient-text">Projects</h2>{sections.map(([title,list])=><div key={title}><h3 className="text-2xl mb-3">{title}</h3><div className="grid md:grid-cols-2 gap-4">{list.map((p)=><article key={p} className="glass p-5 hover:scale-[1.02] transition"><div className="h-36 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 mb-3"/><h4 className="font-semibold">{p}</h4><p className="text-sm text-slate-300 mt-2">Modern production-grade implementation with optimized performance and beautiful UX.</p><div className="flex gap-3 mt-4"><button className="px-3 py-2 glass">GitHub</button><button className="px-3 py-2 glass">Live Demo</button></div></article>)}</div></div>)}</section>
}
