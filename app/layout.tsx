import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Sunil Kumar | Full Stack MERN Developer | AI & ML Engineer',
  description: 'Premium animated portfolio of Sunil Kumar, Full Stack MERN Developer and AI/ML Engineer from IIITDM Jabalpur.',
  keywords: ['Sunil Kumar', 'MERN', 'AI ML', 'Portfolio', 'Lucknow'],
  icons: { icon: '/favicon.svg' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
