'use client';

import { motion } from 'framer-motion';

import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
} from 'lucide-react';

export default function Footer() {

  const socials = [
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      link: 'https://github.com/ankitsunil530',
    },

    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      link: 'https://www.linkedin.com/in/sunil-kumar-549595225/',
    },

    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      link: 'mailto:ankitsunil530@gmail.com',
    },

    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-6 h-6" />,
      link: 'https://wa.me/916394061574',
    },
  ];

  return (
    <footer className="relative py-14 border-t border-cyan-500/10 bg-[#020617] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cyan-500/5 to-blue-500/5 blur-3xl" />

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
        className="max-w-7xl mx-auto px-6 text-center"
      >

        {/* Heading */}
        <h3 className="text-2xl md:text-3xl font-bold gradient-text">

          Sunil Kumar

        </h3>

        {/* Tagline */}
        <p className="mt-4 text-slate-300 text-lg">

          Code • Build • Learn • Repeat 🚀

        </p>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center gap-5 mt-8 flex-wrap"
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
        >

          {socials.map((s) => (

            <motion.a
              key={s.name}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.15,
                y: -5,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className={`relative group p-4 rounded-2xl border border-white/10 backdrop-blur-xl transition-all duration-300
              
              ${
                s.name === 'WhatsApp'
                  ? 'bg-green-500/10 hover:bg-green-500/20 hover:border-green-400/30 hover:shadow-green-500/20'
                  : 'bg-white/5 hover:bg-cyan-500/10 hover:border-cyan-400/30 hover:shadow-cyan-500/20'
              }`}
            >

              <div
                className={`transition-colors duration-300
                ${
                  s.name === 'WhatsApp'
                    ? 'text-green-400'
                    : 'text-cyan-300 group-hover:text-white'
                }`}
              >

                {s.icon}

              </div>

              {/* Tooltip */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-[#0f172a] px-3 py-1 text-xs text-cyan-300 opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/10">

                {s.name}

              </span>

            </motion.a>

          ))}

        </motion.div>

        {/* Bottom Text */}
        <p className="mt-10 text-sm text-slate-500">

          © 2026 Sunil Kumar. All rights reserved.

        </p>

      </motion.div>

    </footer>
  );
}