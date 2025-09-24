"use client";

import { useState } from "react";
import images from "@/lib/asset";
import Image from "next/image";

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  const tabs = {
    skills: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "UI/UX",
    ],
    tools: [
      "VS Code",
      "Git & GitHub",
      "Figma",
      "Postman",
      "Vercel",
      "Node.js",
    ],
    education: [
      "🎓 B.Tech in Computer Science",
      "💻 Frontend Development Bootcamp",
      "📖 Continuous self-learning & projects",
    ],
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center bg-gradient-to-b from-slate-900 via-purple-950 to-black text-white py-20"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16 px-6 lg:px-12">
        
        {/* === Left Image === */}
        <div className="flex-1 flex justify-center lg:justify-start">
          <Image
            src={images.avatar} // 👉 Replace with your image
            alt="About Me"
            width={380}
            height={380}
            className="rounded-2xl shadow-xl border-4 border-purple-600"
          />
        </div>

        {/* === Right Text === */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            About <span className="text-purple-400">Me</span>
          </h2>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6">
            I&apos;m a passionate{" "}
            <span className="text-purple-400">Frontend Developer</span> with
            experience building modern, responsive web applications. I love
            turning ideas into clean, elegant, and interactive designs using{" "}
            <span className="font-semibold">Next.js, React, and Tailwind CSS</span>.
          </p>

          {/* === Tab Buttons === */}
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

          {/* === Tab Content === */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {tabs[activeTab].map((item, i) => (
              <span
                key={i}
                className="px-4 py-2 border border-purple-500 rounded-lg text-purple-300 font-semibold text-center"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
