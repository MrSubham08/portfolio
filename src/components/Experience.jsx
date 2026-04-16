"use client";

import { motion } from "framer-motion";
import { Code2, LayoutTemplate, Globe2 } from "lucide-react";

export default function Experience() {
  const experiences = [
    { role: "Frontend Developer", company: "TechCorp Inc.", duration: "2022 - Present", description: "Building modern, responsive, and accessible UIs using React, Next.js, and Tailwind CSS.", icon: Code2 },
    { role: "Web Developer Intern", company: "Creative Studio", duration: "2021 - 2022", description: "Worked on client projects, collaborated with designers, and implemented features with JS and CSS.", icon: LayoutTemplate },
    { role: "Freelance Developer", company: "Self-Employed", duration: "2019 - 2021", description: "Delivered small business websites, optimized performance, and created intuitive UI/UX for clients.", icon: Globe2 },
  ];

  return (
    <section id="experience" className="relative min-h-screen bg-transparent py-20 text-zinc-900 dark:text-zinc-50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-24 text-center text-black dark:text-zinc-50"
        >
          Exper<span className="text-indigo-600 dark:text-indigo-400">ience</span>
        </motion.h2>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-indigo-200 via-indigo-400 to-transparent dark:from-indigo-800 dark:via-indigo-600 -translate-x-1/2"></div>
          
          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;

            return (
              <div key={i} className={`relative flex flex-col md:flex-row items-center mb-16 ${isLeft ? 'md:flex-row-reverse' : ''} group`}>
                
                {/* Date/Company for Desktop (Opposite side) */}
                <div className={`hidden md:block w-1/2 px-16 ${isLeft ? 'text-left' : 'text-right'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <p className="text-indigo-600 dark:text-indigo-400 font-bold text-xl tracking-wide">{exp.company}</p>
                    <p className="text-zinc-600 dark:text-zinc-400 font-semibold text-lg">{exp.duration}</p>
                  </motion.div>
                </div>

                {/* Center Icon */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="absolute left-8 md:left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border-[4px] border-white dark:border-zinc-950 flex items-center justify-center text-white shadow-xl shadow-indigo-500/40 z-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300"
                >
                  <exp.icon size={24} />
                </motion.div>

                {/* Card Content */}
                <div className="w-full md:w-1/2 pl-24 md:pl-0 md:px-16">
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="glass-card p-8 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 border border-zinc-200 dark:border-zinc-800 relative overflow-hidden"
                  >
                    {/* Subtle glow effect behind card text */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[50px] -z-10 rounded-full"></div>

                    <h3 className="text-2xl lg:text-3xl font-extrabold text-black dark:text-zinc-50 mb-3">{exp.role}</h3>
                    
                    {/* Mobile Date/Company (Hidden on desktop) */}
                    <div className="md:hidden mb-5">
                      <p className="text-indigo-600 dark:text-indigo-400 font-bold text-lg">{exp.company}</p>
                      <p className="text-zinc-600 dark:text-zinc-400 font-semibold">{exp.duration}</p>
                    </div>

                    <p className="text-zinc-800 dark:text-zinc-300 font-medium leading-relaxed text-lg">
                      {exp.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
