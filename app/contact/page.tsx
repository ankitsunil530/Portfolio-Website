import ContactForm from '@/components/ContactForm';

export default function ContactPage() {

  return (
    <main className="relative min-h-screen overflow-hidden pt-28 pb-20">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cyan-500/5 via-transparent to-blue-500/5 blur-3xl" />

      {/* Floating Blurs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-[120px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <ContactForm />

      </div>

    </main>
  );
}