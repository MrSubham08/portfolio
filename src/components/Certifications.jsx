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
      className="relative min-h-screen bg-transparent text-white py-20"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          My <span className="text-purple-400">Certifications</span>
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
              className="glass-card flex flex-col items-center justify-between text-center p-6 hover:shadow-purple-500/30 transition transform hover:-translate-y-2 cursor-pointer"
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
              <h3 className="text-xl font-bold text-purple-300 mb-2">{cert.title}</h3>
              <p className="text-slate-300 text-sm mb-4">
                {cert.issuer} • <span className="text-slate-400">{cert.date}</span>
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="relative bg-slate-900/80 border border-purple-700 rounded-2xl p-6 w-[90%] max-w-lg shadow-lg text-center"
              style={{ transformStyle: "preserve-3d", perspective: "1200px" }}
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.8, 0.5, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Neon Glow Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-purple-500 blur-md opacity-75 animate-pulse-glow"></div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-3 right-4 text-purple-400 hover:text-purple-200 text-xl z-10"
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
                <h3 className="text-2xl font-bold text-purple-300 mb-2">
                  {selectedCert.title}
                </h3>
                <p className="text-slate-300 mb-4">
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
            box-shadow: 0 0 25px rgba(168, 85, 247, 0.6),
              0 0 45px rgba(147, 51, 234, 0.4),
              0 0 70px rgba(99, 102, 241, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(168, 85, 247, 0.9),
              0 0 70px rgba(147, 51, 234, 0.6),
              0 0 100px rgba(99, 102, 241, 0.5);
          }
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
