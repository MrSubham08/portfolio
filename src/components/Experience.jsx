"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Cloud, Database, Cpu } from "lucide-react";

export default function Experience() {
  const experiences = [
    { 
      role: "SAP ABAP Developer", 
      company: "BIPARD Skill Park / SEED Infotech", 
      duration: "Jun 2025 - Jul 2025", 
      description: [
        "Earned SAP Certified Associate – Back-End Developer (ABAP Cloud) global certification.",
        "Applied OO-ABAP, CDS Views, and AMDP to design efficient, scalable business solutions.",
        "Implemented performance tuning & enhancements using User Exits, BAdIs, and SAP Debugger."
      ], 
      icon: Database 
    },
    { 
      role: "Machine Learning Intern", 
      company: "NIELIT Gorakhpur", 
      duration: "Nov 2024 - Dec 2024", 
      description: [
        "Built and optimized predictive models using supervised and unsupervised techniques.",
        "Applied advanced data preprocessing and visualization using Pandas, Matplotlib, and Seaborn."
      ], 
      icon: BrainCircuit 
    },
    { 
      role: "Salesforce Developer Intern", 
      company: "Salesforce Platform", 
      duration: "Dec 2023 - Jan 2024", 
      description: [
        "Developed custom applications using Apex code, Visualforce, and Lightning Web Components (LWC).",
        "Implemented automation flows, workflows, and database models to streamline sales processes.",
        "Earned multiple Salesforce Superbadges including Apex Specialist."
      ], 
      icon: Cloud 
    },
    { 
      role: "Embedded Systems Intern", 
      company: "Internshala", 
      duration: "Feb 2023 - Apr 2023", 
      description: [
        "Programmed microcontrollers and designed hardware architectures using C/C++ and Arduino.",
        "Integrated specialized sensors and modules for real-world automated applications."
      ], 
      icon: Cpu 
    }
  ];

  return (
    <section id="experience" className="relative min-h-screen scroll-mt-24 bg-transparent py-20 text-zinc-900 dark:text-zinc-50 overflow-hidden">
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

                    {Array.isArray(exp.description) ? (
                      <ul className="text-zinc-800 dark:text-zinc-300 font-medium leading-relaxed text-lg list-none space-y-2">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-indigo-500 mr-3 mt-1.5 text-xs">✦</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-zinc-800 dark:text-zinc-300 font-medium leading-relaxed text-lg">
                        {exp.description}
                      </p>
                    )}
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
