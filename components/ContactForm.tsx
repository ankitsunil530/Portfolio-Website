'use client';

import { motion } from 'framer-motion';

import {
  Mail,
  MapPin,
  MessageSquare,
  Send,
  User,
} from 'lucide-react';

import { useState } from 'react';

export default function ContactForm() {

  const [formData, setFormData] =
    useState({
      name: '',
      email: '',
      message: '',
    });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill all fields');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/ankitsunil530@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _captcha: 'false',
          _template: 'table',
          _subject: 'New Portfolio Contact Message',
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  return (

    <section
      id="contact"
      className="relative py-24 overflow-hidden"
    >

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-cyan-500/5 via-transparent to-blue-500/5 blur-3xl" />

      <div className="pointer-events-none absolute top-0 left-0 w-72 h-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 w-72 h-72 rounded-full bg-indigo-500/10 blur-[120px]" />

      {/* ================= HEADING ================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        viewport={{
          once: true,
        }}
        className="relative z-10 text-center mb-16"
      >

        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-400">

          Contact

        </p>

        <h2 className="gradient-text text-4xl font-extrabold md:text-5xl">

          Get In Touch

        </h2>

        <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

      </motion.div>

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">

        {/* ================= LEFT SIDE ================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="space-y-8"
        >

          <div>

            <h3 className="mb-5 text-3xl font-bold leading-snug text-white md:text-4xl">

              Let&apos;s Build Something Amazing Together 🚀

            </h3>

            <p className="text-lg leading-relaxed text-slate-300">

              Whether you have a project idea,
              internship opportunity,
              freelance work,
              or just want to connect —
              feel free to reach out.

            </p>

          </div>

          {/* ================= CONTACT CARDS ================= */}

          <div className="space-y-5">

            {/* EMAIL */}

            <motion.div
              whileHover={{
                x: 8,
              }}
              className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
            >

              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-4">

                <Mail className="h-6 w-6 text-cyan-400" />

              </div>

              <div>

                <p className="text-sm text-slate-400">

                  Email

                </p>

                <a
                  href="mailto:ankitsunil530@gmail.com"
                  className="font-medium text-white transition-colors hover:text-cyan-400"
                >

                  ankitsunil530@gmail.com

                </a>

              </div>

            </motion.div>

            {/* LOCATION */}

            <motion.div
              whileHover={{
                x: 8,
              }}
              className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
            >

              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-4">

                <MapPin className="h-6 w-6 text-cyan-400" />

              </div>

              <div>

                <p className="text-sm text-slate-400">

                  Location

                </p>

                <p className="font-medium text-white">

                  Lucknow, Uttar Pradesh

                </p>

              </div>

            </motion.div>

          </div>

        </motion.div>

        {/* ================= CONTACT FORM ================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
        >
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl"
          >

          <div className="space-y-6">

            {/* ================= NAME ================= */}

            <div>

              <label className="mb-2 block text-sm text-slate-300">

                Your Name

              </label>

              <div className="relative">

                <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-cyan-400" />

                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-white/10 bg-[#0f172a] py-4 pl-12 pr-4 text-white placeholder:text-slate-500 outline-none transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                />

              </div>

            </div>

            {/* ================= EMAIL ================= */}

            <div>

              <label className="mb-2 block text-sm text-slate-300">

                Your Email

              </label>

              <div className="relative">

                <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-cyan-400" />

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-white/10 bg-[#0f172a] py-4 pl-12 pr-4 text-white placeholder:text-slate-500 outline-none transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                />

              </div>

            </div>

            {/* ================= MESSAGE ================= */}

            <div>

              <label className="mb-2 block text-sm text-slate-300">

                Message

              </label>

              <div className="relative">

                <MessageSquare className="pointer-events-none absolute left-4 top-5 h-5 w-5 text-cyan-400" />

                <textarea
                  rows={6}
                  name="message"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-[#0f172a] py-4 pl-12 pr-4 text-white placeholder:text-slate-500 outline-none transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                />

              </div>

            </div>

            {/* ================= SUBMIT BUTTON ================= */}

            <button
              type="submit"
              disabled={loading}
              className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:shadow-cyan-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
            >

              <span className="flex items-center justify-center gap-2">

                {loading ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Sending...
                  </>
                ) : submitted ? (
                  <>
                    <span>✓</span>
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}

              </span>

              <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            </button>

          </div>

        </form>
        </motion.div>

      </div>

    </section>

  );
}