import type { Metadata } from 'next';

import './globals.css';

import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsappFloat';

export const metadata: Metadata = {

  /* ================= BASIC SEO ================= */

  title:
    'Sunil Kumar | Full Stack MERN Developer | AI & ML Engineer',

  description:
    'Official portfolio of Sunil Kumar — Full Stack MERN Developer, AI & Machine Learning Engineer, Competitive Programmer, and Open Source Contributor from IIITDM Jabalpur.',

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
    'Frontend Developer',
    'Backend Developer',
    'Web Developer',
    'Portfolio Website',
    'JavaScript Developer',
    'TypeScript Developer',
    'Node.js Developer',
    'MongoDB Developer',
    'Open Source Contributor',
  ],

  authors: [
    {
      name: 'Sunil Kumar',
      url: 'https://github.com/ankitsunil530',
    },
  ],

  creator: 'Sunil Kumar',

  publisher: 'Sunil Kumar',

  category: 'technology',

  metadataBase: new URL(
    'https://portfolio-website-sooty-pi-93.vercel.app'
  ),

  alternates: {
    canonical:
      'https://portfolio-website-sooty-pi-93.vercel.app',
  },

  /* ================= THEME ================= */

  themeColor: '#020617',

  /* ================= OPEN GRAPH ================= */

  openGraph: {

    title:
      'Sunil Kumar | Full Stack MERN Developer | AI & ML Engineer',

    description:
      'Explore the premium developer portfolio of Sunil Kumar featuring MERN Stack projects, AI/ML systems, modern UI experiences, and animated web interactions.',

    url:
      'https://portfolio-website-sooty-pi-93.vercel.app',

    siteName:
      'Sunil Kumar Portfolio',

    images: [
      {
        url:
          '/og-image.png',

        width: 1200,

        height: 630,

        alt:
          'Sunil Kumar Portfolio',
      },
    ],

    locale: 'en_US',

    type: 'website',
  },

  /* ================= TWITTER SEO ================= */

  twitter: {

    card: 'summary_large_image',

    title:
      'Sunil Kumar | MERN Stack Developer',

    description:
      'Premium animated portfolio showcasing Full Stack MERN, AI/ML, and modern web development projects.',

    images: [
      '/og-image.png',
    ],

    creator: '@ankitsunil530',
  },

  /* ================= ROBOTS ================= */

  robots: {

    index: true,

    follow: true,

    nocache: false,

    googleBot: {

      index: true,

      follow: true,

      noimageindex: false,

      'max-video-preview': -1,

      'max-image-preview': 'large',

      'max-snippet': -1,
    },
  },

  /* ================= ICONS ================= */

  icons: {

    icon: '/favicon.ico',

    shortcut: '/favicon.ico',

    apple: '/favicon.ico',
  },

  /* ================= VERIFICATION ================= */

  verification: {

    google:
      'google-site-verification-code',
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

        {/* ================= GLOBAL GRID ================= */}

        <div className="fixed inset-0 -z-50 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* ================= TOP GLOW ================= */}

        <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] -z-40 pointer-events-none" />

        {/* ================= BOTTOM GLOW ================= */}

        <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[140px] -z-40 pointer-events-none" />

        {/* ================= LOADER ================= */}

        <Loader />

        {/* ================= NAVBAR ================= */}

        <Navbar />

        {/* ================= MAIN CONTENT ================= */}

        <main className="relative z-10">

          {children}

        </main>

        {/* ================= FOOTER ================= */}

        <Footer />

        {/* ================= WHATSAPP FLOAT ================= */}

        <WhatsAppFloat />

      </body>

    </html>

  );
}