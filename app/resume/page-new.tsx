'use client';

export default function ResumePage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-32">
      <div className="glass p-10">
        <h1 className="text-4xl font-bold gradient-text mb-8">Resume</h1>
        <p className="text-violet-100 mb-6">Download my professional resume:</p>
        <a
          href="https://drive.google.com/file/d/14QJ1P1Q1WHTwCC_yFWFRHB0b1uVw1SEv/view?usp=sharing"
          className="inline-block px-6 py-3 glass text-violet-300 hover:text-violet-100 hover:shadow-lg hover:shadow-violet-500/20 font-semibold transition-all hover:scale-105"
        >
          Download Resume
        </a>
      </div>
    </main>
  );
}
