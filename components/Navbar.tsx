'use client';

import {
  motion,
  AnimatePresence,
} from 'framer-motion';

import {
  useEffect,
  useState,
} from 'react';

import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';

export default function Navbar() {

  const [open, setOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  const [active, setActive] =
    useState('home');

  /* ================= NAV ITEMS ================= */

  const navItems = [
    {
      name: 'Home',
      id: 'home',
    },

    {
      name: 'Education',
      id: 'education',
    },

    {
      name: 'About',
      id: 'about',
    },

    {
      name: 'Skills',
      id: 'skills',
    },

    {
      name: 'Projects',
      id: 'projects',
    },

    {
      name: 'Experience',
      id: 'experience',
    },

    {
      name: 'Contact',
      id: 'contact',
    },
  ];

  /* ================= SCROLL EFFECT ================= */

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 20);

    };

    window.addEventListener(
      'scroll',
      handleScroll
    );

    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll
      );

  }, []);

  /* ================= ACTIVE SECTION ================= */

  useEffect(() => {

    const handleActive = () => {

      const scrollY =
        window.scrollY + 150;

      navItems.forEach((item) => {

        const section =
          document.getElementById(
            item.id
          );

        if (!section) return;

        const top =
          section.offsetTop;

        const height =
          section.offsetHeight;

        if (
          scrollY >= top &&
          scrollY <
            top + height
        ) {

          setActive(item.id);

        }

      });

    };

    window.addEventListener(
      'scroll',
      handleActive
    );

    return () =>
      window.removeEventListener(
        'scroll',
        handleActive
      );

  }, []);

  /* ================= SCROLL FUNCTION ================= */

  const scrollToSection = (
    id: string
  ) => {

    const section =
      document.getElementById(id);

    if (!section) return;

    const navbarHeight = 90;

    const top =
      section.offsetTop -
      navbarHeight;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });

    setActive(id);

    setOpen(false);

  };

  return (

    <header
      className={`fixed top-0 left-0 w-full z-[99999] transition-all duration-500 ${
        scrolled
          ? 'bg-[#020617]/80 backdrop-blur-2xl border-b border-cyan-500/10'
          : 'bg-transparent'
      }`}
    >

      {/* ================= NAVBAR ================= */}

      <nav className="max-w-7xl mx-auto h-[80px] px-4 md:px-6 lg:px-10 flex items-center justify-between">

        {/* ================= LOGO ================= */}

        <motion.button
          type="button"

          onClick={() =>
            scrollToSection('home')
          }

          initial={{
            opacity: 0,
            x: -20,
          }}

          animate={{
            opacity: 1,
            x: 0,
          }}

          className="relative z-[99999] text-2xl md:text-3xl font-black gradient-text cursor-pointer"
        >

          Sunil Kumar

        </motion.button>

        {/* ================= DESKTOP NAV ================= */}

        <div className="hidden lg:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-3 py-2 relative z-[99999]">

          {navItems.map((item) => (

            <motion.button
              key={item.id}

              type="button"

              whileTap={{
                scale: 0.96,
              }}

              onClick={() =>
                scrollToSection(item.id)
              }

              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                active === item.id
                  ? 'text-white'
                  : 'text-slate-300 hover:text-white'
              }`}
            >

              {/* ACTIVE TAB */}

              {active === item.id && (

                <motion.div
                  layoutId="active-pill"

                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 pointer-events-none"
                />

              )}

              <span className="relative z-10">

                {item.name}

              </span>

            </motion.button>

          ))}

        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className="flex items-center gap-3 relative z-[99999]">

          {/* SOCIAL ICONS */}

          <div className="hidden md:flex items-center gap-2">

            {/* GITHUB */}

            <motion.a
              href="https://github.com/ankitsunil530"

              target="_blank"

              rel="noopener noreferrer"

              whileHover={{
                y: -3,
                scale: 1.08,
              }}

              whileTap={{
                scale: 0.95,
              }}

              className="p-3 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-cyan-300 transition-all cursor-pointer"
            >

              <Github className="w-5 h-5" />

            </motion.a>

            {/* LINKEDIN */}

            <motion.a
              href="https://www.linkedin.com/in/sunil-kumar-549595225/"

              target="_blank"

              rel="noopener noreferrer"

              whileHover={{
                y: -3,
                scale: 1.08,
              }}

              whileTap={{
                scale: 0.95,
              }}

              className="p-3 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-cyan-300 transition-all cursor-pointer"
            >

              <Linkedin className="w-5 h-5" />

            </motion.a>

            {/* EMAIL */}

            <motion.a
              href="mailto:ankitsunil530@gmail.com"

              whileHover={{
                y: -3,
                scale: 1.08,
              }}

              whileTap={{
                scale: 0.95,
              }}

              className="p-3 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-cyan-300 transition-all cursor-pointer"
            >

              <Mail className="w-5 h-5" />

            </motion.a>

          </div>

          {/* ================= RESUME ================= */}

          <motion.a
            href="https://drive.google.com/file/d/14QJ1P1Q1WHTwCC_yFWFRHB0b1uVw1SEv/view?usp=sharing"

            target="_blank"

            rel="noopener noreferrer"

            whileHover={{
              scale: 1.04,
            }}

            whileTap={{
              scale: 0.96,
            }}

            className="hidden md:flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white cursor-pointer"
          >

            Resume

          </motion.a>

          {/* ================= MOBILE MENU BUTTON ================= */}

          <motion.button
            type="button"

            whileTap={{
              scale: 0.9,
            }}

            onClick={() =>
              setOpen(!open)
            }

            className="lg:hidden flex items-center justify-center p-3 rounded-xl border border-white/10 bg-white/5 text-cyan-300 cursor-pointer"
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
              y: -15,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              y: -15,
            }}

            transition={{
              duration: 0.25,
            }}

            className="lg:hidden px-4 pb-5 relative z-[99999]"
          >

            <div className="rounded-3xl border border-white/10 bg-[#020617]/95 backdrop-blur-2xl p-5 shadow-2xl">

              <div className="flex flex-col gap-3">

                {navItems.map((item) => (

                  <motion.button
                    key={item.id}

                    type="button"

                    whileTap={{
                      scale: 0.97,
                    }}

                    onClick={() =>
                      scrollToSection(item.id)
                    }

                    className={`text-left px-5 py-4 rounded-2xl transition-all duration-300 ${
                      active === item.id
                        ? 'bg-cyan-500/15 text-white'
                        : 'text-slate-300 hover:bg-cyan-500/10 hover:text-white'
                    }`}
                  >

                    {item.name}

                  </motion.button>

                ))}

                {/* MOBILE RESUME */}

                <motion.a
                  href="https://drive.google.com/file/d/14QJ1P1Q1WHTwCC_yFWFRHB0b1uVw1SEv/view?usp=sharing"

                  target="_blank"

                  rel="noopener noreferrer"

                  whileTap={{
                    scale: 0.97,
                  }}

                  className="mt-3 text-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-4 font-semibold text-white"
                >

                  Download Resume

                </motion.a>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}