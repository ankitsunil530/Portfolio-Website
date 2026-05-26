import ProjectsGrid from './ProjectsGrid';

export default function ProjectsPreview() {

  return (
    <section className="relative">

      {/* Optional Top Blur */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cyan-500/5 via-transparent to-blue-500/5 blur-3xl" />

      <ProjectsGrid />

    </section>
  );
}