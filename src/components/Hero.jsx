"use client";
import { useState, useEffect } from "react";
import images from "@/lib/asset";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

// Premium Typewriter Hook/Component
const Typewriter = ({ strings, typingSpeed = 100, deletingSpeed = 40, pauseTime = 2500 }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [speed, setSpeed] = useState(typingSpeed);

  useEffect(() => {
    let timer = setTimeout(() => {
      const i = loopNum % strings.length;
      const fullText = strings[i];

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
        setSpeed(deletingSpeed);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setSpeed(typingSpeed);
      } else {
        setSpeed(isDeleting ? deletingSpeed : typingSpeed);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, speed, loopNum, strings, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="inline-block">
      {text}
      <span className="animate-[pulse_1s_ease-in-out_infinite] font-light text-cyan-500 opacity-80">|</span>
    </span>
  );
};

export default function Hero() {
  return (
    <header className="relative min-h-screen flex lg:items-center bg-transparent text-zinc-900 dark:text-zinc-50 overflow-hidden pt-32 pb-16 lg:py-0">
      {/* Subtle background aura */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.04),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.06),transparent_70%)] pointer-events-none z-0" />

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 relative z-10">
        <div className="flex-1 text-center lg:text-left">
          <span className="text-indigo-600 dark:text-indigo-400 mb-4 block font-bold md:text-xl tracking-wide">Hi! I'm Subham Kumar 👋</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.2] tracking-tight text-black dark:text-zinc-50 h-[100px] sm:h-[120px] lg:h-[120px]">
            <span className="text-cyan-600 dark:text-cyan-400 mt-2 block h-full drop-shadow-md font-mono font-semibold tracking-normal text-[0.85em]">
              <Typewriter strings={[
                "Software Developer",
                "SAP ABAP Developer",
              ]} />
            </span>
          </h1>
          <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-zinc-800 dark:text-zinc-300 font-medium leading-relaxed">
            I'm passionate about creating intelligent solutions that bridge the gap between software and hardware. My journey in Electronics & Communication Engineering has led me to explore SAP ABAP development alongside computer vision and machine learning through hands-on projects and real-world applications. From building smart automation systems to developing AI-driven solutions,
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
            <MagneticButton>
              <a href="#contact" className="glass-button flex items-center gap-2 group">
                Contact me <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href={images.resume} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm flex items-center gap-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer shadow-sm">
                My resume <Download size={18} />
              </a>
            </MagneticButton>
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
