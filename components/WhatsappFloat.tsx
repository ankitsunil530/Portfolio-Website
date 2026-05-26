'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloat() {

  return (
    <motion.a
      href="https://wa.me/916394061574?text=Hello%20Sunil%20Kumar"
      target="_blank"
      rel="noopener noreferrer"

      initial={{
        opacity: 0,
        scale: 0,
      }}

      animate={{
        opacity: 1,
        scale: 1,
      }}

      whileHover={{
        scale: 1.12,
      }}

      whileTap={{
        scale: 0.95,
      }}

      transition={{
        duration: 0.4,
      }}

      className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300"
    >

      {/* Pulse Ring */}
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20" />

      {/* Icon */}
      <FaWhatsapp className="relative text-white text-4xl" />

    </motion.a>
  );
}