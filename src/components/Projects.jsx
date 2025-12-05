"use client";

import { motion } from "framer-motion";
import images from "@/lib/asset";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Modern portfolio built with Next.js, Tailwind, Framer Motion.",
      img: images.dummyProject,
      demo: "#",
      github: "#",
    },
    {
      title: "E-Commerce Store",
      description: "Full-stack e-commerce app with Stripe payments.",
      img: "/project2.png",
      demo: "#",
      github: "#",
    },
    {
      title: "Chat Application",
      description: "Real-time chat app using Next.js & Socket.io.",
      img: "/project3.png",
      demo: "#",
      github: "#",
    },
  ];

  // ✨ Animation variants
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
      className="relative min-h-screen bg-transparent text-white py-20"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading animation */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          My <span className="text-purple-400">Projects</span>
        </motion.h2>

        {/* Grid animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className="glass-card overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-purple-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4">{project.description}</p>

                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    className="glass-button flex-1 text-center"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex-1 px-4 py-2 rounded-lg border border-purple-500 text-purple-400 text-center font-semibold hover:bg-purple-700/20 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
