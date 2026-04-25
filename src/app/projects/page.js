"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, X, Mail } from "lucide-react";
import allProjects from "@/lib/projectsData";
import Footer from "@/components/Footer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AllProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Prevent scrolling when modal is open
  if (typeof window !== "undefined") {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }

  return (
    <main className="relative flex flex-col min-h-screen bg-zinc-50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-50 pt-24">
      {/* Ambient background glow */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-7xl flex-1 px-6 lg:px-12 pb-16">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
        </motion.div>

        {/* Page heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-black dark:text-zinc-50 mb-4">
            All <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg font-medium max-w-xl mx-auto">
            A complete collection of my work — from AI systems to embedded hardware and signal processing.
          </p>
        </motion.div>

        {/* Project count */}
        <motion.p
          className="text-sm text-zinc-500 dark:text-zinc-500 font-medium mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {allProjects.length} project{allProjects.length !== 1 ? "s" : ""}
        </motion.p>

        {/* Projects grid - MINIMALIST */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {allProjects.map((project, i) => (
            <motion.div 
              key={i} 
              variants={cardVariants} 
              whileHover={{ scale: 1.02, y: -4 }} 
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer"
            >
              <div className="glass-card overflow-hidden rounded-2xl h-full flex flex-col bg-white dark:bg-[#111113] border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-indigo-500/30">
                {/* Thumbnail */}
                <div className="relative w-full h-56 overflow-hidden bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Content - Just Title and Subtitle */}
                <div className="p-6">
                  <h2 className="text-xl font-extrabold text-black dark:text-white mb-2 line-clamp-1">
                    {project.title}
                  </h2>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm font-medium">
                    {project.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* MODAL OVERLAY */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
            {/* Dark Blur Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-full flex flex-col bg-white dark:bg-[#0f0f11] border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden z-10"
            >
              {/* Header */}
              <div className="flex justify-between items-center p-5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#151518]">
                <h2 className="text-xl font-bold text-black dark:text-white line-clamp-1 pr-4">
                  {selectedProject.title}
                </h2>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full text-zinc-500 hover:text-black dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable Body */}
              <div className="overflow-y-auto p-6 md:p-8 flex-1">
                {/* Big Image */}
                <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] rounded-xl overflow-hidden mb-8 border border-zinc-200 dark:border-zinc-800">
                  <Image
                    src={selectedProject.img}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Description */}
                <p className="text-zinc-700 dark:text-zinc-300 text-base md:text-lg leading-relaxed mb-8">
                  {selectedProject.description}
                </p>

                {/* Tags */}
                {selectedProject.tags && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tags.map((tag, t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-full text-sm font-semibold bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20 transition-all duration-300 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(99,102,241,0.5)] cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Optional Note */}
                {selectedProject.note && (
                  <p className="text-sm text-amber-600 dark:text-amber-400 font-medium mb-6 flex items-center gap-2 bg-amber-50 dark:bg-amber-500/10 p-3 rounded-lg border border-amber-200 dark:border-amber-500/20">
                    ⚠️ {selectedProject.note}
                  </p>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-none min-w-[150px] flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/25"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-none min-w-[150px] flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  >
                    <Github size={18} />
                    GitHub Code
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Standard Footer */}
      <Footer />
    </main>
  );
}
