import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import ProjectsPreview from '@/components/ProjectsPreview';
import Experience from '@/components/Experience';
import Achievements from '@/components/Achievements';
import Competitive from '@/components/Competitive';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <main className="space-y-16 px-4 md:px-8 py-24 max-w-7xl mx-auto">
      <Hero />
      <About />
      <Skills />
      <ProjectsPreview />
      <Experience />
      <Achievements />
      <Competitive />
      <ContactForm />
    </main>
  );
}
