import type { Metadata } from 'next';
import './globals.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsappFloat';
export const metadata: Metadata = {
  title:
    'Sunil Kumar | Full Stack MERN Developer | AI & ML Engineer',

  description:
    'Premium animated portfolio of Sunil Kumar — Full Stack MERN Developer, AI & Machine Learning Engineer, Competitive Programmer, and Open Source Contributor from IIITDM Jabalpur.',

  keywords: [
    'Sunil Kumar',
    'Sunil Kumar Portfolio',
    'MERN Stack Developer',
    'Full Stack Developer',
    'AI Engineer',
    'Machine Learning Engineer',
    'React Developer',
    'Next.js Portfolio',
    'IIITDM Jabalpur',
    'Competitive Programmer',
    'Software Engineer',
    'Web Developer',
  ],

  authors: [
    {
      name: 'Sunil Kumar',
      url: 'https://github.com/ankitsunil530',
    },
  ],

  creator: 'Sunil Kumar',

  publisher: 'Sunil Kumar',

  metadataBase: new URL('https://your-portfolio-domain.vercel.app'),

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title:
      'Sunil Kumar | Full Stack MERN Developer | AI & ML Engineer',

    description:
      'Explore the premium developer portfolio of Sunil Kumar featuring Full Stack MERN projects, AI/ML systems, and modern web experiences.',

    url: 'https://your-portfolio-domain.vercel.app',

    siteName: 'Sunil Kumar Portfolio',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sunil Kumar Portfolio',
      },
    ],

    locale: 'en_US',

    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Sunil Kumar | Full Stack MERN Developer',

    description:
      'Premium animated portfolio showcasing Full Stack MERN, AI/ML, and modern web development projects.',

    images: ['/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html
      lang="en"
      suppressHydrationWarning
    >

      <body className="bg-[#020617] text-white antialiased overflow-x-hidden">

        {/* ================= BACKGROUND GRID ================= */}

        <div className="fixed inset-0 -z-50 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* ================= GLOBAL GLOW ================= */}

        <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] -z-40" />

        <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[140px] -z-40" />

        {/* ================= NAVBAR ================= */}

        <Navbar />

        {/* ================= MAIN CONTENT ================= */}

        <main className="relative z-10">

          {children}

        </main>

        {/* ================= FOOTER ================= */}

        <Footer />
        <WhatsAppFloat/>
      </body>

    </html>
  );
}