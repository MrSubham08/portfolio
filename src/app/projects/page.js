"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import TiltCard from "@/components/TiltCard";
import allProjects from "@/lib/projectsData";

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
  return (
    <main className="relative min-h-screen bg-zinc-50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-50 py-24 px-6 lg:px-12">

      {/* Ambient background glow */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-7xl">

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

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {allProjects.map((project, i) => (
            <motion.div key={i} variants={cardVariants}>
              <TiltCard className="glass-card overflow-hidden rounded-2xl h-full flex flex-col bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-sm">

                {/* Thumbnail */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-extrabold text-black dark:text-zinc-50 mb-2">
                    {project.title}
                  </h2>
                  <p className="text-zinc-700 dark:text-zinc-300 text-sm font-medium leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  {project.tags && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, t) => (
                        <span
                          key={t}
                          className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Optional deployment note */}
                  {project.note && (
                    <p className="text-xs text-amber-600 dark:text-amber-400 font-medium mb-4 flex items-center gap-1">
                      ⚠️ {project.note}
                    </p>
                  )}

                  {/* Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-button flex-1 text-center py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2.5 rounded-lg border border-indigo-200 dark:border-indigo-500/50 text-indigo-700 dark:text-indigo-400 text-center font-medium hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-colors flex items-center justify-center gap-2 text-sm"
                    >
                      <Github size={14} />
                      GitHub
                    </a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
