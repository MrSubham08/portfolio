"use client";

import { motion } from "framer-motion";
import images from "@/lib/asset";
import Image from "next/image";
import { Code, GraduationCap, Briefcase, Figma, Github, Terminal, Monitor, Sparkles } from "lucide-react";

export default function About() {
  const cards = [
    {
      id: 1,
      icon: Code,
      title: "Languages",
      desc: "Python, C & CPP, MATLAB, HTML, CSS, JavaScript, React Js, Next Js",
    },
    {
      id: 2,
      icon: GraduationCap,
      title: "Education",
      desc: "B.Tech in Electronics & Communication",
    },
    {
      id: 3,
      icon: Briefcase,
      title: "Projects",
      desc: "Built more than 5+ end-to-end projects",
    },
  ];

  const tools = [
    { Icon: Monitor, color: "text-blue-500" },
    { Icon: Terminal, color: "text-green-500" },
    { Icon: Github, color: "text-black dark:text-white" },
    { Icon: Figma, color: "text-pink-500" },
    { Icon: Sparkles, color: "text-amber-500" },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center bg-transparent py-24 text-zinc-900 dark:text-zinc-50"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Top Centered Headings */}
        <div className="text-center mb-16 mt-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-zinc-50 tracking-tight">
            About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* ✨ Left Image with scroll animation */}
          <motion.div
            className="w-full lg:w-1/3 flex justify-center lg:justify-start relative"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Elegant backdrop glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-500/20 blur-[80px] rounded-full -z-10"></div>
            
            <div className="relative group perspective-1000">
              <Image
                src={images.avatar}
                alt="About Me"
                width={380}
                height={450}
                className="rounded-3xl shadow-2xl shadow-zinc-300/50 dark:shadow-none border-[6px] border-white dark:border-zinc-800 object-cover w-full max-w-[340px] lg:max-w-full transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-1"
              />
            </div>
          </motion.div>

          {/* ✨ Right Content */}
          <motion.div
            className="w-full lg:w-2/3 flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Text description */}
            <p className="text-lg text-zinc-800 dark:text-zinc-300 font-medium leading-[1.8] mb-12 text-center lg:text-left">
              Aspiring Software Developer with hands-on experience in modern web technologies. 
              Worked on real-time projects and robust applications, constantly fostering innovation 
              and technical creativity. I love turning complex ideas into clean, elegant, and 
              interactive digital experiences.
            </p>

            {/* Premium Interactive Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              {cards.map((card, idx) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                  viewport={{ once: true }}
                  className="group relative p-6 rounded-3xl bg-white dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800 shadow-sm transition-all duration-300 hover:bg-rose-50 dark:hover:bg-indigo-950/40 hover:-translate-y-2 hover:-translate-x-1 cursor-default hover:border-black/5 dark:hover:border-indigo-500/30"
                  style={{
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
                  }}
                  whileHover={{ 
                    boxShadow: "6px 8px 0px rgba(15, 23, 42, 0.9)", // Neo-brutalism premium drop shadow
                  }}
                >
                  <card.icon className="w-8 h-8 text-black dark:text-indigo-400 mb-5 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-extrabold text-black dark:text-white mb-2 text-lg tracking-tight">{card.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm font-medium leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Tools I Use */}
            <div>
              <p className="text-zinc-500 dark:text-zinc-400 font-semibold mb-5 text-sm uppercase tracking-widest text-center lg:text-left">
                Tools I use
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                {tools.map((tool, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.6 + (idx * 0.1) }}
                    viewport={{ once: true }}
                    className="w-14 h-14 flex items-center justify-center bg-white dark:bg-zinc-800 rounded-2xl border-2 border-zinc-100 dark:border-zinc-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer"
                  >
                    <tool.Icon size={24} className={tool.color} />
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
