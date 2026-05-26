'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Scroll Effect */
  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 20);

    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#020617]/80 backdrop-blur-2xl border-b border-cyan-500/10 shadow-lg shadow-cyan-500/5'
          : 'bg-transparent'
      }`}
    >

      <nav className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">

        {/* ================= LOGO ================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -25,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.6,
          }}
        >

          <Link
            href="/"
            className="relative text-2xl md:text-3xl font-black tracking-tight"
          >

            <span className="gradient-text">

              Sunil Kumar

            </span>

            {/* Glow */}
            <span className="absolute -inset-1 blur-xl opacity-30 bg-cyan-500/20 rounded-full" />

          </Link>

        </motion.div>

        {/* ================= DESKTOP NAV ================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className="hidden md:flex items-center gap-2 glass px-3 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
        >

          {navItems.map((item, index) => (

            <motion.div
              key={item.name}
              initial={{
                opacity: 0,
                y: -15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
            >

              <Link
                href={item.href}
                className="relative px-5 py-2 rounded-full text-slate-300 hover:text-white transition-all duration-300 group"
              >

                {item.name}

                {/* Hover Effect */}
                <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-3/4" />

              </Link>

            </motion.div>

          ))}

        </motion.div>

        {/* ================= RIGHT ACTIONS ================= */}

        <div className="flex items-center gap-4">

          {/* Social Icons */}
          <div className="hidden lg:flex items-center gap-3">

            {[
              {
                Icon: Github,
                href: 'https://github.com/ankitsunil530',
              },
              {
                Icon: Linkedin,
                href: 'https://www.linkedin.com/in/sunil-kumar-549595225/',
              },
              {
                Icon: Mail,
                href: 'mailto:ankitsunil530@gmail.com',
              },
            ].map(({ Icon, href }, idx) => (

              <motion.a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -4,
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="group p-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400/30 hover:shadow-cyan-500/20 transition-all duration-300"
              >

                <Icon className="w-5 h-5 text-slate-300 group-hover:text-cyan-300 transition-colors" />

              </motion.a>

            ))}

          </div>

          {/* Resume Button */}
          <motion.a
            href="/resume.pdf"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="hidden md:flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300"
          >

            Resume

          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{
              scale: 0.9,
            }}
            onClick={() => setOpen(!open)}
            className="md:hidden p-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-cyan-300"
          >

            {open ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}

          </motion.button>

        </div>

      </nav>

      {/* ================= MOBILE MENU ================= */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{
              opacity: 0,
              y: -25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -25,
            }}
            transition={{
              duration: 0.3,
            }}
            className="md:hidden px-6 pb-6"
          >

            <div className="glass rounded-3xl border border-white/10 bg-[#0f172a]/90 backdrop-blur-2xl p-6 space-y-5 shadow-2xl">

              {navItems.map((item, idx) => (

                <motion.div
                  key={item.name}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: idx * 0.08,
                  }}
                >

                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-5 py-4 text-slate-300 hover:text-white hover:bg-cyan-500/10 transition-all duration-300"
                  >

                    {item.name}

                  </Link>

                </motion.div>

              ))}

              {/* Mobile Resume */}
              <a
                href="/resume.pdf"
                className="block text-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20"
              >

                Download Resume

              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}