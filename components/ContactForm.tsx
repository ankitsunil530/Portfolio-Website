'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

import {
  Mail,
  User,
  MessageSquare,
  Send,
} from 'lucide-react';

export default function ContactForm() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);

    console.log(formData);
  };

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cyan-500/5 via-transparent to-blue-500/5 blur-3xl" />

      {/* Floating Blurs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-[120px]" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >

        <p className="uppercase tracking-[0.25em] text-cyan-400 text-sm mb-3">
          Contact
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold gradient-text">
          Get In Touch
        </h2>

        <div className="w-28 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mt-5" />

      </motion.div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-8"
        >

          <div>

            <h3 className="text-3xl font-bold text-white leading-snug mb-5">

              Let's Build Something Amazing Together 🚀

            </h3>

            <p className="text-slate-300 text-lg leading-relaxed">

              Whether you have a project idea, internship opportunity,
              freelance work, or just want to connect —
              feel free to reach out.

            </p>

          </div>

          {/* Contact Cards */}
          <div className="space-y-5">

            <motion.div
              whileHover={{ x: 8 }}
              className="glass flex items-center gap-5 p-5 rounded-2xl border border-white/10 bg-white/5"
            >

              <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-400/20">

                <Mail className="text-cyan-400 w-6 h-6" />

              </div>

              <div>

                <p className="text-sm text-slate-400">
                  Email
                </p>

                <a
                  href="mailto:ankitsunil530@gmail.com"
                  className="text-white font-medium hover:text-cyan-400 transition-colors"
                >
                  ankitsunil530@gmail.com
                </a>

              </div>

            </motion.div>

            <motion.div
              whileHover={{ x: 8 }}
              className="glass flex items-center gap-5 p-5 rounded-2xl border border-white/10 bg-white/5"
            >

              <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-400/20">

                <User className="text-cyan-400 w-6 h-6" />

              </div>

              <div>

                <p className="text-sm text-slate-400">
                  Location
                </p>

                <p className="text-white font-medium">
                  Lucknow, Uttar Pradesh
                </p>

              </div>

            </motion.div>

          </div>

        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="glass rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl"
        >

          <div className="space-y-6">

            {/* Name */}
            <div>

              <label className="text-sm text-slate-300 mb-2 block">
                Your Name
              </label>

              <div className="relative">

                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400 w-5 h-5" />

                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="w-full rounded-2xl border border-white/10 bg-[#0f172a]/70 py-4 pl-12 pr-4 text-white placeholder:text-slate-500 outline-none transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                />

              </div>

            </div>

            {/* Email */}
            <div>

              <label className="text-sm text-slate-300 mb-2 block">
                Your Email
              </label>

              <div className="relative">

                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400 w-5 h-5" />

                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="w-full rounded-2xl border border-white/10 bg-[#0f172a]/70 py-4 pl-12 pr-4 text-white placeholder:text-slate-500 outline-none transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                />

              </div>

            </div>

            {/* Message */}
            <div>

              <label className="text-sm text-slate-300 mb-2 block">
                Message
              </label>

              <div className="relative">

                <MessageSquare className="absolute left-4 top-5 text-cyan-400 w-5 h-5" />

                <textarea
                  rows={6}
                  required
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  className="w-full rounded-2xl border border-white/10 bg-[#0f172a]/70 py-4 pl-12 pr-4 text-white placeholder:text-slate-500 outline-none transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 resize-none"
                />

              </div>

            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group relative overflow-hidden w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:shadow-cyan-500/40"
            >

              <span className="relative z-10 flex items-center justify-center gap-2">

                {submitted ? (
                  <>
                    ✓ Message Sent Successfully
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />

                    Send Message
                  </>
                )}

              </span>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/10" />

            </motion.button>

          </div>

        </motion.form>

      </div>

    </section>
  );
}