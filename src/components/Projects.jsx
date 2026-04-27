"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import allProjects from "@/lib/projectsData";

// Show only first 3 on the homepage
const HOMEPAGE_LIMIT = 3;

export default function Projects() {
  const projects = allProjects.slice(0, HOMEPAGE_LIMIT);
  const hasMore = allProjects.length > HOMEPAGE_LIMIT;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen scroll-mt-24 bg-transparent py-20 text-zinc-900 dark:text-zinc-50"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-black dark:text-zinc-50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Pro<span className="text-indigo-600 dark:text-indigo-400">jects</span>
        </motion.h2>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, i) => (
            <motion.div key={i} variants={cardVariants} whileHover={{ scale: 1.02, y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
              <div className="glass-card overflow-hidden rounded-2xl h-full flex flex-col">
                {/* Thumbnail / Video */}
                <div className="relative w-full h-48 overflow-hidden bg-zinc-900 flex-shrink-0">
                  {project.img.match(/\.(mp4|webm)$/i) ? (
                    <video
                      src={project.img}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>

                {/* Info */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-extrabold text-black dark:text-zinc-50 mb-2 line-clamp-2 min-h-[3.5rem]">
                    {project.title}
                  </h3>
                  <p className="text-zinc-800 dark:text-zinc-300 font-medium mb-4 leading-relaxed flex-1 text-[0.9rem]">
                    {project.description}
                  </p>

                  {/* Tags */}
                  {project.tags && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, t) => (
                        <span
                          key={t}
                          className="text-[0.7rem] font-semibold px-2 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-500/30 transition-all duration-300 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_0_10px_rgba(99,102,241,0.5)] cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-button flex-1 text-center py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2.5 rounded-lg border border-indigo-200 dark:border-indigo-500/50 text-indigo-700 dark:text-indigo-400 text-center font-medium hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-colors flex items-center justify-center gap-2"
                    >
                      <Github size={14} /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects button — only shown when there are more than HOMEPAGE_LIMIT */}
        {hasMore && (
          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <MagneticButton>
              <a
                href="/projects"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transition-all duration-300 group"
              >
                View more Projects
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </MagneticButton>
          </motion.div>
        )}
      </div>
    </section>
  );
}

