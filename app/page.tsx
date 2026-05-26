import About from '@/components/About';
import Achievements from '@/components/Achievements';
import Competitive from '@/components/Competitive';
import ContactForm from '@/components/ContactForm';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import ProjectsPreview from '@/components/ProjectsPreview';
import Skills from '@/components/Skills';

export default function Home() {

  return (
    <main className="relative overflow-hidden">

      {/* ================= GLOBAL BACKGROUND ================= */}

      {/* Gradient Glow */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-cyan-500/5 via-transparent to-blue-500/5 blur-3xl" />

      {/* Floating Blur Orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px] -z-10" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-[120px] -z-10" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Hero */}
        <section
          id="home"
          className="min-h-screen flex items-center"
        >

          <Hero />

        </section>

        {/* About */}
        <section className="py-24">

          <About />

        </section>

        {/* Skills */}
        <section className="py-24">

          <Skills />

        </section>

        {/* Projects */}
        <section className="py-24">

          <ProjectsPreview />

        </section>

        {/* Experience */}
        <section
          id="experience"
          className="py-24"
        >

          <Experience />

        </section>

        {/* Achievements */}
        <section className="py-24">

          <Achievements />

        </section>

        {/* Competitive Programming */}
        <section className="py-24">

          <Competitive />

        </section>

        {/* Contact */}
        <section className="py-24">

          <ContactForm />

        </section>

      </div>

    </main>
  );
}