"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Home,
  User,
  FolderGit2,
  Award,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#hero", label: "Home", icon: <Home size={18} /> },
    { href: "#about", label: "About", icon: <User size={18} /> },
    { href: "#projects", label: "Projects", icon: <FolderGit2 size={18} /> },
    { href: "#certifications", label: "Certificates", icon: <Award size={18} /> },
    { href: "#contact", label: "Contact", icon: <Mail size={18} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800/80 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* === Premium Graphic Logo (Mecha Inspired) === */}
        <Link
          href="/"
          className="transition tracking-tight flex items-center group cursor-pointer"
        >
          {/* Logo Graphic */}
          <div className="relative w-12 h-14 flex items-center justify-center mr-1">
             {/* Abstract Wireframe Box (Right side) */}
             <svg className="absolute right-0 bottom-2 w-7 h-7 text-amber-500 opacity-80 group-hover:scale-110 transition-transform duration-700 ease-out" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                 <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                 <polyline points="3.29 7 12 12 20.71 7"></polyline>
                 <line x1="12" y1="22" x2="12" y2="12"></line>
                 <circle cx="12" cy="12" r="1.5" fill="currentColor" />
             </svg>
             
             {/* Floating golden particles spreading upwards */}
             <div className="absolute top-0 right-[-8px] w-8 h-10 pointer-events-none">
                <div className="absolute top-3 left-2 w-[3px] h-[3px] bg-amber-400 rounded-full shadow-[0_0_8px_#fbbf24] animate-[pulse_2s_infinite]"></div>
                <div className="absolute top-6 left-5 w-[2px] h-[2px] bg-amber-300 rounded-full shadow-[0_0_4px_#fcd34d] animate-[ping_3s_infinite]"></div>
                <div className="absolute top-0 right-2 w-[4px] h-[4px] bg-amber-500 rounded-full shadow-[0_0_6px_#f59e0b] group-hover:-translate-y-3 group-hover:translate-x-3 transition-transform duration-700 ease-out"></div>
                <div className="absolute bottom-2 left-4 w-[2px] h-[2px] bg-amber-400 rounded-full animate-[pulse_1.5s_infinite_0.5s]"></div>
                <div className="absolute top-4 right-0 w-[2.5px] h-[2.5px] bg-amber-200 rounded-full shadow-[0_0_5px_#fde68a] group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform duration-500 delay-75 ease-out"></div>
             </div>

             {/* Solid Bold 'S' */}
             <span className="text-[46px] leading-none font-black bg-clip-text text-transparent bg-gradient-to-b from-indigo-500 via-purple-600 to-indigo-900 dark:to-indigo-300 relative z-10 drop-shadow-lg group-hover:-translate-y-0.5 transition-transform duration-300 -ml-2">S</span>
          </div>
          
          {/* Logo Typography (Multi-colored logic) */}
          <div className="text-[28px] font-extrabold flex items-baseline tracking-tight -ml-1">
             <span className="text-black dark:text-white">ubh</span>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">am</span>
             <span className="text-zinc-400 dark:text-zinc-600 ml-[1px]">.</span>
          </div>
        </Link>

        {/* === Desktop Nav Links === */}
        <ul className="hidden md:flex space-x-8 text-black dark:text-zinc-100 font-medium">
          {links.map(({ href, label, icon }) => (
            <li key={href}>
              <Link
                href={href}
                className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
              >
                {icon} {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* === Desktop Socials + Hire Me === */}
        <div className="hidden md:flex items-center space-x-6">
          <ThemeToggle />
          <a
            href="https://github.com/MrSubham08"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-zinc-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            <Github size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/subhamkumar08/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-zinc-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            <Linkedin size={22} />
          </a>

          <Link
            href="#contact"
            className="glass-button py-2.5 px-5 shadow-sm text-sm"
          >
            Contact
          </Link>
        </div>

        {/* === Mobile Menu Button === */}
        <button
          className="md:hidden text-black dark:text-zinc-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* === Mobile Overlay + Side Drawer === */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Dim Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              className="fixed top-0 right-0 h-full w-3/4 sm:w-1/2 md:w-1/3 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-3xl border-l border-zinc-200 dark:border-zinc-800 shadow-2xl z-50 p-8 flex flex-col space-y-6"
            >
              {/* Header with Close */}
              <div className="flex justify-between items-center">
                <div className="text-2xl font-extrabold flex items-baseline tracking-tight">
                  <span className="text-indigo-600 dark:text-indigo-400 font-black text-[28px] mr-[1px]">S</span>
                  <span className="text-black dark:text-white">ubh</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">am</span>
                  <span className="text-zinc-400 dark:text-zinc-600 ml-[1px]">.</span>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                >
                  <X size={26} />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col space-y-5 mt-6 text-black dark:text-zinc-100 font-medium">
                {links.map(({ href, label, icon }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {icon} {label}
                  </Link>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-6" />

              {/* Socials & Theme */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <a
                    href="https://github.com/MrSubham08"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-zinc-100 hover:text-indigo-600 transition"
                  >
                    <Github size={22} />
                  </a>
                  <a
                    href="https://linkedin.com/in/subhamkumar08/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-zinc-100 hover:text-indigo-600 transition"
                  >
                    <Linkedin size={22} />
                  </a>
                </div>
                <ThemeToggle />
              </div>

              {/* Hire Me Button */}
              <Link
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="glass-button block mt-auto w-full text-center py-3"
              >
                Contact
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
