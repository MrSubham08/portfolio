"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center bg-gradient-to-b from-indigo-900 via-purple-900 to-slate-900 overflow-hidden text-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12">
        
        {/* === Left Text Content === */}
        <div className="flex-1 text-center lg:text-left z-10">
          <span className="text-purple-400 mb-2 block text-lg font-bold md:text-2xl">
            hi! 👋
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            I&apos;m <span className="text-purple-300">Subham Kumar</span>,
          </h1>

          <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-lg md:text-2xl text-slate-200">
            a front-end developer who loves intuitive, clean and modern UI
            design.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold shadow hover:bg-purple-700 transition"
            >
              Contact Me
            </a>
            <span className="px-6 py-3 rounded-xl border border-purple-400 text-purple-400 font-semibold">
              Available for Hire
            </span>
          </div>
        </div>

        {/* === Right Profile Image === */}
        <div className="flex-1 flex justify-center lg:justify-end mt-12 lg:mt-0 z-10">
          <Image
            src="/avatar.png"
            alt="Profile image"
            width={350}
            height={350}
            className="rounded-full shadow-xl border-4 border-purple-500"
          />
        </div>
      </div>
    </header>
  );
}
