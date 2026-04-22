"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: "YOUR_KEY",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });

    const result = await response.json();
    alert(result.success ? "✅ Message sent successfully!" : "❌ Something went wrong!");

    if (result.success) e.target.reset();
  }

  return (
    <section
      id="contact"
      className="relative min-h-screen scroll-mt-24 bg-transparent py-20 flex items-center text-zinc-900 dark:text-zinc-50 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-16 relative z-10">
        
        {/* LEFT SIDE – Stunning Interactive 3D Visual */}
        <div className="hidden md:flex w-full md:w-1/2 justify-center items-center relative min-h-[500px]">
          {/* Glowing backdrop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-500/20 dark:bg-purple-500/15 blur-[100px] rounded-full pointer-events-none -z-10" />

          {/* Outer Rotating Dashed Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute w-[420px] h-[420px] border-[1.5px] border-dashed border-indigo-300 dark:border-indigo-500/40 rounded-full"
          />

          {/* Inner Rotating Solid Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-[300px] h-[300px] border border-purple-200 dark:border-purple-500/30 rounded-full"
          />

          {/* Massive Floating 3D Envelope */}
          <motion.div
            animate={{ y: [-20, 20, -20], rotateZ: [-4, 4, -4] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-56 h-40 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl shadow-2xl shadow-indigo-500/30 flex items-center justify-center border border-white/20 backdrop-blur-md"
          >
            {/* Top Flap styling illusion */}
            <div className="absolute inset-x-0 top-0 h-1/2 border-b border-white/30 rounded-t-3xl shadow-[inset_0_-20px_40px_rgba(0,0,0,0.15)]" />
            
            <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-white drop-shadow-xl relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </motion.div>

          {/* Floating mini glass bubbles */}
          <motion.div
            animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-[22%] left-[15%] w-16 h-16 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-md rounded-2xl border border-zinc-200 dark:border-zinc-700 shadow-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400"
          >
            <Mail size={28} />
          </motion.div>

          <motion.div
            animate={{ y: [-15, 15, -15], x: [-5, 5, -5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-[22%] right-[12%] w-16 h-16 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-md rounded-2xl border border-zinc-200 dark:border-zinc-700 shadow-xl flex items-center justify-center text-purple-600 dark:text-purple-400"
          >
            <MapPin size={28} />
          </motion.div>

          {/* Shiny star particle */}
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4], rotate: [0, 90, 180] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[28%] right-[25%] text-indigo-400"
          >
            <svg className="w-8 h-8 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.4 7.6H22l-6 4.8 2.4 7.6-6-4.8-6 4.8 2.4-7.6-6-4.8h7.6z"/></svg>
          </motion.div>
        </div>

        {/* RIGHT SIDE – Contact Form */}
        <motion.div 
          className="w-full md:w-1/2 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold tracking-widest text-zinc-500 dark:text-zinc-400 uppercase mb-2 text-center md:text-left">
            Connect with me
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center md:text-left text-black dark:text-zinc-50 leading-tight">
            Get in <span className="text-indigo-600 dark:text-indigo-400">touch</span>
          </h2>

          <p className="text-zinc-800 dark:text-zinc-400 font-medium mb-10 text-center md:text-left text-lg">
            I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
          </p>

          <form
            className="glass-card p-8 lg:p-10 flex flex-col gap-6 backdrop-blur-xl group"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="glass-input transition-all duration-300 focus:shadow-[0_0_15px_rgba(99,102,241,0.2)]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Profile"
              required
              className="glass-input transition-all duration-300 focus:shadow-[0_0_15px_rgba(99,102,241,0.2)]"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="What's on your mind?"
              required
              className="glass-input resize-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(99,102,241,0.2)]"
            ></textarea>
            <motion.button 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="glass-button w-full mt-2 text-lg shadow-indigo-500/25"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}
