"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import images from "@/lib/asset";
import Image from "next/image";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      title: "Frontend Development",
      issuer: "freeCodeCamp",
      date: "2023",
      img: images.dummyCert,
      link: "#",
    },
    {
      title: "JavaScript Algorithms & Data Structures",
      issuer: "freeCodeCamp",
      date: "2022",
      img: "/cert2.png",
      link: "#",
    },
    {
      title: "React Developer",
      issuer: "Udemy",
      date: "2021",
      img: "/cert3.png",
      link: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="certifications"
      className="relative min-h-screen scroll-mt-24 bg-transparent py-20 text-zinc-900 dark:text-zinc-50"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-black dark:text-zinc-50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Certi<span className="text-indigo-600 dark:text-indigo-400">fications</span>
        </motion.h2>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="glass-card flex flex-col items-center justify-between text-center p-6 cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              {/* Certificate Image Zoom on Hover */}
              <motion.div
                className="w-full h-48 relative rounded-lg overflow-hidden mb-4"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Image
                  src={cert.img}
                  alt={cert.title}
                  fill
                  className="object-contain"
                />
              </motion.div>

              {/* Certificate Info */}
              <h3 className="text-xl font-extrabold text-black dark:text-indigo-400 mb-2">{cert.title}</h3>
              <p className="text-zinc-800 dark:text-zinc-400 font-medium text-sm mb-4">
                {cert.issuer} • <span className="text-zinc-600 dark:text-zinc-500">{cert.date}</span>
              </p>

              {/* View Button */}
              <button
                onClick={() => setSelectedCert(cert)}
                className="glass-button text-sm mt-auto"
              >
                View Certificate
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 💎 Popup View */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 dark:bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="relative bg-white/90 dark:bg-slate-900/90 border border-indigo-200 dark:border-indigo-700 rounded-2xl p-6 w-[90%] max-w-lg shadow-2xl text-center"
              style={{ transformStyle: "preserve-3d", perspective: "1200px" }}
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.8, 0.5, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Neon Glow Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-indigo-500/50 blur-md opacity-75 hidden dark:block animate-pulse-glow"></div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-3 right-4 text-zinc-500 hover:text-zinc-800 dark:text-indigo-400 dark:hover:text-indigo-200 text-xl z-20"
              >
                ✕
              </button>

              {/* Certificate Content */}
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                >
                  <Image
                    src={selectedCert.img}
                    alt={selectedCert.title}
                    width={500}
                    height={350}
                    className="rounded-lg mx-auto mb-4 object-contain"
                  />
                </motion.div>
                <h3 className="text-2xl font-extrabold text-black dark:text-indigo-300 mb-2">
                  {selectedCert.title}
                </h3>
                <p className="text-zinc-800 dark:text-zinc-300 font-medium mb-4">
                  {selectedCert.issuer} • {selectedCert.date}
                </p>
                <a
                  href={selectedCert.link}
                  target="_blank"
                  className="glass-button inline-block"
                >
                  View Full Certificate
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Glow Animation Keyframes */}
      <style jsx global>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 25px rgba(99, 102, 241, 0.4),
              0 0 45px rgba(129, 140, 248, 0.2),
              0 0 70px rgba(167, 139, 250, 0.1);
          }
          50% {
            box-shadow: 0 0 40px rgba(99, 102, 241, 0.6),
              0 0 70px rgba(129, 140, 248, 0.4),
              0 0 100px rgba(167, 139, 250, 0.3);
          }
        }
        
        .dark .animate-pulse-glow {
          animation: pulse-glow 3s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
