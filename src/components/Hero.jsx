"use client";
import images from "@/lib/asset";
import Image from "next/image";

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center bg-transparent text-white overflow-hidden">
      {/* Soft purple aura glow behind hero */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(128,0,255,0.15),transparent_70%)] pointer-events-none z-0" />

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 relative z-10">
        <div className="flex-1 text-center lg:text-left">
          <span className="text-purple-400 mb-2 block text-lg font-bold md:text-2xl">Hi! 👋</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]">
            I'm <span className="text-purple-300">Subham Kumar</span>,
          </h1>
          <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-lg md:text-2xl text-slate-200">
            a front-end developer who loves intuitive, clean and modern UI design.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="#contact" className="glass-button">Contact Me</a>
            <span className="px-6 py-3 rounded-xl border border-purple-400 text-purple-400 font-semibold">Available for Hire</span>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end mt-12 lg:mt-0">
          <Image
            src={images.me}
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
