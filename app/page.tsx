import About from '@/components/About';
import Achievements from '@/components/Achievements';
import Competitive from '@/components/Competitive';
import ContactForm from '@/components/ContactForm';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import ProjectsPreview from '@/components/ProjectsPreview';
import Skills from '@/components/Skills';
import Stats from '@/components/Stats';

export default function Home() {

  return (

    <main className="relative overflow-hidden">

      {/* ================= GLOBAL BACKGROUND ================= */}

      {/* Main Background Gradient */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-cyan-500/5 via-transparent to-blue-500/5 blur-3xl" />

      {/* Glow Orb Top Left */}
      <div className="pointer-events-none absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />

      {/* Glow Orb Bottom Right */}
      <div className="pointer-events-none absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />

      {/* Grid Background */}
      <div className="pointer-events-none absolute inset-0 -z-30 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Center Glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/5 rounded-full blur-[180px] -z-20" />

      {/* ================= PAGE CONTENT ================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* ================= HERO ================= */}

        <section
          id="home"
          className="min-h-screen flex items-center"
        >

          <Hero />

        </section>

        {/* ================= EDUCATION ================= */}

        <section
          id="education"
          className="scroll-mt-28 py-24"
        >

          <Education />

        </section>

        {/* ================= ABOUT ================= */}

        <section
          id="about"
          className="scroll-mt-28 py-24"
        >

          <About />

        </section>

        {/* ================= STATS ================= */}

        <section
          id="stats"
          className="scroll-mt-28 py-24"
        >

          <Stats />

        </section>

        {/* ================= SKILLS ================= */}

        <section
          id="skills"
          className="scroll-mt-28 py-24"
        >

          <Skills />

        </section>

        {/* ================= PROJECTS ================= */}

        <section
          id="projects"
          className="scroll-mt-28 py-24"
        >

          <ProjectsPreview />

        </section>

        {/* ================= EXPERIENCE ================= */}

        <section
          id="experience"
          className="scroll-mt-28 py-24"
        >

          <Experience />

        </section>

        {/* ================= ACHIEVEMENTS ================= */}

        <section
          id="achievements"
          className="scroll-mt-28 py-24"
        >

          <Achievements />

        </section>

        {/* ================= COMPETITIVE ================= */}

        <section
          id="competitive"
          className="scroll-mt-28 py-24"
        >

          <Competitive />

        </section>

        {/* ================= CONTACT ================= */}

        <section
          id="contact"
          className="scroll-mt-28 py-24"
        >

          <ContactForm />

        </section>

      </div>

    </main>

  );
}