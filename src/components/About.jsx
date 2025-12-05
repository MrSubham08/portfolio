"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import images from "@/lib/asset";
import Image from "next/image";

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  const tabs = {
    skills: ["Next.js", "React", "Tailwind CSS", "JavaScript", "TypeScript", "UI/UX"],
    tools: ["VS Code", "Git & GitHub", "Figma", "Postman", "Vercel", "Node.js"],
    education: [
      "🎓 B.Tech in Electronics and Communication Engineering",
      "💻 Frontend Development Bootcamp",
      "📖 Continuous self-learning & projects",
    ],
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center bg-transparent text-white py-20"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16 px-6 lg:px-12">
        {/* ✨ Left Image with scroll animation */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-start relative"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Soft purple glow behind image */}
          <div className="absolute w-72 h-72 bg-purple-700/20 blur-3xl rounded-full -z-10"></div>

          <Image
            src={images.avatar}
            alt="About Me"
            width={380}
            height={380}
            className="rounded-2xl shadow-xl border-4 border-purple-600"
          />
        </motion.div>

        {/* ✨ Right Content with fade-up animation */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">
            About <span className="text-purple-400">Me</span>
          </h2>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6">
            I'm a passionate <span className="text-purple-400">Frontend Developer</span> with
            experience building modern, responsive web applications. I love turning ideas into
            clean, elegant, and interactive designs using{" "}
            <span className="font-semibold">Next.js, React, and Tailwind CSS</span>.
          </p>

          {/* Tabs */}
          <div className="flex gap-4 justify-center lg:justify-start mb-8">
            {["skills", "tools", "education"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg font-semibold transition ${
                  activeTab === tab
                    ? "bg-purple-600 text-white"
                    : "border border-purple-500 text-purple-300 hover:bg-purple-700/20"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content with animation */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {tabs[activeTab].map((item, i) => (
              <span
                key={i}
                className="glass-card px-4 py-2 text-purple-300 font-semibold text-center"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
